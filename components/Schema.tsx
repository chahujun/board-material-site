import { siteConfig } from "@/lib/seo";

// JSON-LD 结构化数据组件
// 支持 Product / Article / BreadcrumbList / FAQPage / Organization
// 所有页面注入 BreadcrumbList，产品页注入 Product，博客页注入 Article

type SchemaType =
  | "Product"
  | "Article"
  | "BreadcrumbList"
  | "FAQPage"
  | "Organization"
  | "Service";

interface SchemaProps {
  type: SchemaType;
  data: Record<string, unknown>;
}

// 根据 type 构造最终的 JSON-LD 对象
function buildSchema(type: SchemaType, data: Record<string, unknown>) {
  const base = { "@context": "https://schema.org" };

  switch (type) {
    case "Organization":
      return {
        ...base,
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.contactEmail,
        description: siteConfig.description,
        ...data,
      };
    case "BreadcrumbList":
      return { ...base, "@type": "BreadcrumbList", ...data };
    case "Product":
      return { ...base, "@type": "Product", ...data };
    case "Article":
      return { ...base, "@type": "Article", ...data };
    case "FAQPage":
      return { ...base, "@type": "FAQPage", ...data };
    case "Service":
      return { ...base, "@type": "Service", ...data };
    default:
      return { ...base, ...data };
  }
}

export default function Schema({ type, data }: SchemaProps) {
  const schema = buildSchema(type, data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ===== 构造辅助函数（在页面中调用以生成 data 对象） =====

// 面包屑：接收 [{ name, url }] 列表
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumb(items: BreadcrumbItem[]) {
  return {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ：接收 [{ question, answer }] 列表
export function buildFAQ(
  faqs: { question: string; answer: string }[]
) {
  return {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
