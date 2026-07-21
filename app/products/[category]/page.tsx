import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
  getRelatedCategories,
} from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { puStoneFAQs } from "@/lib/pu-stone-data";
import { pvcPanelFAQs } from "@/lib/pvc-panel-data";
import { wpcPanelFAQs } from "@/lib/wpc-panel-data";
import { outdoorWPCFAQs } from "@/lib/outdoor-wpc-data";
import { threeDWallFAQs } from "@/lib/3d-wall-data";
import { acousticWallFAQs } from "@/lib/acoustic-wall-data";
import { woodVeneerFAQs } from "@/lib/wood-veneer-data";
import { psWallFAQs } from "@/lib/ps-wall-data";
import { wpcDoorFAQs } from "@/lib/wpc-door-data";
import { spcFlooringFAQs } from "@/lib/spc-flooring-data";
import { pvcMarbleFAQs } from "@/lib/pvc-marble-data";
import { pvcPartitionFAQs } from "@/lib/pvc-partition-data";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import Schema, { buildFAQ } from "@/components/Schema";
import CTA from "@/components/CTA";
import PUStoneClient from "@/components/pu-stone/PUStoneClient";
import PVCPanelClient from "@/components/pvc-panel/PVCPanelClient";
import WPCPanelClient from "@/components/wpc-panel/WPCPanelClient";
import OutdoorWPCClient from "@/components/outdoor-wpc/OutdoorWPCClient";
import ThreeDWallClient from "@/components/3d-wall/3DWallClient";
import AcousticWallClient from "@/components/acoustic-wall/AcousticWallClient";
import WoodVeneerClient from "@/components/wood-veneer/WoodVeneerClient";
import PSWallClient from "@/components/ps-wall/PSWallClient";
import WPCDoorClient from "@/components/wpc-door/WPCDoorClient";
import SPCFlooringClient from "@/components/spc-flooring/SPCFlooringClient";
import PVCMarbleClient from "@/components/pvc-marble/PVCMarbleClient";
import PVCPartitionClient from "@/components/pvc-partition/PVCPartitionClient";
import styles from "./page.module.css";

// 仅预渲染已知品类，未知 slug 返回 404（SSG 友好）
export const dynamicParams = false;

// 预生成所有品类页静态参数
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

