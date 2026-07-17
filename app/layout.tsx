import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import { siteConfig } from "@/lib/seo";

// 标题字体：衬线体 Fraunces（工作室杂志感）
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["500", "600"],
});

// 正文字体：无衬线体 Manrope
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// 站点级 metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Premium Board Materials & Surface Finishes`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — Trusted Source for Building Materials`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {/* 全站注入 Organization 结构化数据 */}
        <Schema
          type="Organization"
          data={{
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.contactEmail,
            description: siteConfig.shortDescription,
            foundingDate: `${siteConfig.foundedYear}-01-01`,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.streetAddress,
              addressLocality: siteConfig.address.addressLocality,
              addressRegion: siteConfig.address.addressRegion,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.addressCountry,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: siteConfig.contactEmail,
              telephone: siteConfig.phone,
              availableLanguage: ["English", "Chinese"],
            },
          }}
        />
      </body>
    </html>
  );
}
