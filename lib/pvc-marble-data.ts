// PVC Marble Sheet / UV Board — 产品数据集中管理
// 数据来源：Alibaba PVC Marble Sheet product pages（2026-07 update）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-21: 从16个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null）

export interface PVCMarbleProduct {
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

export interface PVCMarbleSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const pvcMarbleSeries: PVCMarbleSeries[] = [
  {
    slug: "waterproof-uv-board",
    name: "Waterproof UV Board Series",
    nameZh: "防水UV板系列",
    description:
      "3mm waterproof UV coated PVC marble sheets in 1220*2440mm size. High-glossy UV coating surface, fire retardant and eco-friendly. Ideal for hotel, office and interior wall decoration with 2-5 year warranty.",
  },
  {
    slug: "high-gloss-marble",
    name: "High Gloss Marble Series",
    nameZh: "高光大理石系列",
    description:
      "High glossy PVC marble sheets in 1220*2440mm / 1220*2800mm / 1220*2900mm sizes. UV resistant surface with marble effect, eco-friendly and easy to install for interior wall decoration.",
  },
  {
    slug: "kitchen-cabinet-board",
    name: "Kitchen Cabinet Board Series",
    nameZh: "橱柜板系列",
    description:
      "UV coated marble sheet for kitchen cabinets and bathroom. 1220*2440mm size, waterproof, fireproof, scratch-resistant and environmental. Modern wall panel for offices, hotels, hospitals and public places.",
  },
];

const IMG_BASE = "/images/products/pvc-marble-sheet";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const pvcMarbleProducts: PVCMarbleProduct[] = [
  // ===== Waterproof UV Board Series =====
  {
    id: "pm-uv-001",
    code: "PM-001",
    name: "3mm Waterproof Uv Panel Pvc Marble Sheet For Wall",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220mm*2440mm",
    thickness: "2.5mm/2.8mm/3mm/3.2mm/3.5mm/3.8mm",
    color: "Marble, Grain, Wood Grain, Solid Color (Customizable)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wood Pallet + Corner Protection + Plastic Straps",
    pcsPerCarton: 1,
    cartonSize: "122X244X0.3cm",
    netWeightPerCarton: "18.0kg",
    weightPerPiece: "18.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: 35% PVC, 62% CaCO3, 3% Additive. Surface Treatment: High-glossy, UV coating. Installation: Aluminum Frame or glue. Application: Hotel. Warranty: 2 Years. Delivery Time: 7-15 days for one container. Free sample available.",
    image: `${IMG_BASE}/PM-001.jpg`,
  },
  {
    id: "pm-uv-002",
    code: "PM-002",
    name: "High Glossy Interior Wall Pvc Sheets For Modern Decoration",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm",
    thickness: "2mm-5mm",
    color: "Marble, High Glossy (Customizable)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "245X30X10cm",
    netWeightPerCarton: "30.0kg",
    weightPerPiece: "30.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: 35% PVC, 62% CaCO3, 3% Additive. Material Feature: Oil Resistant, Heat Resistant, Fire Resistant, UV Resistant, Anti-Aging. Application: Interior wall decoration. Advantage: Eco-friendly, fireproof, waterproof, easy to install. Weight: 12.5kg/pc-32kg/pc. Transportation: Sea freight.",
    image: `${IMG_BASE}/PM-002.jpg`,
  },
  {
    id: "pm-uv-003",
    code: "PM-003",
    name: "1220*2440mm Pvc Marble Sheet 3mm Laminated Wall Cladding For Hotel Office Exterior Interior Walls",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm / 1220*2800mm / 1220*2900mm",
    thickness: "3mm",
    color: "Optional (High Glossy)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "244X122X10cm",
    netWeightPerCarton: "5.0kg",
    weightPerPiece: "5.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Feature: Eco-Friendly, Waterproof, Fire Retardant. Installation: Easy Installation. Surface Treatment: Polished. Surface: Glossy. Design Style: Modern. Warranty: 2 Years.",
    image: `${IMG_BASE}/PM-003.jpg`,
  },
  {
    id: "pm-uv-005",
    code: "PM-005",
    name: "1220*2440mm Pvc Marble Sheet Uv Coating Pvc Marble Sheet Waterproof",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm / 1220*2800mm / 1220*2900mm",
    thickness: "3mm",
    color: "Optional (High Glossy)",
    moq: 500,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "290X122X10cm",
    netWeightPerCarton: "40.0kg",
    weightPerPiece: "40.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Nominal Product Length: 8ft, 4ft. Application: Hotel. Feature: Waterproof, Eco-Friendly, Fire Retardant. Installation: Easy Installation. Surface Treatment: Polished. Surface: Glossy. Design Style: Modern. Warranty: 2 Years.",
    image: `${IMG_BASE}/PM-005.jpg`,
  },
  {
    id: "pm-uv-007",
    code: "PM-007",
    name: "1220*2440mm Pvc Marble Sheet Uv Coating Pvc Marble Sheet Waterproof (Model UV01)",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm / 1220*2800mm / 1220*2900mm",
    thickness: "3mm",
    color: "Optional (High Glossy)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Nominal Product Length: 4ft, 8ft. Application: Hotel. Feature: Eco-Friendly, Fire Retardant, Waterproof. Installation: Easy Installation. Surface Treatment: Polished. Surface: Glossy. Design Style: Modern. Warranty: 5 Years.",
    image: `${IMG_BASE}/PM-007.jpg`,
  },
  {
    id: "pm-uv-009",
    code: "PM-009",
    name: "Decorative Wall Panel Pvc Marble Sheet 1220*2440*2.8mm For Decor Interior Uv Board",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm / 1220*2800mm / 1220*2900mm",
    thickness: "2.8mm",
    color: "Optional (High Glossy)",
    moq: 500,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "290X122X10cm",
    netWeightPerCarton: "50.0kg",
    weightPerPiece: "50.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Feature: Waterproof, Eco-Friendly. Installation: Easy Installation. Surface Treatment: Polished. Surface: Glossy. Design Style: Modern. Warranty: 2 Years.",
    image: `${IMG_BASE}/PM-009.jpg`,
  },
  {
    id: "pm-uv-010",
    code: "PM-010",
    name: "Pvc Marble Interior Uv Board Uv Board Marble Uv Board Marble Wall",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm / 1220*2800mm / 1220*2900mm",
    thickness: "3mm",
    color: "Optional (High Glossy)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Nominal Product Length: 8ft, 4ft. Application: Hotel. Feature: Eco-Friendly, Fire Retardant, Waterproof. Installation: Easy Installation. Surface Treatment: Polished. Surface: Glossy. Design Style: Modern. Warranty: 5 Years.",
    image: `${IMG_BASE}/PM-010.jpg`,
  },
  {
    id: "pm-uv-011",
    code: "PM-011",
    name: "1220*2440mm Pvc Waterproof Marble Sheet Pvc Uv Marble Sheet Wall Panel Marble Pvc Sheet",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2440mm / 1220*2800mm / 1220*2900mm",
    thickness: "3mm",
    color: "Optional (High Glossy)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "244X122X10cm",
    netWeightPerCarton: "20.0kg",
    weightPerPiece: "20.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Feature: Waterproof. Installation: Easy Installation. Surface Treatment: Polished. Surface: Glossy. Design Style: Modern. Warranty: 2 Years.",
    image: `${IMG_BASE}/PM-011.jpg`,
  },
  {
    id: "pm-uv-012",
    code: "PM-012",
    name: "1220*2800mm*3mm Waterproof Uv Coating Pvc Marble Interior Wall Boards",
    series: "Waterproof UV Board Series",
    seriesSlug: "waterproof-uv-board",
    size: "1220*2800mm",
    thickness: "3mm",
    color: "Marble, Grain, Wood Grain, Solid Color (Customizable)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wood Pallet + Corner Protection + Plastic Straps",
    pcsPerCarton: 1,
    cartonSize: "30X30X10cm",
    netWeightPerCarton: "2.0kg",
    weightPerPiece: "2.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: 35% PVC, 62% CaCO3, 3% Additive. Surface Treatment: High-glossy, UV coating. Installation: Aluminum Frame or glue. Application: Hotel. Warranty: 2 Years. Delivery Time: 7-15 days for one container. Free sample available.",
    image: `${IMG_BASE}/PM-012.jpg`,
  },

  // ===== High Gloss Marble Series =====
  {
    id: "pm-hg-006",
    code: "PM-006",
    name: "Wholesale Price High Glossy 1220*2440mm*3mm Uv Marble Pvc Sheets Panel For Wall Decoration",
    series: "High Gloss Marble Series",
    seriesSlug: "high-gloss-marble",
    size: "1220*2440mm",
    thickness: "2mm-5mm",
    color: "Marble, High Glossy (Customizable)",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "290X30X1cm",
    netWeightPerCarton: "15.0kg",
    weightPerPiece: "15.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: 35% PVC, 62% CaCO3, 3% Additive. Material Feature: UV Resistant. Processing Service: Cutting. Application: Interior wall decoration. Surface: Marble, high glossy. Advantage: Eco-friendly, fireproof, waterproof, easy to install. Weight: 12.5kg/pc-32kg/pc. Transportation: Sea freight.",
    image: `${IMG_BASE}/PM-006.jpg`,
  },

  // ===== Kitchen Cabinet Board Series =====
  {
    id: "pm-kc-004",
    code: "PM-004",
    name: "UV Coated Marble Sheet Pvc Kitchen Cabinets High Gloss Pvc Uv Marble Panel",
    series: "Kitchen Cabinet Board Series",
    seriesSlug: "kitchen-cabinet-board",
    size: "1220mm*2440mm (1.22m*2.44m)",
    thickness: "2mm-5mm",
    color: "Marble, Wood, 3D, Solid & Pearl",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wooden (Plastic) Pallet, PE Bag Liner",
    pcsPerCarton: 1,
    cartonSize: "30X30X1cm",
    netWeightPerCarton: "2.0kg",
    weightPerPiece: "2.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Design Style: Modern. Warranty: 3 Years. Advantage: Waterproof, fireproof, scratch-resistant, environmental. Surface: UV Protect. Feature: Environment Friendly. Type: Modern Wall Panel. Usage: Offices, Hotels, Hospitals, Public places.",
    image: `${IMG_BASE}/PM-004.jpg`,
  },
  {
    id: "pm-kc-008",
    code: "PM-008",
    name: "UV Coated Marble Sheet Pvc Kitchen Cabinets High Gloss Uv Marble Panel",
    series: "Kitchen Cabinet Board Series",
    seriesSlug: "kitchen-cabinet-board",
    size: "1220mm*2440mm (1.22m*2.44m)",
    thickness: "2mm-5mm",
    color: "Marble, Wood, 3D, Solid & Pearl",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wooden (Plastic) Pallet, PE Bag Liner",
    pcsPerCarton: 1,
    cartonSize: "30X30X1cm",
    netWeightPerCarton: "2.0kg",
    weightPerPiece: "2.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Bathroom. Design Style: Contemporary. Warranty: 3 Years. Advantage: Waterproof, fireproof, scratch-resistant, environmental. Surface: UV Protect. Feature: Environment Friendly. Type: Modern Wall Panel. Usage: Offices, Hotels, Hospitals, Public places.",
    image: `${IMG_BASE}/PM-008.jpg`,
  },
  {
    id: "pm-kc-013",
    code: "PM-013",
    name: "Hot Sale Uv Coated Kitchen Cabinets High Gloss Wall Pvc Marble Sheet For Bathroom",
    series: "Kitchen Cabinet Board Series",
    seriesSlug: "kitchen-cabinet-board",
    size: "1220mm*2440mm (1.22m*2.44m)",
    thickness: "2mm-5mm",
    color: "Marble, Wood, 3D, Solid & Pearl",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wooden (Plastic) Pallet, PE Bag Liner",
    pcsPerCarton: 1,
    cartonSize: "30X30X1cm",
    netWeightPerCarton: "2.0kg",
    weightPerPiece: "2.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Design Style: Modern. Warranty: 3 Years. Advantage: Waterproof, fireproof, scratch-resistant, environmental. Surface: UV Protect. Feature: Environment Friendly. Type: Modern Wall Panel. Usage: Offices, Hotels, Hospitals, Public places.",
    image: `${IMG_BASE}/PM-013.jpg`,
  },
  {
    id: "pm-kc-014",
    code: "PM-014",
    name: "UV Coated Marble Sheet Pvc Kitchen Cabinets High Gloss Marbl Pvc Shower Wall Panel",
    series: "Kitchen Cabinet Board Series",
    seriesSlug: "kitchen-cabinet-board",
    size: "1220mm*2440mm (1.22m*2.44m)",
    thickness: "2mm-5mm",
    color: "Marble, Wood, 3D, Solid & Pearl",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wooden (Plastic) Pallet, PE Bag Liner",
    pcsPerCarton: 1,
    cartonSize: "30X30X10cm",
    netWeightPerCarton: "2.0kg",
    weightPerPiece: "2.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Office Building. Design Style: Modern. Warranty: 3 Years. Advantage: Waterproof, fireproof, scratch-resistant, environmental. Surface: UV Protect. Feature: Environment Friendly. Type: Modern Wall Panel. Usage: Offices, Hotels, Hospitals, Public places. HS Code: 392590.",
    image: `${IMG_BASE}/PM-014.jpg`,
  },
  {
    id: "pm-kc-015",
    code: "PM-015",
    name: "Pvc Wall Panel Uv Marble Sheet Interior Wall Decorative Uv Panels",
    series: "Kitchen Cabinet Board Series",
    seriesSlug: "kitchen-cabinet-board",
    size: "1220mm*2440mm (1.22m*2.44m)",
    thickness: "2mm-5mm",
    color: "Marble, Wood, 3D, Solid & Pearl",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Wooden (Plastic) Pallet, PE Bag Liner",
    pcsPerCarton: 1,
    cartonSize: "30X30X1cm",
    netWeightPerCarton: "2.0kg",
    weightPerPiece: "2.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Design Style: Modern. Warranty: 3 Years. Advantage: Waterproof, fireproof, scratch-resistant, environmental. Surface: UV Protect. Feature: Environment Friendly. Type: Modern Wall Panel. Usage: Offices, Hotels, Hospitals, Public places. HS Code: 392590.",
    image: `${IMG_BASE}/PM-015.jpg`,
  },
  {
    id: "pm-kc-016",
    code: "PM-016",
    name: "UV Coated Marble Sheet Pvc Kitchen Cabinets High Gloss Marble Pvc Shower Wall Panel Waterproof",
    series: "Kitchen Cabinet Board Series",
    seriesSlug: "kitchen-cabinet-board",
    size: "1220mm*2440mm (1.22m*2.44m)",
    thickness: "2mm-5mm",
    color: "Marble, Wood, 3D, Solid & Pearl",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet",
    pcsPerCarton: 1,
    cartonSize: "290X125X10cm",
    netWeightPerCarton: "18.5kg",
    weightPerPiece: "18.5kg",
    leadTime: LEAD_TIME,
    remarks:
      "Material: PVC. Application: Hotel. Feature: Waterproof, Eco-Friendly, Fire Retardant, Moisture-Proof, Easily Clean. Design Style: Modern. Warranty: 3 Years. Advantage: Waterproof, fireproof, scratch-resistant, environmental. Surface: UV Protect. Type: Modern Wall Panel. Usage: Offices, Hotels, Hospitals, Public places.",
    image: `${IMG_BASE}/PM-016.jpg`,
  },
];

// ===== SEO / FAQ =====
export const pvcMarbleFAQs = [
  {
    question: "What material are PVC marble sheets / UV boards made of?",
    answer:
      "Our PVC marble sheets and UV boards are primarily made from PVC (polyvinyl chloride), with a typical composition of 35% PVC, 62% CaCO3, and 3% additive for the waterproof UV board series. The surface is treated with a high-glossy UV coating that provides a polished, marble-like finish. The panels are eco-friendly, fire retardant, and UV resistant, with a warranty ranging from 2 to 5 years depending on the model.",
  },
  {
    question: "What sizes are available for PVC marble sheets?",
    answer:
      "PVC marble sheets are available in multiple sizes. The Waterproof UV Board Series primarily uses 1220mm*2440mm, with additional options of 1220*2800mm and 1220*2900mm for select models. The High Gloss Marble Series is offered in 1220*2440mm. The Kitchen Cabinet Board Series uses a standard 1220mm*2440mm (1.22m*2.44m) size. Thickness options range from 2mm to 5mm, with 3mm being the most common for UV coated panels.",
  },
  {
    question: "Are PVC marble sheets waterproof?",
    answer:
      "Yes, PVC marble sheets are fully waterproof, moisture-proof, and fire retardant. The UV coating surface adds additional protection against water, scratches, and UV damage. This makes them highly suitable for humid environments such as bathrooms, kitchens, shower walls, and coastal areas. The waterproof properties also ensure easy maintenance, requiring only a simple wipe to keep the surface clean and glossy.",
  },
  {
    question: "What applications are PVC marble sheets / UV boards used for?",
    answer:
      "PVC marble sheets and UV boards are versatile building materials used for interior wall decoration in hotels, offices, hospitals, public places, kitchens, and bathrooms. They are ideal for kitchen cabinets, shower wall panels, TV background walls, and modern decorative wall cladding. The panels are suitable for both residential and commercial projects, offering a modern design style with marble, wood grain, 3D, and solid color finishes.",
  },
  {
    question: "How are PVC marble sheets installed?",
    answer:
      "PVC marble sheets are designed for easy installation. They can be installed using an aluminum frame system or directly glued to the wall surface. The lightweight panels (typically 2-50kg per piece depending on size and thickness) make handling and cutting on-site straightforward. Free samples are available for testing before bulk orders. Standard delivery time is 7-15 days for one container, with pallet packaging that includes corner protection and plastic straps for safe transportation.",
  },
];

// ===== Contact Info =====
export const PVC_MARBLE_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};

// ===== Helper Functions =====
export function formatPrice(product: PVCMarbleProduct): string {
  if (product.unitPrice === null) return "Contact for Quote";
  return `$${product.unitPrice.toFixed(2)} / ${product.unit}`;
}

export function formatPriceShort(product: PVCMarbleProduct): string {
  if (product.unitPrice === null) return "Quote";
  return `$${product.unitPrice.toFixed(2)}`;
}

export function getProductsBySeries(seriesSlug: string): PVCMarbleProduct[] {
  return pvcMarbleProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(pvcMarbleProducts.map((p) => p.size))];
}

export function getUniqueSeries(): PVCMarbleSeries[] {
  return pvcMarbleSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(pvcMarbleProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(pvcMarbleProducts.map((p) => p.code))];
}
