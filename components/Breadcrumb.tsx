import Link from "next/link";
import Schema, { buildBreadcrumb } from "./Schema";
import { siteConfig } from "@/lib/seo";
import styles from "./Breadcrumb.module.css";

// 面包屑导航：可视线 + BreadcrumbList 结构化数据（绝对 URL）
export interface BreadcrumbItem {
  label: string;
  href: string; // 相对路径，如 "/products"
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // 构造绝对 URL 的面包屑数据用于 JSON-LD
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `${siteConfig.url}${item.href === "/" ? "/" : item.href}`,
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className={styles.item}>
                {!isLast ? (
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <span className={styles.separator} aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <Schema type="BreadcrumbList" data={buildBreadcrumb(schemaItems)} />
    </>
  );
}
