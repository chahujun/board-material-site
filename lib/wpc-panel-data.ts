// WPC Wall Panels — 产品数据集中管理
// 数据来源：Alibaba WPC墙板产品抓取数据（2026-07更新）
// 所有价格、型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-20: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   新增7个产品(WP-020~WP-026)，总计20个产品

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
      "Premium WPC wall panels with special shapes, 3D textures and wood grain finishes. Material: wood-plastic composite environmental material with moisture-proof, anti-static, sound-absorbing and waterproof properties.",
  },
  {
    slug: "fluted-decor",
    name: "Fluted Decor Series",
    nameZh: "凹槽装饰系列",
    description:
      "Modern fluted WPC wall panels with 3-ridge fluted surface profile. Material: Plastic composite, 9mm thickness, waterproof for interior wall cladding applications.",
  },
  {
    slug: "classic-indoor",
    name: "Classic Indoor Series",
    nameZh: "经典室内系列",
    description:
      "Classic indoor WPC wall panels for hotel, meeting room and architectural decoration. Model: wpc001. Available in customized sizes and colors with 24mm thickness.",
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
    color: "Six-Color Wood Grain Fan Display",
    moq: 200,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: wood-plastic composite environmental material. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof. Application: indoor wall panel decoration. Warranty: 5 year. Project Solution Capability: total solution for projects. Design Style: Modern.",
    image: `${IMG_BASE}/WP-001.jpg`,
  },
  {
    id: "wpc-pf-002",
    code: "WP-002",
    name: "Hot Sale New Arrival WPC Wall Panel Moisture Resistant Easy Install Wall Cladding Panel",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Customizable (Supplier's Customization)",
    moq: 200,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: wood-plastic composite environmental material. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof, Soundproof, Smoke-Proof, Heat Insulation. Application: indoor wall panel decoration. Warranty: 5 year. Project Solution Capability: total solution for projects. Design Style: Modern.",
    image: `${IMG_BASE}/WP-002.jpg`,
  },
  {
    id: "wpc-pf-003",
    code: "WP-003",
    name: "Modern Design Eco Friendly WPC Wall Panel Fluted Slat Decorative Wall Board For Home Building Decoration",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*10mm",
    thickness: "10mm",
    color: "Customizable (Supplier's Customization)",
    moq: 200,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: wood-plastic composite environmental material. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof. Application: indoor wall panel decoration. Warranty: 5 year. Project Solution Capability: total solution for projects. Design Style: Modern.",
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
    color: "Customizable (Supplier's Customization)",
    moq: 200,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: wood-plastic composite environmental material. Function: Sound-Absorbing, Mould-Proof, Waterproof, Fireproof, Soundproof, Smoke-Proof, Heat Insulation. Application: indoor wall panel decoration. Warranty: 5 year. Project Solution Capability: total solution for projects. Design Style: Modern.",
    image: `${IMG_BASE}/WP-004.jpg`,
  },
  {
    id: "wpc-pf-005",
    code: "WP-005",
    name: "Modern Wood Grain WPC Wall Panel 200mm Wide 2900mm Long Waterproof Interior Wall Cladding",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*9mm",
    thickness: "9mm",
    color: "Customizable Wood Grain",
    moq: 200,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Application: interior walls, Hotel, Villa, Apartment, Office Building. Design Style: Modern.",
    image: `${IMG_BASE}/WP-005.jpg`,
  },
  {
    id: "wpc-pf-020",
    code: "WP-020",
    name: "Hot Selling New Design WPC Wall Panel 200x2900mm Interior Decorative Fluted Wall Cladding",
    series: "Premium Fluted Series",
    seriesSlug: "premium-fluted",
    size: "2900*200*9mm",
    thickness: "9mm",
    color: "Wooden Color",
    moq: 300,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "21X20X290cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Application: Home Office. Warranty: 3 Years. Project Solution Capability: graphic design, total solution for projects, Others. Design Style: Modern.",
    image: `${IMG_BASE}/WP-020.jpg`,
  },

  // ===== Fluted Decor Series =====
  {
    id: "wpc-fd-012",
    code: "WP-012",
    name: "High Quality WPC Fluted Wall Panel For Luxury House Decoration Easy Install Interior Wall Cladding Modern Waterproof",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*9mm",
    thickness: "9mm",
    color: "Four-Color Fluted Range",
    moq: 300,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "290X22X10cm",
    netWeightPerCarton: "27.0kg",
    weightPerPiece: "27.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof. Application: interior walls.",
    image: `${IMG_BASE}/WP-012.jpg`,
  },
  {
    id: "wpc-fd-013",
    code: "WP-013",
    name: "3D Wall Panel Interior Wall Decorations For Home Luxury WPC Fluted Decor Panel",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*9mm",
    thickness: "9mm",
    color: "Multi-Color Fluted Display",
    moq: 300,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "290X22X10cm",
    netWeightPerCarton: "27.0kg",
    weightPerPiece: "27.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof. Application: interior walls.",
    image: `${IMG_BASE}/WP-013.jpg`,
  },
  {
    id: "wpc-fd-014",
    code: "WP-014",
    name: "Modern WPC Fluted Wall Panel High Quality Indoor Waterproof WPC Board",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*9mm",
    thickness: "9mm",
    color: "Natural Wood Tones",
    moq: 300,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "290X22X10cm",
    netWeightPerCarton: "27.0kg",
    weightPerPiece: "27.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof. Application: interior walls.",
    image: `${IMG_BASE}/WP-014.jpg`,
  },
  {
    id: "wpc-fd-015",
    code: "WP-015",
    name: "New Style WPC Waterproof Modern Indoor Decorative Wall Cladding Panels",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*200*9mm",
    thickness: "9mm",
    color: "Multi-Tone Display",
    moq: 300,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "290X22X10cm",
    netWeightPerCarton: "27.0kg",
    weightPerPiece: "27.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof. Application: interior walls.",
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
      "Material: WPC. Function: Waterproof. Application: interior walls.",
    image: `${IMG_BASE}/WP-016.jpg`,
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
      "Material: WPC. Function: Waterproof. Application: interior walls.",
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
      "Material: WPC. Function: Waterproof. Application: interior walls.",
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
      "Material: WPC. Function: Waterproof. Application: interior walls.",
    image: `${IMG_BASE}/WP-019.jpg`,
  },
  {
    id: "wpc-ci-021",
    code: "WP-021",
    name: "Eco-friendly Recycled Plastic Wood WPC Wall Panel For Indoor Architecture Decoration",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "Customized Sizes",
    thickness: "24mm",
    color: "Customized Color",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant. Application: Hotel.",
    image: `${IMG_BASE}/WP-021.jpg`,
  },
  {
    id: "wpc-ci-022",
    code: "WP-022",
    name: "Wholesale Price Indoor Wood Plastic Composite WPC Wall Panel For Global Building Material Distributors",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "Customized Sizes",
    thickness: "24mm",
    color: "Customized Color",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant. Application: Hotel.",
    image: `${IMG_BASE}/WP-022.jpg`,
  },
  {
    id: "wpc-ci-023",
    code: "WP-023",
    name: "Ready To Ship Modern Fluted WPC Wall Panel For Quick Home Interior Renovation And DIY Decoration",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "Customized Sizes",
    thickness: "24mm",
    color: "Customized Color",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant. Application: Hotel.",
    image: `${IMG_BASE}/WP-023.jpg`,
  },
  {
    id: "wpc-ci-024",
    code: "WP-024",
    name: "Luxury Embossed Wood Effect Indoor Wood Plastic Composite WPC Wall Panel For High-end Interior Wall",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "Customized Sizes",
    thickness: "24mm",
    color: "Four-Tone Fluted Range (Black, Espresso, Gray, Marble)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant. Application: Hotel.",
    image: `${IMG_BASE}/WP-024.jpg`,
  },
  {
    id: "wpc-ci-025",
    code: "WP-025",
    name: "High Density Waterproof Interior WPC Wall Panel For Meeting Room And Hotel Interior Design",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "Customized Sizes",
    thickness: "24mm",
    color: "Five-Tone Wood Grain Range",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant. Application: Hotel.",
    image: `${IMG_BASE}/WP-025.jpg`,
  },
  {
    id: "wpc-ci-026",
    code: "WP-026",
    name: "Recyclable Interior Wall Cladding WPC Wall Panel For Environmentally Friendly Interior Design",
    series: "Classic Indoor Series",
    seriesSlug: "classic-indoor",
    size: "Customized Sizes",
    thickness: "24mm",
    color: "Customized Color",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: Plastic. Function: Waterproof, Eco-Friendly, Fire Retardant. Application: Hotel.",
    image: `${IMG_BASE}/WP-026.jpg`,
  },
];

