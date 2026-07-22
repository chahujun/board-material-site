"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  acousticWallProducts,
  acousticWallSeries,
  acousticWallFAQs,
  getProductsBySeries,
  getUniqueSizes,
  getUniqueSeries,
  getUniqueColors,
  getUniqueCodes,
  ACOUSTIC_WALL_CONTACT,
  type AcousticWallProduct,
} from "@/lib/acoustic-wall-data";
import { categories } from "@/lib/products";
import styles from "./acoustic-wall.module.css";

// ===== Types =====
interface QuoteItem {
  product: AcousticWallProduct;
  quantity: number;
}

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productCode: string;
  quantity: string;
  color: string;
  deliveryDate: string;
  message: string;
}

interface GalleryImage {
  url: string;
  label: string;
  type: "main" | "texture" | "application";
}

interface LightboxState {
  images: GalleryImage[];
  index: number;
}

const initialForm: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  productCode: "",
  quantity: "",
  color: "",
  deliveryDate: "",
  message: "",
};

// ===== Smart Image Component with Loading/Error States =====
function SmartImage({
  src,
  alt,
  fill,
  sizes,
  priority,
  loading,
  className,
  onOpenPreview,
  showZoomHint,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
  onOpenPreview?: () => void;
  showZoomHint?: boolean;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      if (img.complete && img.naturalWidth > 0) {
        setStatus("loaded");
      }
    }
  }, [src]);

  return (
    <div
      className={`${styles.smartImageWrap} ${className || ""}`}
      onClick={onOpenPreview}
      role={onOpenPreview ? "button" : undefined}
      tabIndex={onOpenPreview ? 0 : undefined}
      onKeyDown={onOpenPreview ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpenPreview(); } } : undefined}
    >
      {status === "loading" && <div className={styles.imgPlaceholder} />}
      {status === "error" && (
        <div className={styles.imgError}>
          <span className={styles.imgErrorIcon} aria-hidden="true">▣</span>
          <span className={styles.imgErrorText}>Product Image Coming Soon</span>
        </div>
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={loading}
        className={`${styles.smartImg} ${status === "loaded" ? styles.imgLoaded : ""} ${onOpenPreview ? styles.imgClickable : ""}`}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
      {showZoomHint && status === "loaded" && (
        <span className={styles.zoomHint} aria-hidden="true">🔍</span>
      )}
    </div>
  );
}

