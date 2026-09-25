import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Para abrir `next dev` desde el teléfono en la red de casa
   * (http://192.168.1.100:3000). Next 16 bloquea por defecto los recursos
   * de desarrollo pedidos desde otro origen que no sea localhost. Solo
   * afecta a `next dev`, no al build.
   */
  allowedDevOrigins: ["192.168.1.100"],
};

export default nextConfig;
