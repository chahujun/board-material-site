import type { Metadata } from "next";

// 站点全局配置：品牌信息、域名、询盘落地页
// 公司：Haining Onestopbuildly Building Materials Co., Ltd.
// 品牌名：OneStopBuildly（阿里巴巴店铺：uvboards, 3dpanel 等）
export const siteConfig = {
  name: "OneStopBuildly",
  url: "https://www.onestopbuildly.com",
  description:
    "OneStopBuildly supplies premium WPC wall panels, UV marble sheets, WPC decking, SPC flooring and PS wall panels to B2B buyers worldwide — engineered, finished and shipped from our Haining facility to your project.",
  shortDescription:
    "Your Trusted One-Stop Export Supplier for Premium Building Materials. 500+ products, 50+ partner factories, serving 20+ countries from Haining, China.",
  tagline: "Your Trusted One-Stop Export Supplier",
  locale: "en_US",
  contactEmail: "cindy@onestopbuildly.com",
  phone: "+86-13511316133",
  inquiryUrl: "https://www.onestopbuildly.com/contact",
  twitter: "@onestopbuildly",
  address: {
    streetAddress: "Room 108, Building 2, Fenghuang Commercial Building, Dingqiao Town",
    addressLocality: "Haining, Zhejiang",
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
