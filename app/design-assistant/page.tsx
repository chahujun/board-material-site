import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import Schema, { buildFAQ } from "@/components/Schema";
import DesignTools from "@/components/design-assistant/DesignTools";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "AI Interior Design Assistant — Material Matching & Style Guide",
  description:
    "Free AI interior design tool for B2B builders. Match WPC wall panels, UV marble sheets, PU stone panels and SPC flooring to your project style. Budget estimator, material calculator, and style guide for hotel, restaurant, office and retail spaces. Export-ready from China.",
  path: "/design-assistant",
});

// —— 2. Commercial space solutions ——
// Images: Unsplash CC0, free for commercial use, no attribution required.
const commercial = [
  {
    eyebrow: "Hotels, resorts & serviced apartments",
    title: "Hotel & Hospitality",
    image: "/images/design-assistant/hotel.jpg",
    imageAlt:
      "Hotel lobby with warm wood-clad feature wall and sculptural installation under natural light",
    description:
      "From lobby feature walls to guest-room flooring and exterior accents — durable, fire-rated materials engineered for high-traffic hospitality environments.",
    materials: [
      {
        label: "WPC wall panels for lobby feature walls",
        href: "/products/indoor-wpc-wall-panels",
      },
      { label: "SPC flooring for guest rooms", href: "/products/spc-flooring" },
      {
        label: "PU stone panels for exterior accents",
        href: "/products/pu-stone-panels",
      },
      {
        label: "Acoustic panels for conference rooms",
        href: "/products/acoustic-wall-panels",
      },
    ],
  },
  {
    eyebrow: "Cafés, restaurants & retail fit-outs",
    title: "Restaurant & Retail",
    image: "/images/design-assistant/restaurant.jpg",
    imageAlt:
      "Restaurant interior with textured feature wall, warm pendant lighting and natural material surfaces",
    description:
      "Eye-catching counter fronts, feature walls and weatherproof outdoor seating — materials that balance aesthetics with the daily wear of commercial footfall.",
    materials: [
      {
        label: "UV marble sheets for counter fronts",
        href: "/products/uv-marble-sheets",
      },
      {
        label: "3D wall panels for feature walls",
        href: "/products/3d-wall-panels",
      },
      {
        label: "WPC doors for interior rooms",
        href: "/products/wpc-door",
      },
      {
        label: "PVC ceiling panels for kitchen areas",
        href: "/products/pvc-ceiling-panels",
      },
    ],
  },
  {
    eyebrow: "Offices, coworking & corporate interiors",
    title: "Office & Commercial",
    image: "/images/design-assistant/office.jpg",
    imageAlt:
      "Modern office conference room with acoustic wall surfaces, glass partitions and neutral material palette",
    description:
      "Acoustic comfort for meeting rooms, refined veneers for executive suites, and resilient flooring for open-plan floors — specified for productivity and longevity.",
    materials: [
      {
        label: "Acoustic wall panels for meeting rooms",
        href: "/products/acoustic-wall-panels",
      },
      {
        label: "Wood veneer panels for executive spaces",
        href: "/products/wood-veneer-panels",
      },
      { label: "SPC flooring for open offices", href: "/products/spc-flooring" },
      {
        label: "PVC partition panels for workstations",
        href: "/products/pvc-partition-panels",
      },
    ],
  },
];

// —— 3. Design style guide ——
// Images: Unsplash CC0, free for commercial use, no attribution required.
const stylesGuide = [
  {
    name: "Modern Minimalist",
    image: "/images/design-assistant/style-minimalist.jpg",
    imageAlt:
      "Minimalist interior with smooth white wall panels, round table and soft daylight",
    description:
      "Clean lines, neutral tones, functional beauty. Surfaces stay quiet so the architecture can speak.",
    material: "WPC Wall Panels",
    href: "/products/indoor-wpc-wall-panels",
  },
  {
    name: "Scandinavian",
    image: "/images/design-assistant/style-scandinavian.jpg",
    imageAlt:
      "Scandinavian living room with light wood veneer sideboard, pale walls and natural texture",
    description:
      "Light woods, soft textures, cozy simplicity. Warm pale grains bring calm northern light indoors.",
    material: "Wood Veneer Panels",
    href: "/products/wood-veneer-panels",
  },
  {
    name: "Industrial",
    image: "/images/design-assistant/style-industrial.jpg",
    imageAlt:
      "Industrial interior with textured stone-look brick wall and raw material surfaces",
    description:
      "Raw textures, exposed materials, urban edge. Concrete, stone and metal set a confident tone.",
    material: "PU Stone Panels",
    href: "/products/pu-stone-panels",
  },
  {
    name: "Luxury Hotel",
    image: "/images/design-assistant/style-luxury.jpg",
    imageAlt:
      "Luxury interior with marble wall cladding, warm wood staircase and layered material surfaces",
    description:
      "Rich textures, marble accents, warm metallics. Layered surfaces create depth and quiet opulence.",
    material: "UV Marble Sheets",
    href: "/products/uv-marble-sheets",
  },
  {
    name: "New Chinese",
    image: "/images/design-assistant/style-chinese.jpg",
    imageAlt:
      "Contemporary living room with deep red feature wall, ornate screen and balanced composition",
    description:
      "Oriental aesthetics, balanced composition, natural materials. Sculpted surfaces add rhythm and meaning.",
    material: "3D Wall Panels",
    href: "/products/3d-wall-panels",
  },
  {
    name: "Coastal Resort",
    image: "/images/design-assistant/style-coastal.jpg",
    imageAlt:
      "Coastal resort architecture with wood decking, stone surfaces and indoor-outdoor flow",
    description:
      "Weathered woods, stone textures, indoor-outdoor flow. Materials built to handle sun, salt and air.",
    material: "Outdoor WPC Cladding",
    href: "/products/outdoor-wpc-cladding",
  },
];

