// PVC Partition Panels — 产品数据集中管理
// 数据来源：Alibaba PVC Partition Panel product pages（2026-07 update）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-21: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null），不展示品牌

export interface PVCPartitionProduct {
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

export interface PVCPartitionSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const pvcPartitionSeries: PVCPartitionSeries[] = [
  {
    slug: "waterproof-interior-divider",
    name: "Waterproof Interior Divider Series",
    nameZh: "防水室内隔断系列",
    description:
      "PVC partition panels for interior wall decoration and office divider applications. Waterproof, fireproof, moisture-proof with modern geometric patterns. Size 400x26x2900mm, multi-color optional, 5+ years warranty.",
  },
  {
    slug: "double-laminate-commercial",
    name: "Double Laminate Commercial Series",
    nameZh: "双层压膜商用系列",
    description:
      "Fast install double laminate PVC partition panels for commercial interior use. Waterproof, eco-friendly, fire retardant with brushed surface finish. Size 2900x400mm, wood color, easy installation for office and hotel.",
  },
  {
    slug: "custom-decorative-board",
    name: "Custom Decorative Board Series",
    nameZh: "定制装饰板系列",
    description:
      "Custom size PVC partition panels with decorative geometric patterns for interior office and home decoration. Waterproof, fireproof with fluorescent and noctilucent special effects. Modern minimalist design style.",
  },
];

const IMG_BASE = "/images/products/pvc-partition-panel";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const pvcPartitionProducts: PVCPartitionProduct[] = [
  // ===== Waterproof Interior Divider Series =====
  {
    id: "pp-wi-001",
    code: "PP-001",
    name: "Hot Sale PVC Partition Panel Waterproof Decorative PVC Wall Panel For Interior Office Divider",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-001.jpg`,
  },
  {
    id: "pp-wi-002",
    code: "PP-002",
    name: "PVC Partition Panel For Office And Commercial Space Lightweight Waterproof Wall Divider Panel",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-002.jpg`,
  },
  {
    id: "pp-wi-003",
    code: "PP-003",
    name: "High Quality PVC Partition Panel Easy Installation Fireproof Waterproof Interior Wall Panel Board",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-003.jpg`,
  },
  {
    id: "pp-wi-004",
    code: "PP-004",
    name: "40mm Custom Size PVC Partition Panel Interior Decorative Plastic Wall Divider Board",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-004.jpg`,
  },
  {
    id: "pp-wi-005",
    code: "PP-005",
    name: "PVC Partition Panel Waterproof Fireproof Interior Wall Divider Board",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Moisture-Proof, Anti-static, Sound-Absorbing, Mould-Proof, Waterproof, Fireproof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-005.jpg`,
  },

  // ===== Double Laminate Commercial Series =====
  {
    id: "pp-dl-006",
    code: "PP-006",
    name: "Fast Install Double Laminate Waterproof Eco-friendly Lightweight Commercial Interior Partition Panel For Office & Hotel Use",
    series: "Double Laminate Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Wood color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Hotel. Design Style: Modern. Warranty: 2 Years. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Surface: Brushed. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration. After-sale Service: Online Technical Support, Other.",
    image: `${IMG_BASE}/PP-006.jpg`,
  },
  {
    id: "pp-dl-007",
    code: "PP-007",
    name: "Hot Selling Modern PVC Partition Board Waterproof Decorative Interior Divider Board For Hotel Apartment Office",
    series: "Double Laminate Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Wood color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Hotel. Design Style: Modern. Warranty: 2 Years. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Surface: Brushed. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration. After-sale Service: Online Technical Support, Other.",
    image: `${IMG_BASE}/PP-007.jpg`,
  },
  {
    id: "pp-dl-008",
    code: "PP-008",
    name: "Lightweight PVC Partition Panel With Moisture-proof Feature Quick Install For Office Use Modern Design",
    series: "Double Laminate Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Wood color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Hotel. Design Style: Modern. Warranty: 2 Years. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Surface: Brushed. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration. After-sale Service: Online Technical Support, Other.",
    image: `${IMG_BASE}/PP-008.jpg`,
  },
  {
    id: "pp-dl-009",
    code: "PP-009",
    name: "Fireproof Partition Panel Fast Install Double Laminate Waterproof Eco-friendly Lightweight Modern Design Commercial Interior",
    series: "Double Laminate Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Wood color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Hotel. Design Style: Modern. Warranty: 2 Years. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Surface: Brushed. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration. After-sale Service: Online Technical Support, Other.",
    image: `${IMG_BASE}/PP-009.jpg`,
  },
  {
    id: "pp-dl-010",
    code: "PP-010",
    name: "High Quality PVC Partition Panel Soundproof Partition Panel Easy Installation Fireproof Waterproof Interior Wall Panel Board",
    series: "Double Laminate Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Wood color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Hotel. Design Style: Modern. Warranty: 2 Years. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Surface: Brushed. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration. After-sale Service: Online Technical Support, Other.",
    image: `${IMG_BASE}/PP-010.jpg`,
  },
  {
    id: "pp-dl-011",
    code: "PP-011",
    name: "Hot Fast Install Double Laminate Bamboo Eco-friendly Waterproof Lightweight Commercial Interior Partition Panel For Office Hotel",
    series: "Double Laminate Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Wood color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: Hotel. Design Style: Modern. Warranty: 2 Years. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Surface: Brushed. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration. After-sale Service: Online Technical Support, Other.",
    image: `${IMG_BASE}/PP-011.jpg`,
  },

  // ===== Custom Decorative Board Series =====
  {
    id: "pp-cd-012",
    code: "PP-012",
    name: "Luxury Waterproof Eco-friendly Fast Install Double Laminate Lightweight Commercial Interior Partition Panel For Building",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Special Effect: Fluorescent, Noctilucent. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-012.jpg`,
  },
  {
    id: "pp-cd-013",
    code: "PP-013",
    name: "Easy Install Partition Panel Waterproof Eco-friendly Lightweight Commercial Interior Partition Panel For Office & Hotel Use",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Special Effect: Fluorescent, Noctilucent. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-013.jpg`,
  },
  {
    id: "pp-cd-014",
    code: "PP-014",
    name: "Modern PVC Partition Wall Panel Waterproof Plastic Room Divider Panel For Office Decoration",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Special Effect: Fluorescent, Noctilucent. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-014.jpg`,
  },
  {
    id: "pp-cd-015",
    code: "PP-015",
    name: "Quick Install Wall Panel Fireproof Partition Panel Lightweight Partition Wall Lightweight Modern Design Office Divider Panel",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Special Effect: Fluorescent, Noctilucent. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-015.jpg`,
  },
  {
    id: "pp-cd-016",
    code: "PP-016",
    name: "PVC Partition Wall Panel Interior Decorative Board Waterproof Room Divider For Office Home",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multi Color Optional",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Single item",
    pcsPerCarton: 1,
    cartonSize: "290x50x50 cm",
    netWeightPerCarton: "20.0 kg",
    weightPerPiece: "20.0 kg",
    leadTime: LEAD_TIME,
    remarks:
      "Application: indoor wall panel decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: GEOMETRY, Striped, 3D panel, Geometric. Special Effect: Fluorescent, Noctilucent. Usage: Entertainment, Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-016.jpg`,
  },
];

// ===== FAQs =====
export const pvcPartitionFAQs = [
  {
    question: "What material are PVC partition panels made of?",
    answer:
      "PVC partition panels are made from 100% PVC (polyvinyl chloride) material. The panels are waterproof, fireproof, moisture-proof, anti-static, sound-absorbing and mould-proof. The double laminate construction provides additional strength and durability for commercial interior applications.",
  },
  {
    question: "What sizes are available for PVC partition panels?",
    answer:
      "Standard size is 400x26x2900mm (length x thickness x height). The panel length is 2.9 meters (2900mm) with a width of 400mm and thickness of 26mm. Custom sizes are available upon request. The 2900mm length is designed to span from floor to ceiling in standard commercial spaces.",
  },
  {
    question: "Are PVC partition panels waterproof and fireproof?",
    answer:
      "Yes. PVC partition panels are 100% waterproof and fireproof. They are also moisture-proof, mould-proof, and anti-static. The fire retardant properties make them suitable for commercial applications requiring fire-rated materials. Panels meet interior wall decoration standards for offices, hotels and public buildings.",
  },
  {
    question: "How are PVC partition panels installed?",
    answer:
      "PVC partition panels feature easy installation with a fast install double laminate system. The lightweight design allows for quick assembly without heavy tools. Panels connect using a tongue-and-groove or interlocking system. Onsite installation service is available. The brushed surface finish provides a modern decorative appearance.",
  },
  {
    question: "What applications are PVC partition panels used for?",
    answer:
      "PVC partition panels are designed for indoor wall panel decoration and room division in offices, hotels, apartments, commercial interiors, entertainment venues, and administration buildings. They are ideal for creating office dividers, hotel partitions, apartment room separators and commercial space divisions. The modern design style suits minimalist, European, rustic, industrial and contemporary interiors.",
  },
  {
    question: "What is the MOQ and packaging for PVC partition panels?",
    answer:
      "Standard MOQ is 500 square meters. Each panel is packaged individually with a package size of 290x50x50 cm and a gross weight of 20.0 kg per panel. Lead time is typically 15 days for orders up to 5000 square meters. Please contact our sales team for specific MOQ and packaging details.",
  },
];

// ===== Contact Info =====
export const PVC_PARTITION_CONTACT = {
  email: "sales@onestopbuildly.com",
  whatsapp: "+86 138-0000-0000",
};

// ===== Helper Functions =====
export function getProductsBySeries(seriesSlug: string): PVCPartitionProduct[] {
  return pvcPartitionProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  const sizes = pvcPartitionProducts.map((p) => p.size);
  return [...new Set(sizes)].sort();
}

export function getUniqueSeries(): string[] {
  const series = pvcPartitionProducts.map((p) => p.series);
  return [...new Set(series)].sort();
}

export function getUniqueColors(): string[] {
  const colors = pvcPartitionProducts.map((p) => p.color);
  return [...new Set(colors)].sort();
}

export function getUniqueCodes(): string[] {
  const codes = pvcPartitionProducts.map((p) => p.code);
  return [...new Set(codes)].sort();
}
