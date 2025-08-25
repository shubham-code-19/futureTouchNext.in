/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webency.themejunction.net",
      },
    ],
  },
};

export default nextConfig;
