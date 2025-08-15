/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // optional, only if you're using server actions
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
};

export default nextConfig;

