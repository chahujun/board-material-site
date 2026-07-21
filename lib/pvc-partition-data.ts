// PVC Partition Panels — 产品数据集中管理
// 数据来源：Alibaba PVC Partition Panel product pages（2026-07 update）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-21: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null），不展示品牌
// 2026-07-21: 修正产品名称、颜色、图案参数以匹配实际产品图片
//   移除虚构属性(Fluorescent/Noctilucent/GEOMETRY)，更新为Wood Grain/Marble/Solid

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
      "PVC partition panels for interior wall decoration and room divider applications. Lightweight, waterproof, fireproof, soundproof with wood grain and marble veining finishes. Hollow core honeycomb construction, ideal for office, hotel, apartment and commercial building interior walls.",
  },
  {
    slug: "double-laminate-commercial",
    name: "Modular Commercial Series",
    nameZh: "模块化商用系列",
    description:
      "Modular PVC partition panels for commercial interior use. Lightweight, durable, eco-friendly with wood grain and solid color surface finishes. Features interlock system, quick install, and reusable design for office, hotel and commercial space dividers.",
  },
  {
    slug: "custom-decorative-board",
    name: "Custom Decorative Board Series",
    nameZh: "定制装饰板系列",
    description:
      "Modern design PVC partition panels with wood decor and marble veining finishes for interior decoration. Fire retardant, termite-resistant, waterproof. Ideal for living room, home renovation and building partition applications.",
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
    name: "PVC Partition Panel PVC Partition Board PVC Partition Wall Panel PVC Divider Panel PVC Room Divider Panel PVC Interior Partition",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Light Gray",
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
      "Application: indoor wall panel decoration, room divider. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: Wood Grain. Surface: Matte. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-001.jpg`,
  },
  {
    id: "pp-wi-002",
    code: "PP-002",
    name: "PVC Partition Panel PVC Partition Board PVC Partition Wall Panel PVC Divider Panel PVC Room Divider Panel",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "White, Wood Tone",
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
      "Application: indoor wall panel decoration, room divider. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: Wood Grain, Solid White. Surface: Matte. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-002.jpg`,
  },
  {
    id: "pp-wi-003",
    code: "PP-003",
    name: "Lightweight PVC Partition Panel Waterproof Fireproof Soundproof For Office Hotel Apartment Commercial Building Interior Wall",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Multiple Wood Tones",
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
      "Application: Office, Hotel, Apartment, Commercial Building interior wall. Design Style: Modern. Warranty: More Than 5 Years. Function: Lightweight, Waterproof, Fireproof, Soundproof. Pattern: Wood Grain (Walnut, Oak, Honey, Cream, Birch). Surface: Matte. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-003.jpg`,
  },
  {
    id: "pp-wi-004",
    code: "PP-004",
    name: "PVC Partition Wall Panel Waterproof Anti Mold Easy Install Room Divider For Hotel Office Apartment Interior Decoration",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Black, White, Marble",
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
      "Application: Hotel, Office, Apartment interior decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Anti Mold, Easy Install. Pattern: Solid Color (Black, White), Marble Veining. Surface: Matte. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-004.jpg`,
  },
  {
    id: "pp-wi-005",
    code: "PP-005",
    name: "Hollow Core PVC Partition Wall Panel Soundproof Lightweight Moisture Resistant For Room Dividers Interior Wall Cladding",
    series: "Waterproof Interior Divider Series",
    seriesSlug: "waterproof-interior-divider",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Cream, Marble, Wood Tone",
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
      "Application: Room Dividers, Interior Wall Cladding. Design Style: Modern. Warranty: More Than 5 Years. Function: Hollow Core, Soundproof, Lightweight, Moisture Resistant. Pattern: Marble Veining, Wood Grain. Surface: Matte. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-005.jpg`,
  },

  // ===== Modular Commercial Series =====
  {
    id: "pp-dl-006",
    code: "PP-006",
    name: "Durable Partition Panel Lightweight PVC Reinforced Interior Partition Panel Modular Partition Wall PVC Partition Panel",
    series: "Modular Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Multiple Wood Tones",
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
      "Application: Hotel, Commercial interior. Design Style: Modern. Warranty: 2 Years. Feature: Durable, Lightweight, PVC Reinforced, Waterproof, Eco-Friendly, Fire Retardant. Surface: Wood Grain. Installation: Easy Installation, Modular. Usage: Indoor Wall Panel Decoration, Partition Wall. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PP-006.jpg`,
  },
  {
    id: "pp-dl-007",
    code: "PP-007",
    name: "Wholesale Modern Quick Install Wall Panel High-class Light Weight PVC Plastic Cladding Boards & Wall Panels Anti-scratch",
    series: "Modular Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Brown, Black, Oak, Ivory",
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
      "Application: Hotel, Commercial interior. Design Style: Modern. Warranty: 2 Years. Feature: Quick Install, High-class Light Weight, Anti-scratch, Waterproof, Eco-Friendly. Surface: Wood Grain, Solid Color. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration, Wall Cladding. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PP-007.jpg`,
  },
  {
    id: "pp-dl-008",
    code: "PP-008",
    name: "Eco Friendly Partition Panel Load Bearing PVC Partition Panel Structural Room Divider Panel Plastic Structural Partition Panel",
    series: "Modular Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Beige, Marble",
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
      "Application: Hotel, Commercial interior, Room Divider. Design Style: Modern. Warranty: 2 Years. Feature: Eco-Friendly, Load Bearing, Structural, Waterproof, Fire Retardant. Surface: Wood Grain, Marble Veining. Installation: Easy Installation. Usage: Indoor Wall Panel Decoration, Structural Partition. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PP-008.jpg`,
  },
  {
    id: "pp-dl-009",
    code: "PP-009",
    name: "Wholesale Modern Interior PVC Wall Panel High-class Light Weight Plastic Cladding Boards & Wall Panels Anti-scratch Waterproof",
    series: "Modular Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Light Gray",
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
      "Application: Hotel, Commercial interior. Design Style: Modern. Warranty: 2 Years. Feature: High-class Light Weight, Anti-scratch, Waterproof, Eco-Friendly. Surface: Solid Color (Light Gray). Installation: Easy Installation. Usage: Indoor Wall Panel Decoration, Wall Cladding. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PP-009.jpg`,
  },
  {
    id: "pp-dl-010",
    code: "PP-010",
    name: "Modular Lightweight PVC Partition Wall Panel Interlock System Quick Install Reusable For Office Commercial Space Dividers",
    series: "Modular Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Brown, Amber, Black",
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
      "Application: Office, Commercial Space Dividers. Design Style: Modern. Warranty: 2 Years. Feature: Modular, Lightweight, Interlock System, Quick Install, Reusable, Waterproof, Eco-Friendly. Surface: Wood Grain, Solid Color. Installation: Interlock System, Quick Install. Usage: Indoor Wall Panel Decoration, Commercial Space Dividers. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PP-010.jpg`,
  },
  {
    id: "pp-dl-011",
    code: "PP-011",
    name: "Multifunctional PVC Partition Wall Panel Reusable Fireproof Eco-friendly Quick Installation For Residential & Commercial Use",
    series: "Modular Commercial Series",
    seriesSlug: "double-laminate-commercial",
    size: "2900x400mm",
    thickness: "26mm",
    color: "Multiple Wood Tones, Marble",
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
      "Application: Residential & Commercial Use. Design Style: Modern. Warranty: 2 Years. Feature: Multifunctional, Reusable, Fireproof, Eco-Friendly, Quick Installation, Waterproof. Surface: Wood Grain, Marble Veining. Installation: Quick Installation. Usage: Indoor Wall Panel Decoration, Room Divider. After-sale Service: Online Technical Support.",
    image: `${IMG_BASE}/PP-011.jpg`,
  },

  // ===== Custom Decorative Board Series =====
  {
    id: "pp-cd-012",
    code: "PP-012",
    name: "Modern Design Interior PVC Partition Wall Panel PVC Plastic Wall Cladding Board For Living Room Application Construction Sheet",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Walnut Brown, Gray",
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
      "Application: Living Room, Interior Construction. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: Wood Grain (Walnut Brown), Solid Gray. Surface: Matte. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-012.jpg`,
  },
  {
    id: "pp-cd-013",
    code: "PP-013",
    name: "New Design Interior PVC Partition Wall Panel PVC Plastic Wall Cladding Board For Building Partition Smooth Surface PVC Sheet",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Wood Tone, White Gray",
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
      "Application: Building Partition, Interior Decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: Waterproof, Fireproof, Moisture-Proof. Pattern: Wood Grain, Solid Color. Surface: Smooth. Usage: Commerce, Household, Administration. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-013.jpg`,
  },
  {
    id: "pp-cd-014",
    code: "PP-014",
    name: "Factory Price Interior Partition Panel Quick-install Low-dust Wood-like Panel For Home Renovation",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Light Gray",
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
      "Application: Home Renovation, Interior Partition. Design Style: Modern. Warranty: More Than 5 Years. Function: Quick-install, Low-dust, Waterproof, Fireproof, Moisture-Proof. Pattern: Solid Color (Light Gray), Wood-like. Surface: Matte. Usage: Household, Commerce. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-014.jpg`,
  },
  {
    id: "pp-cd-015",
    code: "PP-015",
    name: "Factory Price Modern Interior PVC Partition Panel Wood Decor Waterproof Fireproof Termite-resistant And Reusable",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Warm Beige, Wood Grain",
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
      "Application: Interior Decoration, Living Room. Design Style: Modern. Warranty: More Than 5 Years. Function: Wood Decor, Waterproof, Fireproof, Termite-resistant, Reusable. Pattern: Wood Grain (Warm Beige). Surface: Matte. Usage: Household, Commerce. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-015.jpg`,
  },
  {
    id: "pp-cd-016",
    code: "PP-016",
    name: "Factory Price Interior PVC & WPC Partition Panel Fire Retardant Eco-friendly Modern Living Room Waterproof Wood Decor",
    series: "Custom Decorative Board Series",
    seriesSlug: "custom-decorative-board",
    size: "400x26x2900mm",
    thickness: "26mm",
    color: "Medium Dark Brown",
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
      "Application: Living Room, Interior Decoration. Design Style: Modern. Warranty: More Than 5 Years. Function: PVC & WPC, Fire Retardant, Eco-friendly, Waterproof, Wood Decor. Pattern: Wood Grain (Medium Dark Brown). Surface: Matte. Usage: Household, Commerce. After-sale Service: Onsite Installation.",
    image: `${IMG_BASE}/PP-016.jpg`,
  },
];

