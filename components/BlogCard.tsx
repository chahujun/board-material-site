import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import styles from "./BlogCard.module.css";

// 博客卡片：标题 + 摘要 + 日期 + 阅读时间 + 分类标签
interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
  index?: number;
}

export default function BlogCard({ post, variant = "default", index = 0 }: BlogCardProps) {
  const isFeatured = variant === "featured";
  return (
    <article
      className={`${styles.card} ${isFeatured ? styles.featured : ""}`}
      style={{ animationDelay: `${0.05 + index * 0.1}s` }}
    >
      <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={isFeatured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
          className={styles.image}
        />
        <span className={styles.category}>{post.category}</span>
      </Link>

      <div className={styles.body}>
        <div className={styles.meta}>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className={styles.dot} aria-hidden="true">
            &middot;
          </span>
          <span>{post.readTime}</span>
        </div>

        <h3 className={styles.title}>{post.title}</h3>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <Link href={`/blog/${post.slug}`} className={styles.readLink}>
          Read Article
          <span className={styles.arrow} aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
