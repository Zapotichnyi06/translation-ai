// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts'],
    webpack(config) {
        return config;
    },
};

export default nextConfig;
