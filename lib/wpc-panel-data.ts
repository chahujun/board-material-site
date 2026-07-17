// WPC Wall Panels — 产品数据集中管理
// 数据来源：Alibaba WPC墙板产品抓取数据（2024）
// 所有价格、型号、尺寸、MOQ均来自真实外贸报价，禁止虚构

export interface WPCPanelProduct {
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
  // 多图类型支持 — 按产品型号绑定，找不到时前端显示占位
  textureImage?: string;
  applicationImage?: string;
}

export interface WPCPanelSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const wpcPanelSeries: WPCPanelSeries[] = [
  {
    slug: "premium-fluted",
    name: "Premium Fluted Series",
    nameZh: "高端凹槽系列",
    description:
      "Premium fluted WPC wall panels with special shapes, 3D textures and wood grain finishes for high-end interior decoration.",
  },
  {
    slug: "fluted-decor",
    name: "Fluted Decor Series",
    nameZh: "凹槽装饰系列",
    description:
      "Modern fluted WPC wall panels with waterproof and eco-friendly design for residential and commercial interior cladding.",
  },
  {
    slug: "classic-indoor",
    name: "Classic Indoor Series",
    nameZh: "经典室内系列",
    description:
      "Classic indoor WPC wall panels with wood grain lamination and decorative finishes for versatile interior wall cladding.",
  },
];

