// Outdoor WPC Wall Cladding — 产品数据集中管理
// 数据来源：Alibaba Outdoor WPC产品抓取数据（2026-07更新）
// 所有价格、型号、尺寸、MOQ均来自真实外贸报价，禁止虚构
// 图片已逐一验证，颜色与实际图片内容一致
// 2026-07-20: 从10个Alibaba详情页重新抓取，修正尺寸(172*30mm/219*26mm)，
//   新增4个产品(OW-016~OW-019)，更新品牌/成分/表面处理等参数

export interface OutdoorWPCProduct {
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

export interface OutdoorWPCSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

export const outdoorWPCSeries: OutdoorWPCSeries[] = [
  {
    slug: "co-extrusion-premium",
    name: "Co-extrusion Premium Series",
    nameZh: "共挤高端系列",
    description:
      "Co-extruded WPC exterior wall cladding with UV-resistant cap layer for superior weather resistance, anti-fade performance and dimensional stability in outdoor conditions.",
  },
  {
    slug: "fluted-decor",
    name: "Fluted Decor Series",
    nameZh: "凹槽装饰系列",
    description:
      "Decorative fluted WPC outdoor wall panels with 3D ribbed profiles and wood grain finishes for exterior facade cladding and architectural accent walls.",
  },
  {
    slug: "classic-outdoor",
    name: "Classic Outdoor Series",
    nameZh: "经典户外系列",
    description:
      "Standard outdoor WPC wall cladding panels with hollow-core construction, anti-UV treatment and waterproof design for versatile exterior wall decoration.",
  },
];

const IMG_BASE = "/images/products/outdoor-wpc";
const LEAD_TIME = "Please contact our sales team for confirmation.";
const CURRENCY = "USD";
const INCOTERM = "FOB";

export const outdoorWPCProducts: OutdoorWPCProduct[] = [
  // ===== Co-extrusion Premium Series =====
  {
    id: "ow-cp-009",
    code: "OW-009",
    name: "Wall Cladding WPC Exterior Outdoor Composite Wall Panel PVC Wood Wall Panel Outdoor Co-extruded Fluted Cladding Panel",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Dark Espresso Brown",
    moq: 1200,
    unit: "meters",
    unitPrice: 1.72,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Co-extruded fluted cladding panel with dark espresso brown finish. Large stack display showing consistent hollow-core extrusion profile.",
    image: `${IMG_BASE}/OW-009.jpg`,
  },
  {
    id: "ow-cp-010",
    code: "OW-010",
    name: "Durable Weather Resistant Wood Plastic Composite Co-extrusion WPC Wall Panel Outdoor Cladding",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Dual-Tone Cedar & Olive",
    moq: 300,
    unit: "meters",
    unitPrice: 1.72,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Weather resistant co-extrusion panel shown with cedar reddish-brown and olive teak dual-tone samples. Hollow box-beam profile with wood grain embossing.",
    image: `${IMG_BASE}/OW-010.jpg`,
  },
  {
    id: "ow-cp-011",
    code: "OW-011",
    name: "Co-extruded Fluted Exterior Composite Cladding Hollow Wpc Outdoor Wall Panel",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Golden Oak Warm Tone",
    moq: 3000,
    unit: "meters",
    unitPrice: 2.01,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Co-extruded fluted exterior cladding with golden oak warm tone. 10-12 flutes per panel width, hollow extruded profile with realistic wood grain embossing.",
    image: `${IMG_BASE}/OW-011.jpg`,
  },
  {
    id: "ow-cp-012",
    code: "OW-012",
    name: "High Quality Hollow Exterior WPC Wall Panel Outdoor Wall Cladding Wood Alternatives Substitute Veneer Panel",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Four-Color Outdoor Range",
    moq: 200,
    unit: "meters",
    unitPrice: 1.65,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Hollow exterior WPC wall panel shown in four outdoor color range: light gray, medium gray, warm brown and dark charcoal. Fluted design with 8-10 flutes.",
    image: `${IMG_BASE}/OW-012.jpg`,
  },
  {
    id: "ow-cp-015",
    code: "OW-015",
    name: "Luxury Wood Plastic Composite Co-extrusion Outdoor Decoration Wpc Wall Cladding Wood Substitute Alternatives Veneer Wall Panel",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "2900*200*20mm",
    thickness: "20mm",
    color: "Modern Charcoal Gray",
    moq: 200,
    unit: "meters",
    unitPrice: 1.65,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "40 pcs/pallet",
    pcsPerCarton: 40,
    cartonSize: "2920*210*200mm",
    netWeightPerCarton: "160kg",
    weightPerPiece: "4.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Luxury co-extrusion outdoor cladding installed on modern residential building exterior. Charcoal gray lap-siding with subtle wood grain and UV-resistant cap layer.",
    image: `${IMG_BASE}/OW-015.jpg`,
  },
  {
    id: "ow-cp-017",
    code: "OW-017",
    name: "Exterior Cladding Siding Shipping Container Wood Houses Outdoor Wpc Interior Wall Panel",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "219*26mm",
    thickness: "26mm",
    color: "Warm Natural Oak",
    moq: 200,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet Packaging",
    pcsPerCarton: 0,
    cartonSize: "300X113X0.15cm",
    netWeightPerCarton: "1.96kg",
    weightPerPiece: "1.96kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: SONSILL, Model: WPC-01, Material: Wood-plastic Composite Environmental Material. Size 219*26mm, Film Laminated surface treatment, CE certified. Versatile for exterior cladding and interior wall panel decoration. Color customizable per customer requirement. Port of dispatch: Foshan, Guangzhou, Shenzhen. Image shows split view: installed vertical slat wall cladding in bedroom setting (warm natural oak tone) with modular slat panel cross-section detail showing hollow rectangular profile.",
    image: `${IMG_BASE}/OW-017.jpg`,
  },
  {
    id: "ow-cp-019",
    code: "OW-019",
    name: "Exterior Wood Plastic Composite Wall Board Outdoor Wpc Wall Cladding",
    series: "Co-extrusion Premium Series",
    seriesSlug: "co-extrusion-premium",
    size: "25mm",
    thickness: "25mm",
    color: "Three-Color Industrial Stack",
    moq: 80,
    unit: "cartons",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "PE Film + Pallet, 12pcs/carton",
    pcsPerCarton: 12,
    cartonSize: "290X30X15cm",
    netWeightPerCarton: "10.0kg",
    weightPerPiece: "10.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: SONSILL, Model: SONSILL, Material: WPC wall panels. Co-extrusion surface treatment, CE certified. Thickness 25mm. Usage: Indoor Wall Panel Decoration & Exterior Cladding. Color customizable per customer requirement. Image shows large warehouse stacks with three color families: light tan/beige, medium-dark brown and dark gray/charcoal. Hollow rectangular tube profile with wood-grain embossed top surface.",
    image: `${IMG_BASE}/OW-019.jpg`,
  },

  // ===== Fluted Decor Series =====
  {
    id: "ow-fd-003",
    code: "OW-003",
    name: "High Density Decorative Fluted Boards Wall Cladding Wpc Outdoor Wall Panel",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Five-Color Range Display",
    moq: 300,
    unit: "meters",
    unitPrice: 1.99,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "40X30X20cm",
    netWeightPerCarton: "5.0kg",
    weightPerPiece: "5.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Shown in showroom with five color variants: dark brown, cream beige, medium caramel, charcoal and light gray. Rounded semicircular flute profile.",
    image: `${IMG_BASE}/OW-003.jpg`,
  },
  {
    id: "ow-fd-005",
    code: "OW-005",
    name: "Hot Sale Exterior Fluted Wall Wood Alternatives Wpc Wall Panels for Outdoor",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Four-Tone Range",
    moq: 300,
    unit: "meters",
    unitPrice: 1.99,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Port: Ningbo. Supply: 800000 meters/week. Exterior fluted wall panel with four-tone range: natural oak, charcoal, cedar reddish-brown and sand wheat. Hollow-box construction with embossed wood grain texture.",
    image: `${IMG_BASE}/OW-005.jpg`,
  },
  {
    id: "ow-fd-007",
    code: "OW-007",
    name: "Wall Cladding Facade Anti-UV Fluted Outdoor Wpc Wall Panel",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Three-Sample Display",
    moq: 300,
    unit: "meters",
    unitPrice: 1.99,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Anti-UV fluted outdoor panel shown with three stacked samples: terracotta reddish-brown, golden olive teak and medium gray. Hollow box-beam profile with four slats per panel.",
    image: `${IMG_BASE}/OW-007.jpg`,
  },
  {
    id: "ow-fd-008",
    code: "OW-008",
    name: "Outdoor Fluted Wpc Wall Panel Exterior Cladding Plastic Composite Wall Board",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Dark Chocolate Brown",
    moq: 200,
    unit: "sqm",
    unitPrice: 3.15,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Outdoor fluted WPC wall panel in dark chocolate brown. Warehouse stack showing consistent hollow-core extrusion with embossed wood grain texture.",
    image: `${IMG_BASE}/OW-008.jpg`,
  },
  {
    id: "ow-fd-013",
    code: "OW-013",
    name: "Wood Co-extrusion Wood WPC Exterior Wall Cladding Composite Fence Panels Wpc",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Four-Color Warehouse Display",
    moq: 50,
    unit: "sqm",
    unitPrice: 2.95,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Co-extrusion wood WPC exterior wall cladding shown in warehouse with four color variants: light wood, dark charcoal gray, red-brown teak and light camel. Diagonal layout with hollow cross-section visible.",
    image: `${IMG_BASE}/OW-013.jpg`,
  },
  {
    id: "ow-fd-016",
    code: "OW-016",
    name: "Exterior Cladding Siding Shipping Container Wood Houses Outdoor Wpc Wall Panel",
    series: "Fluted Decor Series",
    seriesSlug: "fluted-decor",
    size: "219*26mm",
    thickness: "26mm",
    color: "Medium Walnut Brown",
    moq: 200,
    unit: "sqm",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Pallet Packaging",
    pcsPerCarton: 0,
    cartonSize: "300X113X0.15cm",
    netWeightPerCarton: "1.96kg",
    weightPerPiece: "1.96kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: SONSILL, Model: WPC-01, Material: Wood-plastic Composite Environmental Material. Size 219*26mm, Film Laminated surface treatment. Functions: Moisture-Proof, Fireproof. CE certified, complies with EU standards. Color customizable per customer requirement. Image shows stacks of WPC boards with fluted multi-slatted surface in medium-dark walnut brown tone. Hollow rectangular profile with 5-6 slats per board width and wood-grain embossed texture. Industrial warehouse setting.",
    image: `${IMG_BASE}/OW-016.jpg`,
  },

  // ===== Classic Outdoor Series =====
  {
    id: "ow-co-001",
    code: "OW-001",
    name: "Wood Plastic Wall Cladding Decorative Outdoor Wpc Wall Panel",
    series: "Classic Outdoor Series",
    seriesSlug: "classic-outdoor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Warm Teak Golden-Brown",
    moq: 300,
    unit: "meters",
    unitPrice: 2.10,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Label shows model K219-76A. Six sample strips with fluted vertical ribbed profile and hollow-core construction on bubble wrap background.",
    image: `${IMG_BASE}/OW-001.jpg`,
  },
  {
    id: "ow-co-002",
    code: "OW-002",
    name: "Outdoor Wall Cladding Durable Waterproof Exterior Wpc Wall Panel",
    series: "Classic Outdoor Series",
    seriesSlug: "classic-outdoor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Deep Walnut Red-Brown",
    moq: 300,
    unit: "meters",
    unitPrice: 1.50,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "290X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Two sample pieces shown in diagonal layout on white background. Single deep walnut red-brown color with natural wood grain pattern and fluted slat design.",
    image: `${IMG_BASE}/OW-002.jpg`,
  },
  {
    id: "ow-co-004",
    code: "OW-004",
    name: "UV Resistant Wood Plastic Composite Outdoor Exterior Wpc Wall Cladding",
    series: "Classic Outdoor Series",
    seriesSlug: "classic-outdoor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Earth Tone Collection",
    moq: 300,
    unit: "meters",
    unitPrice: 3.75,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Product name: 220mm Fluted panels. UV resistant WPC wall cladding with earth tone collection: golden yellow ochre, terracotta rust orange, light gray and charcoal. Hollow box-section profile with wood grain embossing on white background display.",
    image: `${IMG_BASE}/OW-004.jpg`,
  },
  {
    id: "ow-co-006",
    code: "OW-006",
    name: "219*26mm Wpc groove Outdoor Wood Panel Wpc Engineered Wall Panels",
    series: "Classic Outdoor Series",
    seriesSlug: "classic-outdoor",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Six-Color Gradient",
    moq: 3000,
    unit: "meters",
    unitPrice: 1.80,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "219*26mm WPC groove outdoor wood panel. Warehouse stack showing six-color gradient: light honey oak, medium walnut, dark espresso, dark charcoal, light silver gray and deep mahogany red. Hollow rectangular profile with fluted channels.",
    image: `${IMG_BASE}/OW-006.jpg`,
  },
  {
    id: "ow-co-014",
    code: "OW-014",
    name: "219*26 Anti-UV No Fade Wpc Wall Panel Cladding for Outdoor Decoration Wood Alternatives Wood Veneer Panel Wood Substitute",
    series: "Classic Outdoor Series",
    seriesSlug: "classic-outdoor",
    size: "2900*219*26mm",
    thickness: "26mm",
    color: "Natural Wood Brown",
    moq: 300,
    unit: "meters",
    unitPrice: 2.13,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "30 pcs/pallet",
    pcsPerCarton: 30,
    cartonSize: "2920*230*250mm",
    netWeightPerCarton: "180kg",
    weightPerPiece: "6.0kg",
    leadTime: LEAD_TIME,
    remarks:
      "Anti-UV no fade WPC wall panel in natural wood brown. Measuring tape in image confirms panel length of approximately 2.9m (2900mm). Multi-chamber hollow core with fine linear wood grain texture.",
    image: `${IMG_BASE}/OW-014.jpg`,
  },
  {
    id: "ow-co-018",
    code: "OW-018",
    name: "Wood PVC Plastic Composite Decorative Outside Wpc Exterior Wall Panel",
    series: "Classic Outdoor Series",
    seriesSlug: "classic-outdoor",
    size: "172*30mm",
    thickness: "30mm",
    color: "Three-Tone Warehouse Display",
    moq: 300,
    unit: "meters",
    unitPrice: null,
    currency: CURRENCY,
    incoterm: INCOTERM,
    packaging: "Cartons + Pallet",
    pcsPerCarton: 30,
    cartonSize: "30X25X10cm",
    netWeightPerCarton: "2.4kg",
    weightPerPiece: "2.4kg",
    leadTime: LEAD_TIME,
    remarks:
      "Brand: Sonsill wpc wall panel, Model: wpc wall panel, Material: Wood Plastic Composite (50% wood, 38% plastic, 12% additive). Size 172*30mm, length 3m/pcs (customizable). Surface: 3D embossing, embossing, groove. Installation: interlocking. Colors: cedar, red pine, red wood, light grey, coffee, blue grey. Image shows warehouse stacks with three distinct color families: light tan/beige, medium-dark brown and dark gray/charcoal. Hollow rectangular tube profile with wood-grain embossed top surface.",
    image: `${IMG_BASE}/OW-018.jpg`,
  },
];

// FAQ 数据 — Outdoor WPC Wall Cladding 常见问题
export const outdoorWPCFAQs = [
  {
    question: "What is co-extrusion technology and why does it matter for outdoor cladding?",
    answer:
      "Co-extrusion applies a protective polymer cap layer around the WPC core during extrusion. This cap provides superior UV resistance, stain resistance and color stability compared to conventional WPC, extending exterior lifespan by 3-5 years with Delta E < 3 after 1000 hours of QUV testing.",
  },
  {
    question: "What is the standard panel size and how is outdoor WPC cladding priced?",
    answer:
      "We offer two standard cross-sections: 172*30mm (width 172mm × thickness 30mm) and 219*26mm (width 219mm × thickness 26mm). Standard length is 3m per piece, customizable to your project needs. MOQ ranges from 200 to 300 meters depending on the profile. The 172*30mm profile is priced per linear meter, while the 219*26mm profile is priced per square meter.",
  },
  {
    question: "How weather-resistant is outdoor WPC cladding in extreme climates?",
    answer:
      "Our co-extruded WPC cladding is rated for outdoor use in temperatures from -30°C to 60°C. It is waterproof, anti-UV, anti-termite, and resists fading. The hollow-core construction provides thermal insulation while maintaining structural rigidity across freeze-thaw cycles.",
  },
  {
    question: "How are outdoor WPC wall panels installed?",
    answer:
      "Panels install with an interlocking connection over a timber or metal batten framework. The hollow profile accommodates hidden fasteners and allows for thermal expansion. Standard woodworking tools are sufficient for cutting and fitting. Delivery time is within 20 days.",
  },
  {
    question: "What materials are used in your WPC wall panels?",
    answer:
      "Our WPC wall panels are composed of 50% wood fiber, 38% plastic (HDPE) and 12% performance additives including UV stabilizers, coupling agents and color pigments. This composition ensures dimensional stability, moisture resistance and long-term outdoor durability. Surface treatments include 3D embossing, embossing and groove patterns for realistic wood grain texture.",
  },
];

// 联系信息配置变量
export const OUTDOOR_WPC_CONTACT = {
  email: "cindy@onestopbuildly.com",
  phone: "+86-13511316133",
  whatsapp: "+86-13511316133",
  company: "Haining Onestopbuildly Building Materials Co., Ltd.",
  address: "Room 108, Building 2, Fenghuang Commercial Building, Dingqiao Town, Haining, Zhejiang, China",
  factoryAddress: "No. 1, Shiquan Industrial Park, Tongyuan Town, Haiyan County, Jiaxing, Zhejiang",
};

// 工具函数
export function formatPrice(product: OutdoorWPCProduct): string {
  if (product.unitPrice === null || product.unitPrice === undefined) {
    return "Price available on request";
  }
  return `${product.currency} ${product.unitPrice} / ${product.unit}`;
}

export function formatPriceShort(product: OutdoorWPCProduct): string {
  if (product.unitPrice === null || product.unitPrice === undefined) {
    return "Request a Quote";
  }
  return `${product.currency} ${product.unitPrice}/${product.unit}`;
}

export function getProductsBySeries(seriesSlug: string): OutdoorWPCProduct[] {
  return outdoorWPCProducts.filter((p) => p.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(outdoorWPCProducts.map((p) => p.size))].sort();
}

export function getUniqueSeries(): OutdoorWPCSeries[] {
  return outdoorWPCSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(outdoorWPCProducts.map((p) => p.color))].sort();
}

export function getUniqueCodes(): string[] {
  return [...new Set(outdoorWPCProducts.map((p) => p.code))].sort();
}
