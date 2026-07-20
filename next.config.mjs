/** @type {import('next').NextConfig} */
// Next.js 配置：保持 SSG 静态生成，开启严格模式
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "run-agent-6a56e8dda1bd4a5e35143889-mrskcf7s.remote-agent.svc.cluster.local",
    "localhost",
    "127.0.0.1",
  ],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
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
    ],
  },
};

export default nextConfig;
