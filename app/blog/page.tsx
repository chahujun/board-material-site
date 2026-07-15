import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import CTA from "@/components/CTA";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Journal — Buying Guides & Material Notes",
  description:
    "Practical B2B buying guides and material notes on WPC wall panels, UV marble sheets, SPC flooring, WPC decking and PS wall panels — written for hotel developers and contractors.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }]} />
      </div>

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <div>
              <span className="eyebrow">The OneStopBuildly journal</span>
              <h1 className={styles.introTitle}>Notes on materials &amp; making</h1>
            </div>
            <p className={styles.introDesc}>
              Buying guides, manufacturing walkthroughs and specification notes to help
              you choose the right boards, flooring and stone for hospitality and
              commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      {featured && (
        <section className={`container ${styles.featured}`}>
          <BlogCard post={featured} variant="featured" index={0} />
        </section>
      )}

      {/* 其余文章 */}
      <section className={`container ${styles.grid}`}>
        {rest.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </section>

      <CTA />
    </>
  );
}
