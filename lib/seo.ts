import type { Metadata } from "next";

// 站点全局配置：品牌信息、域名、询盘落地页
// 对齐主站品牌：OneStopBuildly（海宁万筑装修材料有限公司）
// 内容站定位：板材聚焦的内容营销站，导流到主站询盘
export const siteConfig = {
  name: "OneStopBuildly",
  // 生产环境域名占位，部署时替换为真实域名
  url: "https://www.onestopbuildly.com",
  description:
    "OneStopBuildly supplies premium WPC wall panels, UV marble sheets, WPC decking, SPC flooring and PS wall panels to B2B buyers worldwide — engineered, finished and shipped from our Haining facility to your project.",
  shortDescription:
    "Trusted source for building materials. Premium board materials and surface finishes for B2B export from Haining, China.",
  tagline: "Trusted Source for Building Materials",
  locale: "en_US",
  contactEmail: "sales@onestopbuildly.com",
  phone: "+86 573 0000 0000",
  // 询盘落地页（导流到主站询盘表单）
  inquiryUrl: "https://onestopbuildly.com/inquiry",
  twitter: "@onestopbuildly",
  address: {
    streetAddress: "Haining, Jiaxing",
    addressLocality: "Haining",
    addressRegion: "Zhejiang",
    postalCode: "314400",
    addressCountry: "CN",
  },
  foundedYear: "2019",
};

// 构建页面级 metadata，统一模板与 OpenGraph
interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-default.jpg`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
      creator: siteConfig.twitter,
    },
  };
}
