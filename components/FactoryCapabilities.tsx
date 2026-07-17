import Image from "next/image";
import styles from "./FactoryCapabilities.module.css";

const items = [
  {
    image: "/images/factory-extrusion-line.jpg",
    step: "01",
    title: "Production scale",
    description:
      "WPC and SPC profiles extruded, cooled and stacked on our Haining production floor — honeycomb core structures visible from the cut ends.",
  },
  {
    image: "/images/factory-wpc-panels.jpg",
    step: "02",
    title: "Quality control",
    description:
      "Every batch goes through hands-on inspection. Thickness, surface finish and edge integrity are checked on the line before packaging.",
  },
  {
    image: "/images/factory-quality-check.jpg",
    step: "03",
    title: "Extrusion technology",
    description:
      "Continuous extrusion lines for PVC and WPC profiles — precise cross-section shaping with multi-stage cooling for dimensional stability.",
  },
  {
    image: "/images/factory-surface-finishes.jpg",
    step: "04",
    title: "Surface finishes",
    description:
      "Wood grain, marble and solid color finishes available across our product range — synchronized embossing for authentic texture and appearance.",
  },
];

export default function FactoryCapabilities() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Factory capabilities</span>
          <h2 className={styles.title}>From production line to your project</h2>
          <p className={styles.subtitle}>
            Four things you can verify before placing an order: our extrusion
            capacity, our quality control process, our manufacturing technology,
            and the surface finishes we offer.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.step} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className={styles.image}
                />
                <span className={styles.step}>{item.step}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