// —— 4. Why source with OneStopBuildly ——
const advantages = [
  {
    title: "500+ Products",
    description: "Twelve material categories from one supplier — consolidate your sourcing into a single shipment.",
  },
  {
    title: "Export-Ready",
    description: "SGS, CE, fire-test reports included. Documentation that clears customs and satisfies specifiers.",
  },
  {
    title: "Global Shipping",
    description: "20+ countries served from Haining, China. FOB, EXW and CNF terms from Shanghai or Ningbo.",
  },
];

// —— 5. FAQ ——
const faqs = [
  {
    q: "Can OneStopBuildly help with custom material specifications?",
    a: "Yes, custom sizes, colors and surface treatments are available across all product lines. Share your drawings, RAL references or finish samples and our sourcing specialists will match them to the right factory line, then confirm MOQ and lead time before production.",
  },
  {
    q: "Do you provide fire-rated materials for commercial projects?",
    a: "Yes. Our WPC panels meet EN 13501-1 Class B, and we supply SGS/CE fire-test reports for the materials that require them. For hospitality and commercial fit-outs we can pre-select compliant SKUs and bundle the relevant certification documents with your shipment.",
  },
  {
    q: "What is the typical lead time for bulk orders?",
    a: "Standard products ship in 20-25 days. Custom colors and profiles require 30-35 days depending on the run size and finish. Consolidated multi-product orders are scheduled so every line is ready to load together, keeping your container on one timeline.",
  },
  {
    q: "Can I order samples before placing a bulk order?",
    a: "Yes, samples are available for most products. Contact our sales team to arrange sample shipment — we'll select representative finishes for your project so you can confirm color, texture and quality before committing to a full order.",
  },
];

