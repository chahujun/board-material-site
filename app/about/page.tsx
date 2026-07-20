import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "About OneStopBuildly — Building Materials Export from Haining, China",
  description:
    "Founded in 2019 in Haining, Zhejiang, OneStopBuildly is a 25-person team supplying flooring, tiles, wall panels, bathroom fixtures and more to 20+ countries. One-stop procurement, factory-direct pricing, personal QC on every shipment.",
  path: "/about",
});

const stats = [
  { num: "5+", label: "Years export" },
  { num: "20+", label: "Countries served" },
  { num: "500+", label: "Products sourced" },
  { num: "25", label: "Team members" },
];

const journey = [
  {
    year: "2019",
    title: "Where it began",
    text: "OneStopBuildly was founded in Haining — a city at the center of China's building materials manufacturing belt. The idea was simple: help overseas buyers get quality materials without the friction.",
  },
  {
    year: "2020-21",
    title: "Building trust",
    text: "Years spent on factory floors — testing products, auditing lines, and selecting suppliers who deliver. First containers shipped. Repeat orders followed.",
  },
  {
    year: "2022-23",
    title: "Scaling up",
    text: "Team grew to 25. Formal QC process. Dedicated sourcing specialists. Multi-product consolidated shipments — flooring, tiles, fixtures, all in one container.",
  },
  {
    year: "2024+",
    title: "Trusted partner",
    text: "Now serving hotels, developers and renovators across 20+ countries. Still inspecting every batch. Still answering at odd hours. Still treating every order like it matters.",
  },
];

const values = [
  {
    title: "Transparency",
    text: "Every quote itemized. Every timeline documented. No hidden margins, no surprise charges — you see exactly what you're paying for and why.",
  },
  {
    title: "Personal care",
    text: "Each order gets a dedicated coordinator. Whether it's a single pallet or a full container load, the same person follows it from quote to delivery.",
  },
  {
    title: "Relentless QC",
    text: "We inspect every batch before it leaves the factory — not on paper, in person. If a product doesn't meet spec, it doesn't ship. Simple as that.",
  },
];

// ===== Partner factory data =====
const partnerFactory = {
  name: "Zhejiang Shamrock Plastic Co., Ltd.",
  cooperationYears: "4 Years",
  annualOutput: "US$1 Million – US$2.5 Million",
  location: "Zhejiang, China",
  products: [
    { name: "PVC Wall Panel", capacity: "7,000,000 m²/year" },
    { name: "PVC Floor Tiles", capacity: "7,000,000 m²/year" },
    { name: "WPC Panel", capacity: "70,000,000 m³/year" },
  ],
};

// ===== Global market distribution =====
const markets = [
  { region: "Middle East", percent: 15 },
  { region: "Southeast Asia", percent: 15 },
  { region: "South America", percent: 15 },
  { region: "Northern Europe", percent: 10 },
  { region: "Central America", percent: 10 },
  { region: "Western Europe", percent: 10 },
  { region: "Eastern Europe", percent: 10 },
  { region: "North America", percent: 10 },
  { region: "Southern Europe", percent: 5 },
];

