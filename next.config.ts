import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Para abrir `next dev` desde el teléfono en la red de casa
   * (http://<IP-del-PC>:3000). Next 16 bloquea por defecto los recursos
   * de desarrollo pedidos desde otro origen que no sea localhost. Solo
   * afecta a `next dev`, no al build.
   *
   * La IP la da el router y cambia: era la .100 y el 30-09 pasó a ser la
   * .109. Se dejan las dos. Ver el playbook «ver-localhost-en-el-telefono».
   */
  allowedDevOrigins: ["192.168.1.100", "192.168.1.109"],
};

export default nextConfig;