const IMG_BASE = "/images/products/wpc-panel";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const wpcPanelProducts: WPCPanelProduct[] = [
  // ===== Premium Fluted Series =====
  {
    id: "wpc-pf-001",
    code: "WP-001",
    name: "Special Shaped Novel Design WPC Wall Panel Irregular Shape Decorative Wall Cladding Board",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Multi-Color Wood Grain",
    moq: 50,
    unit: "meters",
    unitPrice: 1.18,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "120kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Irregular shape special design. Multi-color wood grain fan display for interior wall cladding.",
    image: `${IMG_BASE}/WP-001.jpg`,
    textureImage: `${IMG_BASE}/WP-001-A.jpg`,
    applicationImage: `${IMG_BASE}/WP-001-B.jpg`,
  },
  {
    id: "wpc-pf-002",
    code: "WP-002",
    name: "Hot Sale New Arrival WPC Wall Panel Moisture Resistant Easy Install Wall Cladding Panel",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Multi-Color Wood Display",
    moq: 50,
    unit: "meters",
    unitPrice: 1.18,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "120kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Moisture resistant WPC wall panel. Easy install tongue and groove system for interior cladding.",
    image: `${IMG_BASE}/WP-002.jpg`,
  },
  {
    id: "wpc-pf-003",
    code: "WP-003",
    name: "Modern Design Eco Friendly WPC Wall Panel Fluted Slat Decorative Wall Board",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Warm Medium Brown",
    moq: 50,
    unit: "meters",
    unitPrice: 1.18,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "120kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Smooth grooved wood grain surface for modern interior decoration. Eco-friendly wood plastic composite material.",
    image: `${IMG_BASE}/WP-003.jpg`,
  },
  {
    id: "wpc-pf-004",
    code: "WP-004",
    name: "New Type 3D Texture WPC Wall Panel Interior TV Background Wall Decor Wood Grain WPC Board",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Light Oak 3D",
    moq: 50,
    unit: "meters",
    unitPrice: 1.18,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "120kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "3D texture surface with wood grain finish. Ideal for TV background wall decoration.",
    image: `${IMG_BASE}/WP-004.jpg`,
  },
  {
    id: "wpc-pf-005",
    code: "WP-005",
    name: "Modern Wood Grain WPC Wall Panel 200mm Wide 2900mm Long Waterproof Interior Wall Cladding",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Multi-Tone Wood Grain",
    moq: 50,
    unit: "meters",
    unitPrice: 1.18,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "120kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "200mm wide 2900mm long panel. Waterproof wood grain finish for interior wall cladding.",
    image: `${IMG_BASE}/WP-005.jpg`,
  },

  // ===== Fluted Decor Series =====
  {
    id: "wpc-fd-012",
    code: "WP-012",
    name: "High Quality WPC Fluted Wall Panel for Luxury House Decoration Easy Install Interior Wall Cladding Modern Waterproof",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*12mm",
    thickness: "12mm",
    color: "Multi-Color Wood Grain Fan",
    moq: 300,
    unit: "meters",
    unitPrice: 0.75,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "40 pcs/pallet",
    pcsPerCarton: 40,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "100kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "High quality fluted panel for luxury house decoration. Modern waterproof design.",
    image: `${IMG_BASE}/WP-012.jpg`,
    textureImage: `${IMG_BASE}/WP-012-A.jpg`,
    applicationImage: `${IMG_BASE}/WP-012-B.jpg`,
  },
  {
    id: "wpc-fd-013",
    code: "WP-013",
    name: "3D Wall Panel Interior Wall Decorations for Home Luxury WPC Fluted Decor Panel",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*12mm",
    thickness: "12mm",
    color: "Marble Effect & Taupe",
    moq: 300,
    unit: "meters",
    unitPrice: 0.75,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "40 pcs/pallet",
    pcsPerCarton: 40,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "100kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "3D fluted decor panel for luxury home interior wall decoration.",
    image: `${IMG_BASE}/WP-013.jpg`,
  },
  {
    id: "wpc-fd-014",
    code: "WP-014",
    name: "Modern WPC Fluted Wall Panel High Quality Indoor Waterproof WPC Board",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*12mm",
    thickness: "12mm",
    color: "Natural Wood Tones",
    moq: 300,
    unit: "meters",
    unitPrice: 0.75,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "40 pcs/pallet",
    pcsPerCarton: 40,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "100kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Modern fluted WPC board. High quality indoor waterproof panel for wall cladding.",
    image: `${IMG_BASE}/WP-014.jpg`,
  },
  {
    id: "wpc-fd-015",
    code: "WP-015",
    name: "New Style WPC Waterproof Modern Indoor Decorative Wall Cladding Panels",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*12mm",
    thickness: "12mm",
    color: "Multi-Color Display",
    moq: 300,
    unit: "meters",
    unitPrice: 0.75,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "40 pcs/pallet",
    pcsPerCarton: 40,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "100kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "New style modern decorative WPC wall cladding. Waterproof for indoor application.",
    image: `${IMG_BASE}/WP-015.jpg`,
  },

  // ===== Classic Indoor Series =====
  {
    id: "wpc-ci-016",
    code: "WP-016",
    name: "High Quality Indoor Wall Panel Waterproof Wpc Wall Cladding for Interior Wall Decoration",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "2900*160*10mm",
    thickness: "10mm",
    color: "Dark Charcoal Wood",
    moq: 2000,
    unit: "meters",
    unitPrice: 0.82,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*170*150mm",
    netWeightPerCarton: "125kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "160mm wide indoor WPC wall panel. Dark charcoal wood tone for interior wall decoration.",
    image: `${IMG_BASE}/WP-016.jpg`,
    textureImage: `${IMG_BASE}/WP-016-A.jpg`,
    applicationImage: `${IMG_BASE}/WP-016-B.jpg`,
  },
  {
    id: "wpc-ci-017",
    code: "WP-017",
    name: "Waterproof Indoor Decoration WPC Cladding Wall Panel Boards",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "2900*160*10mm",
    thickness: "10mm",
    color: "Dark Charcoal Wood",
    moq: 2000,
    unit: "meters",
    unitPrice: 0.98,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*170*150mm",
    netWeightPerCarton: "125kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Dark charcoal wood grain WPC cladding. Waterproof for indoor decoration.",
    image: `${IMG_BASE}/WP-017.jpg`,
  },
  {
    id: "wpc-ci-018",
    code: "WP-018",
    name: "Factory Price Decorative Wood Paneling for Interior Fluted PVC Grooved Wood Indoor WPC Wall Panels Wall Cladding",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "2900*160*10mm",
    thickness: "10mm",
    color: "Off-White Cream",
    moq: 2000,
    unit: "meters",
    unitPrice: 0.98,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "50 pcs/pallet",
    pcsPerCarton: 50,
    cartonSize: "2920*170*150mm",
    netWeightPerCarton: "125kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Fluted grooved off-white cream WPC panels. Factory price for interior wall cladding.",
    image: `${IMG_BASE}/WP-018.jpg`,
  },
  {
    id: "wpc-ci-019",
    code: "WP-019",
    name: "Factory Direct Sale Natural Antisepsis 3D WPC Wall Boards Wood Wall Panels Grating Ceiling Board for Indoor Decoration",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "2900*200*12mm",
    thickness: "12mm",
    color: "Dual-Tone Facade (Charcoal & Beige)",
    moq: 1500,
    unit: "meters",
    unitPrice: 0.89,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "40 pcs/pallet",
    pcsPerCarton: 40,
    cartonSize: "2920*210*150mm",
    netWeightPerCarton: "100kg",
    weightPerPiece: "2.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Natural antisepsis 3D WPC wall board. Dual-tone facade design with dark charcoal and light beige slats for indoor decoration.",
    image: `${IMG_BASE}/WP-019.jpg`,
  },
];

