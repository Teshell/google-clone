/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.stickpng.com"],
  },
  env: {
    API_KEY: "AIzaSyDmSbl3q-ywHm_ToUhnagbIx2xILuS_smc",
    CONTEXT_KEY: "4609ac6ac7bf16525",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
