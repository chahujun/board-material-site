import { siteConfig } from "@/lib/seo";
import styles from "./CTA.module.css";

// 询盘导流区块：链接到 onestopbuildly.com/contact
interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({
  title = "Get a Quote for Your Project",
  description = "Tell us about your hotel, commercial or hospitality project and our export team will respond with pricing, MOQ and lead times within one business day.",
}: CTAProps) {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <span className="eyebrow">Start an inquiry</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.action}>
            <a
              href={siteConfig.inquiryUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Quote
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className={styles.mailLink}
            >
              or email {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
