import Link from "next/link";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/seo";
import styles from "./Footer.module.css";

// 页脚：公司信息 + 产品品类链接 + 快速链接 + 联系方式 + 版权
const quickLinks = [
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
            <svg className={styles.logoIcon} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="22" height="44" rx="1" fill="#5A5A5A" />
              <rect x="18" y="2" width="20" height="44" rx="1" fill="#0D3B66" />
              <line x1="2" y1="10" x2="38" y2="10" stroke="white" strokeWidth="1.2" />
              <line x1="2" y1="18" x2="38" y2="18" stroke="white" strokeWidth="1.2" />
              <line x1="2" y1="26" x2="38" y2="26" stroke="white" strokeWidth="1.2" />
              <line x1="2" y1="34" x2="38" y2="34" stroke="white" strokeWidth="1.2" />
              <rect x="0" y="44" width="40" height="4" rx="1" fill="#0D3B66" />
            </svg>
            <span className={styles.logoText}>
              OneStop<span className={styles.logoAccent}>Buildly</span>
            </span>
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
            (c) {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className={styles.bottomNote}>
            Architectural boards and surface materials for B2B export.
          </span>
        </div>
      </div>
    </footer>
  );
}
