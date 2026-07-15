import Image from "next/image";
import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "About — Trusted Source for Building Materials",
  description:
    "OneStopBuildly is a building materials exporter based in Haining, China — one of the country's largest decoration material hubs. We supply WPC panels, UV boards, SPC flooring and more to hotel developers and contractors in 20+ countries.",
  path: "/about",
});

const values = [
  {
    index: "01",
    title: "Material-first thinking",
    text: "We start from how a material behaves — its stability, finish and fire performance — not from a catalogue photo.",
  },
  {
    index: "02",
    title: "Documented, not assumed",
    text: "Every export order ships with spec sheets, fire-test reports and chain-of-custody documentation. No surprises at customs.",
  },
  {
    index: "03",
    title: "Built for project timelines",
    text: "We hold buffer stock of core decors and coordinate production slots so your container lands when the site is ready.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      </div>

      {/* 介绍 */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <span className="eyebrow">Our company</span>
              <h1 className={styles.introTitle}>
                Trusted source for building materials.
              </h1>
              <p className={styles.lead}>
                OneStopBuildly is a building materials exporter headquartered in
                Haining, Zhejiang — one of China's largest decoration material hubs.
                Founded in {siteConfig.foundedYear}, we supply WPC wall panels, UV
                marble sheets, WPC decking, SPC flooring and PS wall panels to hotel
                developers, contractors and wholesalers across 20+ countries.
              </p>
            </div>
            <div className={styles.introImage}>
              <Image
                src="https://picsum.photos/seed/onestopbuildly-factory/900/1100"
                alt="OneStopBuildly factory and material samples in Haining"
                fill
                sizes="(max-width: 860px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 故事 */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyInner}>
            <span className="eyebrow">How we work</span>
            <h2 className={styles.storyTitle}>From Haining to your loading dock</h2>
            <p>
              Haining is one of China's most concentrated decoration material
              production bases. Our location gives us direct access to WPC extrusion
              lines, UV coating facilities, SPC flooring mills and a mature supply
              chain for auxiliary materials — all within a 30-kilometer radius.
            </p>
            <p>
              We are not just a trading company. OneStopBuildly operates its own
              finishing lines and holds long-term supply agreements with vetted
              factories. That vertical reach lets us control quality, gloss levels,
              wear-layer thickness and slab consistency — the details that decide
              whether a project looks right five years in.
            </p>
            <p>
              Every inquiry begins with a conversation about your project: the
              occupancy class, the climate, the design intent and the budget. From
              there we propose materials, document the specs, and schedule
              production around your site. The result is a container that lands on
              time, with paperwork that clears customs.
            </p>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHead}>
            <span className="eyebrow">What we stand for</span>
            <h2 className={styles.storyTitle}>Three principles</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.index} className={styles.valueCard}>
                <span className={styles.valueIndex}>{v.index}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
