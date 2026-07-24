export interface WPCPanelProduct {
  id: string;
  code: string;
  slug: string;
  name: string;
  series: string;
  seriesSlug: string;
  sourceUrl: string;
  verifiedAt: string;
  image: string;
  textureImage?: string;
  applicationImage?: string;
  size: string;
  thickness: string;
  color: string;
  surface: string;
  surfaceTreatment: string;
  material: string;
  features: string[];
  applications: string[];
  installation: string;
  warranty: string;
  model: string;
  brand: string;
  origin: string;
  moq: number;
  unit: string;
  secondaryMoq?: string;
  sourcePrice: string;
  currency: string;
  incoterm: string;
  packaging: string;
  pcsPerCarton: number | null;
  cartonSize: string;
  netWeightPerCarton: string;
  weightPerPiece: string;
  leadTime: string;
  sampleInfo: string;
  certifications: string;
  projectSolution: string;
  sourceMedia: string;
  media: {
    images: string[];
    video: {
      url: string;
      label: string;
      source: string;
    } | null;
    verifiedAt: string;
  };
  remarks: string;
}

export interface WPCPanelSeries {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
}

const IMG_BASE = "/images/products/wpc-panel";
const VERIFIED_AT = "2026-07-23";
const CONTACT_LEAD_TIME = "Contact us for current lead-time confirmation.";
const UNKNOWN = "Not stated in the listing; contact us for project-specific confirmation.";
const SOURCE_PREFIX = "https://www.alibaba.com/product-detail/";
const VIDEO_L1NUMK = "https://gv.videocdn.alibaba.com/icbu_vod_video/video_target/gv9e-39f96911-a1ab2d16-9e15e4fe-08e1/trans/aidc/l1numk-h264-hd.mp4?bizCode=icbu_vod_video#t=4,34";
const VIDEO_MAXO8J = "https://gv.videocdn.alibaba.com/icbu_vod_video/video_target/gv9e-3eeec6f3-a18409ca-9e15fe7c-7d97/trans/aidc/maxo8j-h264-hd.mp4?bizCode=icbu_vod_video#t=4,28";
const VIDEO_PJ80ZB = "https://gv.videocdn.alibaba.com/icbu_vod_video/video_target/gv9e-3eefc567-8bd1e1ce-9e1511c6-2f2b/trans/aidc/pj80zb-h264-hd.mp4?bizCode=icbu_vod_video#t=4,31";

const galleryPaths = (code: string) => [
  `${IMG_BASE}/${code}/product-cover.avif`,
  ...Array.from({ length: 5 }, (_, index) => `${IMG_BASE}/${code}/gallery-${String(index + 2).padStart(2, "0")}.avif`),
];

const verifiedVideoByCode: Record<string, string> = {
  "WP-001": VIDEO_L1NUMK,
  "WP-002": VIDEO_MAXO8J,
  "WP-003": VIDEO_PJ80ZB,
  "WP-004": VIDEO_L1NUMK,
  "WP-005": VIDEO_L1NUMK,
  "WP-012": VIDEO_L1NUMK,
  "WP-013": VIDEO_PJ80ZB,
  "WP-014": VIDEO_PJ80ZB,
  "WP-015": VIDEO_PJ80ZB,
  "WP-021": VIDEO_L1NUMK,
  "WP-022": VIDEO_L1NUMK,
  "WP-023": VIDEO_L1NUMK,
  "WP-024": VIDEO_L1NUMK,
  "WP-025": VIDEO_L1NUMK,
  "WP-026": VIDEO_L1NUMK,
};

export const wpcPanelSeries: WPCPanelSeries[] = [
  {
    slug: "premium-fluted",
    name: "Premium Fluted Series",
    nameZh: "Premium fluted profiles",
    description: "Special-shape, slatted and wood-grain WPC wall panels whose profile, finish and color should be confirmed against the selected source listing.",
  },
  {
    slug: "classic-indoor",
    name: "Classic Indoor Series",
    nameZh: "Classic indoor panels",
    description: "Indoor WPC wall panel listings with customizable sizes, embossed or 3D wood-grain surfaces and supplier-defined project options.",
  },
  {
    slug: "fluted-decor",
    name: "Fluted Decor Series",
    nameZh: "Fluted decor panels",
    description: "9 mm indoor fluted panels with a 2.9 m reference length, wood-grain treatment and multiple listed color choices.",
  },
];

