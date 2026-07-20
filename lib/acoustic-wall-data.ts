// Acoustic Wall Panels — 产品数据集中管理
// 数据来源：Alibaba Acoustic Wall Panels (MDF) 产品抓取数据（2026-07更新）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 按用户要求，不展示价格（unitPrice: null）
// 15 个产品分为 3 个系列：E-commerce Ready / Quick Install / Home Decor

export interface AcousticWallProduct {
  id: string;
  code: string;
  name: string;
  series: string;
  seriesSlug: string;
  size: string;
  thickness: string;
  color: string;
  moq: number;
  unit: string;
  unitPrice: number | null;
  currency: string;
  incoterm: string;
  packaging: string;
  pcsPerCarton: number;
  cartonSize: string;
  netWeightPerCarton: string;
  weightPerPiece: string;
  leadTime: string;
  remarks: string;
  image: string;
  textureImage?: string;
  applicationImage?: string;
}

export interface AcousticWallSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const acousticWallSeries: AcousticWallSeries[] = [
  {
    slug: "ecommerce-ready",
    name: "E-commerce Ready Series",
    nameZh: "电商系列",
    description:
      "Lightweight MDF acoustic wall panels engineered for e-commerce logistics. 15mm thickness, 600x600 / 1200x600 / 2400x600mm sizes. Sound Insulation, Eco-Friendly. Light Natural Oak, Natural Oak and Warm Natural Oak finishes for interior decoration, online retail and wholesale.",
  },
  {
    slug: "quick-install",
    name: "Quick Install Series",
    nameZh: "快装系列",
    description:
      "Quick and easy installation MDF acoustic wall panels with 11mm thickness. 300x600 and 600x600mm sizes. Sound Insulation, Eco-Friendly. Warm Medium Oak, Natural Walnut and Charcoal Oak finishes for modern interior wall design.",
  },
  {
    slug: "home-decor",
    name: "Home Decor Series",
    nameZh: "家居装饰系列",
    description:
      "Decorative MDF acoustic wall panels for home, office and hotel projects. 21mm thickness, 1200x600 and 2400x600mm sizes. Sound Insulation, Eco-Friendly. Light Natural Oak, Natural Oak, Dual Tone Dark & Light and Warm Natural Oak finishes for interior wall projects.",
  },
];

const IMG_BASE = "/images/products/acoustic-wall";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";
const REMARKS =
  "Material: MDF. Feature: Sound Insulation, Eco-Friendly. Application: Conference Room, Hotel, Villa, Apartment, Office Building, Hospital, School, Mall, Sports Venues, Leisure Facilities. Design Style: Modern. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.";

