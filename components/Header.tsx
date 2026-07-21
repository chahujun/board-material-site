"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import styles from "./Header.module.css";

// 导航结构：一级 → 二级 → 三级
interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

interface NavGroup {
  label: string;
  href: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  groups?: NavGroup[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    groups: [
      {
        label: "Wall Panels",
        href: "/products",
        children: [
          { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels", desc: "Fluted & slatted WPC panels for interior walls" },
          { label: "Outdoor WPC Cladding", href: "/products/outdoor-wpc-cladding", desc: "Co-extruded exterior wall cladding" },
          { label: "PU Stone Panels", href: "/products/pu-stone-panels", desc: "3D cultured stone veneer panels" },
          { label: "3D Wall Panels", href: "/products/3d-wall-panels", desc: "Sculpted decorative wall panels" },
          { label: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels", desc: "Sound-absorbing panels for commercial spaces" },
          { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels", desc: "Natural wood veneer surface panels" },
          { label: "PS Wall Panels", href: "/products/ps-wall-panels", desc: "Polystyrene decorative wall panels" },
        ],
      },
      {
        label: "Flooring & Decking",
        href: "/products",
        children: [
          { label: "WPC Door", href: "/products/wpc-door", desc: "Waterproof WPC composite interior doors" },
          { label: "SPC Flooring", href: "/products/spc-flooring", desc: "Stone plastic composite rigid flooring" },
        ],
      },
      {
        label: "Sheets & Boards",
        href: "/products",
        children: [
          { label: "PVC Marble Sheet", href: "/products/pvc-marble-sheet", desc: "UV-coated marble-look surface sheets" },
          { label: "PVC Ceiling Panels", href: "/products/pvc-ceiling-panels", desc: "Waterproof PVC ceiling systems" },
          { label: "PVC Partition Panels", href: "/products/pvc-partition-panels", desc: "Lightweight PVC partition walls" },
        ],
      },
    ],
  },
  {
    label: "Design Assistant",
    href: "/design-assistant",
  },
  { label: "Resources", href: "/blog" },
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
            <div key={item.href} className={styles.navItemWrap}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
                {item.groups && (
                  <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>

              {item.groups && (
                <div className={styles.megaMenu} role="menu" aria-label={`${item.label} submenu`}>
                  <div className={styles.megaMenuInner}>
                    {item.groups.map((group) => (
                      <div key={group.label} className={styles.megaCol}>
                        <Link href={group.href} className={styles.megaColTitle}>
                          {group.label}
                        </Link>
                        <ul className={styles.megaList}>
                          {group.children?.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className={styles.megaLink} role="menuitem">
                                <span className={styles.megaLinkLabel}>{child.label}</span>
                                {child.desc && (
                                  <span className={styles.megaLinkDesc}>{child.desc}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className={styles.megaCta}>
                      <span className={styles.megaCtaText}>Can't find what you need?</span>
                      <Link href="/contact" className={styles.megaCtaBtn}>
                        Ask Our Team →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href={siteConfig.inquiryUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Get a Quote
        </a>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          aria-expanded="false"
          onClick={(e) => {
            const nav = e.currentTarget.parentElement?.querySelector(`.${styles.nav}`);
            if (nav) {
              nav.classList.toggle(styles.navOpen);
              e.currentTarget.setAttribute("aria-expanded", nav.classList.contains(styles.navOpen) ? "true" : "false");
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
