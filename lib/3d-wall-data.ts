// 3D Wall Panels — 产品数据集中管理
// 数据来源：Alibaba 3D PVC墙板产品抓取数据（2026-07更新）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-20: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null）

export interface ThreeDWallProduct {
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

export interface ThreeDWallSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const threeDWallSeries: ThreeDWallSeries[] = [
  {
    slug: "gold-diamond",
    name: "Gold Diamond Series",
    nameZh: "金钻系列",
    description:
      "Shining gold diamond design PVC 3D wall panels with electroplating bright finish. Material: PVC, 500mm*500mm, 1mm thickness. Waterproof, fireproof, soundproof with heat insulation for luxurious interior decoration.",
  },
  {
    slug: "diamond-geometric",
    name: "Diamond Geometric Series",
    nameZh: "钻石几何系列",
    description:
      "Modern diamond and geometric 3D PVC wall panels with multi-color options. Material: PVC, 500mm*500mm, 0.8-1mm thickness. Fireproof, moisture-proof, mould-proof for house decoration.",
  },
  {
    slug: "art-deco",
    name: "Art Deco Series",
    nameZh: "艺术装饰系列",
    description:
      "Art deco 3D PVC wall panels for ceiling and wall decoration with wood and modern patterns. Material: PVC, 500mm*500mm, 1mm thickness. Waterproof, anti-static for living room, office and commercial spaces.",
  },
];

const IMG_BASE = "/images/products/3d-wall";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const threeDWallProducts: ThreeDWallProduct[] = [
  // ===== Gold Diamond Series =====
  {
    id: "3d-gd-002",
    code: "3D-002",
    name: "Waterproof Shining Gold Diamond Design PVC 3D Wall Panel For Interior",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Shining Gold",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-002.jpg`,
  },
  {
    id: "3d-gd-004",
    code: "3D-004",
    name: "2021 Hot Sale Wallpapers And Wall Coating Gold 3D Wall Panel For Interior Decoration",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Gold",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-004.jpg`,
  },
  {
    id: "3d-gd-005",
    code: "3D-005",
    name: "Waterproof Shining Gold Diamond Design PVC 3D Wall Panel For Interior (Model 3d Wall Panel PVC)",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Shining Gold Diamond",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-005.jpg`,
  },
  {
    id: "3d-gd-006",
    code: "3D-006",
    name: "Fireproof Shining Gold Diamond Design PVC 3D Wall Panel For Interior",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Fireproof Gold Diamond",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-006.jpg`,
  },
  {
    id: "3d-gd-007",
    code: "3D-007",
    name: "Shinning Home Decorative Gold Interior PVC 3D Panel For Wall And Ceiling",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Multi (Gold)",
    moq: 25,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Living Room. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-007.jpg`,
  },
  {
    id: "3d-gd-008",
    code: "3D-008",
    name: "Shinning Gold Interior PVC 3D Home Deco Wall Panel",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Multi (Shinning Gold)",
    moq: 25,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Living Room. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-008.jpg`,
  },
  {
    id: "3d-gd-009",
    code: "3D-009",
    name: "Hot Selling Art Decorative Electroplating Bright Gold 3D Wall Panels",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "0.8mm",
    color: "Electroplating Bright Gold",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 48,
    cartonSize: "500*500*10mm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "0.21kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Fireproof, Soundproof, Heat Insulation. Application: Home Office. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-009.jpg`,
  },
  {
    id: "3d-gd-010",
    code: "3D-010",
    name: "Golden Mirror PVC 3D Decorative Wall Panels For Home Decoration",
    series: "Gold Diamond Series",
    seriesSlug: "gold-diamond",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Golden Mirror",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Project Solution Capability: total solution for projects. Design Style: Modern.",
    image: `${IMG_BASE}/3D-010.jpg`,
  },

  // ===== Diamond Geometric Series =====
  {
    id: "3d-dg-001",
    code: "3D-001",
    name: "Home Interior Modern Design Decorative PVC 3D Diamond Wall Panel",
    series: "Diamond Geometric Series",
    seriesSlug: "diamond-geometric",
    size: "500mm*500mm",
    thickness: "0.8mm",
    color: "Multi",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 48,
    cartonSize: "500*500*10mm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "0.21kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Fireproof, Soundproof, Heat Insulation. Application: Home Office. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-001.jpg`,
  },
  {
    id: "3d-dg-003",
    code: "3D-003",
    name: "High Quality Waterproof PVC 3D Fireproof Wall Panel For House Decoration",
    series: "Diamond Geometric Series",
    seriesSlug: "diamond-geometric",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Customizable",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-003.jpg`,
  },
  {
    id: "3d-dg-011",
    code: "3D-011",
    name: "Decoration Interior Panel Decorativo PVC Wall 3D Panel Pared",
    series: "Diamond Geometric Series",
    seriesSlug: "diamond-geometric",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Gold/Silver",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-011.jpg`,
  },
  {
    id: "3d-dg-013",
    code: "3D-013",
    name: "Waterproof Wall Panels Decorative Interior 3D Panel Pared (Plant Fiber)",
    series: "Diamond Geometric Series",
    seriesSlug: "diamond-geometric",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Customizable",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Function: Waterproof, Moisture-Proof, Mould-Proof, Fireproof, Soundproof, Heat Insulation, Anti-static. Application: Apartment. Warranty: 2 Years. Project Solution Capability: total solution for projects. Design Style: Modern.",
    image: `${IMG_BASE}/3D-013.jpg`,
  },

  // ===== Art Deco Series =====
  {
    id: "3d-ad-012",
    code: "3D-012",
    name: "Hot Sale 3D Wood Wall Panel PVC Stickers Design Wall Paper For Home Decoration",
    series: "Art Deco Series",
    seriesSlug: "art-deco",
    size: "500*500mm",
    thickness: "1mm",
    color: "Customizable",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Hotel. Warranty: 2 Years. Design Style: Modern.",
    image: `${IMG_BASE}/3D-012.jpg`,
  },
  {
    id: "3d-ad-014",
    code: "3D-014",
    name: "Free Shipping Art Deco PVC Ceiling Wall Decoration 3D Ceiling Board Panel",
    series: "Art Deco Series",
    seriesSlug: "art-deco",
    size: "19.7\"x19.7\" (500mm*500mm)",
    thickness: "1mm",
    color: "Customizable",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Apartment. Warranty: 2 Years. Project Solution Capability: total solution for projects.",
    image: `${IMG_BASE}/3D-014.jpg`,
  },
  {
    id: "3d-ad-015",
    code: "3D-015",
    name: "Waterproof Living Room 3D PVC Wall Panels For Office",
    series: "Art Deco Series",
    seriesSlug: "art-deco",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Customizable",
    moq: 200,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Application: Apartment. Warranty: 2 Years. Project Solution Capability: total solution for projects.",
    image: `${IMG_BASE}/3D-015.jpg`,
  },
  {
    id: "3d-ad-016",
    code: "3D-016",
    name: "Free Shipping Pack Of 48 Tiles 128 Sq Ft Decorative PVC 3D Art Wall Panel",
    series: "Art Deco Series",
    seriesSlug: "art-deco",
    size: "500mm*500mm",
    thickness: "1mm",
    color: "Customizable",
    moq: 36,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "1 carton=4*1box (12pcs=3sqm)=48pcs=12sqm",
    pcsPerCarton: 48,
    cartonSize: "500*500*12mm",
    netWeightPerCarton: "12.0kg",
    weightPerPiece: "0.25kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Function: Waterproof, Moisture-Proof, Mould-Proof, Smoke-Proof, Fireproof, Soundproof, Sound-Absorbing, Heat Insulation, Anti-static. Warranty: 2 Years. Project Solution Capability: total solution for projects.",
    image: `${IMG_BASE}/3D-016.jpg`,
  },
];

// ===== SEO / FAQ =====
export const threeDWallFAQs = [
  {
    question: "What materials are 3D wall panels made of?",
    answer:
      "Our 3D wall panels are made from PVC (polyvinyl chloride). The Gold Diamond Series uses PVC with electroplating bright gold finish, the Diamond Geometric Series uses PVC material with multi-color options, and the Art Deco Series uses 100% PVC for ceiling and wall decoration. All panels are 500mm*500mm with 0.8-1mm thickness.",
  },
  {
    question: "What is the standard panel size and how are panels packaged?",
    answer:
      "All 3D wall panels are 500mm*500mm (19.7\"x19.7\") per piece. Standard packaging is 1 carton = 4 boxes (12pcs = 3sqm) = 48pcs = 12sqm. Thickness ranges from 0.8mm to 1mm depending on the model. MOQ varies from 25 cartons to 200 cartons depending on the product.",
  },
  {
    question: "Are 3D wall panels fire-rated for commercial projects?",
    answer:
      "Yes. All our 3D wall panels feature fireproof properties. The panels also include waterproof, moisture-proof, mould-proof, smoke-proof, soundproof, sound-absorbing, heat insulation, and anti-static functions, making them suitable for commercial and residential applications including administration, commerce, entertainment, and household use.",
  },
  {
    question: "Can I customize the 3D wall panels with my own logo or design?",
    answer:
      "Yes, customization is available. For most products, customized logo, customized packaging, and graphic customization are available with a minimum order of 1,000 pieces. For the Pack of 48 Tiles product, customization is available with a minimum order of 36 pieces. The 3D Wood Wall Panel offers customization with a minimum order of 10,000 pieces.",
  },
  {
    question: "What applications are 3D wall panels suitable for?",
    answer:
      "Our 3D wall panels are designed for diverse interior applications: living rooms, offices, drawing rooms, ceilings, feature walls, hospitality venues, retail environments, and commercial spaces. Usage categories include Administration, Commerce, Entertainment, and Household. Design Style: Modern. Installation is free install material type for easy DIY application.",
  },
];

// ===== Contact Info =====
export const THREE_D_WALL_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};

// ===== Helper Functions =====
export function formatPrice(product: ThreeDWallProduct): string {
  if (product.unitPrice === null) return "Contact for Quote";
  return `$${product.unitPrice.toFixed(2)} / ${product.unit}`;
}

export function formatPriceShort(product: ThreeDWallProduct): string {
  if (product.unitPrice === null) return "Quote";
  return `$${product.unitPrice.toFixed(2)}`;
}

export function getProductsBySeries(seriesSlug: string): ThreeDWallProduct[] {
  return threeDWallProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(threeDWallProducts.map((p) => p.size))];
}

export function getUniqueSeries(): ThreeDWallSeries[] {
  return threeDWallSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(threeDWallProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(threeDWallProducts.map((p) => p.code))];
}
