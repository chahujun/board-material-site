// 博客文章数据（markdown 格式正文，后续可迁移到 MDX/CMS）
// 面向海外 B2B 买家的选购与工艺知识文章
// 更新日期：2026-07-15 — 品类调整为 SONSILL 供应链产品线

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown 格式正文
  category: string;
  date: string; // ISO 日期
  readTime: string; // 例如 "6 min read"
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wpc-vs-spc-flooring-hotel-projects",
    title: "WPC vs SPC Flooring: Which Is Better for Hotel Projects?",
    excerpt:
      "A practical comparison of WPC and SPC flooring for hotel developments — covering waterproofing, fire rating, acoustic performance, cost and the real-world factors that should drive your specification.",
    content: `## Two Waterproof Floors, Different Jobs

Both WPC (wood-plastic composite) and SPC (stone-plastic composite) are rigid-core vinyl floors that are 100% waterproof. But they are engineered differently and excel in different hotel zones. Specifying the wrong one leads to callbacks and complaints.

## Core Composition

- **WPC** — foamed PVC core blended with wood fiber. Lighter, softer underfoot, and warmer to walk on.
- **SPC** — high-density limestone powder (70-75%) blended with PVC. Denser, harder, and more dimensionally stable.

| Factor | WPC | SPC |
| --- | --- | --- |
| Density | 0.9-1.1 g/cm³ | 1.9-2.0 g/cm³ |
| Underfoot feel | Softer, warmer | Harder, more rigid |
| Impact resistance | Good (absorbs impact) | Excellent |
| Dimensional stability | Good | Superior |
| Fire rating | Bfl-s1 | Bfl-s1 |
| Price | Slightly higher | More economical |

## Where Each Belongs in a Hotel

**Hotel rooms and suites** — WPC is the better choice. The softer core absorbs footstep noise, creating a quieter guest experience. The warmer surface is more comfortable barefoot. For a 200-key hotel, this difference in acoustic comfort is noticeable in guest reviews.

**Corridors and lobbies** — SPC wins. The dense limestone core withstands rolling luggage carts and housekeeping traffic without denting. Specify a minimum 0.5 mm wear layer for commercial corridors.

**Pool decks and spa areas** — Neither. Use dedicated WPC decking planks (140 x 25 mm) designed for wet exterior use with R10+ anti-slip rating.

## Fire Rating Reality

Both WPC and SPC meet EN 13501-1 Class Bfl-s1 for commercial use. However, SPC's mineral-rich core achieves better results in smoke production and flaming spread tests. For projects with strict fire codes (hospitals, high-rise hotels), SPC is the safer specification.

## Cost Comparison

SPC is typically 15-25% cheaper per square meter than WPC due to the lower PVC content. However, WPC's better acoustic performance can reduce the need for additional underlayment in guest rooms, narrowing the installed cost gap.

## The Verdict

Specify **WPC for guest rooms** where comfort and acoustics matter. Specify **SPC for corridors, lobbies and high-traffic zones** where durability is paramount. For a full hotel project, a mixed specification delivers the best balance of comfort, durability and cost.

> Request wear-layer thickness, fire test reports and acoustic data with every quote. These documents separate export-grade product from commodity stock.
`,
    category: "Flooring",
    date: "2026-06-18",
    readTime: "6 min read",
    image: "/images/products/blog-wpc-vs-spc.jpg",
    author: "OneStopBuildly Editorial",
  },
  {
    slug: "spc-flooring-manufacturing-process",
    title: "SPC Flooring Manufacturing Process: What B2B Buyers Should Know",
    excerpt:
      "From limestone powder to a finished plank on the line — a walkthrough of the SPC manufacturing process and the quality control checkpoints that separate export-grade from commodity stock.",
    content: `## What SPC Actually Is

SPC stands for **stone-plastic composite**. The core is roughly 70-75% limestone powder blended with PVC and stabilizers, extruded into a rigid plank that is far harder than traditional WPC. Understanding the line tells you why two SPC floors at the same price can perform completely differently.

## Step 1: Raw Material Blending

Limestone is milled to a precise micron size and blended with PVC resin, plasticizers and heat stabilizers. **Consistent blending is the first quality gate** — uneven blends cause brittle cores and color drift between cartons.

## Step 2: Extrusion

The blend is fed into a twin-screw extruder and formed into a continuous rigid core. The thickness and density here set the plank's dimensional stability and fire performance. Export-grade cores target a density around 1.9-2.0 g/cm³.

## Step 3: Lamination

A decor film, wear layer and IXPE underlayment are laminated to the core in a single pressing pass. The **wear-layer thickness** (0.3 mm residential vs 0.5+ mm commercial) is the single biggest predictor of lifespan.

## Step 4: UV Coating and Curing

A UV lacquer is applied and cured under UV lamps, hardening the surface to 3-4H pencil hardness for scratch resistance.

## Quality Control Checkpoints to Verify

When auditing a supplier, ask to see records for:

1. Core density and dimensional tolerance (target ±0.1 mm)
2. Wear-layer thickness test per batch
3. Fire performance report (EN 13501-1 Bfl-s1)
4. Peel-strength test on the laminated layers
5. Carton-to-carton color consistency (Delta E < 1.5)

## Lead Time Reality

Standard stocked decors ship in 15-20 days. Custom colors and embossing require 30-40 days because the decor film and wear layer must be produced first. Build this into your project schedule rather than discovering it at the container stage.
`,
    category: "Manufacturing",
    date: "2026-06-25",
    readTime: "7 min read",
    image: "/images/products/blog-spc-process.jpg",
    author: "OneStopBuildly Editorial",
  },
  {
    slug: "choose-wpc-wall-panels-hotel-interior",
    title: "How to Choose WPC Wall Panels for Hotel Interior Design",
    excerpt:
      "A specifier's guide to WPC wall panels for hotel interiors — matching profile, finish and fire rating to the role each wall plays in the guest experience, from lobby arrival to room comfort.",
    content: `## Why WPC Panels for Hotels

WPC (wood-plastic composite) wall panels have become the default interior cladding for hotel projects because they solve three problems at once: they are 100% waterproof, fire-rated to Class B, and they replicate the warmth of natural wood without the maintenance.

## Match the Profile to the Space

Different WPC panel profiles create different spatial effects:

- **Fluted panels** (160 mm wide) — vertical flutes draw the eye upward, ideal for lobby feature walls and reception backdrops. The shadow lines add depth and drama.
- **Louvre/slat panels** — a modern architectural look for cafe and restaurant interiors within hotels. Creates rhythm without heaviness.
- **Flat panels** — a quieter background for corridors and guest room accent walls where the design should recede.

## Fire Rating for Code Compliance

All our WPC wall panels meet EN 13501-1 Class B fire rating. For hotel projects, request the SGS or CE fire-test report with your order — building inspectors and insurance underwriters increasingly require documentation, not just verbal assurance.

## Finish and Lighting

WPC panels come in 3D embossed wood grain finishes — oak, walnut, teak and grey tones. The finish is only as good as the lighting that reveals it:

- **Grazing light** from an LED slot above the panel — the most effective way to reveal 3D texture
- **Warm 2700K-3000K** color temperature — pairs best with wood grain tones
- **Dimmable circuits** — let the hotel adjust ambiance for day/night modes

## Installation Speed

WPC panels install with tongue-and-groove over a timber or metal batten framework. A two-person crew can clad 40-60 square meters per day. This speed is why hotels under tight renovation schedules prefer WPC over traditional wood paneling.

## Specification Checklist

1. Confirm Class B fire rating with test report
2. Select profile (fluted / louvre / flat) for each wall zone
3. Coordinate wood grain decor with the interior palette
4. Detail the LED lighting reveal
5. Verify substrate flatness (3 mm / 2 m tolerance)
6. Order 10% cutting allowance
7. Request samples for on-site lighting approval before bulk order
`,
    category: "Design",
    date: "2026-07-02",
    readTime: "5 min read",
    image: "/images/products/blog-wpc-hotel.jpg",
    author: "OneStopBuildly Editorial",
  },
  {
    slug: "uv-marble-sheets-vs-natural-marble",
    title: "UV Marble Sheets vs Natural Marble: Cost, Weight and Installation",
    excerpt:
      "A clear comparison of UV-coated PVC marble sheets against natural stone — covering durability, finish, installation speed and total project cost for hotel and commercial interiors.",
    content: `## The Case for UV Marble Sheets

UV marble sheets are PVC panels with a UV-cured lacquer surface that replicates natural marble veining. They weigh 70% less than real stone, install in a fraction of the time, and cost 60-80% less installed. For hotel interiors and commercial projects, the question is not whether they look like marble — they do — but where they are appropriate to use.

## Head-to-Head Comparison

| Factor | Natural Marble | UV Marble Sheet |
| --- | --- | --- |
| Weight per sqm | 25-30 kg | 3-5 kg |
| Thickness | 18-20 mm | 3 mm |
| Installation | Mortar bed, professional mason | Adhesive or batten frame, carpenter |
| Installation speed | 5-8 sqm/day | 40-60 sqm/day |
| Waterproof | Needs sealing | 100% waterproof |
| Fire rating | Class A (non-combustible) | Class B |
| Scratch resistance | 3 Mohs (can scratch) | 3H pencil (resists most) |
| Cost per sqm (material) | $40-120 | $7-12 |
| Maintenance | Annual sealing required | Wipe clean, no sealing |

## Where UV Marble Sheets Excel

**Hotel bathroom walls** — 100% waterproof, no grout lines, installs in hours not days. The high-gloss finish (90+ GU) creates a luxury spa feel.

**Hotel lobby feature walls** — 3D printing technology now produces multi-layer veining with genuine depth under grazing light. Guests cannot tell the difference at viewing distance.

**Commercial renovation projects** — The lightweight (3-5 kg/sqm) means no structural reinforcement needed. The 3 mm thickness allows installation over existing tile without raising floor levels significantly.

## Where Natural Marble Still Wins

**Flooring in high-traffic lobbies** — UV marble sheets are wall-only products (3 mm is too thin for foot traffic). For lobby floors, natural stone or SPC flooring with marble decor is the right choice.

**Countertops and vanities** — The 3 mm sheet cannot take the point loads of a countertop. Use natural stone or quartz for horizontal surfaces.

**Heritage and luxury projects** — Where authenticity is part of the brand promise, real stone carries a story that replication cannot.

## The Verdict

For hotel wall cladding and bathroom panels, **UV marble sheets deliver 90% of the visual impact at 20-30% of the installed cost**, with faster installation and zero maintenance. Reserve natural marble for floors, countertops and statement projects where material authenticity matters.
`,
    category: "Surface Materials",
    date: "2026-07-08",
    readTime: "6 min read",
    image: "/images/products/blog-uv-vs-marble.jpg",
    author: "OneStopBuildly Editorial",
  },
];

// ===== 数据查询工具函数 =====

export function getAllPosts(): BlogPost[] {
  // 按日期降序返回
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// 取最新的 N 篇文章（用于首页精选）
export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