type ProductSeed = Omit<WPCPanelProduct, "image" | "media" | "verifiedAt"> & {
  imageName: string;
};

const source = (path: string) => `${SOURCE_PREFIX}${path}`;

const premiumCommon = {
  series: "Premium Fluted Series",
  seriesSlug: "premium-fluted",
  material: "Wood-plastic composite environmental material",
  applications: ["Indoor wall panel decoration"],
  projectSolution: "Total solution for projects (listing wording).",
  origin: "Zhejiang, China",
  brand: "SONSILL",
  packaging: "Single item",
  pcsPerCarton: null,
  cartonSize: "290 x 30 x 10 cm",
  netWeightPerCarton: "30.0 kg",
  weightPerPiece: UNKNOWN,
  sampleInfo: UNKNOWN,
  certifications: UNKNOWN,
  sourceMedia: "Source listing includes product photos and a video tab.",
  leadTime: CONTACT_LEAD_TIME,
  currency: "USD",
  incoterm: UNKNOWN,
};

const standardIndoorCommon = {
  series: "Classic Indoor Series",
  seriesSlug: "classic-indoor",
  material: "Plastic / wood plastic composite (listing fields use both terms)",
  applications: ["Hotel"],
  projectSolution: "Total solution for projects (listing wording).",
  origin: "Zhejiang, China",
  brand: "Sonsill",
  packaging: "Paper box; single item",
  pcsPerCarton: null,
  cartonSize: "290 x 30 x 10 cm",
  netWeightPerCarton: "30.0 kg",
  weightPerPiece: UNKNOWN,
  sampleInfo: "Freely provide (listing field; confirm current sample terms).",
  certifications: "ISO9001 / ISO14001 / CE / FSC / Intertek (listing certification field; confirm product scope and current documents).",
  sourceMedia: "Source listing includes product photos and a video tab.",
  leadTime: "7-15 days (listing field; confirm for the order).",
  currency: "USD",
  incoterm: UNKNOWN,
};

const flutedCommon = {
  series: "Fluted Decor Series",
  seriesSlug: "fluted-decor",
  material: "Plastic",
  applications: ["Living room", "Bedroom", "School", "Hotel"],
  projectSolution: "Total solution for projects (listing wording).",
  origin: "Zhejiang, China",
  brand: "Sonsill",
  packaging: "Carton; single item",
  pcsPerCarton: null,
  cartonSize: "290 x 22 x 10 cm",
  netWeightPerCarton: "27.0 kg",
  weightPerPiece: UNKNOWN,
  sampleInfo: "Freely provide (listing field; confirm current sample terms).",
  certifications: UNKNOWN,
  sourceMedia: "Source listing includes product photos and a video tab.",
  leadTime: CONTACT_LEAD_TIME,
  currency: "USD",
  incoterm: UNKNOWN,
};

