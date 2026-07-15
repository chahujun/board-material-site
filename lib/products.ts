// 产品数据 — 基于 SONSILL 品牌（海宁）供应链真实产品线
// 6 个核心板材品类，数据来源：alibaba.com 国际站竞品分析
// 更新日期：2026-07-15

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string; // 所属品类 slug
  shortDescription: string;
  description: string;
  specs: Record<string, string>;
  image: string;
  features: string[];
  moq: string;
  applications: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  faqs: FAQ[];
}

// 品类定义 — 基于真实供应链产品线
export const categories: ProductCategory[] = [
  {
    slug: "indoor-wpc-wall-panels",
    name: "Indoor WPC Wall Panels",
    tagline: "Wood-plastic composite panels for modern interior walls.",
    description:
      "Fluted and slatted WPC wall panels combining PVC and wood fiber for a waterproof, fire-retardant interior cladding. Widely used in hotel lobbies, apartment interiors, TV feature walls and commercial spaces where real wood would warp or rot.",
    image: "/images/products/category-indoor-wpc.jpg",
    accentColor: "#5C6B5A",
    faqs: [
      {
        question: "What materials are indoor WPC wall panels made of?",
        answer:
          "Our WPC panels are a blend of PVC resin and wood fiber (typically 30-40% wood content), extruded into fluted or slatted profiles. The composite is 100% waterproof, fire-retardant, and free of formaldehyde.",
      },
      {
        question: "What is the standard panel size and how is it priced?",
        answer:
          "Standard panels are 160 mm wide and 2.9 m long, priced per linear meter. Typical MOQ is 200-500 meters. Custom widths (120 mm, 200 mm) and lengths up to 3.0 m are available on request.",
      },
      {
        question: "Are WPC wall panels fire-rated for commercial projects?",
        answer:
          "Yes. Our WPC panels meet EN 13501-1 Class B fire rating and can be supplied with SGS or CE fire-test reports. Request the report with your order for code-compliant projects.",
      },
      {
        question: "Can the panels be installed directly over existing walls?",
        answer:
          "Yes. Panels install with a tongue-and-groove system over a timber or metal batten framework. No special tools required — standard woodworking saws and adhesive are sufficient for a clean install.",
      },
    ],
  },
  {
    slug: "outdoor-wpc-cladding",
    name: "Outdoor WPC Wall Cladding",
    tagline: "Weather-resistant exterior cladding with co-extrusion technology.",
    description:
      "Co-extruded WPC exterior wall cladding engineered for UV resistance, waterproofing and dimensional stability in outdoor conditions. Used on building facades, garden walls, hotel exteriors and commercial building envelopes.",
    image: "/images/products/category-outdoor-wpc.jpg",
    accentColor: "#8B6F47",
    faqs: [
      {
        question: "What is co-extrusion technology and why does it matter?",
        answer:
          "Co-extrusion applies a protective polymer cap layer around the WPC core during extrusion. This cap provides superior UV resistance, stain resistance and color stability compared to conventional WPC, extending exterior lifespan by 3-5 years.",
      },
      {
        question: "How weather-resistant is outdoor WPC cladding?",
        answer:
          "Our co-extruded WPC cladding is rated for outdoor use in temperatures from -30°C to 60°C. It is waterproof, anti-UV, anti-termite, and resists fading with Delta E < 3 after 1000 hours of QUV testing.",
      },
      {
        question: "What is the typical MOQ and lead time for exterior cladding?",
        answer:
          "MOQ ranges from 50 to 500 linear meters depending on the profile. Standard profiles ship in 20-25 days; custom colors and embossing require 30-35 days including cap layer production.",
      },
      {
        question: "Can outdoor WPC cladding be used in extreme climates?",
        answer:
          "Yes. The co-extruded cap layer protects against UV degradation in tropical and desert climates, while the composite core resists freeze-thaw cycles in cold regions. We supply to projects in the Middle East, South America and Southeast Asia.",
      },
    ],
  },
  {
    slug: "uv-marble-sheets",
    name: "UV Marble Sheets",
    tagline: "High-gloss PVC panels with UV-cured marble finish.",
    description:
      "UV-coated PVC marble sheets replicating natural stone at a fraction of the weight and cost. The UV lacquer cures to a high-gloss, scratch-resistant surface ideal for hotel lobby walls, bathroom panels and commercial interior cladding.",
    image: "/images/products/category-uv-marble.jpg",
    accentColor: "#8C8C8C",
    faqs: [
      {
        question: "What sizes are available for UV marble sheets?",
        answer:
          "Standard sizes are 1220 x 2440 mm (4 x 8 ft) and 1220 x 2800 mm, both at 3 mm thickness. Custom sizes up to 1220 x 3000 mm are available for large-format feature walls with MOQ of 100 sheets.",
      },
      {
        question: "How does a UV marble sheet compare to real marble?",
        answer:
          "UV marble sheets are 70% lighter than natural stone, 100% waterproof, and require no sealing. They replicate marble veining with 3D printing technology. However, they are thinner (3 mm vs 18-20 mm) and suited for wall cladding, not flooring or countertop use.",
      },
      {
        question: "Is the UV surface scratch and stain resistant?",
        answer:
          "Yes. The UV lacquer reaches 3H pencil hardness and resists common stains including coffee, wine and ink. It meets EN 438-2 durability standards for interior wall applications.",
      },
      {
        question: "Can UV marble sheets be used in wet areas?",
        answer:
          "Yes. The PVC substrate is 100% waterproof, making UV marble sheets ideal for bathroom walls, shower surrounds and spa corridors. Joints should be sealed with waterproof silicone for wet-area installations.",
      },
    ],
  },
  {
    slug: "wpc-decking",
    name: "WPC Decking",
    tagline: "Wood-plastic composite decking for outdoor floors.",
    description:
      "3D-embossed WPC decking planks engineered for outdoor garden decks, swimming pool surrounds, balconies and terraces. Co-extrusion and 3D embossing technologies deliver realistic wood texture with superior anti-slip and weather resistance.",
    image: "/images/products/category-wpc-decking.jpg",
    accentColor: "#8B6F47",
    faqs: [
      {
        question: "What is the standard decking plank size and profile?",
        answer:
          "Standard size is 140 x 25 mm, available in hollow and solid profiles. Hollow planks are lighter and more economical; solid planks offer higher load capacity for commercial decks. Lengths of 2.9 m and 3.0 m are standard.",
      },
      {
        question: "Does WPC decking get hot in direct sunlight?",
        answer:
          "WPC decking surfaces can reach 50-60°C in direct summer sun, similar to natural wood. Lighter colors absorb less heat. For pool surrounds and barefoot areas, we recommend lighter decors or our grooved anti-slip profile.",
      },
      {
        question: "Can I buy a complete decking system with accessories?",
        answer:
          "Yes. We supply complete systems including WPC joists, stainless steel clips, starter clips, fascia boards and edge trims. A full system ensures warranty coverage and consistent performance across the deck.",
      },
      {
        question: "How does WPC decking compare to natural timber decking?",
        answer:
          "WPC decking requires no staining or sealing, resists rot and termites, and lasts 15-25 years with minimal maintenance. Natural timber offers authentic grain and feel but requires annual maintenance. For commercial projects, WPC is the lower lifecycle-cost choice.",
      },
    ],
  },
  {
    slug: "spc-flooring",
    name: "SPC Flooring",
    tagline: "Stone-plastic composite flooring for commercial traffic.",
    description:
      "Rigid-core SPC flooring with a high-density limestone-powder core. The most dimensionally stable and impact-resistant vinyl floor available, engineered for hotel corridors, retail spaces, hospitals and heavy-traffic commercial interiors.",
    image: "/images/products/category-spc-flooring.jpg",
    accentColor: "#2D4A3E",
    faqs: [
      {
        question: "What does the SPC manufacturing process involve?",
        answer:
          "Limestone powder (70-75%) is mixed with PVC and stabilizers, extruded into a rigid core, then laminated with a wear layer and IXPE underlayment in a continuous UV-coating line. The result is a dimensionally stable, 100% waterproof plank.",
      },
      {
        question: "What wear-layer thickness is required for commercial use?",
        answer:
          "Commercial projects should specify a minimum 0.5 mm wear layer (0.55 mm for heavy commercial). Residential grades use 0.3 mm and are not recommended for hospitality. We stock 0.3 mm, 0.5 mm and 0.55 mm options.",
      },
      {
        question: "How fire-rated is SPC flooring?",
        answer:
          "Our commercial SPC lines meet EN 13501-1 Class Bfl-s1 and can be supplied with Class A test reports for code-compliant projects. CE and SGS certification documents are available on request.",
      },
      {
        question: "What is the typical lead time for a 40ft container of SPC?",
        answer:
          "Standard stocked decors ship in 15-20 days. Custom colors and embossing require 30-40 days including wear-layer and film production. Build this into your project schedule rather than discovering it at the container stage.",
      },
    ],
  },
  {
    slug: "ps-wall-panels",
    name: "PS Wall Panels",
    tagline: "Lightweight polystyrene panels with 3D decorative effects.",
    description:
      "Extruded polystyrene wall panels with 3D embossed patterns for interior decoration. Lightweight, waterproof and easy to install with adhesive, these panels offer an economical decorative solution for residential and commercial interior walls.",
    image: "/images/products/category-ps-wall.jpg",
    accentColor: "#5C6B5A",
    faqs: [
      {
        question: "What is the difference between PS and WPC wall panels?",
        answer:
          "PS (polystyrene) panels are lighter, less expensive and purely decorative — ideal for residential interiors and low-traffic feature walls. WPC panels are denser, fire-rated and suited for commercial and wet-area applications. PS is the budget choice; WPC is the commercial-grade choice.",
      },
      {
        question: "How are PS wall panels installed?",
        answer:
          "PS panels install with construction adhesive directly onto flat, clean walls. No battens or special tools required. Panels can be cut with a utility knife. This makes them the fastest and most economical wall panel to install.",
      },
      {
        question: "Are PS wall panels waterproof?",
        answer:
          "Yes, PS panels are waterproof and can be used in bathrooms and kitchens. However, they are thinner (typically 5-10 mm) than WPC panels and are not recommended for high-impact commercial environments.",
      },
      {
        question: "What patterns and finishes are available?",
        answer:
          "We stock 20+ 3D embossed patterns including wood grain, concrete texture, diamond, wave and geometric designs. Panels come in white by default and can be painted with water-based paint on site for custom colors.",
      },
    ],
  },
];

