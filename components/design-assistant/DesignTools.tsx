"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import styles from "./DesignTools.module.css";

// ============================================================
// 数据：材料推荐引擎
// ============================================================

interface MaterialRec {
  category: string;
  name: string;
  href: string;
  reason: string;
  icon: string;
  specs: { label: string; value: string }[];
  bestFor: string;
}

interface ProjectType {
  value: string;
  label: string;
  icon: string;
  desc: string;
}

interface RoomType {
  value: string;
  label: string;
  icon: string;
}

interface DesignStyle {
  value: string;
  label: string;
  icon: string;
  desc: string;
}

const projectTypes: ProjectType[] = [
  { value: "hotel", label: "Hotel & Hospitality", icon: "🏨", desc: "Lobbies, guest rooms, corridors" },
  { value: "restaurant", label: "Restaurant & Café", icon: "🍽️", desc: "Dining, kitchen, outdoor" },
  { value: "office", label: "Office & Corporate", icon: "🏢", desc: "Workspaces, meetings, executive" },
  { value: "retail", label: "Retail & Shop", icon: "🛍️", desc: "Display, fitting, entrance" },
  { value: "residential", label: "Residential & Villa", icon: "🏠", desc: "Living, bedroom, kitchen" },
  { value: "education", label: "Education & Training", icon: "📚", desc: "Classrooms, halls, corridors" },
];

const roomTypes: Record<string, RoomType[]> = {
  hotel: [
    { value: "lobby", label: "Lobby & Reception", icon: "🚪" },
    { value: "guestroom", label: "Guest Room", icon: "🛏️" },
    { value: "corridor", label: "Corridor & Hallway", icon: "🚶" },
    { value: "facade", label: "Exterior Facade", icon: "🏛️" },
  ],
  restaurant: [
    { value: "dining", label: "Dining Area", icon: "🍽️" },
    { value: "counter", label: "Counter & Bar", icon: "🍹" },
    { value: "kitchen", label: "Kitchen Area", icon: "👨‍🍳" },
    { value: "outdoor", label: "Outdoor Seating", icon: "🌿" },
  ],
  office: [
    { value: "meeting", label: "Meeting Room", icon: "👥" },
    { value: "workspace", label: "Open Workspace", icon: "💻" },
    { value: "executive", label: "Executive Office", icon: "💼" },
    { value: "reception", label: "Reception Area", icon: "🛋️" },
  ],
  retail: [
    { value: "display", label: "Display Wall", icon: "🖼️" },
    { value: "fitting", label: "Fitting Area", icon: "👕" },
    { value: "entrance", label: "Entrance & Window", icon: "🪟" },
    { value: "storage", label: "Storage & Back", icon: "📦" },
  ],
  residential: [
    { value: "livingroom", label: "Living Room", icon: "🛋️" },
    { value: "bedroom", label: "Bedroom", icon: "🛏️" },
    { value: "kitchen", label: "Kitchen", icon: "🍳" },
    { value: "bathroom", label: "Bathroom", icon: "🚿" },
    { value: "balcony", label: "Balcony & Terrace", icon: "🌿" },
  ],
  education: [
    { value: "classroom", label: "Classroom", icon: "📋" },
    { value: "corridor", label: "Corridor", icon: "🚶" },
    { value: "hall", label: "Hall & Auditorium", icon: "🎤" },
  ],
};

const designStyles: DesignStyle[] = [
  { value: "minimalist", label: "Modern Minimalist", icon: "⬜", desc: "Clean lines, neutral tones" },
  { value: "scandinavian", label: "Scandinavian", icon: "🌲", desc: "Light woods, cozy simplicity" },
  { value: "industrial", label: "Industrial", icon: "🏗️", desc: "Raw textures, urban edge" },
  { value: "luxury", label: "Luxury Hotel", icon: "💎", desc: "Rich textures, marble accents" },
  { value: "chinese", label: "New Chinese", icon: "🏯", desc: "Oriental aesthetics, balance" },
  { value: "coastal", label: "Coastal Resort", icon: "🏖️", desc: "Weathered, natural flow" },
];

