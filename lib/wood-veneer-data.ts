// Wood Veneer Panels — 产品数据集中管理
// 数据来源：Alibaba 木饰面/木纹板产品抓取数据（2026-07更新）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-20: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null）
//   涵盖竹纤维墙板、三聚氰胺MDF板、装饰木饰面三大系列

export interface WoodVeneerProduct {
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

export interface WoodVeneerSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const woodVeneerSeries: WoodVeneerSeries[] = [
  {
    slug: "bamboo-fiber",
    name: "Bamboo Fiber Series",
    nameZh: "竹纤维系列",
    description:
      "Bamboo fiber wood veneer wall panels and boards in 1220x2440mm size with 5mm thickness. Brand: Sonsill. Waterproof, modern design for indoor, hotel and home office decoration. MOQ: 200 pcs.",
  },
  {
    slug: "melamine-mdf",
    name: "Melamine MDF Series",
    nameZh: "三聚氰胺MDF系列",
    description:
      "Melamine-faced MDF boards in 1220x2440mm with thickness options from 3mm to 25mm. Brand: Sonsill. Glossy white, fancy wood veneer and various melamine colors for furniture and interior decoration. MOQ: 100 pcs.",
  },
  {
    slug: "decorative-veneer",
    name: "Decorative Veneer Series",
    nameZh: "装饰木饰面系列",
    description:
      "Decorative wood veneer panels including WPC co-extrusion flat panels, mirrored bamboo fiber, PET marble texture, and flexible natural stone veneer. Brand: Sonsill. 1220x2440mm size for background walls and exterior decoration. MOQ: 100-200 pcs.",
  },
];

const IMG_BASE = "/images/products/wood-veneer";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const woodVeneerProducts: WoodVeneerProduct[] = [
  // ===== Bamboo Fiber Series =====
  {
    id: "wv-bf-001",
    code: "WV-001",
    name: "1.22*2.44 M*5/8 Mm Wood Solid Boards Wpc Wall Boards Bamboo Fiber Wall Panels",
    series: "Bamboo Fiber Series",
    seriesSlug: "bamboo-fiber",
    size: "1220*2440*5mm",
    thickness: "5mm",
    color: "Natural Wood Grain",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill WPC Flat Board. Application: Indoor. Warranty: More Than 5 Years. Design Style: Modern. Project Solution Capability: total solution for projects.",
    image: `${IMG_BASE}/WV-001.jpg`,
  },
  {
    id: "wv-bf-002",
    code: "WV-002",
    name: "Interior Decoration 1220*2440mm 5mm 8mm Plastic Melamine Mdf Board Wpc Panels",
    series: "Bamboo Fiber Series",
    seriesSlug: "bamboo-fiber",
    size: "1220*2440*5mm",
    thickness: "5mm/8mm",
    color: "Melamine White",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: sonsill. Application: Hotel. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: 3D model design, total solution for projects.",
    image: `${IMG_BASE}/WV-002.jpg`,
  },
  {
    id: "wv-bf-003",
    code: "WV-003",
    name: "5mm Waterproof Bamboo Fiber Wood Veneer Wall Board Wood Fiber Wall Panel",
    series: "Bamboo Fiber Series",
    seriesSlug: "bamboo-fiber",
    size: "1220*2440*5mm",
    thickness: "5mm",
    color: "Natural Oak Wood Grain",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: SONSILL. Application: Hotel. Warranty: 5 year. Design Style: Modern. Project Solution Capability: graphic design, 3D model design, total solution for projects, Cross Categories Consolidation.",
    image: `${IMG_BASE}/WV-003.jpg`,
  },
  {
    id: "wv-bf-004",
    code: "WV-004",
    name: "1.22*2.44 M*5/8 Mm Waterproof Wood Wall Boards Bamboo Fiber Wall Panels/boards",
    series: "Bamboo Fiber Series",
    seriesSlug: "bamboo-fiber",
    size: "1220*2440*5mm",
    thickness: "5mm/8mm",
    color: "Warm Walnut Wood Grain",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-004.jpg`,
  },
  {
    id: "wv-bf-009",
    code: "WV-009",
    name: "Chinese Factory Price Bamboo Fiber 1220*2440*5mm Decorative Wood 3d Wall Panel",
    series: "Bamboo Fiber Series",
    seriesSlug: "bamboo-fiber",
    size: "1220*2440*5mm",
    thickness: "5mm",
    color: "3D Decorative Pattern",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-009.jpg`,
  },
  {
    id: "wv-bf-010",
    code: "WV-010",
    name: "Indoor Wall Decoration Material Wood Alternatives Wpc Wood Veneer Panels",
    series: "Bamboo Fiber Series",
    seriesSlug: "bamboo-fiber",
    size: "1220*2440*5mm",
    thickness: "5mm",
    color: "Natural Wood Veneer",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-010.jpg`,
  },

  // ===== Melamine MDF Series =====
  {
    id: "wv-mm-005",
    code: "WV-005",
    name: "Laminated Mdf Board White Melamine Mdf",
    series: "Melamine MDF Series",
    seriesSlug: "melamine-mdf",
    size: "1220*2440mm",
    thickness: "3mm-25mm",
    color: "Glossy White Double Sided",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 30,
    cartonSize: "125X250X15cm",
    netWeightPerCarton: "45.0kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-005.jpg`,
  },
  {
    id: "wv-mm-006",
    code: "WV-006",
    name: "3mm,5mm,6mm,9mm,12mm,15mm,18mm Fancy Wood Veneer Mdf Boards",
    series: "Melamine MDF Series",
    seriesSlug: "melamine-mdf",
    size: "1220*2440mm",
    thickness: "3mm-18mm",
    color: "Fancy Wood Veneer",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 30,
    cartonSize: "125X250X15cm",
    netWeightPerCarton: "45.0kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-006.jpg`,
  },
  {
    id: "wv-mm-007",
    code: "WV-007",
    name: "Melamine Faced Mdf Board 1220*2440mm For Furniture With Nice Quality",
    series: "Melamine MDF Series",
    seriesSlug: "melamine-mdf",
    size: "1220*2440mm",
    thickness: "3mm-25mm",
    color: "Melamine Faced Various Colors",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 30,
    cartonSize: "125X250X15cm",
    netWeightPerCarton: "45.0kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-007.jpg`,
  },
  {
    id: "wv-mm-008",
    code: "WV-008",
    name: "Wholesale Glossy White Melamine Mdf 3mm 4mm 5mm 9mm 12mm 15mm 18mm 25mm Sublimation Waterproof White Double Sided Mdf Board",
    series: "Melamine MDF Series",
    seriesSlug: "melamine-mdf",
    size: "1220*2440mm",
    thickness: "3mm-25mm",
    color: "Glossy White Double Sided",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 30,
    cartonSize: "125X250X15cm",
    netWeightPerCarton: "45.0kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-008.jpg`,
  },

  // ===== Decorative Veneer Series =====
  {
    id: "wv-dv-011",
    code: "WV-011",
    name: "4*8ft Wpc Interior Wall Flat Panel Wood Composite Co-extrusion Indoor Board",
    series: "Decorative Veneer Series",
    seriesSlug: "decorative-veneer",
    size: "1220*2440mm (4*8ft)",
    thickness: "5mm",
    color: "Wood Composite Co-extrusion",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-011.jpg`,
  },
  {
    id: "wv-dv-012",
    code: "WV-012",
    name: "Indoor Wall Decoration Laminated Wood Alternatives Wpc Flat Wall Panels",
    series: "Decorative Veneer Series",
    seriesSlug: "decorative-veneer",
    size: "1220*2440mm",
    thickness: "5mm",
    color: "Laminated Wood Alternatives",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-012.jpg`,
  },
  {
    id: "wv-dv-013",
    code: "WV-013",
    name: "New Design Wpc Pvc Wall Panel Metal Texture Bamboo Charcoal Wood Mirror Board For Office Building",
    series: "Decorative Veneer Series",
    seriesSlug: "decorative-veneer",
    size: "1220*2440mm",
    thickness: "5mm",
    color: "Metal Texture Mirror Board",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Office Building. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-013.jpg`,
  },
  {
    id: "wv-dv-014",
    code: "WV-014",
    name: "Sonsill Modern Interior Decoration Mirrored Bamboo Fiber Wood Veneer Pvc Wpc Wall Panels",
    series: "Decorative Veneer Series",
    seriesSlug: "decorative-veneer",
    size: "1220*2440mm",
    thickness: "5mm",
    color: "Mirrored Bamboo Fiber",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Home Office. Warranty: 2 Years. Design Style: Modern. Project Solution Capability: graphic design, total solution for projects, Others.",
    image: `${IMG_BASE}/WV-014.jpg`,
  },
  {
    id: "wv-dv-015",
    code: "WV-015",
    name: "Sonsill Pet Marble Continuous Texture Co-extruded Bamboo Charcoal Wood Veneer Wpc Wall Panel For Background Walls",
    series: "Decorative Veneer Series",
    seriesSlug: "decorative-veneer",
    size: "1220*2440mm",
    thickness: "5mm",
    color: "PET Marble Continuous Texture",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 20,
    cartonSize: "125X250X12cm",
    netWeightPerCarton: "22.0kg",
    weightPerPiece: "1.1kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: SONSILL. Application: Hotel. Warranty: More Than 5 Years. Design Style: Modern. Project Solution Capability: graphic design, 3D model design, total solution for projects, Cross Categories Consolidation.",
    image: `${IMG_BASE}/WV-015.jpg`,
  },
  {
    id: "wv-dv-016",
    code: "WV-016",
    name: "Stone Veneer For Building Exterior Wall Decoration Natural Stone Wall Cladding Flexible Stone Veneer",
    series: "Decorative Veneer Series",
    seriesSlug: "decorative-veneer",
    size: "1220*2440mm",
    thickness: "2mm",
    color: "Natural Stone Texture",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 30,
    cartonSize: "125X250X8cm",
    netWeightPerCarton: "18.0kg",
    weightPerPiece: "0.6kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill. Application: Hotel. Warranty: More Than 5 Years. Design Style: Modern. Project Solution Capability: graphic design, 3D model design, total solution for projects, Cross Categories Consolidation. After-sale Service: Online Technical Support, Onsite Installation, Onsite Training, Onsite Inspection, Free Spare Parts, Return and Replacement.",
    image: `${IMG_BASE}/WV-016.jpg`,
  },
];

// ===== SEO / FAQ =====
export const woodVeneerFAQs = [
  {
    question: "What is bamboo fiber wood veneer and what are its advantages?",
    answer:
      "Bamboo fiber wood veneer is a WPC (Wood Plastic Composite) wall panel made from bamboo fiber and polymer materials. The Bamboo Fiber Series panels are 1220x2440mm with 5mm thickness (some models offer 5mm/8mm options). Key advantages include waterproof performance, modern wood grain appearance, lightweight construction (1.1kg per piece), and easy installation. Brand: Sonsill. Applications include indoor, hotel, and home office decoration with warranty ranging from 2 years to more than 5 years.",
  },
  {
    question: "What thickness options are available for melamine MDF boards?",
    answer:
      "Our Melamine MDF Series offers flexible thickness options. The Fancy Wood Veneer MDF boards (WV-006) are available in 3mm, 5mm, 6mm, 9mm, 12mm, 15mm, and 18mm. The Glossy White Melamine MDF boards (WV-005, WV-007, WV-008) support 3mm, 4mm, 5mm, 9mm, 12mm, 15mm, 18mm, and 25mm. All melamine MDF boards are 1220x2440mm in size, packaged on pallets with 30 pcs per carton, weight 1.5kg per piece. MOQ: 100 pcs.",
  },
  {
    question: "Are the wood veneer panels waterproof and suitable for humid environments?",
    answer:
      "Yes. The Bamboo Fiber Series panels (WV-001, WV-003, WV-004) are specifically marketed as waterproof wood wall boards. The melamine MDF boards also feature sublimation waterproof technology with glossy white double-sided finish (WV-008). These panels are suitable for hotel applications, bathrooms, kitchens, and other humid interior environments. The 5mm bamboo fiber panels maintain dimensional stability in moist conditions while preserving their wood grain appearance.",
  },
  {
    question: "What installation methods are used for wood veneer wall panels?",
    answer:
      "Our wood veneer panels support multiple installation methods. The 1220x2440mm panels can be installed using adhesive bonding, screw fixing, or clip systems depending on the substrate and application. For the flexible stone veneer (WV-016, 2mm thickness), the panel can be applied directly to curved or flat surfaces. For project clients, we provide total solution for projects including graphic design, 3D model design, and Cross Categories Consolidation. After-sale service includes Online Technical Support for all products, with Onsite Installation, Onsite Training, and Onsite Inspection available for stone veneer projects.",
  },
  {
    question: "What application scenarios are the wood veneer panels designed for?",
    answer:
      "Our wood veneer panels cover a wide range of interior and exterior applications. The Bamboo Fiber Series is ideal for indoor, hotel, and home office wall decoration. The Melamine MDF Series is designed for furniture manufacturing and interior decoration with various color options. The Decorative Veneer Series serves specialized applications: WPC co-extrusion flat panels (WV-011, WV-012) for indoor walls, mirrored bamboo fiber panels (WV-013, WV-014) for office buildings, PET marble texture panels (WV-015) for background walls, and flexible natural stone veneer (WV-016) for building exterior wall cladding. Design Style: Modern for all products.",
  },
  {
    question: "What is the minimum order quantity (MOQ) and packaging information?",
    answer:
      "MOQ varies by product series. The Bamboo Fiber Series and most Decorative Veneer Series panels have an MOQ of 200 pcs, packaged in cartons with 20 pcs per carton (carton size 125X250X12cm, net weight 22.0kg, 1.1kg per piece). The Melamine MDF Series has an MOQ of 100 pcs, packaged on pallets with 30 pcs per carton (carton size 125X250X15cm, net weight 45.0kg, 1.5kg per piece). The flexible stone veneer (WV-016) has an MOQ of 100 pcs with 30 pcs per carton, 0.6kg per piece. All products use FOB incoterm in USD currency. Lead time: Please contact our sales team for confirmation.",
  },
];

// ===== Contact Info =====
export const WOOD_VENEER_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};

// ===== Helper Functions =====
export function formatPrice(product: WoodVeneerProduct): string {
  if (product.unitPrice === null) return "Contact for Quote";
  return `$${product.unitPrice.toFixed(2)} / ${product.unit}`;
}

export function formatPriceShort(product: WoodVeneerProduct): string {
  if (product.unitPrice === null) return "Quote";
  return `$${product.unitPrice.toFixed(2)}`;
}

export function getProductsBySeries(seriesSlug: string): WoodVeneerProduct[] {
  return woodVeneerProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(woodVeneerProducts.map((p) => p.size))];
}

export function getUniqueSeries(): WoodVeneerSeries[] {
  return woodVeneerSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(woodVeneerProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(woodVeneerProducts.map((p) => p.code))];
}
