/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
            },
            {
                protocol: "https",
                hostname: "business.gamezop.com",
            },
            {
                protocol: "https",
                hostname: "static.gamezop.com",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                pathname: "/v0/b/**", // Cho phép tất cả ảnh từ Firebase Storage
            },
            {
                protocol: "https",
                hostname: "naal9y0dyz94hrhp.public.blob.vercel-storage.com",
            },
        ],
    },
};

export default nextConfig;