const seeds: ProductSeed[] = [
  {
    ...premiumCommon,
    id: "wpc-pf-001",
    code: "WP-001",
    slug: "special-shaped-novel-design-wpc-wall-panel",
    name: "Special Shaped Novel Design WPC Wall Panel Irregular Shape Decorative Wall Cladding Board",
    sourceUrl: source("Special-Shaped-Novel-Design-WPC-Wall_1601799713806.html"),
    imageName: "WP-001.jpg",
    size: "2900 mm model reference (listing model: 2900MM)",
    thickness: UNKNOWN,
    color: "Color options are shown on the listing; current swatch names are not stated in the reviewed fields.",
    surface: UNKNOWN,
    surfaceTreatment: UNKNOWN,
    features: ["Moisture-proof", "Anti-static", "Sound-absorbing", "Mould-proof", "Waterproof"],
    installation: "Installation method is not stated in the reviewed fields; request the profile drawing before approval.",
    warranty: "5 years",
    model: "2900MM",
    moq: 50,
    unit: "meters",
    sourcePrice: "US$1.18-1.88 (source listing display; confirm current quote)",
    secondaryMoq: undefined,
    remarks: "The source page lists indoor wall panel decoration and a modern/contemporary style. Exact cross-section and color selection require project confirmation.",
  },
  {
    ...premiumCommon,
    id: "wpc-pf-002",
    code: "WP-002",
    slug: "hot-sale-new-arrival-wpc-wall-panel",
    name: "Hot Sale New Arrival WPC Wall Panel Moisture Resistant Easy Install Wall Cladding Panel",
    sourceUrl: source("Hot-Sale-New-Arrival-WPC-Wall_1601799692807.html"),
    imageName: "WP-002.jpg",
    size: "2.9 m model reference (listing model: 2.9M)",
    thickness: UNKNOWN,
    color: "Customizable; current swatch names are not stated in the reviewed fields.",
    surface: UNKNOWN,
    surfaceTreatment: UNKNOWN,
    features: ["Moisture-proof", "Anti-static", "Sound-absorbing", "Mould-proof", "Waterproof", "Fireproof", "Soundproof", "Smoke-proof", "Heat insulation"],
    installation: "Installation method is not stated in the reviewed fields; supplier lists onsite training as after-sale support.",
    warranty: "5 years",
    model: "2.9M",
    moq: 50,
    unit: "meters",
    sourcePrice: "US$1.18-1.88 (source listing display; confirm current quote)",
    remarks: "The listing presents a modern wall-cladding profile with supplier customization options. Confirm the exact installation system for the selected finish.",
  },
  {
    ...premiumCommon,
    id: "wpc-pf-003",
    code: "WP-003",
    slug: "modern-design-eco-friendly-wpc-wall-panel",
    name: "Modern Design Eco Friendly WPC Wall Panel Fluted Slat Decorative Wall Board for Home Building Decoration",
    sourceUrl: source("Modern-Design-Eco-Friendly-WPC-Wall_1601799803302.html"),
    imageName: "WP-003.jpg",
    size: UNKNOWN,
    thickness: UNKNOWN,
    color: "Customizable; current swatch names are not stated in the reviewed fields.",
    surface: UNKNOWN,
    surfaceTreatment: UNKNOWN,
    features: ["Moisture-proof", "Anti-static", "Sound-absorbing", "Mould-proof", "Waterproof", "Fireproof"],
    installation: "Installation method is not stated in the reviewed fields; request the supplier drawing.",
    warranty: "5 years",
    model: UNKNOWN,
    moq: 50,
    unit: "meters",
    sourcePrice: "US$1.18-1.88 (source listing display; confirm current quote)",
    remarks: "The source title describes a fluted/slat decorative board for home and building decoration. Confirm profile dimensions before specifying it.",
  },
  {
    ...premiumCommon,
    id: "wpc-pf-004",
    code: "WP-004",
    slug: "new-type-3d-texture-wpc-wall-panel",
    name: "New Type 3D Texture WPC Wall Panel Interior TV Background Wall Decor Wood Grain WPC Board",
    sourceUrl: source("New-Type-3D-Texture-WPC-Wall_1601799768482.html"),
    imageName: "WP-004.jpg",
    size: UNKNOWN,
    thickness: UNKNOWN,
    color: "Customizable; current swatch names are not stated in the reviewed fields.",
    surface: "3D texture / wood-grain effect is described in the title and function fields.",
    surfaceTreatment: UNKNOWN,
    features: ["Sound-absorbing", "Mould-proof", "Waterproof", "Fireproof", "Soundproof", "Smoke-proof", "Heat insulation"],
    installation: "Installation method is not stated in the reviewed fields; request the profile drawing.",
    warranty: "5 years",
    model: UNKNOWN,
    moq: 50,
    unit: "meters",
    sourcePrice: "US$1.18-1.88 (source listing display; confirm current quote)",
    remarks: "The source title positions this profile for interior TV/background-wall decoration. Do not infer a specific acoustic or fire rating from the feature labels.",
  },
  {
    ...premiumCommon,
    id: "wpc-pf-005",
    code: "WP-005",
    slug: "modern-wood-grain-wpc-wall-panel",
    name: "Modern Wood Grain WPC Wall Panel 200mm Wide 2900mm Long Waterproof Interior Wall Cladding",
    sourceUrl: source("Modern-Wood-Grain-WPC-Wall-Panel_1601794622278.html"),
    imageName: "WP-005.jpg",
    size: "2900 x 200 mm",
    thickness: "9 mm",
    color: "Wood-grain colors; current swatch names are not stated in the reviewed fields.",
    surface: "Textures",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant", "Moisture-proof", "Easy to clean"],
    installation: "Easy Installation",
    warranty: "More than 5 years",
    model: "WPC wall panel",
    moq: 50,
    unit: "meters",
    sourcePrice: "US$1.18-1.88 (source listing display; confirm current quote)",
    applications: ["Interior walls", "Hotel", "Villa", "Apartment", "Office building"],
    remarks: "The title and attribute fields agree on a 200 mm wide, 2900 mm long, 9 mm profile with a 3D wood-grain treatment.",
  },
  {
    ...standardIndoorCommon,
    id: "wpc-ci-021",
    code: "WP-021",
    slug: "eco-friendly-recycled-plastic-wood-wpc-wall-panel",
    name: "Eco-friendly Recycled Plastic Wood WPC Wall Panel for Indoor Architecture Decoration",
    sourceUrl: source("Eco-friendly-Recycled-Plastic-Wood-WPC_1601808224347.html"),
    imageName: "WP-021.jpg",
    size: "Customized sizes support",
    thickness: "24 mm",
    color: "Customized color",
    surface: "Embossed",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant"],
    installation: "Easy Installation",
    warranty: "2 years",
    model: "wpc001",
    moq: 50,
    unit: "meters",
    secondaryMoq: "100 pcs (listing attribute field)",
    sourcePrice: "US$0.85 / US$0.78 / US$0.72 / US$0.66 by listed volume tiers (confirm current quote)",
    remarks: "The trade offer is shown in meters, while the attribute block separately shows 100 pcs; the two units are preserved rather than merged.",
  },
  {
    ...standardIndoorCommon,
    id: "wpc-ci-022",
    code: "WP-022",
    slug: "wholesale-price-indoor-wood-plastic-composite-wpc-wall-panel",
    name: "Wholesale Price Indoor Wood Plastic Composite WPC Wall Panel for Global Building Material Distributors",
    sourceUrl: source("Wholesale-Price-Indoor-Wood-Plastic-Composite_1601808220329.html"),
    imageName: "WP-022.jpg",
    size: "Customized sizes support",
    thickness: "24 mm",
    color: "Customized color",
    surface: "Embossed",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant"],
    installation: "Easy Installation",
    warranty: "2 years",
    model: "wpc001",
    moq: 50,
    unit: "meters",
    secondaryMoq: "100 pcs (listing attribute field)",
    sourcePrice: "US$0.85 / US$0.78 / US$0.72 / US$0.66 by listed volume tiers (confirm current quote)",
    remarks: "The source title is distributor-oriented; request the final cut list and packing plan for the destination market.",
  },
  {
    ...standardIndoorCommon,
    id: "wpc-ci-023",
    code: "WP-023",
    slug: "ready-to-ship-modern-fluted-wpc-wall-panel",
    name: "Ready to Ship Modern Fluted WPC Wall Panel for Quick Home Interior Renovation and DIY Decoration",
    sourceUrl: source("Ready-to-Ship-Modern-Fluted-WPC_1601808255048.html"),
    imageName: "WP-023.jpg",
    size: "Customized sizes support",
    thickness: "24 mm",
    color: "Customized color",
    surface: "Embossed",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant"],
    installation: "Easy Installation",
    warranty: "2 years",
    model: "wpc001",
    moq: 50,
    unit: "meters",
    secondaryMoq: "100 pcs (listing attribute field)",
    sourcePrice: "US$0.85 / US$0.78 / US$0.72 / US$0.66 by listed volume tiers (confirm current quote)",
    remarks: "The source title emphasizes quick renovation and DIY use; ready-to-ship timing still requires sales confirmation for the selected quantity.",
  },
  {
    ...standardIndoorCommon,
    id: "wpc-ci-024",
    code: "WP-024",
    slug: "luxury-embossed-wood-effect-wpc-wall-panel",
    name: "Luxury Embossed Wood Effect Indoor Wood Plastic Composite WPC Wall Panel for High-end Interior Wall",
    sourceUrl: source("Luxury-Embossed-Wood-Effect-Indoor-Wood_1601808149504.html"),
    imageName: "WP-024.jpg",
    size: "Customized sizes support",
    thickness: "24 mm",
    color: "Customized color",
    surface: "Embossed",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant"],
    installation: "Easy Installation",
    warranty: "2 years",
    model: "wpc001",
    moq: 50,
    unit: "meters",
    secondaryMoq: "100 pcs (listing attribute field)",
    sourcePrice: "US$0.85 / US$0.78 / US$0.72 / US$0.66 by listed volume tiers (confirm current quote)",
    remarks: "The listing calls out an embossed wood effect and high-end interior use; confirm the selected color and embossing depth with a sample.",
  },
  {
    ...standardIndoorCommon,
    id: "wpc-ci-025",
    code: "WP-025",
    slug: "high-density-waterproof-interior-wpc-wall-panel",
    name: "High Density Waterproof Interior WPC Wall Panel for Meeting Room and Hotel Interior Design",
    sourceUrl: source("High-Density-Waterproof-Interior-WPC-Wall_1601808161400.html"),
    imageName: "WP-025.jpg",
    size: "Customized sizes support",
    thickness: "24 mm",
    color: "Customized color",
    surface: "Embossed",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant"],
    installation: "Easy Installation",
    warranty: "2 years",
    model: "wpc001",
    moq: 50,
    unit: "meters",
    secondaryMoq: "100 pcs (listing attribute field)",
    sourcePrice: "US$0.85 / US$0.78 / US$0.72 / US$0.66 by listed volume tiers (confirm current quote)",
    applications: ["Hotel", "Meeting room"],
    remarks: "The title references high density, but no density number is provided in the reviewed fields; no numeric density claim is made here.",
  },
  {
    ...standardIndoorCommon,
    id: "wpc-ci-026",
    code: "WP-026",
    slug: "recyclable-interior-wall-cladding-wpc-wall-panel",
    name: "Recyclable Interior Wall Cladding WPC Wall Panel for Environmentally Friendly Interior Design",
    sourceUrl: source("Recyclable-Interior-Wall-Cladding-WPC-Wall_1601808168189.html"),
    imageName: "WP-026.jpg",
    size: "Customized sizes support",
    thickness: "24 mm",
    color: "Customized color",
    surface: "Embossed",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof", "Eco-friendly", "Fire retardant"],
    installation: "Easy Installation",
    warranty: "2 years",
    model: "wpc001",
    moq: 50,
    unit: "meters",
    secondaryMoq: "100 pcs (listing attribute field)",
    sourcePrice: "US$0.85 / US$0.78 / US$0.72 / US$0.66 by listed volume tiers (confirm current quote)",
    remarks: "The title describes recyclability; confirm the material composition and any project-specific environmental documentation before approval.",
  },
  ...[
    {
      code: "WP-012",
      slug: "high-quality-wpc-fluted-wall-panel",
      name: "High Quality WPC Fluted Wall Panel for Luxury House Decoration Easy Install Interior Wall Cladding Modern Waterproof",
      sourcePath: "High-Quality-WPC-Fluted-Wall-Panel_1601825967552.html",
      imageName: "WP-012.jpg",
    },
    {
      code: "WP-013",
      slug: "3d-wall-panel-interior-wpc-fluted-decor-panel",
      name: "3D Wall Panel Interior Wall Decorations for Home Luxury WPC Fluted Decor Panel",
      sourcePath: "3D-Wall-Panel-Interior-Wall-Decorations_1601826103125.html",
      imageName: "WP-013.jpg",
    },
    {
      code: "WP-014",
      slug: "modern-wpc-fluted-wall-panel",
      name: "Modern WPC Fluted Wall Panel High Quality Indoor Waterproof WPC Board",
      sourcePath: "Modern-WPC-Fluted-Wall-Panel-High_1601826032961.html",
      imageName: "WP-014.jpg",
    },
    {
      code: "WP-015",
      slug: "new-style-wpc-waterproof-modern-indoor-wall-cladding",
      name: "New Style WPC Waterproof Modern Indoor Decorative Wall Cladding Panels",
      sourcePath: "New-Style-WPC-Waterproof-Modern-Indoor_1601826176473.html",
      imageName: "WP-015.jpg",
    },
  ].map((item) => ({
    ...flutedCommon,
    id: `wpc-fd-${item.code.slice(3)}`,
    code: item.code,
    slug: item.slug,
    name: item.name,
    sourceUrl: source(item.sourcePath),
    imageName: item.imageName,
    size: "2.9 m or as customized (listing field; nominal length also shown as 10 ft)",
    thickness: "9 mm",
    color: "Gray, Golden Yellow, Silver Color, Grayish White, Black & Gray; customized color also listed",
    surface: "Textures",
    surfaceTreatment: "3D wood grain",
    features: ["Waterproof"],
    installation: "Easy Installation",
    warranty: "More than 5 years",
    model: UNKNOWN,
    moq: 300,
    unit: "meters",
    secondaryMoq: "300 pcs/color (listing attribute field)",
    sourcePrice: "US$0.95 (300-4,999 m); US$0.80 (5,000-19,999 m); US$0.75 (>=20,000 m); confirm current quote",
    remarks: "All four listings share the same reviewed 9 mm / 2.9 m reference specification and color set; confirm the exact profile and finish for the selected SKU.",
  })),
];