const facts = [
  { label: "Legal entity", value: "Haining Onestopbuildly Building Materials Co., Ltd." },
  { label: "Founded", value: "2019" },
  { label: "Location", value: "Haining, Jiaxing, Zhejiang, China" },
  { label: "Annual revenue", value: "US$5 Million – US$10 Million" },
  { label: "Trade team", value: "6–10 people" },
  { label: "Average lead time", value: "~25 days" },
  { label: "Languages", value: "English, Chinese, Spanish, Portuguese, Arabic, Russian" },
  { label: "Phone", value: "+86-13511316133" },
  { label: "Email", value: "cindy@onestopbuildly.com" },
  { label: "Alibaba", value: "1 store on Alibaba.com" },
  { label: "Certifications", value: "CE · ISO 9001 · SGS" },
  { label: "Trade terms", value: "FOB · CIF · EXW (Shanghai / Ningbo)" },
  { label: "Payment", value: "T/T — USD, EUR, AUD, HKD, GBP, CNY" },
  { label: "Business hours", value: "Mon–Fri 8:30–17:00 CST (UTC+8)" },
];

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/about-hero.jpg"
            alt="OneStopBuildly building materials showroom in Haining, China"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <span className={`eyebrow ${styles.heroEyebrow}`}>About us</span>
          <h1 className={styles.heroTitle}>One-stop sourcing,<br />done right.</h1>
          <p className={styles.heroSubtitle}>
            Based in Haining, Zhejiang — the heart of China's building
            materials cluster. Founded 2019. 25 people. 500+ products.
            20+ countries served.
          </p>
        </div>
      </section>

      {/* Intro + stats */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <span className="eyebrow">Who we are</span>
              <p className={styles.introLead}>
                OneStopBuildly sits at the center of China's building
                materials manufacturing belt. Within a two-hour drive of our
                office, hundreds of factories produce flooring, tiles, wall
                panels, bathroom fixtures, doors, cabinets, lighting and
                hardware — giving us direct access to competitive pricing and
                fast turnaround.
              </p>
              <p className={styles.introLead}>
                We're a focused team of 25: sourcing specialists with years on
                the factory floor, QC inspectors who check every shipment in
                person, and customer service that works across time zones and
                languages. No layers, no middlemen — you talk to the people
                who handle your order.
              </p>
            </div>
            <div className={styles.introImage}>
              <Image
                src="/images/about-office.jpg"
                alt="OneStopBuildly office in Haining with international flags representing 20+ export countries"
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
                className={styles.introImg}
              />
            </div>
          </div>

          <div className={styles.statsStrip}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className={styles.journey}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Our journey</span>
            <h2 className={styles.sectionTitle}>From Haining to 20+ countries</h2>
          </div>

          <ol className={styles.timeline}>
            {journey.map((node) => (
              <li key={node.year} className={styles.timelineNode}>
                <span className={styles.timelineYear}>{node.year}</span>
                <span className={styles.timelineDot} aria-hidden="true" />
                <h3 className={styles.timelineTitle}>{node.title}</h3>
                <p className={styles.timelineText}>{node.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">What we stand for</span>
            <h2 className={styles.sectionTitle}>Three principles, no exceptions</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Factory */}
      <section className={styles.partnerFactory}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Manufacturing partner</span>
            <h2 className={styles.sectionTitle}>Verified factory, 4-year partnership</h2>
            <p className={styles.sectionSubtitle}>
              We work with audited, contract-verified manufacturers. Our longest-running
              partner supplies PVC and WPC panels with proven production capacity.
            </p>
          </div>

          <div className={styles.factoryCard}>
            <div className={styles.factoryHeader}>
              <div className={styles.factoryInfo}>
                <h3 className={styles.factoryName}>{partnerFactory.name}</h3>
                <p className={styles.factoryLocation}>{partnerFactory.location}</p>
              </div>
              <div className={styles.factoryBadges}>
                <span className={styles.factoryBadge}>4-Year Partnership</span>
                <span className={styles.factoryBadge}>Contract Verified</span>
              </div>
            </div>

            <div className={styles.factoryStats}>
              <div className={styles.factoryStatItem}>
                <span className={styles.factoryStatLabel}>Annual Output Value</span>
                <span className={styles.factoryStatValue}>{partnerFactory.annualOutput}</span>
              </div>
              <div className={styles.factoryStatItem}>
                <span className={styles.factoryStatLabel}>Cooperation Period</span>
                <span className={styles.factoryStatValue}>{partnerFactory.cooperationYears}</span>
              </div>
            </div>

            <div className={styles.capacitySection}>
              <h4 className={styles.capacityTitle}>Annual Production Capacity</h4>
              <div className={styles.capacityGrid}>
                {partnerFactory.products.map((p) => (
                  <div key={p.name} className={styles.capacityCard}>
                    <span className={styles.capacityName}>{p.name}</span>
                    <span className={styles.capacityValue}>{p.capacity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Markets */}
      <section className={styles.markets}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Global reach</span>
            <h2 className={styles.sectionTitle}>Exporting to 9 regions worldwide</h2>
            <p className={styles.sectionSubtitle}>
              Our materials reach projects across the Middle East, Europe, the Americas
              and Southeast Asia — a diversified market presence built on repeat orders.
            </p>
          </div>

          <div className={styles.marketsGrid}>
            {markets.map((m) => (
              <div key={m.region} className={styles.marketItem}>
                <div className={styles.marketHeader}>
                  <span className={styles.marketRegion}>{m.region}</span>
                  <span className={styles.marketPercent}>{m.percent}%</span>
                </div>
                <div className={styles.marketBar}>
                  <div
                    className={styles.marketBarFill}
                    style={{ width: `${m.percent * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className={styles.showroom}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Visit us</span>
            <h2 className={styles.sectionTitle}>Our showroom in Haining</h2>
            <p className={styles.sectionSubtitle}>
              Walk through our 500 m² display space — touch the materials, compare finishes, and discuss your project in person.
            </p>
          </div>
          <div className={styles.showroomGrid}>
            <div className={styles.showroomImage}>
              <Image
                src="/images/about-showroom-1.jpg"
                alt="Flooring and tile showroom display with wood-grain panels, ceramic tiles and patterned accent samples"
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                className={styles.showroomImg}
              />
            </div>
            <div className={styles.showroomImage}>
              <Image
                src="/images/about-showroom-2.jpg"
                alt="Bathroom fixtures display with shower systems and smart toilets"
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                className={styles.showroomImg}
              />
            </div>
            <div className={styles.showroomImage}>
              <Image
                src="/images/about-showroom-3.jpg"
                alt="Custom home material sample display wall with stone, wood veneer and color finish panels"
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                className={styles.showroomImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className={styles.facts}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Company profile</span>
            <h2 className={styles.sectionTitle}>Export-ready, documented</h2>
          </div>
          <div className={styles.factsGrid}>
            {facts.map((f) => (
              <div key={f.label} className={styles.factCard}>
                <span className={styles.factLabel}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Assistant 推广 */}
      <section className="container" style={{ marginBottom: "var(--space-2xl)" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-lg)",
          padding: "var(--space-lg) var(--space-xl)",
          background: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
        }}>
          <div>
            <span className="eyebrow">For Designers</span>
            <p style={{ fontSize: "var(--fs-md)", color: "var(--color-text-secondary)", marginTop: "var(--space-xs)", maxWidth: "55ch" }}>
              Explore our AI Interior Design Assistant — match materials, estimate
              budgets, and plan commercial spaces with confidence.
            </p>
          </div>
          <Link href="/design-assistant" className="btn btn-outline" style={{ flexShrink: 0 }}>
            Try it now →
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
