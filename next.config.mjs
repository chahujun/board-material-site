/** @type {import('next').NextConfig} */
// Next.js 配置：保持 SSG 静态生成，开启严格模式
const nextConfig = {
  reactStrictMode: true,
  // 允许 next/image 加载 picsum 占位图（后续替换为真实产品图）
  images: {
    remotePatterns: [
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