export const acousticWallProducts: AcousticWallProduct[] = [
  // ===== E-commerce Ready Series =====
  {
    id: "aw-ec-001",
    code: "AP-001",
    name: "E-commerce Ready Acoustic Wall Panel Lightweight Quick Install Sound Absorbing Panel For Interior Decoration",
    series: "E-commerce Ready Series",
    seriesSlug: "ecommerce-ready",
    size: "600x600x15mm",
    thickness: "15mm",
    color: "Light Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "69X37X64cm",
    netWeightPerCarton: "18.0kg",
    weightPerPiece: "4.5kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-001.jpg`,
  },
  {
    id: "aw-ec-002",
    code: "AP-002",
    name: "Lightweight Acoustic Panel For E-commerce Easy Transport Decorative Sound Absorbing Wall Panel",
    series: "E-commerce Ready Series",
    seriesSlug: "ecommerce-ready",
    size: "1200x600x15mm",
    thickness: "15mm",
    color: "Light Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "129X37X64cm",
    netWeightPerCarton: "32.0kg",
    weightPerPiece: "8.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-002.jpg`,
  },
  {
    id: "aw-ec-003",
    code: "AP-003",
    name: "E-commerce Acoustic Panel Lightweight Decorative Sound Absorbing Wall Panel For Online Retail And Wholesale",
    series: "E-commerce Ready Series",
    seriesSlug: "ecommerce-ready",
    size: "2400x600x15mm",
    thickness: "15mm",
    color: "Light Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "129X67X64cm",
    netWeightPerCarton: "56.0kg",
    weightPerPiece: "14.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-003.jpg`,
  },
  {
    id: "aw-ec-006",
    code: "AP-006",
    name: "E-commerce Ready Acoustic Wall Panel Lightweight Quick Install Sound Absorbing Panel For Interior Decoration",
    series: "E-commerce Ready Series",
    seriesSlug: "ecommerce-ready",
    size: "600x600x15mm",
    thickness: "15mm",
    color: "Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "69X37X64cm",
    netWeightPerCarton: "18.0kg",
    weightPerPiece: "4.5kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-006.jpg`,
  },
  {
    id: "aw-ec-009",
    code: "AP-009",
    name: "E-commerce Acoustic Panel Lightweight Decorative Sound Absorbing Wall Panel For Online Retail And Wholesale",
    series: "E-commerce Ready Series",
    seriesSlug: "ecommerce-ready",
    size: "2400x600x15mm",
    thickness: "15mm",
    color: "Warm Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "129X67X64cm",
    netWeightPerCarton: "56.0kg",
    weightPerPiece: "14.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-009.jpg`,
  },
  {
    id: "aw-ec-015",
    code: "AP-015",
    name: "E-commerce Acoustic Panel Lightweight Decorative Sound Absorbing Wall Panel For Online Retail And Wholesale",
    series: "E-commerce Ready Series",
    seriesSlug: "ecommerce-ready",
    size: "2400x600x15mm",
    thickness: "15mm",
    color: "Warm Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "129X67X64cm",
    netWeightPerCarton: "56.0kg",
    weightPerPiece: "14.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-015.jpg`,
  },

  // ===== Quick Install Series =====
  {
    id: "aw-qi-004",
    code: "AP-004",
    name: "Quick Installation Acoustic Wall Panel Lightweight Decorative Sound Absorbing Panel For Modern Interior Wall Design",
    series: "Quick Install Series",
    seriesSlug: "quick-install",
    size: "300x600x11mm",
    thickness: "11mm",
    color: "Warm Medium Oak",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "65X35X12cm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "3.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-004.jpg`,
  },
  {
    id: "aw-qi-008",
    code: "AP-008",
    name: "Easy Installation Acoustic Wall Panel Lightweight Decorative Sound Absorbing Panel For Modern Interior Wall Design",
    series: "Quick Install Series",
    seriesSlug: "quick-install",
    size: "600x600x11mm",
    thickness: "11mm",
    color: "Warm Medium Oak",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "65X65X12cm",
    netWeightPerCarton: "20.0kg",
    weightPerPiece: "5.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-008.jpg`,
  },
  {
    id: "aw-qi-011",
    code: "AP-011",
    name: "Quick Installation Acoustic Wall Panel Lightweight Decorative Sound Absorbing Panel For Modern Interior Wall Design",
    series: "Quick Install Series",
    seriesSlug: "quick-install",
    size: "300x600x11mm",
    thickness: "11mm",
    color: "Natural Walnut",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "65X35X12cm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "3.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-011.jpg`,
  },
  {
    id: "aw-qi-014",
    code: "AP-014",
    name: "Quick Installation Acoustic Wall Panel Lightweight Decorative Sound Absorbing Panel For Modern Interior Wall Design",
    series: "Quick Install Series",
    seriesSlug: "quick-install",
    size: "300x600x11mm",
    thickness: "11mm",
    color: "Charcoal Oak",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "65X35X12cm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "3.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-014.jpg`,
  },

  // ===== Home Decor Series =====
  {
    id: "aw-hd-005",
    code: "AP-005",
    name: "Decorative Acoustic Wall Panel For Home Office Hotel Lightweight Quick Install Sound Absorbing Panel",
    series: "Home Decor Series",
    seriesSlug: "home-decor",
    size: "1200x600x21mm",
    thickness: "21mm",
    color: "Light Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "125X65X23cm",
    netWeightPerCarton: "36.0kg",
    weightPerPiece: "9.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-005.jpg`,
  },
  {
    id: "aw-hd-007",
    code: "AP-007",
    name: "Custom E-commerce Acoustic Panel Decorative Sound Absorbing Wall Panel For Interior Wall Projects",
    series: "Home Decor Series",
    seriesSlug: "home-decor",
    size: "2400x600x21mm",
    thickness: "21mm",
    color: "Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "245X65X23cm",
    netWeightPerCarton: "64.0kg",
    weightPerPiece: "16.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-007.jpg`,
  },
  {
    id: "aw-hd-010",
    code: "AP-010",
    name: "Decorative Acoustic Wall Panel For Home Office Hotel Lightweight Quick Install Sound Absorbing Panel",
    series: "Home Decor Series",
    seriesSlug: "home-decor",
    size: "1200x600x21mm",
    thickness: "21mm",
    color: "Dual Tone - Dark & Light",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "125X65X23cm",
    netWeightPerCarton: "36.0kg",
    weightPerPiece: "9.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-010.jpg`,
  },
  {
    id: "aw-hd-012",
    code: "AP-012",
    name: "Custom E-commerce Acoustic Panel Decorative Sound Absorbing Wall Panel For Interior Wall Projects",
    series: "Home Decor Series",
    seriesSlug: "home-decor",
    size: "2400x600x21mm",
    thickness: "21mm",
    color: "Warm Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "245X65X23cm",
    netWeightPerCarton: "64.0kg",
    weightPerPiece: "16.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-012.jpg`,
  },
  {
    id: "aw-hd-013",
    code: "AP-013",
    name: "E-commerce Customized Packaging Acoustic Panel Decorative Sound Absorbing Wall Panel For Interior Wall Projects",
    series: "Home Decor Series",
    seriesSlug: "home-decor",
    size: "2400x600x21mm",
    thickness: "21mm",
    color: "Warm Natural Oak",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 4,
    cartonSize: "245X65X23cm",
    netWeightPerCarton: "64.0kg",
    weightPerPiece: "16.0kg",
    leadTime: LEAD_TIME,
    remarks: REMARKS,
    image: `${IMG_BASE}/AP-013.jpg`,
  },
];

