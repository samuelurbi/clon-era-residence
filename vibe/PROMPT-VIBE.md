# Prompt para crear el proyecto en GoHighLevel Vibe

Pegar tal cual en el apartado de **sitio IA** al crear el proyecto.

El objetivo NO es que la IA diseñe nada: es que levante un cascarón vacío con
las dependencias ya instaladas y el alias `@` bien puesto, para luego pegar
encima el contenido de `vibe/src/`. Todo lo que genere de más habrá que
borrarlo, así que se le pide explícitamente que no genere de más.

Las tres prohibiciones del final no son adorno. Salen de lo aprendido en
proyectos anteriores (ver el playbook `gohighlevel-vibe-deploy`):

- **Tailwind**: la plantilla por defecto de Vibe lo trae con shadcn/ui. Su
  reset (preflight) pisaría el CSS heredado de Webflow, que ya es un reset
  completo. Es más barato que no entre que sacarlo después.
- **Imágenes IA**: Vibe sustituye por su cuenta las imágenes que no cargan por
  otras generadas con IA y autohospedadas. En otros proyectos eso era una
  ventaja; aquí sería un desastre — son renders reales de una promoción y
  planos de vivienda. Hay que desactivar ese comportamiento a mano.
- **«No reescribas»**: sin esa regla la IA reinterpreta el código al pegarlo.

---

## PROMPT

```
Crea un proyecto React + Vite + TypeScript MÍNIMO. Va a servir de base para
pegar encima código que ya está escrito, así que no diseñes nada: todo el
contenido, el marcado y los estilos llegarán después.

Qué necesito:

1. DEPENDENCIAS — instálalas de verdad (bun install), no basta con listarlas
   en package.json:
     - react-router-dom
     - gsap
     - @gsap/react
     - lenis

2. NADA de Tailwind, shadcn/ui, ni ninguna librería de componentes o de
   estilos. El sitio trae su propio CSS completo. Si la plantilla base incluye
   Tailwind, quítalo: su reset pisaría los estilos que voy a pegar.

3. Alias "@" apuntando a "./src", tanto en vite.config.ts como en los paths
   del tsconfig. Es importante: todo el código que voy a pegar importa así.

4. Estas carpetas creadas, vacías o con un archivo mínimo:
     src/components/  src/lib/  src/data/  src/styles/  src/pages/  src/shims/

5. Rutas con react-router-dom en src/App.tsx:
     /                     /apartments          /apartments/:code
     /contact              /coming-soon         y una 404

6. index.html mínimo, con <div id="root"> y nada más.

Reglas mientras trabajas conmigo en este proyecto:

- NO generes imágenes con IA y NO sustituyas ninguna URL de imagen por otra.
  Todas las imágenes de este sitio son fotografías reales de una promoción
  inmobiliaria y planos de vivienda, y se sirven desde un host externo por URL
  absoluta. Si ves una imagen que no carga, déjala exactamente como está y
  dímelo en el chat.

- NO añadas librerías, frameworks ni pasos de build que no te haya pedido.

- NO reescribas, NO reformatees, NO optimices y NO refactorices el código que
  yo pegue. Si ves algo mejorable, dímelo en el chat en vez de cambiarlo.
```

---

## Después de crear el proyecto

1. Comprobar en el árbol de archivos que **no hay** `tailwind.config.*` ni
   `components.json`, y que `package.json` lista las cuatro dependencias.
2. Copiar la URL del editor. De ahí salen los dos identificadores que hacen
   falta para el endpoint de ficheros:
   `app.gohighlevel.com/v2/location/<locationId>/vibe/projects/<projectId>?view=codeEditor`
3. Antes de pegar nada a mano: abrir F12 → Network, editar cualquier archivo y
   **guardar**, para ver qué petición lanza. Si existe un endpoint de
   ESCRITURA simétrico al `GET .../vibe-ai/projects/<id>/files` que ya está
   documentado, nos ahorramos pegar 72 archivos uno a uno.
