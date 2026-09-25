'use client';

/**
 * Vídeos con transparencia en Safari / iOS — la vegetación de `.flower`.
 *
 * Los `.flower` son `.webm` VP9 con canal alfa: en Chrome y Firefox las
 * hojas flotan sobre el fondo de la sección. Safari (y todo navegador de
 * iOS, que por dentro es Safari) ya reproduce WebM, pero IGNORA el alfa:
 * cada hoja sale con su recuadro gris opaco encima del texto. El parche de
 * globals.css (`background: transparent`) sólo servía cuando Safari no
 * arrancaba el vídeo y se quedaba en el póster; desde que lo arranca, no.
 *
 * Lo que Safari sí entiende con alfa es HEVC con capa alfa, pero sólo se
 * codifica bien en un Mac (el x265 del ffmpeg de Windows viene sin
 * `ENABLE_ALPHA`). Tampoco vale un WebP animado: 8–25 MB por vídeo.
 *
 * Así que se usa la técnica del «alfa apilado»: un MP4 H.264 normal, el
 * doble de alto, con el color arriba y la máscara en grises abajo
 * (`palm-fronds_NN-stacked.mp4`, generado con ffmpeg: split + alphaextract
 * + vstack). Un shader WebGL los junta en un `<canvas>` con alfa de verdad.
 *
 * El `<video>` original se queda donde está —invisible— y sólo cambia de
 * fuente: el play/pause por scroll de interactions.ts lo sigue manejando
 * sin enterarse. Por eso esto tiene que correr ANTES que initInteractions,
 * que llama a `video.load()`.
 *
 * Para probarlo fuera de Safari: `?alpha=stacked` en la URL.
 */

const VERT = `
attribute vec2 p;
varying vec2 uv;
void main() {
  uv = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5);
  gl_Position = vec4(p, 0.0, 1.0);
}`;

/* Mitad de arriba = color, mitad de abajo = máscara. Salida premultiplicada,
   que es lo que espera el canvas por defecto. */
const FRAG = `
precision mediump float;
uniform sampler2D tex;
varying vec2 uv;
void main() {
  vec3 color = texture2D(tex, vec2(uv.x, uv.y * 0.5)).rgb;
  float alpha = texture2D(tex, vec2(uv.x, 0.5 + uv.y * 0.5)).r;
  gl_FragColor = vec4(color * alpha, alpha);
}`;

/** Safari de escritorio o cualquier navegador de iOS / iPadOS. */
function needsStackedAlpha(): boolean {
  const flag = new URLSearchParams(location.search).get('alpha');
  if (flag === 'stacked') return true;
  if (flag === 'off') return false;
  const ua = navigator.userAgent;
  const ios = /iP(hone|ad|od)/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const safari = /^((?!chrome|chromium|android|crios|fxios|edg).)*safari/i.test(ua);
  return ios || safari;
}

function shader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

/** Monta el canvas sobre un vídeo. Devuelve su limpieza, o null si no hay WebGL. */
function mount(video: HTMLVideoElement, stackedSrc: string): (() => void) | null {
  const canvas = document.createElement('canvas');
  canvas.className = video.className;
  canvas.setAttribute('aria-hidden', 'true');

  const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true });
  if (!gl) return null;

  const vs = shader(gl, gl.VERTEX_SHADER, VERT);
  const fs = shader(gl, gl.FRAGMENT_SHADER, FRAG);
  const prog = gl.createProgram();
  if (!vs || !fs || !prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  // Un rectángulo que cubre todo el canvas, en dos triángulos.
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  const draw = () => {
    if (video.readyState < 2) return;
    const w = video.videoWidth;
    const h = video.videoHeight / 2;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  /* Un fotograma por fotograma de vídeo mientras se reproduce. Sin
     requestVideoFrameCallback (Safari < 15.4), rAF mientras no esté en pausa. */
  let frame = 0;
  const hasRvfc = 'requestVideoFrameCallback' in video;
  const loop = () => {
    draw();
    if (video.paused || video.ended) return;
    frame = hasRvfc ? video.requestVideoFrameCallback(loop) : requestAnimationFrame(loop);
  };
  const start = () => loop();
  const stop = () => {
    if (hasRvfc) video.cancelVideoFrameCallback(frame);
    else cancelAnimationFrame(frame);
  };

  // Fuente nueva: se guardan las originales para devolverlas al desmontar.
  const originales = [...video.querySelectorAll('source')];
  for (const s of originales) s.remove();
  const source = document.createElement('source');
  source.src = stackedSrc;
  source.type = 'video/mp4';
  video.append(source);

  /* El canvas ocupa el hueco del vídeo en el flujo (hereda sus clases) y el
     vídeo pasa a absoluto, invisible, en la esquina: si ambos fueran
     inline-block el canvas caería DEBAJO, fuera de la caja visible. Nada de
     `display: none`: iOS dejaría de decodificar. El póster (con alfa) se
     quita para que no asome mientras carga. */
  const poster = video.getAttribute('poster');
  video.removeAttribute('poster');
  const estilo = video.getAttribute('style');
  Object.assign(video.style, { opacity: '0', position: 'absolute', top: '0', left: '0', pointerEvents: 'none' });
  video.after(canvas);

  video.addEventListener('loadeddata', draw);
  video.addEventListener('seeked', draw);
  video.addEventListener('play', start);
  video.addEventListener('pause', stop);
  video.load();

  return () => {
    stop();
    video.removeEventListener('loadeddata', draw);
    video.removeEventListener('seeked', draw);
    video.removeEventListener('play', start);
    video.removeEventListener('pause', stop);
    canvas.remove();
    source.remove();
    video.append(...originales);
    if (poster) video.setAttribute('poster', poster);
    if (estilo === null) video.removeAttribute('style');
    else video.setAttribute('style', estilo);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  };
}

export function initAlphaVideo(): () => void {
  if (!needsStackedAlpha()) return () => {};

  const cleanups: Array<() => void> = [];
  for (const video of document.querySelectorAll<HTMLVideoElement>('.flower video')) {
    const webm = video.querySelector<HTMLSourceElement>('source[src$=".webm"]');
    if (!webm) continue;
    const stacked = webm.getAttribute('src')!.replace(/\.webm$/, '-stacked.mp4');
    const cleanup = mount(video, stacked);
    if (cleanup) cleanups.push(cleanup);
  }

  return () => {
    for (const c of cleanups) c();
  };
}
