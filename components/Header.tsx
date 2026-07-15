import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import styles from "./Header.module.css";

// 极简导航：OneStopBuildly 文字 logo + 菜单 + Get a Quote 按钮
const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} home`}>
          {/* 建筑图标 SVG */}
          <svg className={styles.logoIcon} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="22" height="44" rx="1" fill="#5A5A5A" />
            <rect x="18" y="2" width="20" height="44" rx="1" fill="#0D3B66" />
            {/* 楼层线 */}
            <line x1="2" y1="10" x2="38" y2="10" stroke="white" strokeWidth="1.2" />
            <line x1="2" y1="18" x2="38" y2="18" stroke="white" strokeWidth="1.2" />
            <line x1="2" y1="26" x2="38" y2="26" stroke="white" strokeWidth="1.2" />
            <line x1="2" y1="34" x2="38" y2="34" stroke="white" strokeWidth="1.2" />
            {/* 基座 */}
            <rect x="0" y="44" width="40" height="4" rx="1" fill="#0D3B66" />
          </svg>
          <span className={styles.logoText}>OneStop<span className={styles.logoAccent}>Buildly</span></span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={siteConfig.inquiryUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Get a Quote
        </a>
      </div>
    </header>
  );
}