// 推荐引擎：根据项目类型 + 房间 + 风格生成推荐
function generateRecommendations(
  project: string,
  room: string,
  style: string
): MaterialRec[] {
  const baseRecs: Record<string, MaterialRec[]> = {
    hotel: [
      {
        category: "WPC Wall Panels", name: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels",
        reason: "Fire-rated (EN 13501-1 Class B), waterproof — ideal for hotel lobby feature walls and corridor cladding",
        icon: "🪵",
        specs: [
          { label: "Fire Rating", value: "EN 13501-1 Class B" },
          { label: "Waterproof", value: "Yes" },
          { label: "Formaldehyde", value: "≤0.1mg/L" },
        ],
        bestFor: "Lobby feature walls, corridor cladding",
      },
      {
        category: "SPC Flooring", name: "SPC Flooring", href: "/products/spc-flooring",
        reason: "Rigid core flooring with 0.5mm wear layer — hotel-grade durability for guest rooms and corridors",
        icon: "🟫",
        specs: [
          { label: "Wear Layer", value: "0.5mm" },
          { label: "AC Rating", value: "AC4 (Commercial)" },
          { label: "Slip Rating", value: "R10" },
        ],
        bestFor: "Guest rooms, corridors",
      },
      {
        category: "PU Stone", name: "PU Stone Panels", href: "/products/pu-stone-panels",
        reason: "Lightweight 3D stone veneer — dramatic lobby and facade accents without structural load",
        icon: "🪨",
        specs: [
          { label: "Weight", value: "3-5 kg/m²" },
          { label: "Thickness", value: "15-50mm" },
          { label: "UV Resistant", value: "Yes" },
        ],
        bestFor: "Lobby accent walls, exterior features",
      },
      {
        category: "Acoustic Panels", name: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels",
        reason: "NRC ≥ 0.7 sound-absorbing panels — critical for conference rooms and long corridors",
        icon: "🔇",
        specs: [
          { label: "NRC", value: "≥ 0.7" },
          { label: "Fire Rating", value: "Class B" },
          { label: "Thickness", value: "9-25mm" },
        ],
        bestFor: "Conference rooms, corridors",
      },
    ],
    restaurant: [
      {
        category: "PVC Marble", name: "PVC Marble Sheet", href: "/products/pvc-marble-sheet",
        reason: "Marble-look surface for counter fronts — grease-resistant, easy clean, high-gloss finish",
        icon: "✨",
        specs: [
          { label: "Gloss Level", value: "High-gloss" },
          { label: "Stain Resistant", value: "Yes" },
          { label: "Cleanable", value: "Wipe-down" },
        ],
        bestFor: "Counter fronts, display walls",
      },
      {
        category: "3D Wall Panels", name: "3D Wall Panels", href: "/products/3d-wall-panels",
        reason: "Sculpted feature walls that create Instagram-worthy dining zones and visual interest",
        icon: "🎭",
        specs: [
          { label: "Pattern Depth", value: "10-30mm" },
          { label: "Material", value: "Plant fiber / PVC" },
          { label: "Paintable", value: "Yes" },
        ],
        bestFor: "Dining feature walls, entrance",
      },
      {
        category: "WPC Door", name: "WPC Door", href: "/products/wpc-door",
        reason: "Waterproof interior doors — fire prevention, durable composite for bedroom and hotel rooms",
        icon: "🚪",
        specs: [
          { label: "Warranty", value: "10-15 years" },
          { label: "Slip Rating", value: "R11" },
          { label: "Weatherproof", value: "Yes" },
        ],
        bestFor: "Outdoor seating, terrace",
      },
      {
        category: "PVC Ceiling", name: "PVC Ceiling Panels", href: "/products/pvc-ceiling-panels",
        reason: "Waterproof, grease-proof ceiling for kitchen and prep areas — meets food safety standards",
        icon: "⬆️",
        specs: [
          { label: "Waterproof", value: "Yes" },
          { label: "Grease-proof", value: "Yes" },
          { label: "Anti-mold", value: "Yes" },
        ],
        bestFor: "Kitchen, prep areas",
      },
    ],
    office: [
      {
        category: "Acoustic Panels", name: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels",
        reason: "NRC ≥ 0.7 — speech privacy and focus in meeting rooms, reduces open-plan noise",
        icon: "🔇",
        specs: [
          { label: "NRC", value: "≥ 0.7" },
          { label: "UGR Compliance", value: "≤19" },
          { label: "Fire Rating", value: "Class B" },
        ],
        bestFor: "Meeting rooms, open workspaces",
      },
      {
        category: "Wood Veneer", name: "Wood Veneer Panels", href: "/products/wood-veneer-panels",
        reason: "Natural wood grain for executive suites and boardrooms — warm, professional aesthetic",
        icon: "🌳",
        specs: [
          { label: "Veneer Type", value: "Natural / Engineered" },
          { label: "Finish", value: "Matte / Satin" },
          { label: "Fire Rating", value: "Class B" },
        ],
        bestFor: "Executive offices, boardrooms",
      },
      {
        category: "SPC Flooring", name: "SPC Flooring", href: "/products/spc-flooring",
        reason: "Commercial-grade rigid flooring for high-traffic open offices — AC4 wear rating",
        icon: "🟫",
        specs: [
          { label: "AC Rating", value: "AC4" },
          { label: "Impact Sound", value: "≤65dB" },
          { label: "Warranty", value: "15-20 years" },
        ],
        bestFor: "Open workspaces, corridors",
      },
      {
        category: "PVC Partition", name: "PVC Partition Panels", href: "/products/pvc-partition-panels",
        reason: "Lightweight partitions for flexible workstation layouts — easy reconfiguration",
        icon: "🚧",
        specs: [
          { label: "Weight", value: "Lightweight" },
          { label: "Reconfigurable", value: "Yes" },
          { label: "Sound Insulation", value: "30-35dB" },
        ],
        bestFor: "Workstation dividers, flexible spaces",
      },
    ],
    retail: [
      {
        category: "PVC Marble", name: "PVC Marble Sheet", href: "/products/pvc-marble-sheet",
        reason: "High-gloss marble finish for display walls and counters — attracts customer attention",
        icon: "✨",
        specs: [
          { label: "Gloss Level", value: "High-gloss" },
          { label: "Ra (Color Render)", value: "≥90" },
          { label: "Scratch Resistant", value: "Yes" },
        ],
        bestFor: "Display walls, counters",
      },
      {
        category: "3D Wall Panels", name: "3D Wall Panels", href: "/products/3d-wall-panels",
        reason: "Eye-catching sculpted surfaces for window displays — creates visual depth",
        icon: "🎭",
        specs: [
          { label: "Pattern Depth", value: "10-30mm" },
          { label: "Lighting Effect", value: "Shadow play" },
          { label: "Paintable", value: "Yes" },
        ],
        bestFor: "Window displays, feature walls",
      },
      {
        category: "WPC Wall Panels", name: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels",
        reason: "Durable, scratch-resistant feature walls for high-traffic retail environments",
        icon: "🪵",
        specs: [
          { label: "Scratch Resistant", value: "Yes" },
          { label: "Impact Resistant", value: "Yes" },
          { label: "Fire Rating", value: "Class B" },
        ],
        bestFor: "High-traffic walls, shelving backs",
      },
      {
        category: "SPC Flooring", name: "SPC Flooring", href: "/products/spc-flooring",
        reason: "Retail-grade flooring that handles daily footfall — slip-resistant R10 rating",
        icon: "🟫",
        specs: [
          { label: "AC Rating", value: "AC4-AC5" },
          { label: "Slip Rating", value: "R10" },
          { label: "Warranty", value: "15-20 years" },
        ],
        bestFor: "Sales floor, aisles",
      },
    ],
    residential: [
      {
        category: "WPC Wall Panels", name: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels",
        reason: "TV feature wall, waterproof and formaldehyde-free — safe for family living spaces",
        icon: "🪵",
        specs: [
          { label: "Formaldehyde", value: "≤0.1mg/L (E0)" },
          { label: "Waterproof", value: "Yes" },
          { label: "DIY Install", value: "Yes" },
        ],
        bestFor: "TV wall, living room, bathroom",
      },
      {
        category: "Wood Veneer", name: "Wood Veneer Panels", href: "/products/wood-veneer-panels",
        reason: "Natural warmth for living room and bedroom accent walls — premium tactile finish",
        icon: "🌳",
        specs: [
          { label: "Veneer Type", value: "Natural wood" },
          { label: "Finish", value: "Matte / Satin" },
          { label: "Touch", value: "Warm, natural" },
        ],
        bestFor: "Living room, bedroom, study",
      },
      {
        category: "SPC Flooring", name: "SPC Flooring", href: "/products/spc-flooring",
        reason: "Quiet, warm underfoot — perfect for residential comfort and easy maintenance",
        icon: "🟫",
        specs: [
          { label: "Impact Sound", value: "≤65dB" },
          { label: "Underfloor Heating", value: "Compatible" },
          { label: "Warranty", value: "15-25 years" },
        ],
        bestFor: "Living room, bedroom, kitchen",
      },
      {
        category: "PU Stone", name: "PU Stone Panels", href: "/products/pu-stone-panels",
        reason: "3D stone texture for entrance and balcony accent walls — lightweight, easy DIY",
        icon: "🪨",
        specs: [
          { label: "Weight", value: "3-5 kg/m²" },
          { label: "DIY Install", value: "Yes" },
          { label: "UV Resistant", value: "Yes" },
        ],
        bestFor: "Entrance, balcony, TV wall",
      },
    ],
    education: [
      {
        category: "Acoustic Panels", name: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels",
        reason: "Classroom acoustics — reduce echo, improve speech clarity, UGR ≤ 19",
        icon: "🔇",
        specs: [
          { label: "NRC", value: "≥ 0.7" },
          { label: "UGR", value: "≤ 19" },
          { label: "Fire Rating", value: "Class B" },
        ],
        bestFor: "Classrooms, lecture halls",
      },
      {
        category: "WPC Wall Panels", name: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels",
        reason: "Impact-resistant, easy-clean wall cladding for corridors — handles daily wear",
        icon: "🪵",
        specs: [
          { label: "Impact Resistant", value: "Yes" },
          { label: "Easy Clean", value: "Yes" },
          { label: "Fire Rating", value: "Class B" },
        ],
        bestFor: "Corridors, hallways",
      },
      {
        category: "SPC Flooring", name: "SPC Flooring", href: "/products/spc-flooring",
        reason: "Slip-resistant, durable flooring for classrooms and halls — R10 slip rating",
        icon: "🟫",
        specs: [
          { label: "Slip Rating", value: "R10" },
          { label: "AC Rating", value: "AC4" },
          { label: "Warranty", value: "15-20 years" },
        ],
        bestFor: "Classrooms, halls, corridors",
      },
      {
        category: "PVC Ceiling", name: "PVC Ceiling Panels", href: "/products/pvc-ceiling-panels",
        reason: "Moisture-proof ceiling for labs and activity rooms — anti-mold surface",
        icon: "⬆️",
        specs: [
          { label: "Waterproof", value: "Yes" },
          { label: "Anti-mold", value: "Yes" },
          { label: "Easy Clean", value: "Yes" },
        ],
        bestFor: "Labs, activity rooms, restrooms",
      },
    ],
  };

  const roomBoost: Record<string, string[]> = {
    lobby: ["indoor-wpc-wall-panels", "pu-stone-panels"],
    guestroom: ["spc-flooring", "indoor-wpc-wall-panels"],
    facade: ["outdoor-wpc-cladding"],
    dining: ["3d-wall-panels", "pvc-marble-sheet"],
    counter: ["pvc-marble-sheet"],
    kitchen: ["pvc-ceiling-panels"],
    outdoor: ["outdoor-wpc-cladding"],
    meeting: ["acoustic-wall-panels", "wood-veneer-panels"],
    workspace: ["spc-flooring"],
    executive: ["wood-veneer-panels"],
    reception: ["indoor-wpc-wall-panels"],
    display: ["pvc-marble-sheet", "3d-wall-panels"],
    fitting: ["spc-flooring"],
    entrance: ["outdoor-wpc-cladding"],
    livingroom: ["indoor-wpc-wall-panels", "wood-veneer-panels"],
    bedroom: ["wood-veneer-panels"],
    bathroom: ["pvc-ceiling-panels"],
    balcony: ["outdoor-wpc-cladding"],
    classroom: ["acoustic-wall-panels"],
    hall: ["acoustic-wall-panels"],
  };

  const styleBoost: Record<string, string[]> = {
    minimalist: ["indoor-wpc-wall-panels"],
    scandinavian: ["wood-veneer-panels"],
    industrial: ["pu-stone-panels"],
    luxury: ["pvc-marble-sheet"],
    chinese: ["3d-wall-panels"],
    coastal: ["outdoor-wpc-cladding"],
  };

  const recs = [...(baseRecs[project] || baseRecs.residential)];

  const boostList = [
    ...(roomBoost[room] || []),
    ...(styleBoost[style] || []),
  ];

  recs.sort((a, b) => {
    const aBoost = boostList.filter((s) => a.href.includes(s)).length;
    const bBoost = boostList.filter((s) => b.href.includes(s)).length;
    return bBoost - aBoost;
  });

  return recs;
}

