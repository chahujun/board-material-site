import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

// robots.txt：允许所有爬虫，声明 sitemap 位置
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