export const wpcPanelProducts: WPCPanelProduct[] = seeds.map((product) => ({
  ...product,
  id: product.id,
  image: `${IMG_BASE}/${product.imageName}`,
  verifiedAt: VERIFIED_AT,
  currency: product.currency,
  incoterm: product.incoterm,
  pcsPerCarton: product.pcsPerCarton,
  weightPerPiece: product.weightPerPiece,
  media: {
    images: galleryPaths(product.code),
    video: verifiedVideoByCode[product.code]
      ? {
          url: verifiedVideoByCode[product.code],
          label: `${product.code} supplier gallery video`,
          source: product.sourceUrl,
        }
      : null,
    verifiedAt: VERIFIED_AT,
  },
}));

export const wpcPanelFAQs = [
  {
    question: "Are the product images matched to the listed products?",
    answer: "Yes. Each product detail page uses six locally stored gallery images collected from that product's supplied Alibaba listing. A video is shown only when it was present in the listing's primary product-media area, with the source link retained for verification.",
  },
  {
    question: "Why do some products show both meters and pieces for MOQ?",
    answer: "Alibaba displays a trade minimum in meters for several listings and a separate attribute-block MOQ in pieces. Both are retained with their original labels; the sales team should confirm the applicable unit for the final quotation.",
  },
  {
    question: "Can you confirm a profile drawing, color swatch or installation method?",
    answer: "Yes. Send the product code, destination and target quantity through the inquiry form. We will return the current profile drawing, color options and installation guidance for that SKU instead of assuming a shared specification.",
  },
];

