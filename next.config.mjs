/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  env: {
    IP_TOKEN: process.env.IP_TOKEN,
  },
};

export default nextConfig;