// ============================================================
// 数据：预算估算器
// ============================================================

interface MaterialPrice {
  category: string;
  name: string;
  href: string;
  unit: string;
  prices: [number, number, number];
  wasteFactor: number;
}

const materialPrices: MaterialPrice[] = [
  { category: "WPC Wall Panels", name: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels", unit: "m²", prices: [8, 14, 22], wasteFactor: 1.05 },
  { category: "Outdoor WPC Cladding", name: "Outdoor WPC Cladding", href: "/products/outdoor-wpc-cladding", unit: "m²", prices: [12, 18, 28], wasteFactor: 1.05 },
  { category: "SPC Flooring", name: "SPC Flooring", href: "/products/spc-flooring", unit: "m²", prices: [6, 10, 16], wasteFactor: 1.07 },
  { category: "PVC Marble Sheet", name: "PVC Marble Sheet", href: "/products/pvc-marble-sheet", unit: "m²", prices: [7, 12, 20], wasteFactor: 1.05 },
  { category: "PU Stone Panels", name: "PU Stone Panels", href: "/products/pu-stone-panels", unit: "m²", prices: [15, 25, 40], wasteFactor: 1.03 },
  { category: "3D Wall Panels", name: "3D Wall Panels", href: "/products/3d-wall-panels", unit: "m²", prices: [10, 18, 30], wasteFactor: 1.05 },
  { category: "Acoustic Wall Panels", name: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels", unit: "m²", prices: [12, 20, 35], wasteFactor: 1.05 },
  { category: "Wood Veneer Panels", name: "Wood Veneer Panels", href: "/products/wood-veneer-panels", unit: "m²", prices: [15, 25, 45], wasteFactor: 1.05 },
  { category: "WPC Door", name: "WPC Door", href: "/products/wpc-door", unit: "pcs", prices: [40, 70, 120], wasteFactor: 1.0 },
  { category: "PVC Ceiling Panels", name: "PVC Ceiling Panels", href: "/products/pvc-ceiling-panels", unit: "m²", prices: [5, 8, 14], wasteFactor: 1.05 },
  { category: "PVC Partition Panels", name: "PVC Partition Panels", href: "/products/pvc-partition-panels", unit: "m²", prices: [6, 10, 16], wasteFactor: 1.05 },
  { category: "PS Wall Panels", name: "PS Wall Panels", href: "/products/ps-wall-panels", unit: "m²", prices: [4, 7, 12], wasteFactor: 1.05 },
];

const gradeLabels = ["Economy", "Standard", "Premium"];
const gradeIcons = ["📉", "📊", "💎"];

// 项目类型系数（商业项目人工和辅料更高）
const projectCoefficients = [
  { value: "residential", label: "Residential", coefficient: 1.0, laborRate: 0.15 },
  { value: "lightCommercial", label: "Light Commercial", coefficient: 1.2, laborRate: 0.20 },
  { value: "commercial", label: "Commercial", coefficient: 1.4, laborRate: 0.25 },
];

// ============================================================
// 数据：色彩工作室
// ============================================================

interface ColorPalette {
  name: string;
  primary: string;
  primaryName: string;
  secondary: string;
  secondaryName: string;
  accent: string;
  accentName: string;
  style: string;
  psychology: string;
  materials: { label: string; href: string }[];
}

const presetPalettes: ColorPalette[] = [
  {
    name: "Warm Forest",
    primary: "#3A4A3C", primaryName: "Deep Forest Green",
    secondary: "#C4B5A0", secondaryName: "Warm Sand",
    accent: "#D4845C", accentName: "Terracotta",
    style: "Modern Minimalist",
    psychology: "Grounding and calm — evokes nature, stability and quiet confidence.",
    materials: [
      { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels" },
      { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
    ],
  },
  {
    name: "Marble Luxe",
    primary: "#2C2C2C", primaryName: "Charcoal Black",
    secondary: "#E8E0D5", secondaryName: "Cream Marble",
    accent: "#C9A961", accentName: "Antique Gold",
    style: "Luxury Hotel",
    psychology: "Sophisticated and opulent — signals quality, exclusivity and timeless elegance.",
    materials: [
      { label: "PVC Marble Sheet", href: "/products/pvc-marble-sheet" },
      { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
    ],
  },
  {
    name: "Nordic Calm",
    primary: "#E5DDD0", primaryName: "Oat White",
    secondary: "#A89980", secondaryName: "Warm Grey",
    accent: "#7A9B6E", accentName: "Sage Green",
    style: "Scandinavian",
    psychology: "Serene and airy — promotes relaxation, clarity and hygge comfort.",
    materials: [
      { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
      { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels" },
    ],
  },
  {
    name: "Industrial Edge",
    primary: "#4A4644", primaryName: "Graphite Grey",
    secondary: "#8B7D6B", secondaryName: "Stone Brown",
    accent: "#B85C38", accentName: "Rust Orange",
    style: "Industrial",
    psychology: "Bold and grounded — conveys authenticity, strength and urban character.",
    materials: [
      { label: "PU Stone Panels", href: "/products/pu-stone-panels" },
      { label: "3D Wall Panels", href: "/products/3d-wall-panels" },
    ],
  },
  {
    name: "Oriental Zen",
    primary: "#5C5552", primaryName: "Tea Brown",
    secondary: "#D4CFC4", secondaryName: "Rice Paper",
    accent: "#8B4513", accentName: "Saddle Brown",
    style: "New Chinese",
    psychology: "Balanced and contemplative — fosters harmony, mindfulness and cultural depth.",
    materials: [
      { label: "3D Wall Panels", href: "/products/3d-wall-panels" },
      { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
    ],
  },
  {
    name: "Coastal Breeze",
    primary: "#A8C5C0", primaryName: "Sea Glass",
    secondary: "#EDE6DA", secondaryName: "Driftwood White",
    accent: "#5B8A72", accentName: "Coastal Green",
    style: "Coastal Resort",
    psychology: "Fresh and expansive — evokes openness, tranquility and natural light.",
    materials: [
      { label: "Outdoor WPC Cladding", href: "/products/outdoor-wpc-cladding" },
      { label: "WPC Door", href: "/products/wpc-door" },
    ],
  },
];

function getMaterialsForHue(hue: number): ColorPalette["materials"] {
  if (hue < 30 || hue >= 330) return [
    { label: "PU Stone Panels", href: "/products/pu-stone-panels" },
    { label: "PVC Marble Sheet", href: "/products/pvc-marble-sheet" },
  ];
  if (hue < 60) return [
    { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
    { label: "3D Wall Panels", href: "/products/3d-wall-panels" },
  ];
  if (hue < 180) return [
    { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels" },
    { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  ];
  return [
    { label: "Acoustic Wall Panels", href: "/products/acoustic-wall-panels" },
    { label: "Indoor WPC Wall Panels", href: "/products/indoor-wpc-wall-panels" },
  ];
}

function getPsychologyForHue(hue: number): string {
  if (hue < 30 || hue >= 330) return "Warm and energetic — stimulates appetite and conversation.";
  if (hue < 60) return "Warm and welcoming — evokes comfort and optimism.";
  if (hue < 120) return "Natural and balanced — promotes growth and renewal.";
  if (hue < 180) return "Calm and expansive — evokes serenity and clarity.";
  if (hue < 240) return "Trustworthy and stable — conveys professionalism and depth.";
  if (hue < 300) return "Creative and refined — inspires imagination and luxury.";
  return "Warm and energetic — stimulates appetite and conversation.";
}

// ============================================================
// 主组件
// ============================================================

type TabId = "matcher" | "budget" | "color" | "calculator";

const tabs: { id: TabId; label: string; icon: string; desc: string }[] = [
  { id: "matcher", label: "Material Matcher", icon: "🎯", desc: "Find the right materials" },
  { id: "budget", label: "Budget Estimator", icon: "💰", desc: "Estimate project costs" },
  { id: "color", label: "Color Studio", icon: "🎨", desc: "Design color palettes" },
  { id: "calculator", label: "Project Calculator", icon: "🧮", desc: "Calculate quantities" },
];

export default function DesignTools() {
  const [activeTab, setActiveTab] = useState<TabId>("matcher");

  return (
    <div className={styles.toolsContainer} id="interactive-tools">
      {/* Tab 导航 */}
      <div className={styles.tabBar} role="tablist" aria-label="Design tool tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabIcon} aria-hidden="true">{tab.icon}</span>
            <span className={styles.tabText}>
              <span className={styles.tabLabel}>{tab.label}</span>
              <span className={styles.tabDesc}>{tab.desc}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Tab 面板 */}
      <div className={styles.tabPanel}>
        {activeTab === "matcher" && <MaterialMatcher />}
        {activeTab === "budget" && <BudgetEstimator />}
        {activeTab === "color" && <ColorStudio />}
        {activeTab === "calculator" && <ProjectCalculator />}
      </div>
    </div>
  );
}

// ============================================================
// 工具 1：Material Matcher
// ============================================================

function MaterialMatcher() {
  const [step, setStep] = useState(0);
  const [project, setProject] = useState("");
  const [room, setRoom] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState<MaterialRec[] | null>(null);

  const handleProjectSelect = (val: string) => {
    setProject(val);
    setRoom("");
    setStep(1);
  };

  const handleRoomSelect = (val: string) => {
    setRoom(val);
    setStep(2);
  };

  const handleStyleSelect = (val: string) => {
    setStyle(val);
    setResult(generateRecommendations(project, room, val));
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setProject("");
    setRoom("");
    setStyle("");
    setResult(null);
  };

  const rooms = project ? roomTypes[project] || [] : [];
  const stepLabels = ["Project Type", "Room Area", "Design Style", "Results"];

  return (
    <div role="tabpanel" id="panel-matcher" aria-labelledby="tab-matcher" className={styles.toolPanel}>
      {!result && (
        <>
          {/* 步骤指示器 */}
          <div className={styles.stepBar}>
            {stepLabels.map((label, i) => (
              <div key={label} className={styles.stepItem}>
                <div
                  className={`${styles.stepDot} ${
                    i < step ? styles.stepDone : i === step ? styles.stepCurrent : ""
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`${styles.stepLine} ${i < step ? styles.stepLineDone : ""}`} />
                )}
                <span className={`${styles.stepLabel} ${i === step ? styles.stepLabelActive : ""}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: 项目类型 */}
          {step === 0 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>What are you designing?</h3>
              <p className={styles.stepDesc}>Select your project type to get tailored material recommendations.</p>
              <div className={styles.choiceGrid}>
                {projectTypes.map((pt) => (
                  <button
                    key={pt.value}
                    className={styles.choiceCard}
                    onClick={() => handleProjectSelect(pt.value)}
                    aria-label={`Select ${pt.label}`}
                  >
                    <span className={styles.choiceIcon}>{pt.icon}</span>
                    <span className={styles.choiceLabel}>{pt.label}</span>
                    <span className={styles.choiceDesc}>{pt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: 房间类型 */}
          {step === 1 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Which area needs materials?</h3>
              <p className={styles.stepDesc}>
                <span className={styles.selectedTag}>
                  {projectTypes.find(p => p.value === project)?.icon}
                  {projectTypes.find(p => p.value === project)?.label}
                </span>
              </p>
              <div className={styles.choiceGrid}>
                {rooms.map((rt) => (
                  <button
                    key={rt.value}
                    className={styles.choiceCard}
                    onClick={() => handleRoomSelect(rt.value)}
                    aria-label={`Select ${rt.label}`}
                  >
                    <span className={styles.choiceIcon}>{rt.icon}</span>
                    <span className={styles.choiceLabel}>{rt.label}</span>
                  </button>
                ))}
              </div>
              <button className={styles.backBtn} onClick={() => setStep(0)}>← Back</button>
            </div>
          )}

          {/* Step 3: 设计风格 */}
          {step === 2 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>What's your design style?</h3>
              <p className={styles.stepDesc}>
                <span className={styles.selectedTag}>
                  {projectTypes.find(p => p.value === project)?.label}
                </span>
                <span className={styles.selectedTag}>
                  {rooms.find(r => r.value === room)?.label}
                </span>
              </p>
              <div className={styles.choiceGrid}>
                {designStyles.map((ds) => (
                  <button
                    key={ds.value}
                    className={styles.choiceCard}
                    onClick={() => handleStyleSelect(ds.value)}
                    aria-label={`Select ${ds.label}`}
                  >
                    <span className={styles.choiceIcon}>{ds.icon}</span>
                    <span className={styles.choiceLabel}>{ds.label}</span>
                    <span className={styles.choiceDesc}>{ds.desc}</span>
                  </button>
                ))}
              </div>
              <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
            </div>
          )}
        </>
      )}

      {/* 结果 */}
      {result && (
        <div className={styles.resultContent}>
          <div className={styles.resultHeader}>
            <div>
              <span className="eyebrow">Your recommendations</span>
              <h3 className={styles.resultTitle}>
                {projectTypes.find(p => p.value === project)?.label} · {rooms.find(r => r.value === room)?.label}
              </h3>
              <p className={styles.resultStyle}>
                Style: {designStyles.find(s => s.value === style)?.label}
              </p>
            </div>
            <button className={styles.resetBtn} onClick={reset}>
              ↻ Start over
            </button>
          </div>

          <div className={styles.recList}>
            {result.map((rec, i) => (
              <article key={rec.href} className={`${styles.recCard} ${i === 0 ? styles.recCardTop : ""}`}>
                {i === 0 && <span className={styles.bestBadge}>★ Best Match</span>}
                <div className={styles.recRank}>#{i + 1}</div>
                <div className={styles.recBody}>
                  <div className={styles.recHead}>
                    <span className={styles.recIcon}>{rec.icon}</span>
                    <div>
                      <h4 className={styles.recName}>{rec.name}</h4>
                      <span className={styles.recCategory}>{rec.category}</span>
                    </div>
                  </div>
                  <p className={styles.recReason}>{rec.reason}</p>
                  <div className={styles.recSpecs}>
                    {rec.specs.map((spec) => (
                      <div key={spec.label} className={styles.recSpec}>
                        <span className={styles.recSpecLabel}>{spec.label}</span>
                        <span className={styles.recSpecValue}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.recFooter}>
                    <span className={styles.recBestFor}>📍 {rec.bestFor}</span>
                    <Link href={rec.href} className={styles.recLink}>
                      View product →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.resultCta}>
            <div className={styles.resultCtaText}>
              <h4>Need a custom specification?</h4>
              <p>Get pricing, MOQ and lead times for these materials within one business day.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// 工具 2：Budget Estimator
// ============================================================

function BudgetEstimator() {
  const [area, setArea] = useState("");
  const [materialIdx, setMaterialIdx] = useState(0);
  const [grade, setGrade] = useState(1);
  const [projectType, setProjectType] = useState(0);

  const material = materialPrices[materialIdx];
  const areaNum = parseFloat(area) || 0;
  const coeff = projectCoefficients[projectType];

  const calc = useMemo(() => {
    if (areaNum <= 0) return null;
    const totalArea = areaNum * material.wasteFactor;
    const baseUnitPrice = material.prices[grade];
    const adjustedUnitPrice = baseUnitPrice * coeff.coefficient;
    const materialCost = totalArea * adjustedUnitPrice;
    const laborCost = materialCost * coeff.laborRate;
    const subtotal = materialCost + laborCost;
    const minTotal = totalArea * material.prices[0] * coeff.coefficient * (1 + coeff.laborRate);
    const maxTotal = totalArea * material.prices[2] * coeff.coefficient * (1 + coeff.laborRate);
    const economySavings = maxTotal - subtotal;
    return {
      totalArea: totalArea.toFixed(1),
      unitPrice: adjustedUnitPrice,
      materialCost: Math.round(materialCost),
      laborCost: Math.round(laborCost),
      subtotal: Math.round(subtotal),
      minTotal: Math.round(minTotal),
      maxTotal: Math.round(maxTotal),
      economySavings: Math.round(economySavings),
      laborPercent: Math.round(coeff.laborRate * 100),
    };
  }, [areaNum, material, grade, coeff]);

  return (
    <div role="tabpanel" id="panel-budget" aria-labelledby="tab-budget" className={styles.toolPanel}>
      <div className={styles.budgetLayout}>
        {/* 左侧：输入 */}
        <div className={styles.budgetInputs}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="project-type-select">
              Project type
            </label>
            <div className={styles.coeffGrid}>
              {projectCoefficients.map((pc, i) => (
                <button
                  key={pc.value}
                  className={`${styles.coeffBtn} ${projectType === i ? styles.coeffBtnActive : ""}`}
                  onClick={() => setProjectType(i)}
                  aria-pressed={projectType === i}
                >
                  <span className={styles.coeffLabel}>{pc.label}</span>
                  <span className={styles.coeffValue}>×{pc.coefficient.toFixed(1)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="area-input">
              Surface area to cover
            </label>
            <div className={styles.inputWrap}>
              <input
                id="area-input"
                type="number"
                min="0"
                step="0.1"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. 120"
                className={styles.numberInput}
              />
              <span className={styles.inputUnit}>m²</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Material category</label>
            <select
              className={styles.selectInput}
              value={materialIdx}
              onChange={(e) => setMaterialIdx(parseInt(e.target.value))}
            >
              {materialPrices.map((mp, i) => (
                <option key={mp.name} value={i}>
                  {mp.name} — ${mp.prices[1]}/{mp.unit}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Material grade</label>
            <div className={styles.gradeBtns}>
              {gradeLabels.map((g, i) => (
                <button
                  key={g}
                  className={`${styles.gradeBtn} ${grade === i ? styles.gradeBtnActive : ""}`}
                  onClick={() => setGrade(i)}
                  aria-pressed={grade === i}
                >
                  <span aria-hidden="true">{gradeIcons[i]}</span>
                  <span>{g}</span>
                  <span className={styles.gradePrice}>${(material.prices[i] * coeff.coefficient).toFixed(1)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.budgetNote}>
            <span className={styles.noteIcon}>ℹ️</span>
            <span>FOB reference estimates in USD. Includes {calc?.laborPercent || coeff.laborRate * 100}% labor estimate and {Math.round((material.wasteFactor - 1) * 100)}% waste factor. Shipping, taxes and MOQ terms apply.</span>
          </div>
        </div>

        {/* 右侧：结果 */}
        <div className={styles.budgetResult}>
          {calc ? (
            <>
              <div className={styles.budgetSummary}>
                <span className="eyebrow">Estimated total</span>
                <div className={styles.budgetAmount}>
                  ${calc.subtotal.toLocaleString()}
                  <span className={styles.budgetCurrency}>USD</span>
                </div>
                <div className={styles.budgetRange}>
                  Full range: ${calc.minTotal.toLocaleString()} – ${calc.maxTotal.toLocaleString()}
                </div>
                {calc.economySavings > 0 && (
                  <div className={styles.budgetSavings}>
                    Save up to ${calc.economySavings.toLocaleString()} with Economy grade
                  </div>
                )}
              </div>

              <div className={styles.budgetBreakdown}>
                <div className={`${styles.breakdownRow} ${styles.breakdownHeader}`}>
                  <span>Cost Breakdown</span>
                  <span>{coeff.label}</span>
                </div>
                <div className={styles.breakdownRow}>
                  <span>Material ({material.name})</span>
                  <span>${calc.materialCost.toLocaleString()}</span>
                </div>
                <div className={styles.breakdownRow}>
                  <span>Estimated labor ({calc.laborPercent}%)</span>
                  <span>${calc.laborCost.toLocaleString()}</span>
                </div>
                <div className={styles.breakdownRow}>
                  <span>Surface area (with waste)</span>
                  <span>{calc.totalArea} m²</span>
                </div>
                <div className={styles.breakdownRow}>
                  <span>Unit price ({gradeLabels[grade]}, ×{coeff.coefficient.toFixed(1)})</span>
                  <span>${calc.unitPrice.toFixed(2)}/{material.unit}</span>
                </div>
                <div className={`${styles.breakdownRow} ${styles.breakdownTotal}`}>
                  <span>Estimated total</span>
                  <span>${calc.subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className={styles.budgetActions}>
                <Link href={material.href} className="btn btn-outline">
                  View Product
                </Link>
                <Link href="/contact" className="btn btn-primary">
                  Get Exact Quote
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.budgetEmpty}>
              <span className={styles.emptyIcon}>📐</span>
              <p>Enter a surface area to see your estimated budget.</p>
              <span className={styles.emptyHint}>Include project type for accurate labor estimates</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 工具 3：Color Studio
// ============================================================

function ColorStudio() {
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>(presetPalettes[0]);
  const [customHue, setCustomHue] = useState(120);
  const [copiedHex, setCopiedHex] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const customPalette = useMemo<ColorPalette>(() => {
    const primary = hslToHex(customHue, 30, 25);
    const secondary = hslToHex(customHue, 20, 85);
    const accentHue = (customHue + 180) % 360;
    const accent = hslToHex(accentHue, 55, 55);
    return {
      name: "Custom Palette",
      primary,
      primaryName: `Custom ${customHue}°`,
      secondary,
      secondaryName: `Light ${customHue}°`,
      accent,
      accentName: `Accent ${accentHue}°`,
      style: "Custom",
      psychology: getPsychologyForHue(customHue),
      materials: getMaterialsForHue(customHue),
    };
  }, [customHue]);

  const activePalette = isCustom ? customPalette : selectedPalette;

  const copyHex = (hex: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(label);
      setTimeout(() => setCopiedHex(""), 2000);
    }
  };

  const selectPreset = (p: ColorPalette) => {
    setSelectedPalette(p);
    setIsCustom(false);
  };

  const handleHueChange = (val: number) => {
    setCustomHue(val);
    setIsCustom(true);
  };

  return (
    <div role="tabpanel" id="panel-color" aria-labelledby="tab-color" className={styles.toolPanel}>
      <div className={styles.colorLayout}>
        {/* 预设调色板 */}
        <div className={styles.colorPresets}>
          <h3 className={styles.stepTitle}>Preset Palettes</h3>
          <div className={styles.paletteGrid}>
            {presetPalettes.map((p) => (
              <button
                key={p.name}
                className={`${styles.paletteCard} ${!isCustom && selectedPalette.name === p.name ? styles.paletteActive : ""}`}
                onClick={() => selectPreset(p)}
                aria-label={`Select ${p.name} palette`}
              >
                <div className={styles.paletteSwatches}>
                  <div className={styles.swatch} style={{ background: p.primary, flex: 6 }} />
                  <div className={styles.swatch} style={{ background: p.secondary, flex: 3 }} />
                  <div className={styles.swatch} style={{ background: p.accent, flex: 1 }} />
                </div>
                <span className={styles.paletteName}>{p.name}</span>
                <span className={styles.paletteStyle}>{p.style}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 自定义色相滑块 */}
        <div className={styles.colorCustom}>
          <h3 className={styles.stepTitle}>Or Pick Your Own Hue</h3>
          <div className={styles.hueSliderWrap}>
            <input
              type="range"
              min="0"
              max="360"
              value={customHue}
              onChange={(e) => handleHueChange(parseInt(e.target.value))}
              className={styles.hueSlider}
              aria-label="Custom hue selector"
              style={{
                background: `linear-gradient(to right, hsl(0,50%,50%), hsl(60,50%,50%), hsl(120,50%,50%), hsl(180,50%,50%), hsl(240,50%,50%), hsl(300,50%,50%), hsl(360,50%,50%))`,
              }}
            />
            <span className={styles.hueValue}>{customHue}°</span>
          </div>
        </div>

        {/* 调色板预览 */}
        <div className={styles.colorPreview}>
          <div className={styles.colorPreviewHeader}>
            <div>
              <h3 className={styles.stepTitle} style={{ marginBottom: 0 }}>60-30-10 Application</h3>
              <span className={styles.paletteStyle}>{activePalette.name} · {activePalette.style}</span>
            </div>
            <div className={styles.psychologyBadge}>
              <span className={styles.psychologyIcon}>🧠</span>
              <span className={styles.psychologyText}>{activePalette.psychology}</span>
            </div>
          </div>

          <div className={styles.colorPreviewDemo}>
            {/* 模拟房间 */}
            <div className={styles.roomMockup} style={{ background: activePalette.secondary }}>
              <div className={styles.roomWall} style={{ background: activePalette.primary }}>
                <span className={styles.roomLabel}>Walls 60%</span>
              </div>
              <div className={styles.roomFloor} style={{ background: activePalette.secondary }}>
                <span className={styles.roomLabel}>Floors & Furniture 30%</span>
              </div>
              <div className={styles.roomAccent} style={{ background: activePalette.accent }}>
                <span className={styles.roomLabel}>Accents 10%</span>
              </div>
            </div>

            {/* 色值 */}
            <div className={styles.colorValues}>
              <div
                className={`${styles.colorValueRow} ${copiedHex === "Primary" ? styles.colorValueCopied : ""}`}
                onClick={() => copyHex(activePalette.primary, "Primary")}
                role="button"
                tabIndex={0}
              >
                <span className={styles.colorChip} style={{ background: activePalette.primary }} />
                <div>
                  <span className={styles.colorRole}>Primary (60%)</span>
                  <span className={styles.colorHex}>
                    {activePalette.primary}
                    {copiedHex === "Primary" && <span className={styles.copiedTag}> ✓ Copied</span>}
                  </span>
                  <span className={styles.colorName}>{activePalette.primaryName}</span>
                </div>
              </div>
              <div
                className={`${styles.colorValueRow} ${copiedHex === "Secondary" ? styles.colorValueCopied : ""}`}
                onClick={() => copyHex(activePalette.secondary, "Secondary")}
                role="button"
                tabIndex={0}
              >
                <span className={styles.colorChip} style={{ background: activePalette.secondary }} />
                <div>
                  <span className={styles.colorRole}>Secondary (30%)</span>
                  <span className={styles.colorHex}>
                    {activePalette.secondary}
                    {copiedHex === "Secondary" && <span className={styles.copiedTag}> ✓ Copied</span>}
                  </span>
                  <span className={styles.colorName}>{activePalette.secondaryName}</span>
                </div>
              </div>
              <div
                className={`${styles.colorValueRow} ${copiedHex === "Accent" ? styles.colorValueCopied : ""}`}
                onClick={() => copyHex(activePalette.accent, "Accent")}
                role="button"
                tabIndex={0}
              >
                <span className={styles.colorChip} style={{ background: activePalette.accent }} />
                <div>
                  <span className={styles.colorRole}>Accent (10%)</span>
                  <span className={styles.colorHex}>
                    {activePalette.accent}
                    {copiedHex === "Accent" && <span className={styles.copiedTag}> ✓ Copied</span>}
                  </span>
                  <span className={styles.colorName}>{activePalette.accentName}</span>
                </div>
              </div>
              <span className={styles.copyHint}>Click any color to copy its hex code</span>
            </div>
          </div>

          {/* 推荐材料 */}
          <div className={styles.colorMaterials}>
            <span className={styles.stepDesc}>Recommended materials for this palette:</span>
            <div className={styles.colorMaterialLinks}>
              {activePalette.materials.map((m) => (
                <Link key={m.href} href={m.href} className={styles.colorMaterialLink}>
                  {m.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 工具 4：Project Calculator
// ============================================================

function ProjectCalculator() {
  const [calcType, setCalcType] = useState<"wall" | "floor">("wall");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [panelWidth, setPanelWidth] = useState("160");
  const [panelLength, setPanelLength] = useState("2900");
  const [doorWidth, setDoorWidth] = useState("");
  const [doorHeight, setDoorHeight] = useState("");
  const [windowArea, setWindowArea] = useState("");

  const calc = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    const pw = parseFloat(panelWidth) || 0;
    const pl = parseFloat(panelLength) || 0;
    const dw = parseFloat(doorWidth) || 0;
    const dh = parseFloat(doorHeight) || 0;
    const winArea = parseFloat(windowArea) || 0;

    if (l <= 0 || w <= 0) return null;
    if (calcType === "wall" && (h <= 0 || pw <= 0 || pl <= 0)) return null;
    if (calcType === "floor" && pw <= 0) return null;

    if (calcType === "wall") {
      // 墙面面积（四面墙）
      let wallArea = (l + w) * 2 * h;
      // 扣除门窗
      const doorArea = dw * dh;
      const totalDeduction = doorArea + winArea;
      const netArea = Math.max(0, wallArea - totalDeduction);
      const wasteFactor = 1.05;
      const totalArea = netArea * wasteFactor;
      const panelArea = (pw / 1000) * (pl / 1000);
      const panelsNeeded = Math.ceil(totalArea / panelArea);
      return {
        type: "wall" as const,
        surfaceArea: wallArea.toFixed(2),
        deduction: totalDeduction.toFixed(2),
        netArea: netArea.toFixed(2),
        totalArea: totalArea.toFixed(2),
        wastePercent: 5,
        panelArea: panelArea.toFixed(3),
        panelsNeeded,
        unit: "panels",
      };
    } else {
      const floorArea = l * w;
      const wasteFactor = 1.07;
      const totalArea = floorArea * wasteFactor;
      const boxArea = 2.0;
      const boxesNeeded = Math.ceil(totalArea / boxArea);
      return {
        type: "floor" as const,
        surfaceArea: floorArea.toFixed(2),
        deduction: "0",
        netArea: floorArea.toFixed(2),
        totalArea: totalArea.toFixed(2),
        wastePercent: 7,
        panelArea: boxArea.toFixed(2),
        panelsNeeded: boxesNeeded,
        unit: "boxes",
      };
    }
  }, [length, width, height, panelWidth, panelLength, doorWidth, doorHeight, windowArea, calcType]);

  return (
    <div role="tabpanel" id="panel-calculator" aria-labelledby="tab-calculator" className={styles.toolPanel}>
      <div className={styles.calcLayout}>
        {/* 类型切换 */}
        <div className={styles.calcTypeSwitch}>
          <button
            className={`${styles.calcTypeBtn} ${calcType === "wall" ? styles.calcTypeActive : ""}`}
            onClick={() => setCalcType("wall")}
            aria-pressed={calcType === "wall"}
          >
            🧱 Wall Panels
          </button>
          <button
            className={`${styles.calcTypeBtn} ${calcType === "floor" ? styles.calcTypeActive : ""}`}
            onClick={() => setCalcType("floor")}
            aria-pressed={calcType === "floor"}
          >
            🟫 Flooring
          </button>
        </div>

        {/* 输入 */}
        <div className={styles.calcInputs}>
          <div className={styles.calcRow}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="calc-length">
                Room length
              </label>
              <div className={styles.inputWrap}>
                <input
                  id="calc-length"
                  type="number"
                  min="0"
                  step="0.1"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="e.g. 5.0"
                  className={styles.numberInput}
                />
                <span className={styles.inputUnit}>m</span>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="calc-width">
                Room width
              </label>
              <div className={styles.inputWrap}>
                <input
                  id="calc-width"
                  type="number"
                  min="0"
                  step="0.1"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="e.g. 4.0"
                  className={styles.numberInput}
                />
                <span className={styles.inputUnit}>m</span>
              </div>
            </div>
          </div>

          {calcType === "wall" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="calc-height">
                  Ceiling height
                </label>
                <div className={styles.inputWrap}>
                  <input
                    id="calc-height"
                    type="number"
                    min="0"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 2.8"
                    className={styles.numberInput}
                  />
                  <span className={styles.inputUnit}>m</span>
                </div>
              </div>

              <div className={styles.calcRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="panel-width">
                    Panel width
                  </label>
                  <div className={styles.inputWrap}>
                    <input
                      id="panel-width"
                      type="number"
                      min="0"
                      value={panelWidth}
                      onChange={(e) => setPanelWidth(e.target.value)}
                      className={styles.numberInput}
                    />
                    <span className={styles.inputUnit}>mm</span>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="panel-length">
                    Panel length
                  </label>
                  <div className={styles.inputWrap}>
                    <input
                      id="panel-length"
                      type="number"
                      min="0"
                      value={panelLength}
                      onChange={(e) => setPanelLength(e.target.value)}
                      className={styles.numberInput}
                    />
                    <span className={styles.inputUnit}>mm</span>
                  </div>
                </div>
              </div>

              {/* 门窗扣除 */}
              <div className={styles.deductionSection}>
                <span className={styles.deductionTitle}>Openings (optional)</span>
                <div className={styles.calcRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="door-width">
                      Door width
                    </label>
                    <div className={styles.inputWrap}>
                      <input
                        id="door-width"
                        type="number"
                        min="0"
                        step="0.1"
                        value={doorWidth}
                        onChange={(e) => setDoorWidth(e.target.value)}
                        placeholder="0"
                        className={styles.numberInput}
                      />
                      <span className={styles.inputUnit}>m</span>
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="door-height">
                      Door height
                    </label>
                    <div className={styles.inputWrap}>
                      <input
                        id="door-height"
                        type="number"
                        min="0"
                        step="0.1"
                        value={doorHeight}
                        onChange={(e) => setDoorHeight(e.target.value)}
                        placeholder="0"
                        className={styles.numberInput}
                      />
                      <span className={styles.inputUnit}>m</span>
                    </div>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="window-area">
                    Total window area
                  </label>
                  <div className={styles.inputWrap}>
                    <input
                      id="window-area"
                      type="number"
                      min="0"
                      step="0.1"
                      value={windowArea}
                      onChange={(e) => setWindowArea(e.target.value)}
                      placeholder="0"
                      className={styles.numberInput}
                    />
                    <span className={styles.inputUnit}>m²</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 结果 */}
        {calc ? (
          <div className={styles.calcResult}>
            <div className={styles.calcResultBox}>
              <span className="eyebrow">You need</span>
              <div className={styles.calcBigNumber}>
                {calc.panelsNeeded}
                <span className={styles.calcUnit}>{calc.unit}</span>
              </div>
              <p className={styles.calcSubtext}>
                includes {calc.wastePercent}% waste factor
              </p>
            </div>

            <div className={styles.calcBreakdown}>
              <div className={`${styles.breakdownRow} ${styles.breakdownHeader}`}>
                <span>Calculation Breakdown</span>
                <span>{calcType === "wall" ? "Wall Panels" : "Flooring"}</span>
              </div>
              <div className={styles.breakdownRow}>
                <span>Gross surface area</span>
                <span>{calc.surfaceArea} m²</span>
              </div>
              {parseFloat(calc.deduction) > 0 && (
                <div className={`${styles.breakdownRow} ${styles.breakdownDeduction}`}>
                  <span>Minus openings (doors + windows)</span>
                  <span>−{calc.deduction} m²</span>
                </div>
              )}
              <div className={styles.breakdownRow}>
                <span>Net area</span>
                <span>{calc.netArea} m²</span>
              </div>
              <div className={styles.breakdownRow}>
                <span>With waste (+{calc.wastePercent}%)</span>
                <span>{calc.totalArea} m²</span>
              </div>
              <div className={styles.breakdownRow}>
                <span>Per-unit coverage</span>
                <span>{calc.panelArea} m²</span>
              </div>
            </div>

            <div className={styles.calcCta}>
              <Link
                href={calcType === "wall" ? "/products/indoor-wpc-wall-panels" : "/products/spc-flooring"}
                className="btn btn-outline"
              >
                View Product
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Get Quote for {calc.panelsNeeded} {calc.unit}
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.calcEmpty}>
            <span className={styles.emptyIcon}>🧮</span>
            <p>Enter room dimensions to calculate material quantities.</p>
            <span className={styles.emptyHint}>Add door and window dimensions for precise wall panel counts</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// 工具函数
// ============================================================

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