export default function DesignAssistantPage() {
  const faqSchema = buildFAQ(
    faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  return (
    <>
      <Schema
        type="Service"
        data={{
          name: "AI Interior Design Assistant",
          serviceType: "Interior Design Material Matching",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          areaServed: "Worldwide",
          description:
            "AI-powered interior design tool for matching building materials, estimating budgets, and exploring commercial space solutions. Source WPC panels, UV marble, PU stone, SPC flooring and more from OneStopBuildly.",
          url: `${siteConfig.url}/design-assistant`,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free design tools and material guidance",
          },
        }}
      />
      <Schema type="FAQPage" data={faqSchema} />
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Design Assistant", href: "/design-assistant" },
          ]}
        />
      </div>

      {/* ===== 1. Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className="eyebrow">AI Design Tools</span>
              <h1 className={styles.heroTitle}>
                Your AI Interior Design Assistant
              </h1>
              <p className={styles.heroSubtitle}>
                Plan spaces, match materials, estimate budgets — then source every
                panel directly from OneStopBuildly.
              </p>
              <div className={styles.heroActions}>
                <a href="#tools" className="btn btn-primary" aria-label="Start designing — jump to design tools">
                  Start Designing
                </a>
                <Link
                  href="/products"
                  className="btn btn-outline"
                  aria-label="Browse all products"
                >
                  Browse Products
                </Link>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/images/design-assistant/hero.jpg"
                alt="Spacious modern building interior with people walking through a light-filled atrium with stone and wood surfaces"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. Interactive design tools ===== */}
      <section id="tools" className={styles.tools} aria-labelledby="tools-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Interactive tools</span>
            <h2 id="tools-title" className={styles.sectionTitle}>
              Four tools to move from concept to spec
            </h2>
            <p className={styles.sectionSubtitle}>
              Match materials, estimate budgets, design color palettes, and
              calculate quantities — then source every panel directly from our
              catalogue.
            </p>
          </div>

          <DesignTools />
        </div>
      </section>

      {/* ===== 3. Commercial space solutions ===== */}
      <section
        className={styles.commercial}
        aria-labelledby="commercial-title"
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">By project type</span>
            <h2 id="commercial-title" className={styles.sectionTitle}>
              Commercial space solutions
            </h2>
            <p className={styles.sectionSubtitle}>
              Curated material palettes for the spaces that work the hardest —
              each recommendation links straight to a sourced product line.
            </p>
          </div>

          <div className={styles.commercialList}>
            {commercial.map((block) => (
              <article key={block.title} className={styles.commercialBlock}>
                <div className={styles.commercialMedia}>
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(max-width: 960px) 100vw, 45vw"
                    className={styles.commercialImg}
                  />
                </div>
                <div className={styles.commercialInfo}>
                  <div className={styles.commercialContent}>
                    <span className="eyebrow">{block.eyebrow}</span>
                    <h3 className={styles.commercialTitle}>{block.title}</h3>
                    <p className={styles.commercialDesc}>{block.description}</p>
                  </div>
                  <div className={styles.commercialMaterials}>
                    <span className={styles.materialsLabel}>
                      Recommended materials
                    </span>
                    <ul className={styles.materialsList}>
                      {block.materials.map((mat) => (
                        <li key={mat.href} className={styles.materialsItem}>
                          <Link
                            href={mat.href}
                            className={styles.materialsLink}
                            aria-label={`${mat.label} — view product category`}
                          >
                            <span
                              className={styles.materialsBullet}
                              aria-hidden="true"
                            />
                            {mat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Design style guide ===== */}
      <section className={styles.styles} aria-labelledby="styles-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Style guide</span>
            <h2 id="styles-title" className={styles.sectionTitle}>
              Six styles, six material pairings
            </h2>
            <p className={styles.sectionSubtitle}>
              Decode the look you're after, then source the surface that defines
              it.
            </p>
          </div>

          <ul className={styles.stylesGrid}>
            {stylesGuide.map((item) => (
              <li key={item.name}>
                <article className={styles.styleCard}>
                  <div className={styles.styleImage}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                      className={styles.styleImg}
                    />
                  </div>
                  <div className={styles.styleBody}>
                    <h3 className={styles.styleName}>{item.name}</h3>
                    <p className={styles.styleDesc}>{item.description}</p>
                    <Link
                      href={item.href}
                      className={styles.styleLink}
                      aria-label={`Recommended material: ${item.material} — view category`}
                    >
                      <span className={styles.styleLinkLabel}>Recommended</span>
                      <span className={styles.styleLinkValue}>
                        {item.material}
                      </span>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 5. Why source with OneStopBuildly ===== */}
      <section
        className={styles.why}
        aria-labelledby="why-title"
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">One-stop sourcing</span>
            <h2 id="why-title" className={styles.sectionTitle}>
              Why source with OneStopBuildly
            </h2>
          </div>

          <ul className={styles.whyGrid}>
            {advantages.map((adv) => (
              <li key={adv.title}>
                <article className={styles.whyCard}>
                  <h3 className={styles.whyTitle}>{adv.title}</h3>
                  <p className={styles.whyDesc}>{adv.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 6. Final CTA ===== */}
      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className="container">
          <div className={styles.finalCtaInner}>
            <div className={styles.finalCtaText}>
              <span className="eyebrow">Ready when you are</span>
              <h2 id="final-cta-title" className={styles.finalCtaTitle}>
                Ready to source materials for your design project?
              </h2>
              <p className={styles.finalCtaDesc}>
                Tell us what you're building and our export team will respond
                with pricing, MOQ and lead times within one business day.
              </p>
            </div>
            <div className={styles.finalCtaActions}>
              <Link
                href="/contact"
                className="btn btn-primary"
                aria-label="Request a quote — open contact form"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="btn btn-outline"
                aria-label="Browse all products"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. FAQ ===== */}
      <section className={styles.faq} aria-labelledby="faq-title">
        <div className="container">
          <div className={styles.faqInner}>
            <div className={styles.sectionHead}>
              <span className="eyebrow">Questions &amp; answers</span>
              <h2 id="faq-title" className={styles.sectionTitle}>
                Frequently asked questions
              </h2>
            </div>

            <ul className={styles.faqList}>
              {faqs.map((item) => (
                <li key={item.q} className={styles.faqItem}>
                  <details className={styles.faqDetails}>
                    <summary className={styles.faqSummary}>
                      {item.q}
                      <span
                        className={styles.faqIcon}
                        aria-hidden="true"
                      />
                    </summary>
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