// ===== FAQs =====
export const pvcPartitionFAQs = [
  {
    question: "What material are PVC partition panels made of?",
    answer:
      "PVC partition panels are made from PVC (polyvinyl chloride) material with hollow core honeycomb construction. The panels are waterproof, fireproof, moisture-proof, sound-absorbing and mould-proof. The hollow core honeycomb structure provides lightweight yet rigid performance, making panels easy to handle and install for interior partition applications.",
  },
  {
    question: "What sizes are available for PVC partition panels?",
    answer:
      "Standard size is 400x26x2900mm (width x thickness x length). The panel length is 2.9 meters (2900mm) with a width of 400mm and thickness of 26mm. Custom sizes are available upon request. The 2900mm length is designed to span from floor to ceiling in standard commercial spaces.",
  },
  {
    question: "Are PVC partition panels waterproof and fireproof?",
    answer:
      "Yes. PVC partition panels are 100% waterproof and fireproof. They are also moisture-proof, mould-proof, and anti-static. The fire retardant properties make them suitable for commercial applications requiring fire-rated materials. Panels meet interior wall decoration standards for offices, hotels and public buildings.",
  },
  {
    question: "How are PVC partition panels installed?",
    answer:
      "PVC partition panels feature easy installation with interlock or modular connection systems. The lightweight hollow core design allows for quick assembly without heavy tools. Panels connect using interlocking edges for secure fit. Onsite installation service is available. Surfaces feature wood grain, marble veining, or solid color finishes for modern decorative appearance.",
  },
  {
    question: "What applications are PVC partition panels used for?",
    answer:
      "PVC partition panels are designed for indoor wall panel decoration and room division in offices, hotels, apartments, commercial interiors, and residential spaces. They are ideal for creating office dividers, hotel partitions, apartment room separators, commercial space divisions, and home renovation projects. The modern design with wood grain, marble, and solid color finishes suits contemporary and minimalist interiors.",
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
