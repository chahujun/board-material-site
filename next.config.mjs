/** @type {import('next').NextConfig} */
// Next.js 配置：保持 SSG 静态生成，开启严格模式
const nextConfig = {
  reactStrictMode: true,
  // 允许 next/image 加载阿里 CDN 产品图和占位图
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "sc04.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
