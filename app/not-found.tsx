import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.description}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/products" className="btn btn-outline">
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
