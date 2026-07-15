import styles from "./FactoryTour.module.css";

type Props = {
  variant?: "full" | "compact";
};

export default function FactoryTour({ variant = "full" }: Props) {
  return (
    <section className={variant === "compact" ? styles.compact : styles.full}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Factory tour</span>
          <h2 className={styles.title}>
            From production line to your project
          </h2>
          {variant === "full" && (
            <p className={styles.subtitle}>
              Step inside our Haining facility — from extrusion and UV coating to
              quality inspection and showroom. Every panel, sheet and plank is
              produced under one roof, tested for export-grade performance, and
              documented before it ships.
            </p>
          )}
        </div>

        <div className={styles.videoWrap}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            poster="/images/factory-video-poster.jpg"
          >
            <source src="/videos/factory-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {variant === "full" && (
          <div className={styles.points}>
            <div className={styles.point}>
              <span className={styles.pointLabel}>01</span>
              <p>Extrusion and cooling lines for WPC and PS profiles</p>
            </div>
            <div className={styles.point}>
              <span className={styles.pointLabel}>02</span>
              <p>UV coating and marble-grain printing station</p>
            </div>
            <div className={styles.point}>
              <span className={styles.pointLabel}>03</span>
              <p>Quality inspection and showroom display</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
