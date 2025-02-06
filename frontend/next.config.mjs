/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.freepnglogos.com", "images.unsplash.com", "localhost"],
  },
  // adding for server deployment
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 2
  }
};

export default nextConfig;