// 产品列表 — 基于 SONSILL 国际站真实产品数据
export const products: Product[] = [
  // ===== Indoor WPC Wall Panels =====
  {
    id: "iwpc-001",
    slug: "wooden-grain-wpc-fluted-panel",
    name: "Wooden Grain WPC Fluted Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Fluted WPC panel with teak wood grain, waterproof and fire-retardant.",
    description:
      "A fluted WPC wall panel with a realistic teak wood grain finish. The PVC-wood composite core is 100% waterproof and fire-rated to Class B, making it suitable for hotel lobbies, apartment interiors and TV feature walls. Tongue-and-groove installation.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Width: "160 mm",
      Length: "2.9 m",
      Thickness: "15 mm",
      Finish: "3D embossed wood grain",
      FireRating: "EN 13501-1 Class B",
      Waterproof: "Yes",
    },
    image: "/images/products/indoor-wpc-1.jpg",
    features: [
      "Waterproof and fire-retardant",
      "3D embossed realistic wood grain",
      "Tongue-and-groove easy install",
      "20+ wood grain decors available",
    ],
    moq: "200 meters",
    applications: ["Hotel lobbies", "TV feature walls", "Apartment interiors", "Restaurant interiors"],
  },
  {
    id: "iwpc-002",
    slug: "fireproof-fluted-wpc-panel",
    name: "Fireproof Fluted WPC Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Fire-rated fluted WPC panel for commercial interior cladding.",
    description:
      "A fire-rated fluted WPC panel designed for commercial interiors requiring Class B fire compliance. The dense PVC-WPC composite resists ignition and smoke spread, making it suitable for hotel corridors, office buildings and public spaces.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Width: "160 mm",
      Length: "2.9 m",
      Thickness: "12 mm",
      Finish: "Matte, fluted profile",
      FireRating: "EN 13501-1 Class B",
      Waterproof: "Yes",
    },
    image: "/images/products/indoor-wpc-2.jpg",
    features: [
      "Class B fire-rated for commercial use",
      "Anti-termite and anti-rot",
      "Low smoke emission",
      "SGS certified",
    ],
    moq: "300 meters",
    applications: ["Hotel corridors", "Office buildings", "Public spaces", "Commercial interiors"],
  },
  {
    id: "iwpc-003",
    slug: "3d-embossing-wood-grain-wpc",
    name: "3D Embossing Wood Grain WPC Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Deep-embossed WPC panel with synchronized wood texture.",
    description:
      "A premium WPC wall panel with deep 3D embossing synchronized to the wood grain decor. The tactile surface reproduces the feel of natural wood while delivering the waterproof and fireproof performance of WPC composite.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Width: "160 mm",
      Length: "2.9 m",
      Thickness: "15 mm",
      Finish: "3D synchronized embossing",
      FireRating: "EN 13501-1 Class B",
    },
    image: "/images/products/indoor-wpc-3.jpg",
    features: [
      "Synchronized 3D wood grain texture",
      "Premium tactile surface",
      "Waterproof and fireproof",
      "Available in oak, walnut, teak decors",
    ],
    moq: "200 meters",
    applications: ["Boutique hotels", "Premium apartments", "Restaurant interiors", "Office reception walls"],
  },
  {
    id: "iwpc-004",
    slug: "modern-louvre-wpc-panel",
    name: "Modern Louvre WPC Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Louvre-style WPC panel for contemporary interior design.",
    description:
      "A louvre-style WPC wall panel offering a modern, architectural aesthetic for contemporary interiors. The slatted louvre profile creates depth and shadow lines, popular for feature walls in cafes, offices and modern hotel lobbies.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Width: "160 mm",
      Length: "2.9 m",
      Thickness: "12 mm",
      Profile: "Louvre / slat",
      Finish: "Matte wood grain",
    },
    image: "/images/products/indoor-wpc-4.jpg",
    features: [
      "Modern louvre architectural profile",
      "Lightweight slatted design",
      "Waterproof and easy clean",
      "Suitable for ceiling and wall use",
    ],
    moq: "300 meters",
    applications: ["Cafe interiors", "Modern hotel lobbies", "Office feature walls", "Boutique retail"],
  },

  // ===== Outdoor WPC Wall Cladding =====
  {
    id: "owpc-001",
    slug: "co-extrusion-exterior-wpc-cladding",
    name: "Co-extrusion Exterior WPC Wall Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "Co-extruded WPC cladding with UV-resistant cap layer for exteriors.",
    description:
      "A co-extruded WPC exterior cladding panel with a protective polymer cap layer. The cap provides superior UV resistance, stain resistance and color stability, making it ideal for building facades, hotel exteriors and commercial building envelopes.",
    specs: {
      Material: "WPC with co-extrusion cap",
      Width: "140-200 mm",
      Length: "2.9 m",
      Thickness: "20-25 mm",
      Finish: "Wood grain, co-extruded cap",
      UVRating: "Delta E < 3 after 1000h QUV",
      FireRating: "Class B",
    },
    image: "/images/products/outdoor-wpc-1.jpg",
    features: [
      "Co-extrusion UV-resistant cap layer",
      "Waterproof and anti-termite",
      "Fade-resistant exterior finish",
      "15+ year outdoor lifespan",
    ],
    moq: "500 meters",
    applications: ["Building facades", "Hotel exteriors", "Garden walls", "Commercial envelopes"],
  },
  {
    id: "owpc-002",
    slug: "exterior-fluted-wpc-cladding",
    name: "Exterior Fluted WPC Wall Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "Fluted WPC cladding with deep groove profile for exterior walls.",
    description:
      "A fluted WPC exterior cladding with a deep groove profile that creates strong shadow lines on building facades. The co-extruded surface resists UV degradation and weathering, suitable for modern architectural exteriors.",
    specs: {
      Material: "WPC co-extruded",
      Width: "140 mm",
      Length: "2.9 m",
      Thickness: "20 mm",
      Profile: "Fluted / grooved",
      Finish: "Wood grain, matte",
      UVRating: "Anti-UV cap layer",
    },
    image: "/images/products/outdoor-wpc-2.jpg",
    features: [
      "Deep fluted shadow-line profile",
      "Anti-UV co-extrusion cap",
      "Weather-resistant -30 to 60C",
      "Low maintenance exterior",
    ],
    moq: "50 meters",
    applications: ["Modern building facades", "Hotel exterior walls", "Garden feature walls", "Office exteriors"],
  },
  {
    id: "owpc-003",
    slug: "anti-uv-wpc-wall-cladding",
    name: "Anti-UV WPC Wall Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "Economical WPC exterior cladding with UV stabilizers.",
    description:
      "An economical WPC exterior cladding with UV stabilizers blended into the composite. While not co-extruded, the UV-stabilized formulation provides good weather resistance for mid-range exterior projects in temperate climates.",
    specs: {
      Material: "WPC with UV stabilizers",
      Width: "140 mm",
      Length: "2.9 m",
      Thickness: "20 mm",
      Finish: "Wood grain, embossed",
      UVRating: "UV stabilized compound",
    },
    image: "/images/products/outdoor-wpc-3.jpg",
    features: [
      "UV-stabilized compound",
      "Economical exterior solution",
      "Waterproof and anti-termite",
      "Easy tongue-and-groove install",
    ],
    moq: "300 meters",
    applications: ["Residential exteriors", "Garden walls", "Balcony cladding", "Pergola walls"],
  },
  {
    id: "owpc-004",
    slug: "great-wall-cladding-wpc",
    name: "Great Wall Cladding WPC Panel",
    category: "outdoor-wpc-cladding",
    shortDescription: "Wide-profile co-extruded WPC cladding for grand exterior walls.",
    description:
      "A wide-profile co-extruded WPC cladding panel designed for large-scale exterior walls. The Great Wall profile offers bold vertical lines and superior weather protection, popular for hotel and resort exterior projects in the Middle East and Southeast Asia.",
    specs: {
      Material: "WPC co-extruded",
      Width: "200 mm",
      Length: "2.9 m",
      Thickness: "25 mm",
      Profile: "Great Wall / wide slat",
      Finish: "Wood grain, co-extruded cap",
      FireRating: "Class B",
    },
    image: "/images/products/outdoor-wpc-4.jpg",
    features: [
      "Wide-profile grand exterior design",
      "Co-extrusion UV protection",
      "Fire-rated Class B",
      "Popular in Middle East projects",
    ],
    moq: "500 meters",
    applications: ["Hotel and resort exteriors", "Grand building facades", "Commercial envelopes", "Villa exteriors"],
  },

  // ===== UV Marble Sheets =====
  {
    id: "uvm-001",
    slug: "1220x2440-uv-marble-sheet",
    name: "1220x2440mm UV Marble Sheet",
    category: "uv-marble-sheets",
    shortDescription: "Standard 4x8 ft UV-coated PVC marble sheet, high-gloss finish.",
    description:
      "A standard 1220 x 2440 mm (4 x 8 ft) UV-coated PVC marble sheet with a high-gloss finish. The UV lacquer cures to a mirror-like surface replicating natural marble veining, ideal for hotel lobby walls, bathroom panels and commercial interior cladding.",
    specs: {
      Material: "PVC + UV coating",
      Size: "1220 x 2440 mm (4 x 8 ft)",
      Thickness: "3 mm",
      Finish: "High gloss (90+ GU)",
      Hardness: "3H pencil",
      Waterproof: "Yes",
      FireRating: "Class B",
    },
    image: "/images/products/uv-marble-1.jpg",
    features: [
      "Standard 4x8 ft size for easy spec",
      "High-gloss mirror finish",
      "3H scratch-resistant UV surface",
      "20+ marble vein patterns",
    ],
    moq: "50 sheets (approx. 150 sqm)",
    applications: ["Hotel lobby walls", "Bathroom wall panels", "Commercial interiors", "Feature walls"],
  },
  {
    id: "uvm-002",
    slug: "high-gloss-1220x2800-uv-marble",
    name: "High-Gloss 1220x2800mm UV Marble Sheet",
    category: "uv-marble-sheets",
    shortDescription: "Extended-length UV marble sheet for seamless tall walls.",
    description:
      "An extended 1220 x 2800 mm UV marble sheet for seamless full-height wall cladding. The extra length reduces horizontal joints, making it ideal for hotel corridors and tall feature walls where visual continuity matters.",
    specs: {
      Material: "PVC + UV coating",
      Size: "1220 x 2800 mm",
      Thickness: "3 mm",
      Finish: "High gloss (90+ GU)",
      Hardness: "3H pencil",
      Waterproof: "Yes",
    },
    image: "/images/products/uv-marble-2.jpg",
    features: [
      "Extended 2.8 m length for tall walls",
      "Minimal horizontal joints",
      "High-gloss marble replication",
      "Fire-retardant option available",
    ],
    moq: "100 sheets",
    applications: ["Hotel corridors", "Tall feature walls", "Commercial cladding", "Reception wall panels"],
  },
  {
    id: "uvm-003",
    slug: "3d-printing-uv-marble-sheet",
    name: "3D Printing UV Marble Sheet",
    category: "uv-marble-sheets",
    shortDescription: "3D-printed marble texture with UV coating for premium interiors.",
    description:
      "A premium UV marble sheet with 3D printing technology that creates depth and realism in the marble veining. The multi-layer printing produces a three-dimensional texture visible under grazing light, suited to luxury hotel and retail interiors.",
    specs: {
      Material: "PVC + 3D printing + UV coating",
      Size: "1220 x 2440 mm",
      Thickness: "3 mm",
      Finish: "3D printed marble texture, high gloss",
      Hardness: "3H pencil",
      Waterproof: "Yes",
    },
    image: "/images/products/uv-marble-3.jpg",
    features: [
      "3D printing for realistic marble depth",
      "Multi-layer vein texture",
      "Premium high-gloss UV finish",
      "Luxury interior specification",
    ],
    moq: "10 sheets",
    applications: ["Luxury hotel interiors", "Boutique retail", "Premium feature walls", "Reception desks"],
  },
  {
    id: "uvm-004",
    slug: "fire-retardant-uv-marble-sheet",
    name: "Fire-Retardant UV Marble Sheet",
    category: "uv-marble-sheets",
    shortDescription: "Fire-rated PVC UV marble sheet for commercial code compliance.",
    description:
      "A fire-retardant formulation of the UV marble sheet designed for commercial projects requiring Class B fire compliance. Suitable for hotel interiors, hospital walls and public building cladding where fire codes apply.",
    specs: {
      Material: "Fire-retardant PVC + UV coating",
      Size: "1220 x 2440 mm",
      Thickness: "3 mm",
      Finish: "High gloss",
      FireRating: "EN 13501-1 Class B",
      Waterproof: "Yes",
    },
    image: "/images/products/uv-marble-4.jpg",
    features: [
      "Class B fire-rated for commercial use",
      "Low smoke emission",
      "UV high-gloss surface",
      "CE certified",
    ],
    moq: "50 sheets",
    applications: ["Hotel interiors", "Hospital walls", "Public buildings", "Commercial cladding"],
  },

  // ===== WPC Decking =====
  {
    id: "deck-001",
    slug: "co-extrusion-3d-embossed-wpc-decking",
    name: "Co-extrusion 3D Embossed WPC Decking",
    category: "wpc-decking",
    shortDescription: "Co-extruded WPC decking with 3D wood grain embossing and anti-slip surface.",
    description:
      "A premium co-extruded WPC decking plank with 3D embossed wood grain texture. The co-extrusion cap provides UV and stain resistance, while the 3D embossing delivers authentic wood feel and anti-slip performance for outdoor decks and pool surrounds.",
    specs: {
      Material: "WPC co-extruded",
      Size: "140 x 25 mm",
      Length: "2.9 m / 3.0 m",
      Profile: "Hollow or solid",
      Finish: "3D embossed wood grain",
      AntiSlip: "R10 rated",
      FireRating: "Class B",
    },
    image: "/images/products/wpc-decking-1.jpg",
    features: [
      "Co-extrusion UV and stain resistance",
      "3D synchronized wood grain texture",
      "R10 anti-slip rating",
      "15+ year outdoor warranty",
    ],
    moq: "300 meters",
    applications: ["Garden decks", "Swimming pool surrounds", "Hotel terraces", "Balconies"],
  },
  {
    id: "deck-002",
    slug: "complete-wpc-decking-system",
    name: "Complete WPC Decking System",
    category: "wpc-decking",
    shortDescription: "Full decking system with joists, clips and fascia boards included.",
    description:
      "A complete WPC decking system including planks, WPC joists, stainless steel clips, starter clips and fascia boards. Ordering as a system ensures warranty coverage and consistent performance — ideal for contractors managing full deck installations.",
    specs: {
      Material: "WPC",
      Plank: "140 x 25 mm hollow",
      Length: "2.9 m",
      Includes: "Joists, clips, starter clips, fascia",
      Finish: "Wood grain, embossed",
      AntiSlip: "R10 rated",
    },
    image: "/images/products/wpc-decking-2.jpg",
    features: [
      "Complete system with all accessories",
      "Stainless steel clip system",
      "Consistent warranty coverage",
      "Contractor-friendly packaging",
    ],
    moq: "500 meters (with system)",
    applications: ["Commercial deck projects", "Hotel pool decks", "Garden terraces", "Balcony decks"],
  },
  {
    id: "deck-003",
    slug: "eco-friendly-wpc-decking",
    name: "Eco-Friendly WPC Decking",
    category: "wpc-decking",
    shortDescription: "Economical WPC decking for residential and mid-traffic outdoor use.",
    description:
      "An economical WPC decking plank without co-extrusion cap, suitable for residential decks and mid-traffic outdoor areas in temperate climates. Made from recycled wood fiber and PVC, offering a sustainable decking option at a competitive price point.",
    specs: {
      Material: "WPC (recycled wood + PVC)",
      Size: "140 x 25 mm",
      Length: "2.9 m",
      Profile: "Hollow",
      Finish: "Embossed wood grain",
      AntiSlip: "R10 rated",
    },
    image: "/images/products/wpc-decking-3.jpg",
    features: [
      "Recycled material content",
      "Competitive price point",
      "No staining or sealing needed",
      "Resists rot and termites",
    ],
    moq: "250 meters",
    applications: ["Residential decks", "Garden terraces", "Balconies", "Walkways"],
  },
  {
    id: "deck-004",
    slug: "fire-resistant-wpc-decking",
    name: "Fire-Resistant WPC Decking",
    category: "wpc-decking",
    shortDescription: "Fire-rated WPC decking for commercial and hospitality outdoor areas.",
    description:
      "A fire-resistant WPC decking formulation rated Class B for commercial outdoor applications. Suitable for hotel pool decks, restaurant terraces and public outdoor spaces where fire codes require rated materials.",
    specs: {
      Material: "Fire-retardant WPC",
      Size: "140 x 25 mm",
      Length: "2.9 m",
      Profile: "Solid",
      Finish: "3D embossed wood grain",
      FireRating: "EN 13501-1 Class B",
      AntiSlip: "R11 rated",
    },
    image: "/images/products/wpc-decking-4.jpg",
    features: [
      "Class B fire-rated for commercial use",
      "R11 enhanced anti-slip",
      "Solid profile for high load",
      "UV and weather resistant",
    ],
    moq: "250 meters",
    applications: ["Hotel pool decks", "Restaurant terraces", "Public outdoor spaces", "Commercial walkways"],
  },

  // ===== SPC Flooring =====
  {
    id: "spc-001",
    slug: "waterproof-spc-vinyl-flooring",
    name: "Waterproof SPC Vinyl Flooring",
    category: "spc-flooring",
    shortDescription: "Standard SPC plank with 0.3mm wear layer for residential use.",
    description:
      "A standard SPC flooring plank with a 0.3 mm wear layer and pre-attached IXPE underlayment. The limestone-powder core is 100% waterproof and dimensionally stable, suitable for residential interiors and light commercial spaces.",
    specs: {
      Material: "SPC (limestone + PVC)",
      Plank: "1219 x 178 mm",
      Thickness: "5 mm + 1.5 mm IXPE",
      WearLayer: "0.3 mm residential",
      ClickSystem: "Unilin angle-angle",
      FireRating: "Bfl-s1",
      Waterproof: "Yes",
    },
    image: "/images/products/spc-flooring-1.jpg",
    features: [
      "100% waterproof rigid core",
      "Pre-attached IXPE underlayment",
      "Click floating installation",
      "40+ wood and stone decors",
    ],
    moq: "800 sqm",
    applications: ["Residential interiors", "Hotel bathrooms", "Apartment living rooms", "Boutique retail"],
  },
  {
    id: "spc-002",
    slug: "commercial-spc-plank-flooring",
    name: "Commercial-Grade SPC Plank Flooring",
    category: "spc-flooring",
    shortDescription: "0.5mm commercial wear layer SPC for hotel corridors and retail.",
    description:
      "A commercial-grade SPC plank with a 0.5 mm wear layer and reinforced limestone core, rated for hotel corridors, retail floors and hospitality lobbies. The dense core provides superior impact resistance and sound absorption.",
    specs: {
      Material: "SPC (high-density limestone + PVC)",
      Plank: "1219 x 178 mm",
      Thickness: "5 mm + 1.5 mm IXPE",
      WearLayer: "0.5 mm commercial",
      ClickSystem: "Unilin 5G-i",
      FireRating: "EN 13501-1 Bfl-s1",
      Waterproof: "Yes",
    },
    image: "/images/products/spc-flooring-2.jpg",
    features: [
      "0.5 mm commercial wear layer",
      "Bfl-s1 fire rated",
      "5G-i vertical click system",
      "Commercial warranty available",
    ],
    moq: "600 sqm",
    applications: ["Hotel corridors", "Retail floors", "Hospitality lobbies", "Office floors"],
  },
  {
    id: "spc-003",
    slug: "multi-thickness-spc-flooring",
    name: "Multi-Thickness SPC Flooring",
    category: "spc-flooring",
    shortDescription: "SPC planks in 3mm, 4mm and 5mm for varied subfloor needs.",
    description:
      "An SPC flooring line available in 3 mm, 4 mm and 5 mm thicknesses to match subfloor conditions and height constraints. The 3 mm option is ideal for renovations over existing tile; 5 mm with underlayment for new construction.",
    specs: {
      Material: "SPC (limestone + PVC)",
      Plank: "1219 x 178 mm",
      Thickness: "3 / 4 / 5 mm + 1.5 mm IXPE",
      WearLayer: "0.3 / 0.5 mm",
      ClickSystem: "Unilin angle-angle",
      FireRating: "Bfl-s1",
    },
    image: "/images/products/spc-flooring-3.jpg",
    features: [
      "Three thickness options for subfloor flexibility",
      "Thin 3mm for renovation overlays",
      "5mm with underlayment for new builds",
      "Same decor across thicknesses",
    ],
    moq: "300 sqm",
    applications: ["Renovation projects", "Hotel room upgrades", "Residential flooring", "Light commercial"],
  },
  {
    id: "spc-004",
    slug: "eir-textured-spc-plank",
    name: "EIR-Textured SPC Plank",
    category: "spc-flooring",
    shortDescription: "Synchronized embossed SPC with authentic wood texture feel.",
    description:
      "An EIR (embossed-in-register) SPC plank where the surface texture is synchronized with the woodgrain decor film, producing tactile realism indistinguishable from engineered wood at a fraction of the cost. Popular for hotel suites and premium residential.",
    specs: {
      Material: "SPC with EIR surface",
      Plank: "1219 x 178 mm",
      Thickness: "5 mm + 1.5 mm IXPE",
      WearLayer: "0.5 mm",
      Texture: "EIR synchronized embossing",
      ClickSystem: "Unilin 5G-i",
    },
    image: "/images/products/spc-flooring-4.jpg",
    features: [
      "EIR synchronized wood texture",
      "Realistic tactile wood feel",
      "0.5 mm commercial wear layer",
      "40+ wood decors available",
    ],
    moq: "800 sqm",
    applications: ["Hotel suites", "Premium residential", "Boutique retail", "Hospitality interiors"],
  },

  // ===== PS Wall Panels =====
  {
    id: "ps-001",
    slug: "waterproof-3d-ps-wall-panel",
    name: "Waterproof 3D PS Wall Panel",
    category: "ps-wall-panels",
    shortDescription: "3D embossed polystyrene panel, waterproof and adhesive-installed.",
    description:
      "A 3D embossed polystyrene wall panel with a wood grain texture. Lightweight, waterproof and installed with construction adhesive, this panel is the most economical decorative wall solution for residential interiors and feature walls.",
    specs: {
      Material: "PS (polystyrene)",
      Width: "120 mm",
      Length: "2.9 m",
      Thickness: "8-10 mm",
      Finish: "3D embossed wood grain",
      Waterproof: "Yes",
      Install: "Adhesive",
    },
    image: "/images/products/ps-wall-1.jpg",
    features: [
      "Adhesive install, no battens needed",
      "Lightweight, cut with utility knife",
      "Waterproof for bathroom use",
      "Paintable with water-based paint",
    ],
    moq: "500 meters",
    applications: ["Residential feature walls", "Bathroom walls", "Living room TV walls", "Bedroom accent walls"],
  },
  {
    id: "ps-002",
    slug: "concrete-texture-ps-wall-panel",
    name: "Concrete Texture PS Wall Panel",
    category: "ps-wall-panels",
    shortDescription: "Industrial concrete-look PS panel for modern interior design.",
    description:
      "A PS wall panel with a concrete texture finish, popular for industrial and loft-style interior designs. The embossed concrete pattern brings urban character to feature walls at a fraction of the cost and weight of real concrete.",
    specs: {
      Material: "PS (polystyrene)",
      Width: "120 mm",
      Length: "2.9 m",
      Thickness: "8-10 mm",
      Finish: "Concrete texture, embossed",
      Waterproof: "Yes",
      Install: "Adhesive",
    },
    image: "/images/products/ps-wall-2.jpg",
    features: [
      "Realistic concrete texture",
      "Industrial loft design style",
      "Lightweight, no structural load",
      "Easy adhesive installation",
    ],
    moq: "1000 meters",
    applications: ["Loft-style interiors", "Cafe feature walls", "Modern residential", "Retail design"],
  },
  {
    id: "ps-003",
    slug: "diamond-pattern-3d-ps-panel",
    name: "Diamond Pattern 3D PS Panel",
    category: "ps-wall-panels",
    shortDescription: "Decorative diamond-relief PS panel for statement walls.",
    description:
      "A PS wall panel with a diamond relief pattern, creating a geometric statement wall surface. The 3D diamond pattern catches light dramatically, popular for TV feature walls and bedroom accent walls in modern residential design.",
    specs: {
      Material: "PVC / PS blend",
      Size: "500 x 500 mm",
      Thickness: "10 mm",
      Pattern: "Diamond relief",
      Finish: "Matte white, paintable",
      Waterproof: "Yes",
    },
    image: "/images/products/ps-wall-3.jpg",
    features: [
      "Geometric diamond relief pattern",
      "Light-catching 3D surface",
      "Paintable for custom colors",
      "Modular tile installation",
    ],
    moq: "500 pieces",
    applications: ["TV feature walls", "Bedroom accent walls", "Living room design", "Residential decoration"],
  },
  {
    id: "ps-004",
    slug: "embossed-ps-3d-wall-panel",
    name: "Embossed PS 3D Wall Panel",
    category: "ps-wall-panels",
    shortDescription: "Deep-embossed PS panel with bold relief patterns.",
    description:
      "A deep-embossed PS wall panel with bold relief patterns available in 20+ designs. The deep embossing creates strong shadow and light effects, making these panels popular for feature walls in cafes, restaurants and modern residential spaces.",
    specs: {
      Material: "PS (polystyrene)",
      Size: "500 x 500 mm",
      Thickness: "12 mm",
      Relief: "Deep embossed, 8-10 mm depth",
      Finish: "White, paintable",
      Waterproof: "Yes",
    },
    image: "/images/products/ps-wall-3.jpg",
    features: [
      "Deep 8-10 mm relief patterns",
      "20+ design options in stock",
      "Strong light and shadow effects",
      "Paintable surface",
    ],
    moq: "2000 pieces",
    applications: ["Cafe interiors", "Restaurant feature walls", "Modern residential", "Retail decoration"],
  },
];

// ===== 数据查询工具函数 =====

export function getAllCategories(): ProductCategory[] {
  return categories;
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// 相关品类推荐：返回除当前品类外的其他品类（最多 3 个）
export function getRelatedCategories(currentSlug: string, limit = 3): ProductCategory[] {
  return categories.filter((c) => c.slug !== currentSlug).slice(0, limit);
}

// 每个品类的代表产品（取第一个用于总览页展示）
export function getFeaturedProductPerCategory(): Record<string, Product | undefined> {
  const map: Record<string, Product | undefined> = {};
  for (const c of categories) {
    map[c.slug] = products.find((p) => p.category === c.slug);
  }
  return map;
}