// FAQ 数据 — WPC墙板常见问题
export const wpcPanelFAQs = [
  {
    question: "What materials are indoor WPC wall panels made of?",
    answer:
      "Our WPC panels are made from wood-plastic composite environmental material (Premium Fluted Series) or plastic composite (Fluted Decor and Classic Indoor Series). The panels are 100% waterproof, fire retardant, eco-friendly and feature moisture-proof, anti-static and sound-absorbing properties.",
  },
  {
    question: "What is the standard panel size and how are panels priced?",
    answer:
      "We offer multiple specifications: Premium Fluted Series panels are 2900mm long × 200mm wide × 9-10mm thick, model 2900MM/2.9M. Fluted Decor Series panels are 2900mm × 200mm × 9mm. Classic Indoor Series panels support customized sizes with 24mm thickness, model wpc001. MOQ ranges from 100pcs to 300pc/color depending on the series. Package size is typically 290×30×10cm or 290×22×10cm with 27-30kg gross weight.",
  },
  {
    question: "Are WPC wall panels fire-rated for commercial projects?",
    answer:
      "Yes. Our panels feature fireproof properties, and all series include Fire Retardant as a standard feature. The panels also offer smoke-proof and heat insulation functions for enhanced safety in commercial and residential applications.",
  },
  {
    question: "How are WPC wall panels installed?",
    answer:
      "All panels feature Easy Installation with interlocking tongue-and-groove edge profiles. The panels install over a timber or metal batten framework. No special tools required — standard woodworking saws and adhesive are sufficient for a clean install. Installation type: interlocking system.",
  },
  {
    question: "What applications are WPC wall panels suitable for?",
    answer:
      "Our panels are designed for indoor wall panel decoration across diverse applications: Entertainment venues, Commerce spaces, Household interiors, Administration buildings, Hotels, Villas, Apartments, Office Buildings, Meeting Rooms and Home Office spaces. Design Style: Modern.",
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
