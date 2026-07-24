"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./wpc-product-detail.module.css";

interface WPCProductGalleryProps {
  code: string;
  name: string;
  images: string[];
}

export default function WPCProductGallery({ code, name, images }: WPCProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] || images[0];

  if (!activeImage) return null;

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryMain} aria-live="polite">
        <Image
          key={activeImage}
          src={activeImage}
          alt={`${code} ${name} - verified supplier gallery view ${activeIndex + 1}`}
          fill
          sizes="(max-width: 980px) 100vw, 52vw"
          priority={activeIndex === 0}
        />
        <span className={styles.galleryCounter}>{activeIndex + 1} / {images.length}</span>
      </div>
      <div className={styles.galleryThumbs} aria-label={`${code} product gallery`}>
        {images.map((image, index) => (
          <button
            className={`${styles.galleryThumb} ${index === activeIndex ? styles.galleryThumbActive : ""}`}
            type="button"
            key={image}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show product image ${index + 1}`}
            aria-pressed={index === activeIndex}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
