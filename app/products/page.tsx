import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllCategories, getProductsByCategory } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Products — Architectural Boards & Surface Materials",
  description:
    "Browse our twelve core material categories: WPC wall panels, UV marble sheets, WPC decking, SPC flooring, PS wall panels, 3D wall panels, PU stone panels, acoustic panels, wood veneer panels, PVC ceiling panels and PVC partition panels — engineered for B2B export.",
  path: "/products",
});

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]} />
      </div>

      {/* 介绍区 */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <div>
              <span className="eyebrow">Our catalogue</span>
              <h1 className={styles.introTitle}>Materials for every surface</h1>
            </div>
            <p className={styles.introDesc}>
              From sculpted wall panels to waterproof flooring and natural stone,
              our twelve categories cover the surfaces that define hospitality and
              commercial interiors. Each category is stocked with export-ready
              specifications, MOQ and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Design Assistant 推广条 */}
      <section className="container">
        <div className={styles.designBanner}>
          <div>
            <span className="eyebrow">AI Design Tools</span>
            <p className={styles.designBannerText}>
              Not sure which material fits your project? Use our AI Design
              Assistant to match materials, estimate budgets, and explore
              commercial space solutions.
            </p>
          </div>
          <Link href="/design-assistant" className="btn btn-outline">
            Open Design Assistant →
          </Link>
        </div>
      </section>

      {/* 交替式品类区块 */}
      <section className="container">
        <div className={styles.list}>
          {categories.map((cat, i) => {
            const products = getProductsByCategory(cat.slug);
            const featured = products[0];
            return (
              <div className={styles.block} key={cat.slug}>
                <Link
                  href={`/products/${cat.slug}`}
                  className={styles.blockImage}
                  style={{ animationDelay: `${0.05 + i * 0.05}s` }}
                >
                  <Image
                    src={featured?.image || cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </Link>

                <div className={styles.blockContent}>
                  <span className="eyebrow">{cat.tagline}</span>
                  <h2 className={styles.blockName}>{cat.name}</h2>
                  <p className={styles.blockDesc}>{cat.description}</p>

                  {featured && (
                    <div className={styles.blockFeatures}>
                      {featured.features.slice(0, 4).map((f) => (
                        <span key={f} className={styles.tag}>
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.blockMeta}>
                    <Link href={`/products/${cat.slug}`} className="btn btn-outline">
                      Explore {cat.name}
                    </Link>
                    <span className={styles.blockCount}>{products.length} products</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
