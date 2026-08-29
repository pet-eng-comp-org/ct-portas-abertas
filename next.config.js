/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Fora da Vercel (na VM) o Next emite um servidor mínimo em .next/standalone.
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
}
module.exports = nextConfig
