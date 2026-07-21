// PS Wall Panels — 产品数据集中管理
// 数据来源：Alibaba PS Wall Panel product pages（2026-07 update）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-21: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null）

export interface PSWallProduct {
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
}

export interface PSWallSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const psWallSeries: PSWallSeries[] = [
  {
    slug: "fluted",
    name: "Fluted Series",
    nameZh: "槽板系列",
    description:
      "Fluted PS polystyrene wall panels for interior decoration. Industrial design style, 3-year warranty. Waterproof, moisture-proof for villa, hotel, TV background walls.",
  },
  {
    slug: "3d-panel",
    name: "3D Panel Series",
    nameZh: "3D板系列",
    description:
      "3D PS wall panels with modern patterns for interior decoration. Industrial design style, 3-year warranty. Moisture-proof, waterproof for living room, office and commercial spaces.",
  },
  {
    slug: "decorative-cladding",
    name: "Decorative Cladding Series",
    nameZh: "装饰护墙板系列",
    description:
      "Wood effect and decorative PS cladding panels for interior walls. Industrial design style, 3-year warranty. Lightweight, moisture-proof, waterproof for home and commercial decoration.",
  },
];

const IMG_BASE = "/images/products/ps-wall";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const psWallProducts: PSWallProduct[] = [
  // ===== Fluted Series =====
  {
    id: "ps-fl-001",
    code: "PS-001",
    name: "Hot Sales Concrete Wall Panels Ps Polystyrene Wall Panel For Decoration",
    series: "Fluted Series",
    seriesSlug: "fluted",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Concrete Grey",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-001.jpg`,
  },
  {
    id: "ps-fl-002",
    code: "PS-002",
    name: "Saudi Arabia Decorative Ps Wall Fluted Ps Wall Panel",
    series: "Fluted Series",
    seriesSlug: "fluted",
    size: "2400*600mm",
    thickness: "10mm",
    color: "White Fluted",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-002.jpg`,
  },
  {
    id: "ps-fl-003",
    code: "PS-003",
    name: "Saudi Arabia Great Wall Board Decoration Background Villa Hotel Art Design Fluted Interior Ps Wall Panels",
    series: "Fluted Series",
    seriesSlug: "fluted",
    size: "2400*600mm",
    thickness: "12mm",
    color: "Grey Fluted",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-003.jpg`,
  },
  {
    id: "ps-fl-004",
    code: "PS-004",
    name: "Saudi Arabia Fluted Interior Ps Wall Panels For Interior Decoration",
    series: "Fluted Series",
    seriesSlug: "fluted",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Beige Fluted",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-004.jpg`,
  },
  {
    id: "ps-fl-005",
    code: "PS-005",
    name: "Interior Waterproof Ceiling Board Polystyrene Ps Wall Panel Moulding",
    series: "Fluted Series",
    seriesSlug: "fluted",
    size: "2400*600mm",
    thickness: "12mm",
    color: "White Ceiling Moulding",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-005.jpg`,
  },
  {
    id: "ps-fl-006",
    code: "PS-006",
    name: "Wall Panel Wall Panel Facade Decoration Exterior Wall Polyurethane Panel",
    series: "Fluted Series",
    seriesSlug: "fluted",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Stone Grey",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-006.jpg`,
  },

  // ===== 3D Panel Series =====
  {
    id: "ps-3d-007",
    code: "PS-007",
    name: "Hot Sale Modern Style Ps 3d Wall Panel Interior Decoration",
    series: "3D Panel Series",
    seriesSlug: "3d-panel",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Modern 3D Pattern",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-007.jpg`,
  },
  {
    id: "ps-3d-008",
    code: "PS-008",
    name: "Other Boards Innovation Building Materials Pvc Panel Ps Wall Panel",
    series: "3D Panel Series",
    seriesSlug: "3d-panel",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Innovation Grey",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-008.jpg`,
  },
  {
    id: "ps-3d-009",
    code: "PS-009",
    name: "Indoor Wall Decoration Pvc Ps Fluted Wallboard Ps Wall Panel For Tv Background Interior Wall Panel",
    series: "3D Panel Series",
    seriesSlug: "3d-panel",
    size: "2400*600mm",
    thickness: "10mm",
    color: "TV Background White",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-009.jpg`,
  },
  {
    id: "ps-3d-010",
    code: "PS-010",
    name: "Saudi Arabia Great Wall Board Decoration Background Villa Hotel Art Design Fluted Ps Panel",
    series: "3D Panel Series",
    seriesSlug: "3d-panel",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Art Design Beige",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-010.jpg`,
  },
  {
    id: "ps-3d-011",
    code: "PS-011",
    name: "2022 Hot Sale Indoor Wall Decoration 3d Ps Fluted Panel Ps Wall Panels For Wall Decoration",
    series: "3D Panel Series",
    seriesSlug: "3d-panel",
    size: "2400*600mm",
    thickness: "10mm",
    color: "3D Fluted White",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-011.jpg`,
  },

  // ===== Decorative Cladding Series =====
  {
    id: "ps-dc-012",
    code: "PS-012",
    name: "Indoor Wall Decoration 3d Ps Fluted Panel Ps Wall Panels For Saudi Market",
    series: "Decorative Cladding Series",
    seriesSlug: "decorative-cladding",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Saudi Market 3D",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-012.jpg`,
  },
  {
    id: "ps-dc-013",
    code: "PS-013",
    name: "Moisture Proof Waterproof Home Cladding Ps Wall Panel Ps Wall Cladding For Saudi Arabian Market",
    series: "Decorative Cladding Series",
    seriesSlug: "decorative-cladding",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Cladding White",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-013.jpg`,
  },
  {
    id: "ps-dc-014",
    code: "PS-014",
    name: "Ps Panel Decorative Wood Fluted Ps Wall Panel Interior",
    series: "Decorative Cladding Series",
    seriesSlug: "decorative-cladding",
    size: "2400*600mm",
    thickness: "12mm",
    color: "Wood Fluted",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-014.jpg`,
  },
  {
    id: "ps-dc-015",
    code: "PS-015",
    name: "Wholesale Lightweight Plastic Interior Decoration Ps Wall Panels Boards",
    series: "Decorative Cladding Series",
    seriesSlug: "decorative-cladding",
    size: "2400*600mm",
    thickness: "10mm",
    color: "Lightweight White",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-015.jpg`,
  },
  {
    id: "ps-dc-016",
    code: "PS-016",
    name: "New Design Wood Effect Ps Cladding Board Alternative Panels For Walls",
    series: "Decorative Cladding Series",
    seriesSlug: "decorative-cladding",
    size: "2400*600mm",
    thickness: "12mm",
    color: "Wood Effect",
    moq: 200,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 6,
    cartonSize: "245X65X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "1.7kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Indoor. Design Style: Industrial. Warranty: 3 Years. Project Solution Capability: total solution for projects. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PS-016.jpg`,
  },
];

// ===== SEO / FAQ =====
export const psWallFAQs = [
  {
    question: "What material are PS wall panels made of?",
    answer:
      "Our PS wall panels are made from Polystyrene (PS), a lightweight and durable thermoplastic material. PS panels are waterproof, moisture-proof, and easy to install, making them ideal for interior wall decoration. The panels are designed for indoor use with an industrial design style and come with a 3-year warranty.",
  },
  {
    question: "What sizes are available?",
    answer:
      "All PS wall panels come in a standard size of 2400*600mm. Thickness options include 10mm and 12mm depending on the model and series. The Fluted Series and Decorative Cladding Series offer both 10mm and 12mm thickness options, while the 3D Panel Series is available in 10mm thickness.",
  },
  {
    question: "Are PS wall panels waterproof?",
    answer:
      "Yes, PS wall panels are both moisture-proof and waterproof. This makes them highly suitable for humid environments such as bathrooms, kitchens, and coastal areas. The waterproof properties also ensure long-lasting performance and easy maintenance, requiring only a simple wipe to keep clean.",
  },
  {
    question: "What applications are PS wall panels used for?",
    answer:
      "PS wall panels are designed for indoor decoration applications including TV background walls, villa interiors, hotel lobbies and rooms, offices, living rooms, and commercial spaces. The panels are suitable for both residential and commercial projects, with project solution capability offering a total solution for projects of any scale.",
  },
  {
    question: "What is the MOQ and packaging?",
    answer:
      "The minimum order quantity (MOQ) is 200 pcs for all PS wall panel products. Standard packaging is in cartons with 6 pcs per carton. The carton size is 245X65X15cm, with a net weight of 10.0kg per carton and 1.7kg per piece. After-sale service includes online technical support.",
  },
];

// ===== Contact Info =====
export const PS_WALL_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};

// ===== Helper Functions =====
export function formatPrice(product: PSWallProduct): string {
  if (product.unitPrice === null) return "Contact for Quote";
  return `$${product.unitPrice.toFixed(2)} / ${product.unit}`;
}

export function formatPriceShort(product: PSWallProduct): string {
  if (product.unitPrice === null) return "Quote";
  return `$${product.unitPrice.toFixed(2)}`;
}

export function getProductsBySeries(seriesSlug: string): PSWallProduct[] {
  return psWallProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(psWallProducts.map((p) => p.size))];
}

export function getUniqueSeries(): PSWallSeries[] {
  return psWallSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(psWallProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(psWallProducts.map((p) => p.code))];
}
