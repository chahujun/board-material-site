import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { categories, getProductsByCategory } from "@/lib/products";
import { getFeaturedPosts } from "@/lib/blog";
import { siteConfig, buildMetadata } from "@/lib/seo";
import BlogCard from "@/components/BlogCard";
import CTA from "@/components/CTA";
import FactoryTour from "@/components/FactoryTour";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Premium Architectural Boards & Surface Materials for B2B Export",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className="eyebrow">Architectural boards &amp; surface materials</span>
              <h1 className={styles.heroTitle}>
                Materials that define how a space{" "}
                <span className={styles.heroTitleEm}>feels.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                OneStopBuildly supplies premium WPC wall panels, UV marble sheets, WPC
                decking, SPC flooring and PS wall panels to hotel developers and
                contractors worldwide &mdash; engineered, finished and shipped from
                our facility to your project.
              </p>
              <div className={styles.heroActions}>
                <Link href="/products" className="btn btn-primary">
                  Explore Products
                </Link>
                <a
                  href={siteConfig.inquiryUrl}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/images/products/homepage-hero.jpg"
                alt="Architectural surface material close-up"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 45vw"
                className={styles.heroImage}
              />
              <span className={styles.heroTag}>Materials &middot; Crafted for export</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 价值主张条 ===== */}
      <section className="section-tight">
        <div className="container">
          <div className={styles.valueStrip}>
            <div className={styles.valueItem}>
              <span className={styles.valueNum}>15+</span>
              <span className={styles.valueLabel}>Years exporting architectural materials</span>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueNum}>40+</span>
              <span className={styles.valueLabel}>Countries served</span>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueNum}>6</span>
              <span className={styles.valueLabel}>Core material categories</span>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueNum}>24h</span>
              <span className={styles.valueLabel}>Quote turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 工厂视频 ===== */}
      <FactoryTour variant="compact" />

      {/* ===== 产品品类总览（不对称网格） ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionHeadText}>
              <span className="eyebrow">Our materials</span>
              <h2 className={styles.sectionTitle}>Six categories, one reliable source</h2>
            </div>
            <Link href="/products" className={styles.sectionLink}>
              View all products &rarr;
            </Link>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((cat, i) => {
              const count = getProductsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className={styles.categoryCard}
                  style={{ animationDelay: `${0.05 + i * 0.08}s` }}
                >
                  <div className={styles.categoryImage}>
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 960px) 100vw, 60vw"
                    />
                  </div>
                  <div className={styles.categoryOverlay} />
                  <div className={styles.categoryContent}>
                    <h3 className={styles.categoryName}>{cat.name}</h3>
                    <p className={styles.categoryTagline}>{cat.tagline}</p>
                    <span className={styles.categoryCount}>{count} products</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 精选文章 ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionHeadText}>
              <span className="eyebrow">From the journal</span>
              <h2 className={styles.sectionTitle}>Buying guides &amp; material notes</h2>
            </div>
            <Link href="/blog" className={styles.sectionLink}>
              Read the blog &rarr;
            </Link>
          </div>

          <div className={`${styles.blogList} fade-up-stagger`}>
            {featuredPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} variant={i === 0 ? "featured" : "default"} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 询盘导流 ===== */}
      <CTA />
    </>
  );
}
