// 产品数据 — 基于海宁供应链真实产品线
// 12 个核心板材品类，数据来源：alibaba.com 国际站竞品分析
// 更新日期：2026-07-16

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
    slug: "wpc-door",
    name: "WPC Door",
    tagline: "Waterproof WPC composite doors for interior and commercial spaces.",
    description:
      "Interior WPC doors, door frames and hidden doors engineered for waterproof, fire-prevention performance in home, office, hotel and bedroom applications. PVC composite material with wood grain finishes, customizable sizes and push-pull opening for residential and commercial projects.",
    image: "/images/products/wpc-door/WD-001.jpg",
    accentColor: "#8B6F47",
    faqs: [
      {
        question: "What materials are used in WPC doors?",
        answer:
          "WPC doors use a polymer-based PVC composite material with a 2mm/3.5mm wood-plastic skin. The composite core delivers waterproof, fire-prevention performance while the wood grain finish provides a natural timber appearance.",
      },
      {
        question: "Are WPC doors customizable in size?",
        answer:
          "Yes. Standard size is 2000x800mm, but all WPC doors, frames and hidden doors can be customized to project requirements. Contact our sales team with your dimensional specifications for tailored quotes.",
      },
      {
        question: "Where can WPC doors be applied?",
        answer:
          "WPC doors are suitable for home offices, bedrooms, hotels, living rooms and commercial interiors. The waterproof and fire-prevention properties make them ideal for humid environments and high-traffic commercial spaces.",
      },
      {
        question: "What is the difference between WPC doors and solid wood doors?",
        answer:
          "WPC doors are waterproof, termite-proof and require no maintenance, while solid wood doors need regular sealing and are susceptible to moisture damage. WPC composite doors offer a longer service life and lower lifecycle cost for commercial projects.",
      },
    ],
  },
  {
    slug: "spc-flooring",
    name: "SPC Flooring",
    tagline: "Waterproof, fireproof SPC vinyl flooring for indoor commercial and residential use.",
    description:
      "SPC (Stone Plastic Composite) vinyl flooring planks engineered for indoor hotel, home, office and commercial applications. PVC resin with calcium carbonate core, wear-resistant layer, click-lock installation. Waterproof, fireproof, anti-slip with wood grain finishes. Available in 3.5mm-7mm thickness with 0.3mm-0.7mm wear layer.",
    image: "/images/products/spc-flooring/SF-001.jpg",
    accentColor: "#2D4A3E",
    faqs: [
      {
        question: "What material is SPC flooring made of?",
        answer:
          "SPC flooring is made from PVC resin and calcium carbonate, extruded into a rigid core with a wear-resistant layer on top. The raw material is ECO-friendly PVC. This composition makes SPC flooring 100% waterproof, fireproof, and highly dimensionally stable compared to traditional vinyl flooring.",
      },
      {
        question: "What sizes and thicknesses are available?",
        answer:
          "Standard sizes include 1220*180mm and 1210*180mm. Thickness options range from 3.5mm to 7mm (3.5/4/5/6/7MM). Wear layer thickness options are 0.3mm, 0.5mm, and 0.7mm. Some models also offer inch-based sizes (6*36'', 6*48'', 7*48'', 9*48''). Custom sizes are available upon request.",
      },
      {
        question: "Is SPC flooring waterproof and fireproof?",
        answer:
          "Yes, SPC flooring is 100% waterproof and fireproof. The PVC and calcium carbonate core is inherently water-resistant, and the wear layer provides additional protection. This makes SPC flooring suitable for humid environments, kitchens, bathrooms, and commercial spaces requiring fire-rated materials. European standard models with CE and ISO9001 certification are also available.",
      },
      {
        question: "What applications is SPC flooring used for?",
        answer:
          "SPC flooring is designed for indoor applications including hotels, homes, offices, schools, halls, corridors, and commercial interiors. The click-lock installation system makes it suitable for both residential renovation and large-scale commercial projects. Anti-slip and wear-resistant models are available for high-traffic areas.",
      },
      {
        question: "What is the MOQ and packaging?",
        answer:
          "Standard MOQ is 500 square meters for most models, with some models requiring 1000 sqm or a 20ft container. Packaging typically includes cartons with 10-13 pieces per carton, loaded on wooden pallets. Container loading ranges from 2000-4000 SQM per 20ft container to 7000-13000 SQM per 40HQ container. Please contact our sales team for specific MOQ and packaging details.",
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

  // ===== 新增品类（2026-07-16，基于阿里巴巴数据） =====
  {
    slug: "3d-wall-panels",
    name: "3D Wall Panels",
    tagline: "Textured decorative panels with 3D patterns and designs.",
    description:
      "3D PVC wall panels with diamond, wave and geometric patterns. Waterproof, lightweight and easy to install for feature walls in hotels, restaurants and residential interiors.",
    image: "/images/products/category-3d-wall.jpg",
    accentColor: "#8B7355",
    faqs: [
      {
        question: "What patterns are available for 3D wall panels?",
        answer:
          "We offer 30+ 3D patterns including diamond, wave, geometric, brick, organic and linear designs. Panels are typically 500 x 500 mm or 600 x 600 mm tiles that interlock to form continuous feature walls.",
      },
      {
        question: "How are 3D wall panels installed and finished?",
        answer:
          "3D panels install with construction adhesive or panel adhesive onto flat, primed walls. Most panels come primed white and can be finished with water-based paint, metallic paint or glaze to enhance the 3D relief effect.",
      },
    ],
  },
  {
    slug: "pu-stone-panels",
    name: "PU Stone Panels",
    tagline: "Polyurethane faux stone panels for interior and exterior.",
    description:
      "Lightweight polyurethane stone panels designed to replicate natural stone textures for interior walls, exterior facades and decorative spaces.",
    image: "/images/products/pu-stone/category-hero.jpg",
    accentColor: "#7A6B5D",
    faqs: [
      {
        question: "What is the MOQ for PU stone panels?",
        answer:
          "MOQ varies by product model and is based on the minimum carton quantity. Please contact our sales team for confirmation.",
      },
      {
        question: "Can I order samples?",
        answer:
          "Yes. Please contact our sales team for confirmation. Sample availability and charges may vary by product.",
      },
    ],
  },
  {
    slug: "acoustic-wall-panels",
    name: "Acoustic Wall Panels",
    tagline: "Sound-absorbing panels for noise-controlled environments.",
    description:
      "Acoustic wall panels designed for sound absorption in offices, conference rooms, studios and commercial spaces. Combines PET felt or wood slat surfaces with acoustic backing for NRC ratings up to 0.85.",
    image: "/images/products/category-acoustic.jpg",
    accentColor: "#5A6A7A",
    faqs: [
      {
        question: "What is the NRC rating of your acoustic wall panels?",
        answer:
          "Our acoustic panels achieve NRC (Noise Reduction Coefficient) ratings from 0.45 to 0.85 depending on thickness and construction. PET felt panels typically rate 0.45-0.65, while wood slat panels with acoustic felt backing reach 0.70-0.85 at 25 mm thickness.",
      },
      {
        question: "Are acoustic wall panels suitable for office and studio use?",
        answer:
          "Yes. Our panels are engineered for speech privacy and reverberation control in open offices, conference rooms, recording studios and home theaters. They meet ISO 354 acoustic testing standards and come in fire-retardant formulations for commercial code compliance.",
      },
    ],
  },
  {
    slug: "wood-veneer-panels",
    name: "Wood Veneer Panels",
    tagline: "Natural wood veneer on stable composite cores.",
    description:
      "Real wood veneer laminated on WPC or MDF cores, offering the authentic look of natural timber with dimensional stability. Bamboo charcoal wood veneer options available for background walls.",
    image: "/images/products/category-wood-veneer.jpg",
    accentColor: "#6B5A4A",
    faqs: [
      {
        question: "What wood species are available for veneer panels?",
        answer:
          "We offer natural wood veneers in oak, walnut, teak, cherry, ash, sycamore and bamboo charcoal. Veneers are sliced from real logs (not reconstituted), preserving authentic grain character. Custom species and figured veneers (burl, quilted) are available on request.",
      },
      {
        question: "What core materials are used under the wood veneer?",
        answer:
          "Panels are available with WPC (waterproof), MDF (stable and economical) or bamboo charcoal composite cores. WPC-core veneer panels combine the authentic look of real wood with full waterproof performance, suited to humid environments where solid wood would warp.",
      },
    ],
  },
  {
    slug: "pvc-ceiling-panels",
    name: "PVC Ceiling Panels",
    tagline: "Lightweight PVC panels for false ceilings.",
    description:
      "PVC ceiling panels in 40cm and 60cm widths with wood grain and solid color finishes. Waterproof, fire-retardant and easy to install for residential and commercial false ceiling applications.",
    image: "/images/products/category-pvc-ceiling.jpg",
    accentColor: "#4A6B5A",
    faqs: [
      {
        question: "What widths and sizes are available for PVC ceiling panels?",
        answer:
          "Standard widths are 20 cm, 40 cm and 60 cm, with lengths of 2.9 m and 3.0 m. Thickness ranges from 7 mm to 10 mm. The 40 cm and 60 cm wide panels are the most popular for commercial ceilings, reducing installation time and joint lines.",
      },
      {
        question: "Are PVC ceiling panels waterproof and fire-rated?",
        answer:
          "Yes. PVC ceiling panels are 100% waterproof, making them ideal for bathroom, kitchen and swimming pool ceilings. Fire-retardant formulations meet EN 13501-1 Class B rating, and panels are available with SGS fire-test reports for commercial code compliance.",
      },
    ],
  },
  {
    slug: "pvc-partition-panels",
    name: "PVC Partition Panels",
    tagline: "Folding and sliding partition panels for flexible spaces.",
    description:
      "PVC partition panels for creating flexible room divisions in offices, restaurants and homes. Available in folding, sliding and fixed configurations with various decorative finishes.",
    image: "/images/products/category-pvc-partition.jpg",
    accentColor: "#5A5A6B",
    faqs: [
      {
        question: "What types of PVC partition panels are available?",
        answer:
          "We supply three main types: folding (accordion) partitions for rapid space division, sliding track-mounted panels for smooth operation, and fixed modular panels for semi-permanent divisions. All use a lightweight PVC frame with decorative panel infills.",
      },
      {
        question: "Can PVC partition panels provide acoustic insulation?",
        answer:
          "Yes. Our acoustic partition panels achieve STC (Sound Transmission Class) ratings of 28-35 depending on panel thickness and infill. For office and conference room privacy, we recommend double-skin panels with acoustic insulation between skins.",
      },
    ],
  },
];

// 产品列表 — 基于国际站真实产品数据
export const products: Product[] = [
  // ===== Indoor WPC Wall Panels =====
  {
    id: "wpc-indoor-001",
    slug: "fire-retardant-slatted-wpc-panel",
    name: "Fire Retardant Slatted WPC Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Wooden grain modern wall cladding with fire retardant properties for home decor.",
    description:
      "A fire-retardant slatted WPC wall panel combining a natural wooden grain finish with Class B fire performance for safe interior home decor. The slatted profile adds linear rhythm to feature walls while the PVC-wood composite core resists moisture, termites and warping. Suitable for living rooms, bedrooms and hospitality interiors where both aesthetics and fire safety matter.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Size: "2900 x 159 mm",
      Thickness: "12 mm",
      Profile: "Slatted",
      Finish: "Wooden grain embossed",
      FireRating: "EN 13501-1 Class B",
      Waterproof: "Yes",
    },
    image: "/images/products/indoor-wpc-1.jpg",
    features: [
      "Class B fire-retardant for safe interiors",
      "Realistic wooden grain finish",
      "Waterproof and anti-termite",
      "Easy tongue-and-groove installation",
    ],
    moq: "180 meters",
    applications: ["Home living room decor", "Bedroom feature walls", "Hotel interiors", "Apartment TV walls"],
  },
  {
    id: "wpc-indoor-002",
    slug: "wooden-grain-wpc-hotel-panel",
    name: "Wooden Grain WPC Wall Panel for Hotel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Modern wall cladding for TV background walls and hotel interior decoration.",
    description:
      "A wooden grain WPC wall panel engineered for hotel interiors and TV background walls, delivering the warmth of natural timber with the durability of PVC-wood composite. The panel is fully waterproof, formaldehyde-free and easy to maintain, making it ideal for high-traffic hospitality corridors and guest rooms. A wide selection of wood decors matches any interior design scheme.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Size: "2900 x 160 mm",
      Thickness: "12 mm",
      Profile: "Fluted",
      Finish: "Wooden grain",
      Waterproof: "Yes",
      Formaldehyde: "Free",
    },
    image: "/images/products/indoor-wpc-2.jpg",
    features: [
      "Designed for hotel and TV background walls",
      "Waterproof and formaldehyde-free",
      "Wide wood decor selection",
      "Low maintenance surface",
    ],
    moq: "300 meters",
    applications: ["Hotel corridors", "TV background walls", "Guest room interiors", "Lobby feature walls"],
  },
  {
    id: "wpc-indoor-003",
    slug: "eco-wood-15mm-wpc-panel",
    name: "Eco Wood 15mm WPC Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "High quality decorative wall cladding panel with classic wooden pattern, 15mm thickness.",
    description:
      "A high-quality 15 mm WPC decorative wall cladding panel featuring a classic wooden pattern that replicates the look of solid timber. The thicker 15 mm profile provides enhanced rigidity and acoustic damping, suited to premium residential and commercial interiors. Made from eco-friendly recycled wood fiber and PVC, it is fully waterproof and dimensionally stable.",
    specs: {
      Material: "WPC (eco wood fiber + PVC)",
      Size: "2900 x 160 mm",
      Thickness: "15 mm",
      Profile: "Fluted",
      Finish: "Classic wooden pattern",
      Waterproof: "Yes",
      EcoFriendly: "Recycled content",
    },
    image: "/images/products/indoor-wpc-3.jpg",
    features: [
      "Premium 15 mm thickness for rigidity",
      "Classic wooden pattern decor",
      "Eco-friendly recycled content",
      "Enhanced acoustic damping",
    ],
    moq: "300 meters",
    applications: ["Premium residential interiors", "Commercial feature walls", "Office reception areas", "Boutique retail"],
  },
  {
    id: "wpc-indoor-004",
    slug: "waterproof-fluted-wpc-ceiling-panel",
    name: "Waterproof Fluted WPC Ceiling & Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "PVC film wood plastic WPC ceiling slat cladding for interior decoration.",
    description:
      "A versatile fluted WPC panel suitable for both ceiling and wall cladding, finished with a PVC film wood-plastic surface for interior decoration. The fluted profile creates elegant shadow lines while the waterproof core allows use in humid rooms such as bathrooms, kitchens and spa areas. Dual-purpose design reduces sourcing complexity for contractors.",
    specs: {
      Material: "WPC with PVC film",
      Size: "2900 x 159 mm",
      Thickness: "12 mm",
      Profile: "Fluted",
      Finish: "PVC film wood grain",
      Waterproof: "Yes",
      Application: "Ceiling and wall",
    },
    image: "/images/products/indoor-wpc-4.jpg",
    features: [
      "Dual ceiling and wall application",
      "PVC film decorative surface",
      "Waterproof for humid rooms",
      "Elegant fluted shadow lines",
    ],
    moq: "324 meters",
    applications: ["Bathroom ceilings", "Kitchen walls", "Spa interiors", "Hotel reception ceilings"],
  },
  {
    id: "wpc-indoor-005",
    slug: "eco-wood-tv-background-panel",
    name: "Eco-Wood WPC TV Background Wall Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Modern eco-wood WPC panels for TV background wall cladding.",
    description:
      "A modern eco-wood WPC panel designed specifically for TV background wall cladding, combining contemporary aesthetics with sustainable materials. The panel's clean lines and natural wood tones create a warm focal point behind media units, while the waterproof and termite-proof core ensures long-term performance. Quick clip-in installation suits both renovation and new-build projects.",
    specs: {
      Material: "Eco-wood WPC (PVC + wood fiber)",
      Size: "2900 x 160 mm",
      Thickness: "12 mm",
      Profile: "Slatted",
      Finish: "Eco-wood matte",
      Waterproof: "Yes",
      Install: "Clip-in",
    },
    image: "/images/products/indoor-wpc-1.jpg",
    features: [
      "Designed for TV background walls",
      "Sustainable eco-wood material",
      "Quick clip-in installation",
      "Termite-proof core",
    ],
    moq: "300 meters",
    applications: ["TV background walls", "Living room feature walls", "Apartment interiors", "Modern home theaters"],
  },
  {
    id: "wpc-indoor-006",
    slug: "fluted-wpc-slat-wall-panel",
    name: "Fluted WPC Wooden Wall Slat Panel",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Home interior fluted wall panel with wooden wall slat design for cladding.",
    description:
      "A fluted WPC wooden wall slat panel offering a tactile linear slat design for home interior cladding. The deep-fluted profile produces strong shadow and light effects that add depth to feature walls, popular in contemporary residential and hospitality design. The low 36-meter MOQ makes it accessible for smaller residential projects and sample orders.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Size: "2900 x 160 mm",
      Thickness: "15 mm",
      Profile: "Fluted slat",
      Finish: "Wooden slat",
      Waterproof: "Yes",
    },
    image: "/images/products/indoor-wpc-2.jpg",
    features: [
      "Deep-fluted tactile slat design",
      "Strong shadow and light effects",
      "Low MOQ for small projects",
      "Contemporary residential aesthetic",
    ],
    moq: "36 meters",
    applications: ["Home feature walls", "Contemporary living rooms", "Boutique hotel interiors", "Modern apartment decor"],
  },
  {
    id: "wpc-indoor-007",
    slug: "wooden-grain-wpc-home-decor",
    name: "Wooden Grain WPC Wall Panel for Home Decor",
    category: "indoor-wpc-wall-panels",
    shortDescription: "Home decor wall cladding for TV background walls with wooden grain finish.",
    description:
      "A wooden grain WPC wall panel tailored for home decor and TV background wall cladding, offering the authentic appearance of natural wood with the practical benefits of WPC composite. The panel is fully waterproof, scratch-resistant and easy to clean, making it suitable for busy family homes. A range of wood tones complements both modern and traditional interior styles.",
    specs: {
      Material: "WPC (PVC + wood fiber)",
      Size: "2900 x 160 mm",
      Thickness: "12 mm",
      Profile: "Fluted",
      Finish: "Wooden grain",
      Waterproof: "Yes",
      ScratchResistant: "Yes",
    },
    image: "/images/products/indoor-wpc-3.jpg",
    features: [
      "Authentic wooden grain appearance",
      "Waterproof and scratch-resistant",
      "Easy to clean surface",
      "Multiple wood tone options",
    ],
    moq: "300 meters",
    applications: ["Home decor walls", "TV background walls", "Family living rooms", "Residential hallways"],
  },

  // ===== Outdoor WPC Wall Cladding =====
  {
    id: "wpc-outdoor-001",
    slug: "waterproof-outdoor-wpc-cladding",
    name: "Waterproof Outdoor WPC Wall Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "High quality outdoor wall panel for exterior wall decoration.",
    description:
      "A high-quality waterproof WPC wall cladding panel engineered for exterior wall decoration. The wood-plastic composite resists moisture, UV and temperature fluctuations, maintaining dimensional stability across seasons. An economical yet durable solution for residential facades, garden walls and commercial building exteriors.",
    specs: {
      Material: "WPC (wood plastic composite)",
      Size: "2900 x 140 mm",
      Thickness: "20 mm",
      Profile: "Flat / grooved",
      Finish: "Wood grain",
      Waterproof: "Yes",
      UVRating: "UV stabilized",
    },
    image: "/images/products/outdoor-wpc-1.jpg",
    features: [
      "Fully waterproof exterior cladding",
      "UV-stabilized for outdoor use",
      "Dimensional stability across seasons",
      "Economical exterior solution",
    ],
    moq: "300 meters",
    applications: ["Residential facades", "Garden walls", "Commercial exteriors", "Villa cladding"],
  },
  {
    id: "wpc-outdoor-002",
    slug: "garden-fluted-wpc-cladding",
    name: "Garden Fluted WPC Exterior Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "External WPC wall cladding for garden and exterior decoration.",
    description:
      "A fluted WPC exterior cladding panel designed for garden and exterior decoration projects. The fluted profile adds architectural depth to outdoor walls while the weather-resistant composite withstands rain, humidity and sun exposure without rotting or splitting. Popular for garden feature walls, pergolas and boundary cladding.",
    specs: {
      Material: "WPC (wood plastic composite)",
      Size: "2900 x 140 mm",
      Thickness: "20 mm",
      Profile: "Fluted",
      Finish: "Wood grain embossed",
      Waterproof: "Yes",
      WeatherResistance: "-30 to 60C",
    },
    image: "/images/products/outdoor-wpc-2.jpg",
    features: [
      "Fluted architectural profile",
      "Weather-resistant composite",
      "Rot and split resistant",
      "Ideal for garden feature walls",
    ],
    moq: "350 meters",
    applications: ["Garden feature walls", "Pergola cladding", "Boundary walls", "Exterior decoration"],
  },
  {
    id: "wpc-outdoor-003",
    slug: "acoustic-outdoor-wpc-panel",
    name: "Acoustic Outdoor WPC Wall Panel",
    category: "outdoor-wpc-cladding",
    shortDescription: "External cladding with acoustic properties for outdoor composite garden decoration.",
    description:
      "An acoustic outdoor WPC wall panel combining exterior-grade weather resistance with sound-damping performance. The denser composite core and profiled surface help reduce noise reflection, making it suited to urban gardens, roadside properties and commercial exteriors near noisy environments. Delivers both decorative and functional benefits.",
    specs: {
      Material: "WPC acoustic composite",
      Size: "2900 x 140 mm",
      Thickness: "22 mm",
      Profile: "Fluted acoustic",
      Finish: "Wood grain",
      Waterproof: "Yes",
      Acoustic: "Sound-damping",
    },
    image: "/images/products/outdoor-wpc-3.jpg",
    features: [
      "Acoustic sound-damping performance",
      "Exterior-grade weather resistance",
      "Denser composite core",
      "Urban and roadside suitability",
    ],
    moq: "350 meters",
    applications: ["Urban garden walls", "Roadside property cladding", "Commercial exteriors", "Acoustic barriers"],
  },
  {
    id: "wpc-outdoor-004",
    slug: "co-extrusion-outdoor-wpc-cladding",
    name: "Co-extrusion Outdoor WPC Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "WPC wood plastic composite co-extrusion outdoor decoration wall cladding.",
    description:
      "A co-extrusion WPC outdoor cladding panel featuring a protective polymer cap layer that surrounds the composite core. The co-extruded cap delivers superior UV resistance, stain resistance and color stability, extending the exterior lifespan by 3-5 years compared to conventional WPC. The premium choice for long-life building facades and hotel exteriors.",
    specs: {
      Material: "WPC with co-extrusion cap",
      Size: "2900 x 140-200 mm",
      Thickness: "20-25 mm",
      Profile: "Flat / fluted",
      Finish: "Co-extruded wood grain",
      UVRating: "Delta E < 3 after 1000h QUV",
      Waterproof: "Yes",
    },
    image: "/images/products/outdoor-wpc-4.jpg",
    features: [
      "Co-extrusion UV-resistant cap layer",
      "Superior stain and color stability",
      "3-5 year longer exterior life",
      "Premium facade solution",
    ],
    moq: "350 meters",
    applications: ["Building facades", "Hotel exteriors", "Commercial envelopes", "Premium villa cladding"],
  },
  {
    id: "wpc-outdoor-005",
    slug: "anti-termite-wpc-siding",
    name: "Anti-Termite WPC Exterior Siding",
    category: "outdoor-wpc-cladding",
    shortDescription: "Co-extrusion exterior wood plastic composite wall covering with anti-termite treatment.",
    description:
      "An anti-termite WPC exterior siding panel with co-extrusion cap and termite-resistant treatment throughout the composite. Engineered for regions where insect damage threatens timber cladding, it delivers long-term exterior performance without chemical retreatment. The siding profile mimics natural timber siding while remaining impervious to termites and rot.",
    specs: {
      Material: "WPC co-extrusion with anti-termite",
      Size: "2900 x 150 mm",
      Thickness: "20 mm",
      Profile: "Siding",
      Finish: "Wood grain co-extruded",
      AntiTermite: "Yes",
      Waterproof: "Yes",
    },
    image: "/images/products/outdoor-wpc-1.jpg",
    features: [
      "Anti-termite treated composite",
      "Co-extrusion cap protection",
      "Timber siding aesthetic",
      "No chemical retreatment needed",
    ],
    moq: "200 meters",
    applications: ["Termite-prone region exteriors", "Residential siding", "Tropical climate cladding", "Villa exteriors"],
  },
  {
    id: "wpc-outdoor-006",
    slug: "vinyl-siding-wpc-cladding",
    name: "Vinyl Siding WPC Wall Cladding",
    category: "outdoor-wpc-cladding",
    shortDescription: "Wooden look house vinyl siding WPC wood composite exterior wall cladding.",
    description:
      "A vinyl siding WPC wall cladding panel offering the wooden look of traditional house siding with the durability of wood-plastic composite. The interlocking siding profile installs quickly over battens, providing a weatherproof exterior skin for residential and light commercial buildings. Available in multiple wood-look decors to match architectural styles.",
    specs: {
      Material: "WPC vinyl siding composite",
      Size: "3000 x 200 mm",
      Thickness: "18 mm",
      Profile: "Vinyl siding interlocking",
      Finish: "Wooden look",
      Waterproof: "Yes",
      Install: "Batten and interlock",
    },
    image: "/images/products/outdoor-wpc-2.jpg",
    features: [
      "Wooden-look vinyl siding aesthetic",
      "Quick interlocking installation",
      "Weatherproof exterior skin",
      "Multiple architectural decors",
    ],
    moq: "200 meters",
    applications: ["House exteriors", "Residential siding", "Light commercial buildings", "Renovation overlays"],
  },
  {
    id: "wpc-outdoor-007",
    slug: "pvc-fluted-exterior-panel",
    name: "PVC Fluted Exterior Wall Panel",
    category: "outdoor-wpc-cladding",
    shortDescription: "Outdoor PVC wall board panel with fluted decorative co-extrusion exterior cladding.",
    description:
      "An outdoor PVC fluted wall board panel combining co-extrusion exterior cladding performance with a decorative fluted surface. The PVC-based composite offers excellent weatherability and color retention, while the fluted profile adds visual interest to exterior walls. Suited to modern architectural facades requiring both form and function.",
    specs: {
      Material: "PVC co-extrusion composite",
      Size: "2900 x 140 mm",
      Thickness: "18 mm",
      Profile: "Fluted decorative",
      Finish: "Co-extrusion",
      Waterproof: "Yes",
      UVRating: "High color retention",
    },
    image: "/images/products/outdoor-wpc-3.jpg",
    features: [
      "PVC weatherable composite",
      "Co-extrusion color retention",
      "Decorative fluted surface",
      "Modern architectural facade",
    ],
    moq: "200 meters",
    applications: ["Modern building facades", "Exterior feature walls", "Commercial exteriors", "Architectural cladding"],
  },

  // ===== UV Marble Sheets =====
  {
    id: "uv-marble-001",
    slug: "3d-printing-uv-marble-panel",
    name: "3D Printing UV Marble PVC Panel",
    category: "uv-marble-sheets",
    shortDescription: "Factory price 3D printing 1.22*2.44m wall plastic UV marble PVC panel.",
    description:
      "A factory-price 3D printing UV marble PVC panel in 1.22 x 2.44 m format, using multi-layer 3D printing to create realistic depth in the marble veining. The UV-cured lacquer surface is high-gloss, scratch-resistant and waterproof, delivering a premium stone look at a fraction of natural marble cost. Low 10 sqm MOQ suits sample orders and small projects.",
    specs: {
      Material: "PVC + 3D printing + UV coating",
      Size: "1220 x 2440 mm",
      Thickness: "3 mm",
      Finish: "3D printed marble, high gloss",
      Hardness: "3H pencil",
      Waterproof: "Yes",
    },
    image: "/images/products/uv-marble-1.jpg",
    features: [
      "Factory price with low 10 sqm MOQ",
      "3D printing for realistic marble depth",
      "High-gloss scratch-resistant UV surface",
      "Lightweight alternative to natural marble",
    ],
    moq: "10 sqm",
    applications: ["Hotel lobby walls", "Feature walls", "Bathroom panels", "Commercial interiors"],
  },
  {
    id: "uv-marble-002",
    slug: "uv-marble-sheet-saudi-arabia",
    name: "UV Marble Sheet for Saudi Arabia",
    category: "uv-marble-sheets",
    shortDescription: "4*8 UV marble sheet PVC marble sheet UV board for Saudi Arabia market.",
    description:
      "A 4x8 UV marble sheet specifically configured for the Saudi Arabia market, with decors and sizes matched to regional project requirements. The PVC marble UV board offers high-gloss finish, waterproof performance and heat-resistant formulation suited to Middle East climates. Popular for residential and hospitality projects across the Gulf region.",
    specs: {
      Material: "PVC + UV coating",
      Size: "1220 x 2440 mm (4 x 8 ft)",
      Thickness: "3 mm",
      Finish: "High gloss marble",
      Waterproof: "Yes",
      Market: "Saudi Arabia / Middle East",
    },
    image: "/images/products/uv-marble-2.jpg",
    features: [
      "Configured for Saudi Arabia market",
      "Heat-resistant formulation",
      "High-gloss marble finish",
      "Regional decor matching",
    ],
    moq: "10 sqm",
    applications: ["Middle East hospitality", "Gulf residential projects", "Hotel interiors", "Commercial cladding"],
  },
  {
    id: "uv-marble-003",
    slug: "high-glossy-pvc-marble-sheet",
    name: "High Glossy PVC Marble UV Sheet",
    category: "uv-marble-sheets",
    shortDescription: "High glossy 1220x2440mm 3mm PVC wall panel / PVC marble UV sheet.",
    description:
      "A high-glossy 1220 x 2440 mm x 3 mm PVC marble UV sheet delivering a mirror-like marble finish for interior wall panels. The UV lacquer cures to a smooth, easy-clean surface that resists stains and scratches, ideal for hygiene-sensitive areas. Suitable for both residential feature walls and commercial interior cladding.",
    specs: {
      Material: "PVC + UV coating",
      Size: "1220 x 2440 mm",
      Thickness: "3 mm",
      Finish: "High glossy (90+ GU)",
      Hardness: "3H pencil",
      Waterproof: "Yes",
    },
    image: "/images/products/uv-marble-3.jpg",
    features: [
      "Mirror-like high-gloss finish",
      "Stain and scratch resistant",
      "Easy-clean hygienic surface",
      "Standard 4x8 size",
    ],
    moq: "10 meters",
    applications: ["Interior wall panels", "Kitchen walls", "Bathroom panels", "Commercial interiors"],
  },
  {
    id: "uv-marble-004",
    slug: "waterproof-uv-marble-1220",
    name: "Waterproof UV Marble Sheet 1220x2440",
    category: "uv-marble-sheets",
    shortDescription: "1220x2440 and 1220x2800 modern style waterproof UV marble sheet wall decor PVC sheet.",
    description:
      "A modern-style waterproof UV marble sheet available in 1220 x 2440 and 1220 x 2800 formats for wall decor. The PVC sheet combines a waterproof substrate with a UV-cured marble finish, available in contemporary vein patterns to suit modern interior design. Priced per piece with 100-piece MOQ for project quantities.",
    specs: {
      Material: "PVC + UV coating",
      Size: "1220 x 2440 / 1220 x 2800 mm",
      Thickness: "3 mm",
      Finish: "Modern style marble",
      Waterproof: "Yes",
      Pricing: "Per piece",
    },
    image: "/images/products/uv-marble-4.jpg",
    features: [
      "Two size options for design flexibility",
      "Modern marble vein patterns",
      "Fully waterproof substrate",
      "UV-cured durable finish",
    ],
    moq: "100 pieces",
    applications: ["Modern wall decor", "Hotel interiors", "Residential feature walls", "Commercial cladding"],
  },
  {
    id: "uv-marble-005",
    slug: "fire-resistant-uv-marble-1220x2800",
    name: "Fire Resistant UV Marble Sheet 1220x2800",
    category: "uv-marble-sheets",
    shortDescription: "New trendy 1220*2800mm 3mm PVC marble alternative board, waterproof and fire resistant.",
    description:
      "A new-trendy 1220 x 2800 mm x 3 mm PVC marble alternative board offering both waterproof and fire-resistant performance. The extended 2.8 m length minimizes horizontal joints on tall feature walls, while the fire-rated formulation meets commercial code requirements. A lightweight, cost-effective alternative to natural marble for code-compliant interiors.",
    specs: {
      Material: "Fire-retardant PVC + UV coating",
      Size: "1220 x 2800 mm",
      Thickness: "3 mm",
      Finish: "Trendy marble",
      FireRating: "EN 13501-1 Class B",
      Waterproof: "Yes",
    },
    image: "/images/products/uv-marble-1.jpg",
    features: [
      "Fire-resistant Class B formulation",
      "Extended 2.8 m for tall walls",
      "Waterproof and code-compliant",
      "Lightweight marble alternative",
    ],
    moq: "100 pieces",
    applications: ["Tall feature walls", "Commercial code-compliant interiors", "Hotel corridors", "Public buildings"],
  },
  {
    id: "uv-marble-006",
    slug: "flexible-pvc-marble-panel",
    name: "Flexible PVC Marble Panel Sheet",
    category: "uv-marble-sheets",
    shortDescription: "Flexible plastic 3mm wall covering waterproof PVC wall marble panel sheet.",
    description:
      "A flexible 3 mm PVC marble panel sheet that can conform to curved walls and columns, expanding design possibilities beyond flat panels. The waterproof wall covering retains a high-gloss marble finish while offering enough flexibility for rounded architectural features. Ideal for columns, curved feature walls and bespoke interior elements.",
    specs: {
      Material: "Flexible PVC + UV coating",
      Size: "1220 x 2440 mm",
      Thickness: "3 mm",
      Finish: "Flexible marble",
      Waterproof: "Yes",
      Flexibility: "Curved surface capable",
    },
    image: "/images/products/uv-marble-2.jpg",
    features: [
      "Flexible for curved walls and columns",
      "Waterproof wall covering",
      "High-gloss marble finish",
      "Bespoke design possibilities",
    ],
    moq: "100 pieces",
    applications: ["Curved feature walls", "Column cladding", "Bespoke interiors", "Commercial design elements"],
  },
  {
    id: "uv-marble-007",
    slug: "wholesale-uv-marble-4x8",
    name: "Wholesale UV Marble Sheet 4x8",
    category: "uv-marble-sheets",
    shortDescription: "4x8 wholesale price high glossy 1220*2440mm*3mm PVC marble sheet for wall decoration.",
    description:
      "A wholesale-price 4x8 high-glossy 1220 x 2440 mm x 3 mm PVC marble sheet for wall decoration projects. The competitive wholesale pricing with 100-piece MOQ suits distributors and large-scale project sourcing. Delivers consistent high-gloss marble finish across batches for uniform commercial installations.",
    specs: {
      Material: "PVC + UV coating",
      Size: "1220 x 2440 mm (4 x 8 ft)",
      Thickness: "3 mm",
      Finish: "High glossy marble",
      Waterproof: "Yes",
      Pricing: "Wholesale per piece",
    },
    image: "/images/products/uv-marble-3.jpg",
    features: [
      "Wholesale pricing for bulk sourcing",
      "Consistent high-gloss finish",
      "Standard 4x8 project size",
      "100-piece project MOQ",
    ],
    moq: "100 pieces",
    applications: ["Wholesale distribution", "Large-scale projects", "Commercial installations", "Hotel chains"],
  },

  // ===== PVC Ceiling Panels =====
  {
    id: "ceil-001",
    slug: "pvc-ceiling-panel-colombia",
    name: "PVC Ceiling Panel for Colombia",
    category: "pvc-ceiling-panels",
    shortDescription: "Construction material false plastic PVC ceiling panel for Colombia market.",
    description:
      "A construction-grade false plastic PVC ceiling panel developed specifically for the Colombia market. The panel is lightweight, waterproof and fire-retardant, engineered to meet local building preferences for residential and commercial false ceiling installations. Its tongue-and-groove system enables fast, low-labor ceiling assembly across large project surfaces.",
    specs: {
      Material: "PVC",
      Width: "20-40 cm",
      Length: "2.9-3.0 m",
      Thickness: "7-10 mm",
      Finish: "White / wood grain",
      Waterproof: "Yes",
      FireRating: "Class B",
    },
    image: "/images/products/category-pvc-ceiling.jpg",
    features: [
      "Tailored for Colombia market specs",
      "Waterproof false ceiling material",
      "Fire-retardant Class B",
      "Tongue-and-groove fast install",
    ],
    moq: "1000 sqm",
    applications: ["Residential ceilings", "Commercial ceilings", "Hotel ceilings", "Colombia market projects"],
  },
  {
    id: "ceil-002",
    slug: "40cm-wood-grain-pvc-panel",
    name: "40cm Wood Grain PVC Ceiling Panel",
    category: "pvc-ceiling-panels",
    shortDescription: "40cm wood grain designs laminated PVC ceiling and wall panel.",
    description:
      "A 40cm wide PVC ceiling and wall panel with laminated wood grain designs for a natural timber look without maintenance. The wide profile covers more area per panel to reduce joint lines and speed up installation. Waterproof and fire-retardant, it suits both residential living spaces and commercial ceiling applications.",
    specs: {
      Material: "PVC",
      Width: "40 cm",
      Length: "3.0 m",
      Thickness: "8-10 mm",
      Finish: "Laminated wood grain",
      Waterproof: "Yes",
      FireRating: "Class B",
    },
    image: "/images/products/category-pvc-ceiling.jpg",
    features: [
      "Wide 40cm laminated wood grain panel",
      "Dual use for ceiling and wall",
      "Minimal joint lines",
      "Waterproof and fire-retardant",
    ],
    moq: "1000 sqm",
    applications: ["Residential ceilings", "Living room ceilings", "Commercial ceilings", "Wall cladding"],
  },
  {
    id: "ceil-003",
    slug: "60cm-pvc-wall-panel",
    name: "40/60cm PVC Wall Panel",
    category: "pvc-ceiling-panels",
    shortDescription: "House building materials interior wall decorative 40/60cm PVC wall panel.",
    description:
      "An interior wall decorative PVC panel available in both 40cm and 60cm widths for house building material applications. The dual-width range offers flexibility to match room scale and installation speed requirements. Waterproof, easy to clean and fire-retardant, it is a popular choice for residential and commercial interior wall decoration.",
    specs: {
      Material: "PVC",
      Width: "40 cm / 60 cm",
      Length: "2.9-3.0 m",
      Thickness: "8-10 mm",
      Finish: "Decorative / wood grain",
      Waterproof: "Yes",
      FireRating: "Class B",
    },
    image: "/images/products/category-pvc-ceiling.jpg",
    features: [
      "Available in 40cm and 60cm widths",
      "Interior wall decorative finish",
      "Waterproof and easy to clean",
      "Fire-retardant Class B",
    ],
    moq: "1000 sqm",
    applications: ["Interior wall decoration", "Residential walls", "Commercial interiors", "House building materials"],
  },
  {
    id: "ceil-004",
    slug: "fluted-pvc-ceiling-panel",
    name: "Fluted PVC Ceiling Panel",
    category: "pvc-ceiling-panels",
    shortDescription: "Indoor wood plastic composite PVC coating cladding fluted ceiling panel.",
    description:
      "A fluted PVC ceiling panel with a wood plastic composite PVC coating cladding finish for indoor applications. The fluted profile adds architectural depth and shadow lines to ceilings, while the WPC-PVC coating enhances durability and moisture resistance. Suited to modern residential and commercial interior ceilings seeking a textured, linear aesthetic.",
    specs: {
      Material: "WPC / PVC composite",
      Width: "20-40 cm",
      Length: "2.9-3.0 m",
      Thickness: "8-10 mm",
      Finish: "Fluted, PVC coating cladding",
      Waterproof: "Yes",
      FireRating: "Class B",
    },
    image: "/images/products/category-pvc-ceiling.jpg",
    features: [
      "Fluted profile with shadow lines",
      "WPC-PVC coating cladding finish",
      "Durable moisture-resistant surface",
      "Modern linear ceiling aesthetic",
    ],
    moq: "500 sqm",
    applications: ["Modern residential ceilings", "Commercial interiors", "Hotel ceilings", "Office ceilings"],
  },
  {
    id: "ceil-005",
    slug: "hot-stamping-pvc-panel",
    name: "Hot Stamping PVC Ceiling Panel",
    category: "pvc-ceiling-panels",
    shortDescription: "Factory price hot sales superior quality hot stamping PVC wall ceiling panels.",
    description:
      "A superior quality hot stamping PVC ceiling and wall panel offered at factory-direct pricing. The hot stamping process bonds a decorative foil to the PVC substrate for a durable, high-fidelity wood or marble grain finish. A hot-selling line for budget-conscious residential and commercial projects requiring both wall and ceiling coverage.",
    specs: {
      Material: "PVC (hot stamping finish)",
      Width: "20-40 cm",
      Length: "2.9-3.0 m",
      Thickness: "7-10 mm",
      Finish: "Hot stamping wood / marble grain",
      Waterproof: "Yes",
      FireRating: "Class B",
    },
    image: "/images/products/category-pvc-ceiling.jpg",
    features: [
      "Hot stamping decorative foil finish",
      "Factory-direct competitive pricing",
      "Dual use for wall and ceiling",
      "Durable high-fidelity grain",
    ],
    moq: "500 sqm",
    applications: ["Residential ceilings", "Commercial ceilings", "Wall cladding", "Budget project interiors"],
  },

  // ===== PVC Partition Panels =====
  {
    id: "part-001",
    slug: "folding-pvc-partition-panel",
    name: "Folding PVC Partition Panel",
    category: "pvc-partition-panels",
    shortDescription: "Accordion folding PVC partition for rapid space division.",
    description:
      "A folding (accordion) PVC partition panel system for rapidly dividing large spaces into smaller rooms. The track-mounted folding panels stack compactly when open and deploy in seconds, popular for restaurants, offices and event spaces.",
    specs: {
      Material: "PVC frame + decorative infill",
      PanelWidth: "100-120 mm per fold",
      Height: "Up to 3.0 m",
      Thickness: "40 mm",
      Operation: "Top track, folding",
      Finish: "Wood grain / solid color",
    },
    image: "/images/products/category-pvc-partition.jpg",
    features: [
      "Rapid accordion space division",
      "Compact stacking when open",
      "Top track smooth operation",
      "Multiple decorative finishes",
    ],
    moq: "50 sqm",
    applications: ["Restaurants", "Event spaces", "Offices", "Conference areas"],
  },
  {
    id: "part-002",
    slug: "sliding-pvc-partition-panel",
    name: "Sliding PVC Partition Panel",
    category: "pvc-partition-panels",
    shortDescription: "Track-mounted sliding PVC partition for smooth operation.",
    description:
      "A sliding PVC partition panel system with overhead track for smooth, quiet operation. Individual panels slide and stack to one side, ideal for offices, hotel function rooms and home spaces needing flexible division without floor tracks.",
    specs: {
      Material: "PVC frame + decorative infill",
      PanelWidth: "800-1000 mm",
      Height: "Up to 3.2 m",
      Thickness: "60 mm",
      Operation: "Overhead track, sliding",
      Finish: "Wood grain / fabric / solid",
    },
    image: "/images/products/category-pvc-partition.jpg",
    features: [
      "Smooth overhead track operation",
      "No floor tracks for clean floors",
      "Side-stacking panels",
      "Acoustic infill option",
    ],
    moq: "60 sqm",
    applications: ["Offices", "Hotel function rooms", "Home spaces", "Meeting areas"],
  },
  {
    id: "part-003",
    slug: "fixed-modular-pvc-partition",
    name: "Fixed Modular PVC Partition Panel",
    category: "pvc-partition-panels",
    shortDescription: "Semi-permanent modular PVC partition for room division.",
    description:
      "A fixed modular PVC partition panel system for semi-permanent room division in offices, restaurants and homes. The modular panels install between floor and ceiling with adjustable height, offering a cost-effective alternative to stud walls.",
    specs: {
      Material: "PVC frame + decorative panel",
      PanelWidth: "600-1200 mm",
      Height: "Adjustable up to 3.0 m",
      Thickness: "75 mm",
      Configuration: "Fixed modular",
      Finish: "Wood grain / solid / acoustic",
    },
    image: "/images/products/category-pvc-partition.jpg",
    features: [
      "Semi-permanent modular division",
      "Adjustable floor-to-ceiling height",
      "Cost-effective vs stud walls",
      "Acoustic infill option available",
    ],
    moq: "40 sqm",
    applications: ["Office divisions", "Restaurant booths", "Home room splits", "Retail spaces"],
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
