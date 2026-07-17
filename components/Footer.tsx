import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/seo";
import styles from "./Footer.module.css";

// 页脚：公司信息 + 产品品类链接 + 快速链接 + 联系方式 + 版权
const quickLinks = [
  { label: "Design Assistant", href: "/design-assistant" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* 公司信息 */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <Image
              src="/images/logo/onestopbuildly-logo.png"
              alt="OneStopBuildly — Trusted Source for Building Materials"
              width={160}
              height={40}
              priority
              className={styles.logoImage}
            />
          </div>
          <p className={styles.brandDesc}>
            {siteConfig.tagline}. {siteConfig.shortDescription}
          </p>
          <a href={siteConfig.inquiryUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            Request a Quote
          </a>
        </div>

        {/* 产品品类链接 */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Products</h4>
          <ul className={styles.linkList}>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products/${cat.slug}`} className={styles.link}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 快速链接 */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 联系方式 */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`} className={styles.link}>
                {siteConfig.contactEmail}
              </a>
            </li>
            <li className={styles.contactText}>{siteConfig.phone}</li>
            <li className={styles.contactText}>
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.addressLocality},{" "}
              {siteConfig.address.addressRegion},{" "}
              {siteConfig.address.addressCountry}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className={styles.bottomNote}>
            Architectural boards and surface materials for B2B export.
          </span>
        </div>
      </div>
    </footer>
  );
}