// ===== Lightbox Component =====
function Lightbox({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  const current = state.images[state.index];
  if (!current) return null;

  return (
    <div
      className={styles.lightbox}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className={styles.lightboxClose}
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close preview"
      >
        ×
      </button>
      {state.images.length > 1 && (
        <button
          className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}
      <div
        className={styles.lightboxContent}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.lightboxImageWrap}>
          <Image
            src={current.url}
            alt={current.label}
            fill
            sizes="100vw"
            className={styles.lightboxImg}
            priority
          />
        </div>
        <div className={styles.lightboxInfo}>
          <span className={styles.lightboxLabel}>{current.label}</span>
          {state.images.length > 1 && (
            <span className={styles.lightboxCounter}>
              {state.index + 1} / {state.images.length}
            </span>
          )}
        </div>
      </div>
      {state.images.length > 1 && (
        <button
          className={`${styles.lightboxNav} ${styles.lightboxNext}`}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
        >
          ›
        </button>
      )}
    </div>
  );
}

// ===== Build gallery images for a product =====
function buildGallery(product: AcousticWallProduct): GalleryImage[] {
  const images: GalleryImage[] = [
    { url: product.image, label: "Product View", type: "main" },
  ];
  return images;
}

// ===== Main Component =====
export default function AcousticWallClient() {
  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSeries, setFilterSeries] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [filterColor, setFilterColor] = useState("");

  // Drawer state
  const [selectedProduct, setSelectedProduct] = useState<AcousticWallProduct | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [activeImageTab, setActiveImageTab] = useState(0);

  // Lightbox state
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  // Quote list state
  const [quoteList, setQuoteList] = useState<QuoteItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Form state
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ===== Load quote list from localStorage =====
  useEffect(() => {
    try {
      const saved = localStorage.getItem("acoustic-wall-panel-quote-list");
      if (saved) {
        setQuoteList(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // ===== Save quote list to localStorage =====
  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem("acoustic-wall-panel-quote-list", JSON.stringify(quoteList));
      } catch {
        // ignore
      }
    }
  }, [quoteList, hydrated]);

  // ===== Unique filter values =====
  const uniqueSizes = useMemo(() => getUniqueSizes(), []);
  const uniqueColors = useMemo(() => getUniqueColors(), []);
  const uniqueSeries = useMemo(() => getUniqueSeries(), []);
  const uniqueCodes = useMemo(() => getUniqueCodes(), []);

  // ===== Filtered products =====
  const filteredProducts = useMemo(() => {
    return acousticWallProducts.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      if (q && !p.name.toLowerCase().includes(q) && !p.code.toLowerCase().includes(q) && !p.series.toLowerCase().includes(q)) {
        return false;
      }
      if (filterSeries && p.seriesSlug !== filterSeries) return false;
      if (filterSize && p.size !== filterSize) return false;
      if (filterColor && p.color !== filterColor) return false;
      return true;
    });
  }, [searchQuery, filterSeries, filterSize, filterColor]);

  const hasActiveFilters = searchQuery || filterSeries || filterSize || filterColor;

  const clearFilters = () => {
    setSearchQuery("");
    setFilterSeries("");
    setFilterSize("");
    setFilterColor("");
  };

  // ===== Quote list handlers =====
  const handleAddToQuote = useCallback((product: AcousticWallProduct, quantity = 1) => {
    setQuoteList((prev) => {
      const existing = prev.find((q) => q.product.code === product.code);
      if (existing) {
        return prev.map((q) =>
          q.product.code === product.code ? { ...q, quantity: q.quantity + quantity } : q,
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const handleUpdateQty = (code: string, quantity: number) => {
    if (quantity < 1) return;
    setQuoteList((prev) => prev.map((q) => (q.product.code === code ? { ...q, quantity } : q)));
  };

  const handleRemoveFromQuote = (code: string) => {
    setQuoteList((prev) => prev.filter((q) => q.product.code !== code));
  };

  const handleClearQuote = () => {
    setQuoteList([]);
  };

  const isInQuoteList = (code: string) => quoteList.some((q) => q.product.code === code);

  // ===== Detail drawer handlers =====
  const handleViewDetails = (product: AcousticWallProduct) => {
    setSelectedProduct(product);
    setActiveImageTab(0);
    setDetailOpen(true);
  };

  // ===== Lightbox handlers =====
  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => setLightbox(null);

  const lightboxPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
    });
  }, []);

  const lightboxNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      return { ...prev, index: (prev.index + 1) % prev.images.length };
    });
  }, []);

  // ===== Form handlers =====
  const handleOpenForm = (productCode = "") => {
    setFormState((prev) => ({ ...prev, productCode: productCode || prev.productCode }));
    setFormStatus("idle");
    setFormErrors({});
    setDetailOpen(false);
    setQuoteOpen(false);
    setTimeout(() => {
      document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleFormChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formState.fullName.trim()) errors.fullName = "Full name is required";
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formState.country.trim()) errors.country = "Destination country is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus("error");
      return;
    }
    setFormStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setFormStatus("success");
      setFormState(initialForm);
    } catch {
      setFormStatus("error");
    }
  };

  // ===== Download product info =====
  const handleDownloadInfo = (product: AcousticWallProduct) => {
    const info = `
Product Information
===================

Product Name: ${product.name}
Product Code: ${product.code}
Series: ${product.series}
Size: ${product.size}mm
Thickness: ${product.thickness}
Color: ${product.color}
MOQ: ${product.moq} ${product.unit}
Unit Price: ${product.unitPrice !== null ? `$${product.unitPrice.toFixed(2)} / ${product.unit}` : "Contact for quote"}
Incoterm: ${product.incoterm}
Packaging: ${product.packaging}
Pieces per Carton: ${product.pcsPerCarton}
Carton Size: ${product.cartonSize}
Weight per Piece: ${product.weightPerPiece}
Net Weight per Carton: ${product.netWeightPerCarton || "N/A"}
Lead Time: ${product.leadTime}
Remarks: ${product.remarks || "None"}

Contact:
OneStopBuildly
Email: ${ACOUSTIC_WALL_CONTACT.email}
WhatsApp: ${ACOUSTIC_WALL_CONTACT.whatsapp}

Please contact our sales team for pricing and confirmation.
`.trim();

    const blob = new Blob([info], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${product.code}-product-info.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ===== Related categories =====
  const relatedCategories = categories.filter((c) =>
    ["indoor-wpc-wall-panels", "3d-wall-panels", "pvc-ceiling-panels"].includes(c.slug),
  );

  // ===== Gallery for selected product =====
  const selectedGallery = selectedProduct ? buildGallery(selectedProduct) : [];

  // ===== Render =====
  return (
    <>
      {/* ===== Intro Section ===== */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <span className="eyebrow">Acoustic Wall Panels</span>
              <h1 className={styles.introTitle}>MDF Sound Absorbing Wall Panels for Modern Interior Design</h1>
              <p className={styles.introDesc}>
                Lightweight MDF acoustic wall panels with wood slat surface and recycled polyester felt backing. Sound insulation, eco-friendly, quick install for conference rooms, hotels, offices, and home decoration.
              </p>
              <div className={styles.introTags}>
                <span className={styles.tag}>MDF</span>
                <span className={styles.tag}>Sound Insulation</span>
                <span className={styles.tag}>Eco-Friendly</span>
                <span className={styles.tag}>Quick Install</span>
                <span className={styles.tag}>Modern Design</span>
              </div>
            </div>
            <div className={styles.introCollage}>
              <div className={styles.introCollageMain}>
                <Image
                  src="/images/products/acoustic-wall/AP-001.jpg"
                  alt="MDF wood slat acoustic wall panel with felt backing"
                  fill
                  sizes="(max-width: 960px) 100vw, 30vw"
                  priority
                  className={styles.collageImg}
                />
              </div>
              <div className={styles.introCollageSide}>
                <div className={styles.introCollageSmall}>
                  <Image
                    src="/images/products/acoustic-wall/AP-004.jpg"
                    alt="Acoustic wall panel with wood slat surface"
                    fill
                    sizes="(max-width: 960px) 100vw, 15vw"
                    className={styles.collageImg}
                  />
                </div>
                <div className={styles.introCollageSmall}>
                  <Image
                    src="/images/products/acoustic-wall/AP-005.jpg"
                    alt="Sound absorbing decorative wall panel"
                    fill
                    sizes="(max-width: 960px) 100vw, 15vw"
                    className={styles.collageImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Products Section ===== */}
      <section className={`container ${styles.productsSection}`}>
        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by name, code or series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search products"
          />
          <select
            className={styles.filterSelect}
            value={filterSeries}
            onChange={(e) => setFilterSeries(e.target.value)}
            aria-label="Filter by series"
          >
            <option value="">All Series</option>
            {acousticWallSeries.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          <select
            className={styles.filterSelect}
            value={filterSize}
            onChange={(e) => setFilterSize(e.target.value)}
            aria-label="Filter by size"
          >
            <option value="">All Sizes</option>
            {uniqueSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            className={styles.filterSelect}
            value={filterColor}
            onChange={(e) => setFilterColor(e.target.value)}
            aria-label="Filter by color"
          >
            <option value="">All Colors</option>
            {uniqueColors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className={styles.filterActions}>
            {hasActiveFilters && (
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear filters
              </button>
            )}
            <button className={styles.quoteListBtn} onClick={() => setQuoteOpen(true)}>
              Quote List
              <span className={styles.quoteCount}>{hydrated ? quoteList.length : 0}</span>
            </button>
          </div>
        </div>

        {/* Product Count */}
        <div className={styles.productsHead}>
          <h2>Products in this category</h2>
          <span className={styles.productCount}>{filteredProducts.length} products</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>
              No products match your filters. Try adjusting your search or clearing filters.
            </p>
            <button className={styles.clearBtn} onClick={clearFilters}>
              Clear all filters
            </button>
          </div>
        ) : (
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <article key={product.id} className={styles.card}>
                <div
                  className={styles.cardImage}
                  onClick={() => handleViewDetails(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") handleViewDetails(product); }}
                >
                  <SmartImage
                    src={product.image}
                    alt={`${product.name} (${product.code}) — ${product.series}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <span className={styles.cardMoq}>
                    MOQ {product.moq} {product.unit}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <span className={styles.cardCode}>Code: {product.code}</span>
                  <div className={styles.cardSpecs}>
                    <div className={styles.cardSpec}>
                      <span className={styles.cardSpecLabel}>Series</span>
                      <span>{product.series}</span>
                    </div>
                    <div className={styles.cardSpec}>
                      <span className={styles.cardSpecLabel}>Size</span>
                      <span>{product.size}</span>
                    </div>
                    <div className={styles.cardSpec}>
                      <span className={styles.cardSpecLabel}>Thick</span>
                      <span>{product.thickness}</span>
                    </div>
                    <div className={styles.cardSpec}>
                      <span className={styles.cardSpecLabel}>Color</span>
                      <span>{product.color}</span>
                    </div>
                  </div>
                  {product.unitPrice !== null ? (
                    <span className={styles.cardPrice}>
                      ${product.unitPrice.toFixed(2)} / {product.unit}
                    </span>
                  ) : (
                    <span className={`${styles.cardPrice} ${styles.cardPriceNa}`}>
                      Contact for quote
                    </span>
                  )}
                  <div className={styles.cardFooter}>
                    <button
                      className={styles.detailsBtn}
                      onClick={() => handleViewDetails(product)}
                    >
                      View Details
                    </button>
                    <button
                      className={`${styles.addToQuoteBtn} ${
                        isInQuoteList(product.code) ? styles.added : ""
                      }`}
                      onClick={() => handleAddToQuote(product)}
                    >
                      {isInQuoteList(product.code) ? "✓ Added" : "+ Quote"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ===== Detail Drawer ===== */}
      {detailOpen && selectedProduct && (
        <>
          <div className={styles.overlay} onClick={() => setDetailOpen(false)} />
          <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Product details">
            <div className={styles.drawerHeader}>
              <h2 className={styles.drawerTitle}>Product Details</h2>
              <button
                className={styles.closeBtn}
                onClick={() => setDetailOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className={styles.drawerBody}>
              {/* Image Gallery */}
              <div className={styles.gallerySection}>
                <div className={styles.galleryMain}>
                  <SmartImage
                    src={selectedGallery[activeImageTab]?.url || selectedProduct.image}
                    alt={`${selectedProduct.name} — ${selectedGallery[activeImageTab]?.label || "Product View"}`}
                    fill
                    sizes="640px"
                    onOpenPreview={() => openLightbox(selectedGallery, activeImageTab)}
                    showZoomHint
                  />
                </div>
                {/* Gallery Tabs */}
                {selectedGallery.length > 1 && (
                  <div className={styles.galleryTabs}>
                    {selectedGallery.map((img, idx) => (
                      <button
                        key={img.type}
                        className={`${styles.galleryTab} ${idx === activeImageTab ? styles.galleryTabActive : ""}`}
                        onClick={() => setActiveImageTab(idx)}
                      >
                        {img.label}
                      </button>
                    ))}
                  </div>
                )}
                {selectedGallery.length === 1 && (
                  <div className={styles.gallerySingleLabel}>Product View</div>
                )}
              </div>

              <h3 className={styles.detailName}>{selectedProduct.name}</h3>
              <p className={styles.detailCode}>
                Code: {selectedProduct.code} · {selectedProduct.series}
              </p>

              <div className={styles.detailSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Size</span>
                  <span className={styles.specValue}>{selectedProduct.size}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Thickness</span>
                  <span className={styles.specValue}>{selectedProduct.thickness}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Color</span>
                  <span className={styles.specValue}>{selectedProduct.color}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>MOQ</span>
                  <span className={styles.specValue}>
                    {selectedProduct.moq} {selectedProduct.unit}
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Unit Price</span>
                  <span className={styles.specValue}>
                    {selectedProduct.unitPrice !== null
                      ? `$${selectedProduct.unitPrice.toFixed(2)} / ${selectedProduct.unit}`
                      : "Contact for quote"}
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Incoterm</span>
                  <span className={styles.specValue}>{selectedProduct.incoterm}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Packaging</span>
                  <span className={styles.specValue}>{selectedProduct.packaging}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Carton Size</span>
                  <span className={styles.specValue}>{selectedProduct.cartonSize}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Weight / Piece</span>
                  <span className={styles.specValue}>{selectedProduct.weightPerPiece}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Net Wt / Carton</span>
                  <span className={styles.specValue}>
                    {selectedProduct.netWeightPerCarton || "—"}
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Lead Time</span>
                  <span className={styles.specValue}>{selectedProduct.leadTime}</span>
                </div>
                {selectedProduct.remarks && (
                  <div className={`${styles.specItem} ${styles.specFull}`}>
                    <span className={styles.specLabel}>Remarks</span>
                    <span className={styles.specValue}>{selectedProduct.remarks}</span>
                  </div>
                )}
              </div>

              <div className={styles.detailActions}>
                <button
                  className={`${styles.actionBtn} ${styles.actionPrimary}`}
                  onClick={() => handleAddToQuote(selectedProduct)}
                >
                  {isInQuoteList(selectedProduct.code) ? "✓ In Quote List — Add More" : "Add to Quote List"}
                </button>
                <button
                  className={`${styles.actionBtn} ${styles.actionSecondary}`}
                  onClick={() => handleOpenForm(selectedProduct.code)}
                >
                  Ask About This Product
                </button>
                <button
                  className={`${styles.actionBtn} ${styles.actionTertiary}`}
                  onClick={() => handleDownloadInfo(selectedProduct)}
                >
                  Download Product Information
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== Lightbox ===== */}
      {lightbox && (
        <Lightbox
          state={lightbox}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}

      {/* ===== Quote List Drawer ===== */}
      {quoteOpen && (
        <>
          <div className={styles.overlay} onClick={() => setQuoteOpen(false)} />
          <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Quote list">
            <div className={styles.drawerHeader}>
              <h2 className={styles.drawerTitle}>
                Quote List ({hydrated ? quoteList.length : 0})
              </h2>
              <button
                className={styles.closeBtn}
                onClick={() => setQuoteOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className={styles.drawerBody}>
              {quoteList.length === 0 ? (
                <div className={styles.emptyState}>
                  <p className={styles.emptyText}>
                    Your quote list is empty. Add products to request a quotation.
                  </p>
                </div>
              ) : (
                <>
                  {quoteList.map((item) => (
                    <div key={item.product.code} className={styles.quoteItem}>
                      <div className={styles.quoteItemImage}>
                        <SmartImage
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                        />
                      </div>
                      <div className={styles.quoteItemInfo}>
                        <span className={styles.quoteItemName}>{item.product.name}</span>
                        <span className={styles.quoteItemCode}>
                          Code: {item.product.code} · {item.product.size} · {item.product.color}
                        </span>
                        <div className={styles.qtyControl}>
                          <button
                            className={styles.qtyBtn}
                            onClick={() => handleUpdateQty(item.product.code, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <input
                            className={styles.qtyInput}
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                              handleUpdateQty(
                                item.product.code,
                                parseInt(e.target.value) || 1,
                              )
                            }
                            aria-label="Quantity"
                          />
                          <button
                            className={styles.qtyBtn}
                            onClick={() => handleUpdateQty(item.product.code, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className={styles.removeItem}
                        onClick={() => handleRemoveFromQuote(item.product.code)}
                        aria-label="Remove from quote list"
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  <div className={styles.quoteSummary}>
                    <p className={styles.subtotalNote}>
                      Final pricing, shipping, taxes and duties are not included. Please
                      contact our sales team for a confirmed quotation.
                    </p>
                    <div className={styles.quoteActions}>
                      <button className={styles.clearQuoteBtn} onClick={handleClearQuote}>
                        Clear all
                      </button>
                      <button
                        className={`${styles.actionBtn} ${styles.actionPrimary}`}
                        onClick={() => handleOpenForm(quoteList.map((q) => q.product.code).join(", "))}
                      >
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* ===== FAQ Section ===== */}
      <section className={`container ${styles.faq}`}>
        <div className={styles.faqHead}>
          <h2>Frequently asked questions</h2>
        </div>
        <div className={styles.faqList}>
          {acousticWallFAQs.map((faq) => (
            <div key={faq.question} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Related Categories ===== */}
      <section className={`container ${styles.related}`}>
        <div className={styles.productsHead}>
          <h2>Related categories</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedCategories.map((r) => (
            <Link key={r.slug} href={`/products/${r.slug}`} className={styles.relatedCard}>
              <SmartImage src={r.image} alt={r.name} fill sizes="(max-width: 960px) 100vw, 33vw" />
              <div className={styles.relatedOverlay} />
              <span className={styles.relatedName}>{r.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== CTA + Inquiry Form ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <span className={styles.ctaEyebrow}>Start an inquiry</span>
              <h2 className={styles.ctaTitle}>Get a Quote for Your Project</h2>
              <p className={styles.ctaDesc}>
                Tell us about your product requirements, quantity and destination. Our
                team will confirm pricing, MOQ, lead time and shipping details.
              </p>
              <p className={styles.ctaContact}>
                Email: <a href={`mailto:${ACOUSTIC_WALL_CONTACT.email}`}>{ACOUSTIC_WALL_CONTACT.email}</a>
                <br />
                WhatsApp: {ACOUSTIC_WALL_CONTACT.whatsapp}
              </p>
            </div>

            {/* Inquiry Form */}
            <form
              id="inquiry-form"
              className={styles.inquiryForm}
              onSubmit={handleFormSubmit}
              noValidate
            >
              {formStatus === "success" ? (
                <div className={`${styles.formStatus} ${styles.formSuccess}`}>
                  Thank you. Your inquiry has been received. Our sales team will review your
                  requirements and contact you with the confirmed quotation.
                </div>
              ) : (
                <>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className={styles.formInput}
                        value={formState.fullName}
                        onChange={(e) => handleFormChange("fullName", e.target.value)}
                        required
                      />
                      {formErrors.fullName && (
                        <span className={styles.formError}>{formErrors.fullName}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="company">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        className={styles.formInput}
                        value={formState.company}
                        onChange={(e) => handleFormChange("company", e.target.value)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={styles.formInput}
                        value={formState.email}
                        onChange={(e) => handleFormChange("email", e.target.value)}
                        required
                      />
                      {formErrors.email && (
                        <span className={styles.formError}>{formErrors.email}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="phone">
                        WhatsApp / Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={styles.formInput}
                        value={formState.phone}
                        onChange={(e) => handleFormChange("phone", e.target.value)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="country">
                        Destination Country *
                      </label>
                      <input
                        id="country"
                        type="text"
                        className={styles.formInput}
                        value={formState.country}
                        onChange={(e) => handleFormChange("country", e.target.value)}
                        required
                      />
                      {formErrors.country && (
                        <span className={styles.formError}>{formErrors.country}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="productCode">
                        Product or Product Code
                      </label>
                      <input
                        id="productCode"
                        type="text"
                        className={styles.formInput}
                        value={formState.productCode}
                        onChange={(e) => handleFormChange("productCode", e.target.value)}
                        placeholder="e.g. AP-001, Acoustic Wall Panel"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="quantity">
                        Required Quantity
                      </label>
                      <input
                        id="quantity"
                        type="text"
                        className={styles.formInput}
                        value={formState.quantity}
                        onChange={(e) => handleFormChange("quantity", e.target.value)}
                        placeholder="e.g. 500 sqm"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="color">
                        Preferred Color
                      </label>
                      <input
                        id="color"
                        type="text"
                        className={styles.formInput}
                        value={formState.color}
                        onChange={(e) => handleFormChange("color", e.target.value)}
                        placeholder="e.g. Wood Oak, Walnut, Black"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="deliveryDate">
                        Target Delivery Date
                      </label>
                      <input
                        id="deliveryDate"
                        type="date"
                        className={styles.formInput}
                        value={formState.deliveryDate}
                        onChange={(e) => handleFormChange("deliveryDate", e.target.value)}
                      />
                    </div>

                    <div className={`${styles.formGroup} ${styles.formFull}`}>
                      <label className={styles.formLabel} htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className={styles.formTextarea}
                        value={formState.message}
                        onChange={(e) => handleFormChange("message", e.target.value)}
                        rows={4}
                        placeholder="Tell us about your project, application or any special requirements..."
                      />
                    </div>

                    <div className={`${styles.formGroup} ${styles.formFull}`}>
                      <label className={styles.formLabel} htmlFor="file">
                        Upload Reference File
                      </label>
                      <input
                        id="file"
                        type="file"
                        className={styles.fileUpload}
                        accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.zip"
                      />
                    </div>

                    <div className={styles.formActions}>
                      {formStatus === "error" && Object.keys(formErrors).length > 0 && (
                        <div className={`${styles.formStatus} ${styles.formError}`}>
                          Please fill in all required fields correctly.
                        </div>
                      )}
                      {formStatus === "loading" && (
                        <div className={`${styles.formStatus} ${styles.formLoading}`}>
                          <span className={styles.spinner} /> Submitting your inquiry...
                        </div>
                      )}
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={formStatus === "loading"}
                      >
                        {formStatus === "loading" ? "Submitting..." : "Request a Quote"}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
