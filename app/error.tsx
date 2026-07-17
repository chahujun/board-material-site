"use client";

import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <span className="eyebrow">Error</span>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.desc}>
            An unexpected error occurred. Please try again or return to the homepage.
          </p>
          <div className={styles.actions}>
            <button onClick={reset} className="btn btn-primary">
              Try again
            </button>
            <Link href="/" className="btn btn-outline">
              Return home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
