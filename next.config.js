/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    IP_TOKEN: process.env.IP_TOKEN,
  },
};

module.exports = nextConfig;