// ===== SEO / FAQ =====
export const acousticWallFAQs = [
  {
    question: "How effective are these MDF acoustic wall panels at sound absorption?",
    answer:
      "Our MDF acoustic wall panels are engineered for Sound Insulation, reducing echo and reverberation in interior spaces. The slatted MDF construction with felt-backed surface absorbs mid-to-high frequency sound waves, making them ideal for conference rooms, offices, hotels, home theaters, schools and sports venues. For project-specific NRC (Noise Reduction Coefficient) values, please contact our sales team with your acoustic performance requirements.",
  },
  {
    question: "What is the MDF material used in these acoustic wall panels?",
    answer:
      "All panels in the E-commerce Ready, Quick Install and Home Decor Series are manufactured from MDF (Medium Density Fiberboard). MDF provides a stable, dense core that supports the acoustic felt surface while remaining lightweight and Eco-Friendly. Available thicknesses are 11mm (Quick Install Series), 15mm (E-commerce Ready Series) and 21mm (Home Decor Series).",
  },
  {
    question: "How are the acoustic wall panels installed?",
    answer:
      "Installation is quick and easy. The Quick Install and E-commerce Ready Series are designed for fast mounting on interior walls using adhesive or mechanical fasteners. The 300x600mm and 600x600mm sizes are lightweight enough for a single installer, while the 1200x600mm and 2400x600mm panels may require two people. Panels tongue-and-groove or butt-join edge to edge for a seamless decorative finish. Detailed installation guidance is available on request.",
  },
  {
    question: "Are these acoustic wall panels fire-rated for commercial projects?",
    answer:
      "The MDF acoustic wall panels are suitable for a wide range of commercial and residential applications including Office Buildings, Hotels, Hospitals, Schools, Malls and Sports Venues. For project-specific fire rating certifications and compliance documentation, please contact our sales team. We provide total solution for projects including specification support and After-sale Online Technical Support.",
  },
  {
    question: "What applications are the acoustic wall panels suitable for?",
    answer:
      "Our acoustic wall panels are designed for diverse interior applications including Conference Rooms, Hotels, Villas, Apartments, Office Buildings, Hospitals, Schools, Malls, Sports Venues and Leisure Facilities. They are equally suited to residential spaces such as Home Offices, Living Rooms, Bedrooms, Dining areas, Home Bars, Wine Cellars, Staircases and Basements. Design Style: Modern, matching contemporary interior decoration.",
  },
  {
    question: "Can I customize the acoustic wall panels for my project?",
    answer:
      "Yes. Customization is supported with a total solution for projects capability. Available options include panel size (300x600, 600x600, 1200x600, 2400x600mm), thickness (11mm / 15mm / 21mm), wood veneer color (Light Natural Oak, Natural Oak, Warm Natural Oak, Warm Medium Oak, Natural Walnut, Charcoal Oak, Dual Tone) and customized e-commerce packaging. MOQ starts at 50 pcs for the E-commerce Ready and Home Decor Series and 100 pcs for the Quick Install Series. Please contact our sales team for a project quotation.",
  },
];

// ===== Helper Functions =====
export function formatPrice(product: AcousticWallProduct): string {
  if (product.unitPrice === null) return "Contact for Quote";
  return `$${product.unitPrice.toFixed(2)} / ${product.unit}`;
}

export function formatPriceShort(product: AcousticWallProduct): string {
  if (product.unitPrice === null) return "Quote";
  return `$${product.unitPrice.toFixed(2)}`;
}

export function getProductsBySeries(seriesSlug: string): AcousticWallProduct[] {
  return acousticWallProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(acousticWallProducts.map((p) => p.size))];
}

export function getUniqueSeries(): AcousticWallSeries[] {
  return acousticWallSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(acousticWallProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(acousticWallProducts.map((p) => p.code))];
}

// ===== Contact Info =====
export const ACOUSTIC_WALL_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};
