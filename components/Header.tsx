import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import styles from "./Header.module.css";

// 极简导航：OneStopBuildly 图片 LOGO + 菜单 + Get a Quote 按钮
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
          <Image
            src="/images/logo/onestopbuildly-logo.png"
            alt="OneStopBuildly — Trusted Source for Building Materials"
            width={180}
            height={45}
            priority
            className={styles.logoImage}
          />
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
