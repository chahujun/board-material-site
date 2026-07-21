// SPC Flooring — 产品数据集中管理
// 数据来源：Alibaba SPC Flooring product pages（2026-07 update）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-21: 从15个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null）

export interface SPCFlooringProduct {
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

export interface SPCFlooringSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const spcFlooringSeries: SPCFlooringSeries[] = [
  {
    slug: "standard-spc",
    name: "Standard SPC Flooring Series",
    nameZh: "标准SPC地板系列",
    description:
      "Standard SPC flooring with click installation for indoor use. 1220*180mm planks, 3.0mm to 5mm thickness, 0.3mm/0.5mm wear layer. ECO-friendly PVC material, modern design style, ideal for hotel and office decoration.",
  },
  {
    slug: "waterproof-spc",
    name: "Waterproof SPC Flooring Series",
    nameZh: "防水SPC地板系列",
    description:
      "Waterproof SPC vinyl flooring with click lock installation. 1210MM*180MM or 1220MM*180MM planks, 3.5-6mm thickness, 0.3-0.5mm wear layer. Made of PVC resin and calcium carbonate, suitable for hotel and home applications.",
  },
  {
    slug: "wear-resistant-spc",
    name: "Wear Resistant SPC Flooring Series",
    nameZh: "耐磨SPC地板系列",
    description:
      "Wear resistant SPC flooring with Unilin click lock system, anti-slip surface. Various sizes and thickness options (4-7mm). Waterproof, fireproof, eco-friendly for hotel, home, school, office applications.",
  },
];

const IMG_BASE = "/images/products/spc-flooring";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const spcFlooringProducts: SPCFlooringProduct[] = [
  // ===== Standard SPC Flooring Series =====
  {
    id: "spc-std-001",
    code: "SF-001",
    name: "Home Decoration Materials Wooden Color Pvc Flooring Interlock",
    series: "Standard SPC Flooring Series",
    seriesSlug: "standard-spc",
    size: "1220*180mm",
    thickness: "3.0mm-5mm",
    color: "Wooden Color",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "30X20X20cm",
    netWeightPerCarton: "1.5kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Wear-Resisting Layer. Installation Method: Click Vinyl PVC Flooring. Warranty: More Than 5 Years. Wear Layer: 0.3mm/0.5mm. Raw Material: ECO-friendly PVC Material.",
    image: `${IMG_BASE}/SF-001.jpg`,
  },
  {
    id: "spc-std-004",
    code: "SF-004",
    name: "China Factory Price Vinyl Spc Plastic Piso Flooring Click Spc Flooring",
    series: "Standard SPC Flooring Series",
    seriesSlug: "standard-spc",
    size: "1220*180mm",
    thickness: "3.0mm-5mm",
    color: "Customizable",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "30X20X20cm",
    netWeightPerCarton: "1.5kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Usage: Indoor. Application: Office Building. Design Style: Modern. Surface Treatment: Wear-Resisting Layer. Installation Method: Click Vinyl PVC Flooring. Warranty: More Than 5 Years. Wear Layer: 0.3mm/0.5mm. Raw Material: ECO-friendly PVC Material.",
    image: `${IMG_BASE}/SF-004.jpg`,
  },
  {
    id: "spc-std-005",
    code: "SF-005",
    name: "Embossed Texture Pvc Virgin Material Plastic Vinyl Tiles Spc Flooring With Factory Price",
    series: "Standard SPC Flooring Series",
    seriesSlug: "standard-spc",
    size: "1220*180mm",
    thickness: "3.0mm-5mm",
    color: "Embossed Texture",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "30X20X20cm",
    netWeightPerCarton: "1.5kg",
    weightPerPiece: "1.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Wear-Resisting Layer. Installation Method: Click Vinyl PVC Flooring. Warranty: More Than 5 Years. Wear Layer: 0.3mm/0.5mm. Raw Material: ECO-friendly PVC Material.",
    image: `${IMG_BASE}/SF-005.jpg`,
  },

  // ===== Waterproof SPC Flooring Series =====
  {
    id: "spc-wp-006",
    code: "SF-006",
    name: "4mm Waterproof Spc Vinyl Flooring Plastic Floor Covering In Pisos Pvc",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Waterproof Wood Grain",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-006.jpg`,
  },
  {
    id: "spc-wp-007",
    code: "SF-007",
    name: "Piso De Madera Floor Tiles Fire Proof Vinyl Flooring Pvc",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Wood Grain Fire Proof",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-007.jpg`,
  },
  {
    id: "spc-wp-009",
    code: "SF-009",
    name: "Piso De Madera Floor Tiles Fire Proof Vinyl Flooring Pvc",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Natural Wood",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-009.jpg`,
  },
  {
    id: "spc-wp-010",
    code: "SF-010",
    name: "4mm Piso De Madera Floor Tiles Fire Proof Vinyl Flooring Pvc",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Light Wood Grain",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-010.jpg`,
  },
  {
    id: "spc-wp-011",
    code: "SF-011",
    name: "Waterproof Durable Flooring Vinyl Vynilic Diamond Click Vinyl Pvc Spc Flooring",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Diamond Pattern",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-011.jpg`,
  },
  {
    id: "spc-wp-013",
    code: "SF-013",
    name: "Piso Spc Uv Coating Waterproof Spc Flooring Tile 4mm 5mm 6mm Plastic Material Click Lock Lvt Pvc Vinyl Plank Flooring",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "UV Coated Wood",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-013.jpg`,
  },
  {
    id: "spc-wp-014",
    code: "SF-014",
    name: "Deep Embossed Fireproof Soundproof Interlocking Home Decoration Pvc Spc Floor Tile Piso Spc",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Deep Embossed Wood",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-014.jpg`,
  },
  {
    id: "spc-wp-015",
    code: "SF-015",
    name: "Piso Spc Plastic Rigid Core Pvc Tile Lvt Spc Flooring Luxury Vinyl Plank Flooring Click Lock Vinyl Floor For Indoor",
    series: "Waterproof SPC Flooring Series",
    seriesSlug: "waterproof-spc",
    size: "1210MM*180MM / 1220MM*180MM",
    thickness: "3.5/4/5/6MM",
    color: "Luxury Vinyl Plank",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 13,
    cartonSize: "125X20X2cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.62kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC Resin + Calcium Carbonate. Usage: Indoor. Application: Hotel. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3-0.5mm. Raw Material: ECO-friendly PVC Material. Installation Method: Click Vinyl PVC Flooring.",
    image: `${IMG_BASE}/SF-015.jpg`,
  },

  // ===== Wear Resistant SPC Flooring Series =====
  {
    id: "spc-wr-002",
    code: "SF-002",
    name: "Vinyl Plank Spc Flooring 4mm Wear Resistant Unilin Click Lock Flooring",
    series: "Wear Resistant SPC Flooring Series",
    seriesSlug: "wear-resistant-spc",
    size: "Various (Customizable)",
    thickness: "3.5/4/5/6/7MM",
    color: "Modern Wood Grain",
    moq: 1,
    unit: "20ft Container",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "10X10X1cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "8.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Usage: Indoor. Application: Indoor hotel, home, school, office. Design Style: Modern. Surface Treatment: Simple. Product Type: Vinyl Flooring. Warranty: 2 Years. Wear Layer: 0.3mm/0.5mm. Advantage: Waterproof, Fireproof, Eco Friendly, Easy Installation. Installation: Clicklock.",
    image: `${IMG_BASE}/SF-002.jpg`,
  },
  {
    id: "spc-wr-003",
    code: "SF-003",
    name: "Interior Waterproof Plastic Pvc Vinyl Spc Flooring",
    series: "Wear Resistant SPC Flooring Series",
    seriesSlug: "wear-resistant-spc",
    size: "6*36'' / 6*48'' / 7*48'' / 9*48''",
    thickness: "4/5/6mm",
    color: "Customizable",
    moq: 1000,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton + Wood Pallet",
    pcsPerCarton: 12,
    cartonSize: "122X18X0.4cm",
    netWeightPerCarton: "8.0kg",
    weightPerPiece: "0.67kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Usage: Indoor. Application: Hotel, Bus, Home, Hall, Corridor. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: 2 Years. Wear Layer: 0.3mm-0.7mm. Backing: PVC Hard Backing, EVA, IXPE.",
    image: `${IMG_BASE}/SF-003.jpg`,
  },
  {
    id: "spc-wr-008",
    code: "SF-008",
    name: "Spc Flooring 4mm Wear Resistant Anti-slip Unilin Click Lock Vinyl Plank Waterproof Plastic Flooring",
    series: "Wear Resistant SPC Flooring Series",
    seriesSlug: "wear-resistant-spc",
    size: "Various (Customizable)",
    thickness: "4mm",
    color: "Colorful",
    moq: 500,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "2X2X20cm",
    netWeightPerCarton: "0.05kg",
    weightPerPiece: "0.05kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: SPC. Usage: Indoor. Application: Indoor. Design Style: Modern. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: More Than 5 Years. Wear Layer: 0.3mm/0.5mm/0.7mm. Installation: Unilin Click System. Advantage: Waterproof, Fireproof, Antiskid. Pattern: Various. Packing: Pallet.",
    image: `${IMG_BASE}/SF-008.jpg`,
  },
  {
    id: "spc-wr-012",
    code: "SF-012",
    name: "European Standard Spc Floor Fire Resistance Moisture-proof Decorative Floor",
    series: "Wear Resistant SPC Flooring Series",
    seriesSlug: "wear-resistant-spc",
    size: "Various (Customizable)",
    thickness: "4mm-6mm",
    color: "Natural Wood",
    moq: 100,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wood Box + Pallet",
    pcsPerCarton: 1,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Usage: Indoor. Application: Home Office. Design Style: European. Surface Treatment: Simple Color. Product Type: SPC Flooring. Warranty: More Than 5 Years. Feature: Waterproof, Wear Resistant, Anti-slip. Surface Texture: Natural Wood. Certificate: CE / ISO9001. Advantage: Eco-friendly, 100% Waterproof. Installation: Install Easily.",
    image: `${IMG_BASE}/SF-012.jpg`,
  },
];

// ===== SEO / FAQ =====
export const spcFlooringFAQs = [
  {
    question: "What material is SPC flooring made of?",
    answer:
      "SPC (Stone Plastic Composite) flooring is primarily made from PVC resin combined with calcium carbonate, creating a rigid and dimensionally stable core. The Standard and Wear Resistant series use ECO-friendly PVC material, while the Waterproof series uses PVC resin + calcium carbonate. All products feature a wear-resisting layer (0.3mm to 0.7mm depending on model) and are designed for indoor use with modern design styling.",
  },
  {
    question: "What sizes and thicknesses are available?",
    answer:
      "SPC flooring comes in multiple sizes and thicknesses across our three series. The Standard SPC series features 1220*180mm planks with 3.0mm-5mm thickness. The Waterproof SPC series offers 1210MM*180MM or 1220MM*180MM planks with 3.5/4/5/6MM thickness. The Wear Resistant SPC series supports various customizable sizes including 6*36'', 6*48'', 7*48'', and 9*48'' with thickness options from 4mm to 7mm.",
  },
  {
    question: "Is SPC flooring waterproof?",
    answer:
      "Yes, SPC flooring is 100% waterproof. The rigid core construction made of PVC and calcium carbonate provides excellent water resistance, making it suitable for humid environments such as bathrooms, kitchens, and coastal areas. Our Waterproof SPC series is specifically engineered for superior moisture protection, and the Wear Resistant series also offers waterproof and fireproof properties with anti-slip surfaces for added safety.",
  },
  {
    question: "What applications is SPC flooring suitable for?",
    answer:
      "SPC flooring is designed for indoor applications across residential and commercial spaces. Common applications include hotels, homes, offices, schools, halls, corridors, and buses. The Standard series is ideal for hotel and office building decoration, the Waterproof series suits hotel and home environments, while the Wear Resistant series with Unilin click lock system is perfect for high-traffic areas in hotels, homes, schools, and offices.",
  },
  {
    question: "What is the MOQ and packaging?",
    answer:
      "Minimum order quantities vary by series. The Standard SPC series requires a 500 sqm MOQ with pallet packaging (1 pc per carton, 30X20X20cm carton, 1.5kg per piece). The Waterproof SPC series has a 500 sqm MOQ with carton + wood pallet packaging (13 pcs per carton, 125X20X2cm carton, 0.62kg per piece). The Wear Resistant SPC series ranges from 1 container to 1000 sqm MOQ with various packaging options including pallet, carton + wood pallet, and wood box + pallet configurations.",
  },
];

// ===== Contact Info =====
export const SPC_FLOORING_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};

// ===== Helper Functions =====
export function formatPrice(product: SPCFlooringProduct): string {
  if (product.unitPrice === null) return "Contact for Quote";
  return `$${product.unitPrice.toFixed(2)} / ${product.unit}`;
}

export function formatPriceShort(product: SPCFlooringProduct): string {
  if (product.unitPrice === null) return "Quote";
  return `$${product.unitPrice.toFixed(2)}`;
}

export function getProductsBySeries(seriesSlug: string): SPCFlooringProduct[] {
  return spcFlooringProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(spcFlooringProducts.map((p) => p.size))];
}

export function getUniqueSeries(): SPCFlooringSeries[] {
  return spcFlooringSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(spcFlooringProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(spcFlooringProducts.map((p) => p.code))];
}
