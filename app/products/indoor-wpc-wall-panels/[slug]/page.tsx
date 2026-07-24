import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Schema, { buildBreadcrumb, buildFAQ } from "@/components/Schema";
import WPCInquiryForm from "@/components/wpc-panel/WPCInquiryForm";
import WPCProductGallery from "@/components/wpc-panel/WPCProductGallery";
import WPCProductVideo from "@/components/wpc-panel/WPCProductVideo";
import styles from "@/components/wpc-panel/wpc-product-detail.module.css";
import {
  getWPCProductBySlug,
  wpcPanelProducts,
  type WPCPanelProduct,
} from "@/lib/wpc-panel-data";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return wpcPanelProducts.map((product) => ({ slug: product.slug }));
}

type DetailIconName = "ruler" | "package" | "layers" | "globe" | "document" | "sample" | "shipping";

function DetailIcon({ name }: { name: DetailIconName }) {
  const paths = {
    ruler: <><path d="M4 18 18 4l2 2L6 20H4v-2Z" /><path d="m13 7 2 2m-5 1 2 2m-5 1 2 2" /></>,
    package: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z" /><path d="M12 11v10" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
    document: <><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v5h5M9 13l2 2 4-4" /></>,
    sample: <><path d="M5 4h14v16H5V4Z" /><path d="M8 8h8M8 12h5M8 16h7" /></>,
    shipping: <><path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
  } as const;

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getWPCProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.code} Indoor WPC Wall Panel Wholesale`,
    description: `Source-checked ${product.code} indoor WPC wall panel for wholesale buyers: MOQ ${product.moq} ${product.unit}, specifications, finishes, packing and current quotation.`,
    path: `/products/indoor-wpc-wall-panels/${product.slug}`,
    image: product.image,
  });
}

function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className={styles.specTable}>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th scope="row">{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function productFaqs(product: WPCPanelProduct) {
  const quotedField = (value: string) => `"${value.trim().replace(/[.!?]+$/, "")}"`;

  return [
    {
      question: `What is the MOQ for ${product.code}?`,
      answer: `The source trade offer shows ${product.moq} ${product.unit}.${product.secondaryMoq ? ` Its attribute block separately shows ${product.secondaryMoq}.` : ""} Confirm the applicable sales unit in the final quotation.`,
    },
    {
      question: `What size and thickness are listed for ${product.code}?`,
      answer: `The reviewed size field says ${quotedField(product.size)}. The reviewed thickness field says ${quotedField(product.thickness)}. Any field not stated by the source listing must be confirmed against the selected profile drawing.`,
    },
    {
      question: "Can I request colors, samples and compliance documents?",
      answer: `Yes. The reviewed color field says ${quotedField(product.color)}. The sample field says ${quotedField(product.sampleInfo)}. The certification field says ${quotedField(product.certifications)}.`,
    },
  ];
}

const navItems = [
  ["overview", "Product overview"],
  ["advantages", "Core advantages"],
  ["applications", "Applications"],
  ["specifications", "Product specifications"],
  ["finishes", "Colors & finishes"],
  ["installation", "Structure & installation"],
  ["performance", "Performance"],
  ["cases", "Project cases"],
  ["media", "Images & video"],
  ["quality", "Certification & QC"],
  ["shipping", "Packaging & shipping"],
  ["customization", "Customization"],
  ["faq", "FAQ"],
  ["related", "Related products"],
  ["inquiry", "Inquiry"],
] as const;

export default async function IndoorWPCProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getWPCProductBySlug(slug);
  if (!product) notFound();

  const related = wpcPanelProducts
    .filter((candidate) => candidate.slug !== product.slug && candidate.seriesSlug === product.seriesSlug)
    .slice(0, 3);
  const fallbackRelated = wpcPanelProducts.filter((candidate) => candidate.slug !== product.slug).slice(0, 3);
  const relatedProducts = related.length === 3 ? related : fallbackRelated;
  const faqs = productFaqs(product);
  const pageUrl = `${siteConfig.url}/products/indoor-wpc-wall-panels/${product.slug}`;

  const productSchema = {
    "@id": `${pageUrl}#product`,
    name: product.name,
    sku: product.code,
    image: [product.image, ...product.media.images].map((image) => `${siteConfig.url}${image}`),
    description: product.remarks,
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    brand: { "@type": "Brand", name: product.brand },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Building material wholesalers, distributors and project buyers",
    },
    countryOfOrigin: { "@type": "Country", name: "China" },
    material: product.material,
    color: product.color,
    category: "Indoor WPC Wall Panels",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Size", value: product.size },
      { "@type": "PropertyValue", name: "Thickness", value: product.thickness },
      { "@type": "PropertyValue", name: "MOQ", value: `${product.moq} ${product.unit}` },
      { "@type": "PropertyValue", name: "Surface", value: product.surface },
      { "@type": "PropertyValue", name: "Warranty", value: product.warranty },
      { "@type": "PropertyValue", name: "Source verified", value: product.verifiedAt },
    ],
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels" },
            { label: product.code, href: `/products/indoor-wpc-wall-panels/${product.slug}` },
          ]}
        />
      </div>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMedia}>
            <WPCProductGallery code={product.code} name={product.name} images={product.media.images} />
          </div>
          <div className={styles.heroCopy}>
            <span className={styles.productCode}>{product.code} | {product.series}</span>
            <div className={styles.statusRow} aria-label="Product information status">
              <span>Source checked</span>
              <span>SKU-specific media</span>
              <span>Export inquiry ready</span>
            </div>
            <h1 className={styles.heroTitle}>{product.name}</h1>
            <p className={styles.heroSummary}>{product.remarks}</p>
            <div className={styles.facts}>
              <div className={styles.fact}><span className={styles.factIcon}><DetailIcon name="ruler" /></span><span><span className={styles.factLabel}>Thickness</span><span className={styles.factValue}>{product.thickness}</span></span></div>
              <div className={styles.fact}><span className={styles.factIcon}><DetailIcon name="package" /></span><span><span className={styles.factLabel}>Trade MOQ</span><span className={styles.factValue}>{product.moq} {product.unit}</span></span></div>
              <div className={styles.fact}><span className={styles.factIcon}><DetailIcon name="layers" /></span><span><span className={styles.factLabel}>Surface</span><span className={styles.factValue}>{product.surface}</span></span></div>
              <div className={styles.fact}><span className={styles.factIcon}><DetailIcon name="globe" /></span><span><span className={styles.factLabel}>Origin</span><span className={styles.factValue}>{product.origin}</span></span></div>
            </div>
            <div className={styles.heroActions}>
              <a className="btn btn-primary" href="#inquiry">Request current quote <span aria-hidden="true">&#8594;</span></a>
              <a className="btn btn-outline" href={product.sourceUrl} target="_blank" rel="noreferrer">View verified source <span aria-hidden="true">&#8599;</span></a>
            </div>
            <p className={styles.sourceNote}>Source fields checked {product.verifiedAt}. Prices, availability and compliance documents require order-specific reconfirmation.</p>
          </div>
        </div>
      </section>

      <section className={styles.buyerStrip} aria-labelledby="buyer-checkpoints-title">
        <div className={`container ${styles.buyerStripInner}`}>
          <div className={styles.buyerStripIntro}>
            <span className={styles.buyerEyebrow}>Wholesale buyer checkpoints</span>
            <h2 id="buyer-checkpoints-title">Move from listing to purchase with the right confirmations</h2>
            <p>Use the exact product code in every sample, quotation and shipping discussion.</p>
          </div>
          <div className={styles.buyerChecklist}>
            <article><span className={styles.buyerIcon}><DetailIcon name="document" /></span><div><h3>Approve the specification</h3><p>Request the current profile drawing, dimensions and signed product specification.</p></div></article>
            <article><span className={styles.buyerIcon}><DetailIcon name="sample" /></span><div><h3>Approve the finish</h3><p>Confirm color and surface against a physical sample from the intended production batch.</p></div></article>
            <article><span className={styles.buyerIcon}><DetailIcon name="shipping" /></span><div><h3>Confirm commercial terms</h3><p>Recheck MOQ unit, packing plan, lead time, Incoterm and destination documents.</p></div></article>
          </div>
        </div>
      </section>

      <div className={`container ${styles.content}`}>
        <nav className={styles.toc} aria-label="Product detail sections">
          <p className={styles.tocTitle}>On this page</p>
          <ol>{navItems.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </nav>

        <div className={styles.sections}>
          <section id="overview" className={styles.section}>
            <h2>Product overview</h2>
            <p className={styles.sectionLead}>{product.name} is presented by the source supplier as an indoor wall panel product. Its verified material field is {product.material.toLowerCase()}, with applications including {product.applications.join(", ").toLowerCase()}. The exact profile, approved sample and current commercial terms should be confirmed for each project.</p>
            <p className={styles.sectionLink}>Compare this SKU with the complete <Link className="text-link" href="/products/indoor-wpc-wall-panels">indoor WPC wall panel wholesale range</Link>.</p>
          </section>

          <section id="advantages" className={styles.section}>
            <h2>Core advantages</h2>
            <ul className={styles.featureList}>{product.features.map((feature) => <li key={feature}>{feature}<br /><span className={styles.sourceNote}>Source listing feature label; no unstated test rating is implied.</span></li>)}</ul>
          </section>

          <section id="applications" className={styles.section}>
            <h2>Application scenarios</h2>
            <ul className={styles.applicationList}>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul>
          </section>

          <section id="specifications" className={styles.section}>
            <h2>Product specifications</h2>
            <SpecTable rows={[
              ["Product code", product.code], ["Listing model", product.model], ["Material", product.material], ["Size", product.size], ["Thickness", product.thickness], ["Primary trade MOQ", `${product.moq} ${product.unit}`], ["Additional MOQ field", product.secondaryMoq || "Not separately stated"], ["Brand", product.brand], ["Place of origin", product.origin], ["Source price display", product.sourcePrice],
            ]} />
          </section>

          <section id="finishes" className={styles.section}>
            <h2>Colors and surface treatment</h2>
            <SpecTable rows={[["Color", product.color], ["Surface", product.surface], ["Surface treatment", product.surfaceTreatment]]} />
            <p className={styles.sourceNote}>Approve color by physical sample and production batch. Screen colors and listing images are not contractual color standards.</p>
          </section>

          <section id="installation" className={styles.section}>
            <h2>Structure and installation</h2>
            <SpecTable rows={[["Profile / structure", product.size], ["Installation field", product.installation], ["Project support", product.projectSolution]]} />
            <p className={styles.sectionLead}>Before installation, request the current cross-section drawing, edge-joint detail, substrate requirements, fastening method and allowance guidance for the exact SKU. These details were not uniformly stated across the supplied listings and are therefore not generalized.</p>
          </section>

          <section id="performance" className={styles.section}>
            <h2>Performance parameters</h2>
            <SpecTable rows={product.features.map((feature) => [feature, "Listed feature; numeric test value not supplied in the reviewed source fields"] as [string, string])} />
          </section>

          <section id="cases" className={styles.section}>
            <h2>Project cases</h2>
            <div className={styles.caseNotice}><p>No product-specific completed-project record was included in the supplied source information for {product.code}. Send the application, room type, area and target finish to request relevant supplier references without presenting unrelated projects as this SKU.</p></div>
          </section>

          <section id="media" className={styles.section}>
            <h2>Product images and video</h2>
            <p className={styles.sectionLead}>These six product images were collected from the primary gallery of the corresponding supplied Alibaba listing on {product.media.verifiedAt}. They are kept with this SKU and are not borrowed from another product page.</p>
            <div className={styles.mediaGallery}>
              {product.media.images.map((image, index) => (
                <div className={styles.mediaGalleryItem} key={image}>
                  <Image src={image} alt={`${product.code} verified supplier gallery view ${index + 1}`} fill sizes="(max-width: 640px) 50vw, 24vw" />
                </div>
              ))}
            </div>
            {product.media.video ? (
              <div className={styles.videoBlock}>
                <WPCProductVideo
                  src={product.media.video.url}
                  poster={product.media.images[0]}
                  label={product.media.video.label}
                />
                <div className={styles.mediaInfo}>
                  <span className={styles.mediaEyebrow}>Supplier gallery video</span>
                  <h3>Video shown on the source listing</h3>
                  <p>This player uses the video URL observed in the listing's main product-media area. Availability remains controlled by Alibaba's video service.</p>
                  <a className="text-link" href={product.media.video.source} target="_blank" rel="noreferrer">Verify this media on the source listing</a>
                </div>
              </div>
            ) : null}
          </section>

          <section id="quality" className={styles.section}>
            <h2>Certification and quality control</h2>
            <div className={styles.qualityNotice}><p>{product.certifications}</p></div>
            <p className={styles.sectionLead}>Before purchase, request certificate copies, test reports, issuing bodies, validity dates and product/model scope. Listing labels alone are not treated as proof that a certificate covers every finish, batch or destination-market requirement.</p>
          </section>

          <section id="shipping" className={styles.section}>
            <h2>Packaging and shipping</h2>
            <SpecTable rows={[["Selling unit / packing", product.packaging], ["Pieces per carton", product.pcsPerCarton ? String(product.pcsPerCarton) : "Not stated in the listing"], ["Single package size", product.cartonSize], ["Single gross weight", product.netWeightPerCarton], ["Lead time", product.leadTime], ["Incoterm", product.incoterm]]} />
          </section>

          <section id="customization" className={styles.section}>
            <h2>Customization process</h2>
            <ol className={styles.processList}>
              <li>Send the product code, application, quantity, destination and required date.</li>
              <li>Confirm the current profile drawing, dimensions, color swatch and surface sample.</li>
              <li>Review the written quotation, MOQ unit, packing plan, lead time and Incoterm.</li>
              <li>Request and validate any test reports or certificates required for the destination market.</li>
              <li>Approve the final sample and signed specification before production.</li>
              <li>Complete pre-shipment inspection and confirm packing and shipping documents.</li>
            </ol>
          </section>

          <section id="faq" className={styles.section}>
            <h2>Frequently asked questions</h2>
            <div className={styles.faqList}>{faqs.map((faq) => <article className={styles.faqItem} key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
          </section>

          <section id="related" className={styles.section}>
            <h2>Related products</h2>
            <div className={styles.relatedGrid}>{relatedProducts.map((relatedProduct) => (
              <Link className={styles.relatedCard} key={relatedProduct.slug} href={`/products/indoor-wpc-wall-panels/${relatedProduct.slug}`}>
                <div className={styles.relatedImage}><Image src={relatedProduct.image} alt={relatedProduct.name} fill sizes="(max-width: 640px) 100vw, 30vw" /></div>
                <div className={styles.relatedCopy}><span className={styles.relatedCode}>{relatedProduct.code}</span><span className={styles.relatedName}>{relatedProduct.name}</span></div>
              </Link>
            ))}</div>
          </section>

        </div>
      </div>

      <section id="inquiry" className={styles.inquiryBand}>
        <div className={`container ${styles.inquiryBandInner}`}>
          <div className={styles.inquiryIntro}>
            <span className={styles.inquiryEyebrow}>Start an inquiry</span>
            <h2>Request a Verified Quotation for <span className={styles.nowrap}>{product.code}</span></h2>
            <p>Ask for current pricing, the applicable MOQ unit, profile drawing, color sample, production lead time and compliance documents for this exact product.</p>
            <ul className={styles.inquiryChecklist}>
              <li>Current quotation and MOQ unit</li>
              <li>Profile drawing and finish sample</li>
              <li>Packing, lead time and shipping terms</li>
            </ul>
            <p className={styles.inquiryContact}>Email: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><br />WhatsApp: +86 135 1131 6133</p>
          </div>
          <WPCInquiryForm
            productCode={product.code}
            productName={product.name}
            sourceUrl={product.sourceUrl}
            moq={product.moq}
            unit={product.unit}
          />
        </div>
      </section>

      <Schema type="Product" data={productSchema} />
      <Schema type="FAQPage" data={buildFAQ(faqs)} />
      <Schema type="BreadcrumbList" data={buildBreadcrumb([
        { name: "Home", url: siteConfig.url },
        { name: "Products", url: `${siteConfig.url}/products` },
        { name: "Indoor WPC Wall Panels", url: `${siteConfig.url}/products/indoor-wpc-wall-panels` },
        { name: product.code, url: pageUrl },
      ])} />
    </div>
  );
}