// 动态 metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  // PU Stone Panels 专用 SEO
  if (category === "pu-stone-panels") {
    return buildMetadata({
      title: "PU Stone Panels | OneStopBuildly",
      description:
        "Explore polyurethane faux stone panels for interior and exterior decoration. Browse product models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/pu-stone-panels",
      image: cat.image,
    });
  }

  // PVC Ceiling Panels 专用 SEO
  if (category === "pvc-ceiling-panels") {
    return buildMetadata({
      title: "PVC Ceiling & Wall Panels | OneStopBuildly",
      description:
        "Explore PVC ceiling and wall panels for bathroom, kitchen and commercial interiors. Browse product models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/pvc-ceiling-panels",
      image: cat.image,
    });
  }

  // Indoor WPC Wall Panels 专用 SEO
  if (category === "indoor-wpc-wall-panels") {
    return buildMetadata({
      title: "Indoor WPC Wall Panels | OneStopBuildly",
      description:
        "Explore indoor WPC wall panels for hotel, apartment and commercial interiors. Browse fluted and slatted wood-plastic composite panel models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/indoor-wpc-wall-panels",
      image: cat.image,
    });
  }

  // Outdoor WPC Wall Cladding 专用 SEO
  if (category === "outdoor-wpc-cladding") {
    return buildMetadata({
      title: "Outdoor WPC Wall Cladding | OneStopBuildly",
      description:
        "Explore co-extruded outdoor WPC wall cladding for building facades, garden walls and commercial exteriors. Browse UV-resistant wood-plastic composite cladding models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/outdoor-wpc-cladding",
      image: cat.image,
    });
  }

  // 3D Wall Panels 专用 SEO
  if (category === "3d-wall-panels") {
    return buildMetadata({
      title: "3D Wall Panels | OneStopBuildly",
      description:
        "Explore 3D PVC wall panels with gold diamond, geometric and art deco patterns for luxurious interior decoration. Browse waterproof, fireproof 3D wall panel models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/3d-wall-panels",
      image: cat.image,
    });
  }

  // Acoustic Wall Panels 专用 SEO
  if (category === "acoustic-wall-panels") {
    return buildMetadata({
      title: "Acoustic Wall Panels | OneStopBuildly",
      description:
        "Explore MDF acoustic wall panels with sound insulation and eco-friendly features for conference rooms, hotels, offices and home decoration. Browse lightweight, quick install sound absorbing panel models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/acoustic-wall-panels",
      image: cat.image,
    });
  }

  // Wood Veneer Panels 专用 SEO
  if (category === "wood-veneer-panels") {
    return buildMetadata({
      title: "Wood Veneer Panels | OneStopBuildly",
      description:
        "Explore bamboo fiber wood veneer panels, melamine MDF boards and decorative WPC veneer panels. Waterproof, fancy wood grain finishes for furniture, interior decoration and feature walls. Available in 3mm-25mm thicknesses from OneStopBuildly.",
      path: "/products/wood-veneer-panels",
      image: cat.image,
    });
  }

  // PS Wall Panels 专用 SEO
  if (category === "ps-wall-panels") {
    return buildMetadata({
      title: "PS Wall Panels | OneStopBuildly",
      description:
        "Explore PS polystyrene wall panels for interior decoration. Fluted, 3D pattern and wood effect cladding panels. Waterproof, moisture-proof, industrial design style for villa, hotel, TV background and commercial spaces. Available in 2400x600mm, 10mm-12mm thickness from OneStopBuildly.",
      path: "/products/ps-wall-panels",
      image: cat.image,
    });
  }

  // WPC Door 专用 SEO
  if (category === "wpc-door") {
    return buildMetadata({
      title: "WPC Door | OneStopBuildly",
      description:
        "Explore interior WPC doors, door frames and hidden doors for home, office, hotel and bedroom applications. Waterproof, fire-prevention PVC composite doors with wood grain finishes, customizable sizes and push-pull opening. Browse product models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/wpc-door",
      image: cat.image,
    });
  }

  // SPC Flooring 专用 SEO
  if (category === "spc-flooring") {
    return buildMetadata({
      title: "SPC Flooring | OneStopBuildly",
      description:
        "Explore SPC vinyl flooring planks for indoor hotel, home, office and commercial applications. Waterproof, fireproof, wear-resistant click-lock SPC flooring with wood grain finishes. Available in 4mm-7mm thickness, 0.3mm-0.7mm wear layer. Browse product models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/spc-flooring",
      image: cat.image,
    });
  }

  // PVC Marble Sheet 专用 SEO
  if (category === "pvc-marble-sheet") {
    return buildMetadata({
      title: "PVC Marble Sheet / UV Board | OneStopBuildly",
      description:
        "Explore PVC marble sheets and UV coated boards for interior wall decoration, kitchen cabinets and bathroom applications. Waterproof, fireproof, high-gloss UV coated marble finish with customizable colors. Available in 1220*2440mm, 1220*2800mm, 1220*2900mm sizes, 2mm-5mm thickness. Browse product models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/pvc-marble-sheet",
      image: cat.image,
    });
  }

  // PVC Partition Panels 专用 SEO
  if (category === "pvc-partition-panels") {
    return buildMetadata({
      title: "PVC Partition Panels | OneStopBuildly",
      description:
        "Explore PVC partition panels for interior wall decoration and office divider applications. Waterproof, fireproof, moisture-proof with modern geometric patterns. Double laminate construction, easy installation for office, hotel and commercial interiors. Available in 400x26x2900mm size. Browse product models, sizes, MOQ and quotation information from OneStopBuildly.",
      path: "/products/pvc-partition-panels",
      image: cat.image,
    });
  }

  return buildMetadata({
    title: `${cat.name} — ${cat.tagline}`,
    description: cat.description,
    path: `/products/${category}`,
    image: cat.image,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  // PU Stone Panels 使用增强型交互页面
  if (category === "pu-stone-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "PU Stone Panels", href: "/products/pu-stone-panels" },
            ]}
          />
        </div>
        <PUStoneClient />
        <Schema type="FAQPage" data={buildFAQ(puStoneFAQs)} />
      </>
    );
  }

  // PVC Ceiling Panels 使用增强型交互页面
  if (category === "pvc-ceiling-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "PVC Ceiling Panels", href: "/products/pvc-ceiling-panels" },
            ]}
          />
        </div>
        <PVCPanelClient />
        <Schema type="FAQPage" data={buildFAQ(pvcPanelFAQs)} />
      </>
    );
  }

  // Indoor WPC Wall Panels 使用增强型交互页面
  if (category === "indoor-wpc-wall-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels" },
            ]}
          />
        </div>
        <WPCPanelClient />
        <Schema type="FAQPage" data={buildFAQ(wpcPanelFAQs)} />
      </>
    );
  }

  // Outdoor WPC Wall Cladding 使用增强型交互页面
  if (category === "outdoor-wpc-cladding") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Outdoor WPC Wall Cladding", href: "/products/outdoor-wpc-cladding" },
            ]}
          />
        </div>
        <OutdoorWPCClient />
        <Schema type="FAQPage" data={buildFAQ(outdoorWPCFAQs)} />
      </>
    );
  }

  // 3D Wall Panels 使用增强型交互页面
  if (category === "3d-wall-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "3D Wall Panels", href: "/products/3d-wall-panels" },
            ]}
          />
        </div>
        <ThreeDWallClient />
        <Schema type="FAQPage" data={buildFAQ(threeDWallFAQs)} />
      </>
    );
  }

  // Acoustic Wall Panels 使用增强型交互页面
  if (category === "acoustic-wall-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels" },
            ]}
          />
        </div>
        <AcousticWallClient />
        <Schema type="FAQPage" data={buildFAQ(acousticWallFAQs)} />
      </>
    );
  }

  // Wood Veneer Panels 使用增强型交互页面
  if (category === "wood-veneer-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
            ]}
          />
        </div>
        <WoodVeneerClient />
        <Schema type="FAQPage" data={buildFAQ(woodVeneerFAQs)} />
      </>
    );
  }

  // PS Wall Panels 使用增强型交互页面
  if (category === "ps-wall-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "PS Wall Panels", href: "/products/ps-wall-panels" },
            ]}
          />
        </div>
        <PSWallClient />
        <Schema type="FAQPage" data={buildFAQ(psWallFAQs)} />
      </>
    );
  }

  // WPC Door 使用增强型交互页面
  if (category === "wpc-door") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "WPC Door", href: "/products/wpc-door" },
            ]}
          />
        </div>
        <WPCDoorClient />
        <Schema type="FAQPage" data={buildFAQ(wpcDoorFAQs)} />
      </>
    );
  }

  // SPC Flooring 使用增强型交互页面
  if (category === "spc-flooring") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "SPC Flooring", href: "/products/spc-flooring" },
            ]}
          />
        </div>
        <SPCFlooringClient />
        <Schema type="FAQPage" data={buildFAQ(spcFlooringFAQs)} />
      </>
    );
  }

  // PVC Marble Sheet 使用增强型交互页面
  if (category === "pvc-marble-sheet") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "PVC Marble Sheet", href: "/products/pvc-marble-sheet" },
            ]}
          />
        </div>
        <PVCMarbleClient />
        <Schema type="FAQPage" data={buildFAQ(pvcMarbleFAQs)} />
      </>
    );
  }

  // PVC Partition Panels 使用增强型交互页面
  if (category === "pvc-partition-panels") {
    return (
      <>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "PVC Partition Panels", href: "/products/pvc-partition-panels" },
            ]}
          />
        </div>
        <PVCPartitionClient />
        <Schema type="FAQPage" data={buildFAQ(pvcPartitionFAQs)} />
      </>
    );
  }

  const products = getProductsByCategory(category);
  const related = getRelatedCategories(category, 3);

  return (
    <>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: cat.name, href: `/products/${cat.slug}` },
          ]}
        />
      </div>

      {/* 品类头部 */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <div className={styles.headerText}>
              <span className="eyebrow">{cat.tagline}</span>
              <h1 className={styles.categoryTitle}>{cat.name}</h1>
              <p className={styles.categoryDesc}>{cat.description}</p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 960px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section className={`container ${styles.productsSection}`}>
        <div className={styles.productsHead}>
          <h2>Products in this category</h2>
          <span className={styles.blockCount}>{products.length} products</span>
        </div>
        <div className={styles.productGrid}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ 区域 + FAQPage 结构化数据 */}
      <section className={`container ${styles.faq}`}>
        <div className={styles.productsHead}>
          <h2>Frequently asked questions</h2>
        </div>
        <div className={styles.faqList}>
          {cat.faqs.map((faq) => (
            <div key={faq.question} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
        <Schema type="FAQPage" data={buildFAQ(cat.faqs)} />
      </section>

      {/* 相关品类推荐 */}
      <section className={`container ${styles.related}`}>
        <div className={styles.productsHead}>
          <h2>Related categories</h2>
        </div>
        <div className={styles.relatedGrid}>
          {related.map((r) => (
            <Link key={r.slug} href={`/products/${r.slug}`} className={styles.relatedCard}>
              <Image
                src={r.image}
                alt={r.name}
                fill
                sizes="(max-width: 960px) 100vw, 33vw"
              />
              <div className={styles.relatedOverlay} />
              <span className={styles.relatedName}>{r.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