// FAQ 数据 — WPC墙板常见问题
export const wpcPanelFAQs = [
  {
    question: "What materials are indoor WPC wall panels made of?",
    answer:
      "Our WPC panels are a blend of PVC resin and wood fiber (typically 30-40% wood content), extruded into fluted or slatted profiles. The composite is 100% waterproof, fire-retardant, and free of formaldehyde.",
  },
  {
    question: "What is the standard panel size and how is it priced?",
    answer:
      "Standard panels are 200mm or 160mm wide and 2.9m long, priced per linear meter. Typical MOQ is 50 to 2000 meters depending on the profile. Custom widths and lengths up to 3.0m are available on request.",
  },
  {
    question: "Are WPC wall panels fire-rated for commercial projects?",
    answer:
      "Yes. Our WPC panels meet EN 13501-1 Class B fire rating and can be supplied with SGS or CE fire-test reports. Request the report with your order for code-compliant projects.",
  },
  {
    question: "How are WPC wall panels installed?",
    answer:
      "Panels install with a tongue-and-groove system over a timber or metal batten framework. No special tools required — standard woodworking saws and adhesive are sufficient for a clean install.",
  },
];

// 联系信息配置变量
export const WPC_PANEL_CONTACT = {
  email: "cindy@onestopbuildly.com",
  phone: "+86-13511316133",
  whatsapp: "+86-13511316133",
  company: "Haining Onestopbuildly Building Materials Co., Ltd.",
  address: "Room 108, Building 2, Fenghuang Commercial Building, Dingqiao Town, Haining, Zhejiang, China",
  factoryAddress: "No. 1, Shiquan Industrial Park, Tongyuan Town, Haiyan County, Jiaxing, Zhejiang",
};

// 工具函数
export function formatPrice(product: WPCPanelProduct): string {
  if (product.unitPrice === null || product.unitPrice === undefined) {
    return "Price available on request";
  }
  return `${product.currency} ${product.unitPrice} / ${product.unit}`;
}

export function formatPriceShort(product: WPCPanelProduct): string {
  if (product.unitPrice === null || product.unitPrice === undefined) {
    return "Request a Quote";
  }
  return `${product.currency} ${product.unitPrice}/${product.unit}`;
}

export function getProductsBySeries(seriesSlug: string): WPCPanelProduct[] {
  return wpcPanelProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(wpcPanelProducts.map((p) => p.size))].sort();
}

export function getUniqueSeries(): WPCPanelSeries[] {
  return wpcPanelSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(wpcPanelProducts.map((p) => p.color))].sort();
}

export function getUniqueCodes(): string[] {
  return [...new Set(wpcPanelProducts.map((p) => p.code))].sort();
}
