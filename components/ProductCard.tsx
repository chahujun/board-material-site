import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import styles from "./ProductCard.module.css";

// 产品卡片：图片区 + 标题 + 简短描述 + View Details 链接
interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <article
      id={product.slug}
      className={styles.card}
      style={{ animationDelay: `${0.05 + index * 0.08}s` }}
    >
      <Link
        href={`/products/${product.category}#${product.slug}`}
        className={styles.imageLink}
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className={styles.image}
        />
        <span className={styles.moq}>MOQ {product.moq}</span>
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.shortDescription}</p>

        <ul className={styles.features}>
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className={styles.feature}>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/products/${product.category}#${product.slug}`}
          className={styles.detailsLink}
        >
          View Details
          <span className={styles.arrow} aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
