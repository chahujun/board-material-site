// WPC Doors — 产品数据集中管理
// 数据来源：Alibaba WPC Door product pages（2026-07 update）
// 所有型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 2026-07-21: 从12个Alibaba详情页重新抓取，更新全部产品参数和图片
//   按用户要求，不展示价格（unitPrice: null）

export interface WPCDoorProduct {
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

export interface WPCDoorSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const wpcDoorSeries: WPCDoorSeries[] = [
  {
    slug: "interior-wpc-door",
    name: "Interior WPC Door Series",
    nameZh: "室内WPC门系列",
    description:
      "Interior WPC doors made of PVC composite material. Waterproof, fire prevention, durable for home office, hotel and bedroom applications. Push and pull opening method with customizable sizes.",
  },
  {
    slug: "door-frame",
    name: "Door Frame Series",
    nameZh: "门框系列",
    description:
      "WPC door frames and profiles for interior doors. Hollow and solid profiles available in multiple widths (10-24cm). Waterproof, simple design for teak wood door frame applications.",
  },
  {
    slug: "hidden-door",
    name: "Hidden Door Series",
    nameZh: "隐形门系列",
    description:
      "Hidden doors with decorative panels for hotel, living room and commercial spaces. Simple and easy installation, factory wholesale customizable. Machine-pressed WPC composite material.",
  },
];

const IMG_BASE = "/images/products/wpc-door";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const wpcDoorProducts: WPCDoorProduct[] = [
  // ===== Interior WPC Door Series =====
  {
    id: "wpc-id-001",
    code: "WD-001",
    name: "Waterproof Interior Pvc Wpc Room Wooden Door Wpc Sliding Doors Interior Wooden Doors",
    series: "Interior WPC Door Series",
    seriesSlug: "interior-wpc-door",
    size: "2000x800mm (Customizable)",
    thickness: "2mm/3.5mm skin",
    color: "Wood Grain",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-001.jpg`,
  },
  {
    id: "wpc-id-002",
    code: "WD-002",
    name: "2mm 3.5mm Thick Durable Wooden Plastic Material Pvc Composite Door Wood Wpc Door",
    series: "Interior WPC Door Series",
    seriesSlug: "interior-wpc-door",
    size: "2000x800mm (Customizable)",
    thickness: "2mm/3.5mm skin",
    color: "Wood Grain",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-002.jpg`,
  },
  {
    id: "wpc-id-004",
    code: "WD-004",
    name: "Factory Direct Selling White Pvc Wpc Door For Interior Doors With Handles",
    series: "Interior WPC Door Series",
    seriesSlug: "interior-wpc-door",
    size: "2000x800mm (Customizable)",
    thickness: "2mm/3.5mm skin",
    color: "White",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-004.jpg`,
  },
  {
    id: "wpc-id-005",
    code: "WD-005",
    name: "Wpc Wood Plastic Composite Mdf Board 4*8ft 28mm Wpc Door",
    series: "Interior WPC Door Series",
    seriesSlug: "interior-wpc-door",
    size: "1220x2440mm (4*8ft)",
    thickness: "28mm",
    color: "Natural Wood",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-005.jpg`,
  },
  {
    id: "wpc-id-006",
    code: "WD-006",
    name: "Flush Hotel Door Wooden Bedroom Mdf Composite Internal Room Wood Wpc Interior Doors",
    series: "Interior WPC Door Series",
    seriesSlug: "interior-wpc-door",
    size: "2000x800mm (Customizable)",
    thickness: "35mm",
    color: "Wood Grain Flush",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-006.jpg`,
  },

  // ===== Door Frame Series =====
  {
    id: "wpc-df-003",
    code: "WD-003",
    name: "High Quality Mdf Simple Design Custom Wholesale Hollow Wpc Door Frame Wpc Door Frame Profile Interior Teak Wood Door Design",
    series: "Door Frame Series",
    seriesSlug: "door-frame",
    size: "10/12/14/20/24cm width",
    thickness: "10-24cm profile",
    color: "Teak Wood",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 5,
    cartonSize: "210X25X10cm",
    netWeightPerCarton: "15.0kg",
    weightPerPiece: "3.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-003.jpg`,
  },
  {
    id: "wpc-df-007",
    code: "WD-007",
    name: "Waterproof Wpc Door Frame 10/12/14/20/24cm Interior Door Frames Made In China",
    series: "Door Frame Series",
    seriesSlug: "door-frame",
    size: "10/12/14/20/24cm width",
    thickness: "10-24cm profile",
    color: "White/Wood Grain",
    moq: 100,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 5,
    cartonSize: "210X25X10cm",
    netWeightPerCarton: "15.0kg",
    weightPerPiece: "3.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-007.jpg`,
  },

  // ===== Hidden Door Series =====
  {
    id: "wpc-hd-008",
    code: "WD-008",
    name: "Wpc Door Machine Panel Hidden Door Decorative Simple And Easy Installation Wholesale Customized High Quality Doors",
    series: "Hidden Door Series",
    seriesSlug: "hidden-door",
    size: "2000x800mm (Customizable)",
    thickness: "35mm",
    color: "White Decorative",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-008.jpg`,
  },
  {
    id: "wpc-hd-009",
    code: "WD-009",
    name: "Wpc Door Machine Panel Hidden Door Factory Wholesale Customizable Decorative Door Hotel Living Room Easy To Install",
    series: "Hidden Door Series",
    seriesSlug: "hidden-door",
    size: "2000x800mm (Customizable)",
    thickness: "35mm",
    color: "Wood Grain Decorative",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-009.jpg`,
  },
  {
    id: "wpc-hd-010",
    code: "WD-010",
    name: "Wpc Door Machine Panel Hidden Door Factory Wholesale Customizable Decorative Door Hotel Living Room Easy To Install",
    series: "Hidden Door Series",
    seriesSlug: "hidden-door",
    size: "2000x800mm (Customizable)",
    thickness: "35mm",
    color: "Grey Decorative",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-010.jpg`,
  },
  {
    id: "wpc-hd-011",
    code: "WD-011",
    name: "Wpc Door Panel Hidden Door Decorative Simple And Easy Installation Wholesale Customized High Quality Doors",
    series: "Hidden Door Series",
    seriesSlug: "hidden-door",
    size: "2000x800mm (Customizable)",
    thickness: "35mm",
    color: "White Panel",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-011.jpg`,
  },
  {
    id: "wpc-hd-012",
    code: "WD-012",
    name: "Wpc Door Panel Hidden Door Decorative Simple And Easy Installation Wholesale Customized High Quality Doors Machine",
    series: "Hidden Door Series",
    seriesSlug: "hidden-door",
    size: "2000x800mm (Customizable)",
    thickness: "35mm",
    color: "Wood Grain Panel",
    moq: 50,
    unit: "pcs",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Carton",
    pcsPerCarton: 1,
    cartonSize: "205X85X10cm",
    netWeightPerCarton: "25.0kg",
    weightPerPiece: "25.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Feature: fire prevention. Opening Method: Push and Pull. Application: Home Office. Main Material: Polymer. Material: PVC. Door Material: Composite.",
    image: `${IMG_BASE}/WD-012.jpg`,
  },
];

// ===== SEO / FAQ =====
export const wpcDoorFAQs = [
  {
    question: "What material are WPC doors made of?",
    answer:
      "Our WPC doors are made of PVC composite material, a wood-plastic composite that is durable and moisture-resistant. The doors combine polymer and PVC with composite door material construction, providing a stable, waterproof, and fire prevention solution suitable for home office, hotel, and bedroom applications.",
  },
  {
    question: "What sizes are available for WPC doors?",
    answer:
      "Standard WPC door size is 2000x800mm and is customizable to project requirements. Door frames are available in multiple widths of 10/12/14/20/24cm. WPC door boards are also available in 4*8ft (1220x2440mm) with 28mm thickness. Thickness options for doors range from 2mm/3.5mm skin to 28mm and 35mm depending on the model and series.",
  },
  {
    question: "Are WPC doors waterproof and fireproof?",
    answer:
      "Yes, WPC doors feature fire prevention and waterproof properties. The PVC composite material is moisture-resistant and suitable for humid environments such as bathrooms, kitchens, and hotels. The fire prevention feature makes them a safe choice for residential and commercial interior door applications.",
  },
  {
    question: "What applications are WPC doors used for?",
    answer:
      "WPC doors are designed for home office, hotel, bedroom, living room, and commercial interior applications. The product range includes interior doors, hidden doors with decorative panels, sliding doors, and door frames. The push and pull opening method and customizable sizes make them versatile for various interior door projects.",
  },
  {
    question: "What is the MOQ and packaging?",
    answer:
      "The minimum order quantity (MOQ) is 50 pcs for WPC doors and 100 pcs for door frames. Standard packaging is in cartons. For doors, 1 pc per carton with carton size 205X85X10cm, net weight 25.0kg per carton and 25.0kg per piece. For door frames, 5 pcs per carton with carton size 210X25X10cm, net weight 15.0kg per carton and 3.0kg per piece.",
  },
];

// ===== Contact Info =====
export const WPC_DOOR_CONTACT = {
  email: "cindy@onestopbuildly.com",
  whatsapp: "+86-13511316133",
};

// ===== Helper Functions =====
export function getProductsBySeries(seriesSlug: string): WPCDoorProduct[] {
  return wpcDoorProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(wpcDoorProducts.map((p) => p.size))];
}

export function getUniqueSeries(): WPCDoorSeries[] {
  return wpcDoorSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(wpcDoorProducts.map((p) => p.color))];
}

export function getUniqueCodes(): string[] {
  return [...new Set(wpcDoorProducts.map((p) => p.code))];
}
