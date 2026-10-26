import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://cdn.simpleicons.org/**')]
    },
    allowedDevOrigins: ['192.168.1.15']
};

export default nextConfig;
