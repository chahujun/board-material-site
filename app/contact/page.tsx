import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, siteConfig } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Request a Quote",
  description:
    "Request a quote for architectural boards, flooring or stone. Tell us about your project and our export team responds within one business day.",
  path: "/contact",
});

const checklist = [
  {
    n: "1",
    text: "Project type and location (hotel, residential, commercial) and the country of destination for export compliance.",
  },
  {
    n: "2",
    text: "Material category and quantity in square meters or pieces, with target delivery date.",
  },
  {
    n: "3",
    text: "Key specifications: wear-layer thickness, fire rating, finish and any custom color or RAL references.",
  },
  {
    n: "4",
    text: "Any certification requirements (FSC, CE, ASTM) and documentation needed for customs clearance.",
  },
];

const tradeTerms = [
  {
    label: "Delivery Terms",
    value: "FOB · CIF · EXW",
    detail: "Flexible Incoterms to suit your logistics setup",
  },
  {
    label: "Accepted Payment",
    value: "T/T (Bank Transfer)",
    detail: "USD, EUR, AUD, HKD, GBP, CNY",
  },
  {
    label: "Nearest Ports",
    value: "Shanghai · Ningbo",
    detail: "Two of China's largest export hubs, 1–2 hours from our facility",
  },
  {
    label: "Average Lead Time",
    value: "~25 days",
    detail: "From deposit to container loading at port",
  },
  {
    label: "Languages Spoken",
    value: "6 languages",
    detail: "English, Chinese, Spanish, Portuguese, Arabic, Russian",
  },
  {
    label: "Annual Revenue",
    value: "US$5M – US$10M",
    detail: "Serving buyers across 20+ countries worldwide",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      </div>

      {/* 介绍 */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <span className="eyebrow">Start a conversation</span>
            <h1 className={styles.introTitle}>Request a quote for your project</h1>
            <p className={styles.lead}>
              Our export team responds to inquiries within one business day with
              pricing, MOQ and lead times. For the fastest response, use our secure
              inquiry form and include the details below.
            </p>
          </div>
        </div>
      </section>

      {/* 询盘引导（导流到 onestopbuildly.com/contact） */}
      <section className={styles.inquiry}>
        <div className="container">
          <div className={styles.inquiryCard}>
            <div className={styles.inquiryText}>
              <span className="eyebrow">Secure inquiry form</span>
              <h2 className={styles.inquiryTitle}>
                Submit your project brief
              </h2>
              <p className={styles.inquiryDesc}>
                Our dedicated inquiry portal collects your specifications securely
                and routes them to the right product specialist. It takes about two
                minutes.
              </p>
            </div>
            <div className={styles.inquiryAction}>
              <a
                href={siteConfig.inquiryUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Inquiry Form
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="btn btn-outline"
              >
                Email us instead
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 询盘要素清单 */}
      <section className={styles.checklist}>
        <div className="container">
          <div className={styles.checklistInner}>
            <span className="eyebrow">To speed things up</span>
            <h2 className={styles.checklistTitle}>Include these in your inquiry</h2>
            <div className={styles.checklistGrid}>
              {checklist.map((item) => (
                <div key={item.n} className={styles.checklistItem}>
                  <span className={styles.checklistMarker}>{item.n}</span>
                  <p className={styles.checklistText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 贸易条款 */}
      <section className={styles.tradeTerms}>
        <div className="container">
          <div className={styles.tradeTermsInner}>
            <span className="eyebrow">Business at a glance</span>
            <h2 className={styles.tradeTermsTitle}>Trade terms &amp; capabilities</h2>
            <p className={styles.tradeTermsDesc}>
              Clear, documented business terms so you can plan your procurement
              with confidence. All terms verified and consistent across orders.
            </p>
            <div className={styles.tradeTermsGrid}>
              {tradeTerms.map((t) => (
                <div key={t.label} className={styles.tradeTermCard}>
                  <span className={styles.tradeTermLabel}>{t.label}</span>
                  <span className={styles.tradeTermValue}>{t.value}</span>
                  <span className={styles.tradeTermDetail}>{t.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className={styles.channels}>
        <div className="container">
          <div className={styles.channelsGrid}>
            <div className={styles.channel}>
              <span className={styles.channelLabel}>Email</span>
              <a href={`mailto:${siteConfig.contactEmail}`} className={`${styles.channelValue} text-link`}>
                {siteConfig.contactEmail}
              </a>
            </div>
            <div className={styles.channel}>
              <span className={styles.channelLabel}>Phone</span>
              <span className={styles.channelValue}>{siteConfig.phone}</span>
            </div>
            <div className={styles.channel}>
              <span className={styles.channelLabel}>Workshop</span>
              <span className={styles.channelValue}>
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality}
              </span>
            </div>
            <div className={styles.channel}>
              <span className={styles.channelLabel}>Hours</span>
              <span className={styles.channelValue}>
                Mon-Fri 8:30 AM - 5:00 PM CST (UTC+8)
                <br />
                Sat-Sun Closed
              </span>
            </div>
          </div>

          {/* 二维码联系 */}
          <div className={styles.qrSection}>
            <h2 className={styles.qrTitle}>Connect with us directly</h2>
            <p className={styles.qrDesc}>
              Scan the QR code to start a conversation with our export specialist Cindy on your preferred messaging app.
            </p>
            <div className={styles.qrGrid}>
              <div className={styles.qrCard}>
                <div className={styles.qrImageWrap}>
                  <Image
                    src="/images/wechat-qr.jpg"
                    alt="WeChat QR code - Cindy"
                    fill
                    sizes="200px"
                    className={styles.qrImage}
                  />
                </div>
                <span className={styles.qrLabel}>WeChat</span>
                <span className={styles.qrName}>Cindy</span>
                <span className={styles.qrLocation}>Zhejiang, Jiaxing</span>
              </div>
              <div className={styles.qrCard}>
                <div className={styles.qrImageWrap}>
                  <Image
                    src="/images/whatsapp-qr.jpg"
                    alt="WhatsApp QR code - Cindy"
                    fill
                    sizes="200px"
                    className={styles.qrImage}
                  />
                </div>
                <span className={styles.qrLabel}>WhatsApp Business</span>
                <span className={styles.qrName}>Cindy</span>
                <span className={styles.qrLocation}>Chat with our export team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