export const WPC_PANEL_CONTACT = {
  email: "cindy@onestopbuildly.com",
  phone: "+86-13511316133",
  whatsapp: "+86-13511316133",
  company: "Haining Onestopbuildly Building Materials Co., Ltd.",
  address: "Room 108, Building 2, Fenghuang Commercial Building, Dingqiao Town, Haining, Zhejiang, China",
  factoryAddress: "No. 1, Shiquan Industrial Park, Tongyuan Town, Haiyan County, Jiaxing, Zhejiang",
};

export function formatPrice(product: WPCPanelProduct): string {
  return product.sourcePrice;
}

export function formatPriceShort(product: WPCPanelProduct): string {
  return product.moq ? `MOQ ${product.moq} ${product.unit}` : "Request a Quote";
}

export function getProductsBySeries(seriesSlug: string): WPCPanelProduct[] {
  return wpcPanelProducts.filter((product) => product.seriesSlug === seriesSlug);
}

export function getUniqueSizes(): string[] {
  return [...new Set(wpcPanelProducts.map((product) => product.size))].sort();
}

export function getUniqueSeries(): WPCPanelSeries[] {
  return wpcPanelSeries;
}

export function getUniqueColors(): string[] {
  return [...new Set(wpcPanelProducts.map((product) => product.color))].sort();
}

export function getUniqueCodes(): string[] {
  return [...new Set(wpcPanelProducts.map((product) => product.code))].sort();
}

export function getWPCProductBySlug(slug: string): WPCPanelProduct | undefined {
  return wpcPanelProducts.find((product) => product.slug === slug);
}
