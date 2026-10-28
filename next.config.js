/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Site 100% estatico: `next build` gera HTML puro em out/, servido por nginx.
  output: "export",
  images: { unoptimized: true }, // sem otimizador on-the-fly no destino estatico
  trailingSlash: true,           // gera /rota/index.html, o nginx serve direto
}
module.exports = nextConfig
