import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { siteConfig, buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import Schema from "@/components/Schema";
import CTA from "@/components/CTA";
import styles from "./page.module.css";

// 仅预渲染已知文章
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Journal", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />
      </div>

      {/* 文章头部 */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <span className={`eyebrow ${styles.categoryTag}`}>{post.category}</span>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </header>

      {/* 封面图 */}
      <div className={styles.cover}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
      </div>

      {/* 正文 */}
      <article className={`container ${styles.body}`}>
        {renderMarkdown(post.content)}
      </article>

      {/* 返回链接 */}
      <div className="container">
        <div className={styles.shareBack}>
          <Link href="/blog" className={styles.backLink}>
            <span aria-hidden="true">&larr;</span> Back to the journal
          </Link>
        </div>
      </div>

      <CTA
        title="Specifying materials for a project?"
        description="Share your specification and our export team will match the right boards, flooring or stone to your design and budget."
      />

      {/* Article 结构化数据 */}
      <Schema
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Organization",
            name: post.author,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        }}
      />
    </>
  );
}
