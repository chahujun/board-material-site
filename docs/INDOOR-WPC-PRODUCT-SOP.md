# Indoor WPC Product Page SOP

## Purpose

Use this procedure to add or refresh an Indoor WPC Wall Panel product without inventing specifications, media, certifications, commercial terms or project evidence.

## 1. Source Intake

1. Record the supplier product URL without tracking parameters.
2. Record the date the page was checked.
3. Save the exact listing title and product ID.
4. Treat the live listing as the factual source. Marketing copy may be rewritten, but factual meaning must not change.

## 2. Field Extraction

Capture these fields separately:

- Trade offer: price tiers, trade MOQ and unit.
- Product attributes: material, thickness, size, color, surface, treatment, feature labels, application, installation, warranty, model, brand and origin.
- Packaging: selling unit, package size and gross weight.
- Commercial support: sample policy, lead time, OEM/ODM and project support.
- Certification field: exact names and whether the page associates them with the product or supplier.

If the trade offer and attribute block use different MOQ units, keep both and label their contexts. Do not convert or merge them without written supplier confirmation.

## 3. Truth Rules

- Use `Not stated in the listing; contact us for project-specific confirmation` for missing facts.
- Do not turn feature labels such as `fireproof`, `soundproof` or `eco-friendly` into numeric ratings.
- Do not claim a certificate covers a SKU until its model scope and validity have been checked.
- Do not state that a product is ready to ship based only on its title; reconfirm stock and lead time.
- Do not attach project cases from another SKU.
- Keep source prices as dated reference displays and request a current quotation.

## 4. Media Matching

1. Open the exact supplied listing URL and confirm its title and product ID before collecting media.
2. Match the local main image with the first image on that listing. Check the panel profile, color arrangement, props and crop, not only the general product category.
3. Collect gallery images only from the listing's primary product-media region. Store them under `public/images/products/wpc-panel/<PRODUCT-CODE>/` and keep the product code in every path.
4. Record the source URL and verification date with the gallery paths in `lib/wpc-panel-data.ts`.
5. Use a video only when it is exposed in the same primary product-media region. Do not use supplier-introduction or recommended-product videos found lower on the page.
6. If the verified video cannot be stored locally, retain its observed supplier CDN URL and the source-listing link. Do not substitute another product's video.
7. Never generate a product render or video to replace missing product evidence.
8. Write descriptive alt text using the product code and visible product, without adding unverified performance claims.

## 4.1 Media Cleanup and Branding

1. Confirm that the business has permission to reuse and modify each source image.
2. Back up the complete gallery before changing any asset. Never overwrite the backup.
3. Audit every image at full resolution and record the exact files containing supplier promotion or identifiers.
4. Use deterministic pixel cleanup only when the unwanted content occupies a separate, uniform region that does not overlap the product, dimensions, finish samples or factual labels. If it overlaps product evidence, obtain a clean source image instead of generating or reconstructing it.
5. Run `scripts/remove-wpc-supplier-banners.py` against the backed-up gallery and write the results to a temporary staging folder.
6. Run `scripts/brand-wpc-gallery.py` against the cleaned staging folder. Use only the approved trademark stored at `public/images/logo/onestopbuildly-trademark.png`.
7. When the detail-page hero must match the category-card cover, run `scripts/brand-wpc-gallery.py` with `--cover-to-gallery-one`. The script only processes product codes that already have a gallery directory and writes the branded cover as `product-cover.avif`, giving the updated asset a descriptive, cache-safe URL.
8. Run `scripts/create-wpc-gallery-audit.py` to create labeled contact sheets. Check every output for logo legibility, consistent placement, accidental obstruction and leftover supplier identifiers.
9. Confirm that file count, relative paths and pixel dimensions match the backup before copying approved outputs into `public/images/products/wpc-panel/`.
10. Keep the cleanup target list and scripts in version control so the operation is traceable and repeatable.

## 5. Data Entry

Update `lib/wpc-panel-data.ts` with:

- Stable code and URL slug.
- Source URL and verified date.
- Matched local image path.
- A `media.images` array containing only that SKU's verified gallery files.
- A `media.video` record containing the observed video URL, descriptive label and source page, or `null` when no primary-gallery video is verified.
- Source-backed specifications and labels.
- Explicit confirmation language for unknown or order-specific fields.

Run a duplicate check for code, slug, source URL and image path.

## 6. Detail Page Requirements

Every product page must include:

1. Canonical metadata and a unique title/description.
2. First-screen product image, H1, code, key facts and inquiry action.
3. Product overview.
4. Core advantages limited to listing labels.
5. Application scenarios.
6. Product specifications.
7. Colors and surface treatment.
8. Structure and installation notes.
9. Performance parameters with honest missing-value language.
10. Product-specific project evidence or an explicit no-evidence notice.
11. A switchable verified image gallery, any verified primary-gallery video, verification date and source link.
12. Certification and quality-control scope warning.
13. Packaging and shipping fields.
14. Customization and approval process.
15. Visible FAQ plus matching FAQ structured data.
16. Related internal product links.
17. A real inquiry route through email and WhatsApp.

## 7. SEO and GEO Checks

- One descriptive H1 per page.
- Logical H2 sections and semantic tables/lists.
- Unique canonical URL and metadata.
- Product, BreadcrumbList and FAQPage JSON-LD with no fake rating or offer.
- Clear answer-first factual sentences, source date and source link.
- Image alt text and internal links to related products.
- Product URL included in `app/sitemap.ts`.
- No hidden keyword blocks, duplicated boilerplate claims or unsupported superlatives.

## 8. Inquiry Validation

1. Confirm the form requires name, email and destination.
2. Confirm the product code and source URL are included in the prepared message.
3. Confirm email and WhatsApp destinations are current.
4. Never display `inquiry received` unless a backend has actually accepted it.
5. State clearly when the browser is only opening an email draft.

## 9. Pre-Publish QA

1. Run TypeScript and production build checks.
2. Open the category and confirm all product cards reach independent URLs.
3. Open at least one product from each data group and verify all sections render.
4. Test desktop and mobile widths for wrapping, overflow and image crop.
5. Check the browser console for errors and missing images.
6. Switch at least two gallery thumbnails and confirm the main image changes without layout shift.
7. For each embedded video, confirm metadata loads, duration is non-zero and play/pause works.
8. Test a related-product link and both inquiry actions.
9. Inspect the HTML for canonical, JSON-LD and a single H1.
10. Recheck the live source when more than 90 days have passed or before a campaign launch.

## 10. Change Record

For every refresh, record the date, product code, changed fields, source URL, image decision and reviewer. This makes later pricing, compliance and media audits traceable.

## 11. UX and Core Web Vitals

Google SEO work starts with a usable product page. Do not trade clarity or speed for decorative content.

1. Test the category page and every new detail-page template at mobile and desktop widths.
2. Keep the product image, product identity, core verified facts and inquiry action visible and understandable in the first viewport.
3. Reserve image, video, gallery, table and control dimensions so dynamic content cannot cause layout shifts.
4. Load the first meaningful product image with high priority. Lazy-load below-the-fold gallery, related-product and project media.
5. Use AVIF or WebP for photographs where the visual result remains accurate. Keep an original or lossless source outside the delivery path.
6. Use responsive image sizes. Do not send a desktop-sized file to a narrow mobile card when a smaller generated variant is available.
7. Preload only assets needed for the first viewport. Do not preload the complete gallery or product video.
8. Keep non-critical scripts deferred and remove unused third-party scripts. A sales or analytics tag must not block product interaction.
9. Maintain keyboard focus styles, readable contrast, touch targets of at least 44 by 44 CSS pixels and a working skip link.
10. Check text wrapping, tables, navigation and inquiry controls at 320, 390, 768, 1024 and 1440 CSS-pixel widths.

Use Chrome UX Report or Search Console field data as the deciding evidence. Lighthouse lab results are diagnostic, not a substitute for real-user data. At the 75th percentile, target:

- LCP at or below 2.5 seconds.
- INP at or below 200 milliseconds. FID is retired and should not be used as the current interaction metric.
- CLS at or below 0.1.

Run PageSpeed Insights on the deployed HTTPS URL for mobile and desktop. Use Chrome DevTools, WebPageTest or GTmetrix to investigate regressions. Record the tested URL, date, device profile and result instead of reporting an unrepeatable score.

## 12. E-E-A-T and Evidence Control

Product-page trust comes from traceable evidence, not authority language.

1. Identify the company responsible for the page through a consistent legal name, physical address, business email and phone number.
2. Maintain working About, Contact, privacy and terms pages. Link them from the existing site navigation or footer without changing its established architecture.
3. For technical guidance, show the writer or reviewer name, relevant role, review date and the evidence used. Do not create fictional experts or biographies.
4. State when data came from a supplier listing and when it was checked. Distinguish listing claims from independent test results.
5. Never describe a certification as valid for a SKU until the certificate, issuing body, validity date and model scope have been reviewed.
6. Never add ratings, review counts, customer logos, factory statistics, countries served or completed-project claims without business records that support them.
7. Keep source URLs and internal change records available for future review. If a source changes, update the data and verification date rather than silently preserving stale facts.
8. Present practical buyer guidance based on the actual sample, drawing, packing, inspection and shipping workflow. Label assumptions and order-specific fields clearly.

This product category is not normally YMYL content, but quotation, compliance and performance statements still affect purchasing decisions and must meet the same evidence standard.

## 13. On-Page SEO and Search Intent

Map one primary commercial intent to one page. The category page targets the broad wholesale category; each SKU page targets that exact product code and profile. Avoid creating near-duplicate doorway pages for cities or countries.

For each page:

1. Write a unique title that accurately describes the page and normally remains within 50 to 60 characters after the brand suffix.
2. Write a unique description, normally 120 to 160 characters, that summarizes verified content and the next buyer action. It is not a keyword list.
3. Use one visible H1. Organize specifications, finishes, installation, media, shipping, FAQ and inquiry with logical H2 and H3 headings.
4. Answer the buyer's question in the first sentence of each section, then add evidence and qualification.
5. Use concise paragraphs, semantic lists and row headers in specification tables.
6. Use descriptive anchor text such as `indoor WPC wall panel wholesale range`, not `click here`.
7. Add relevant terms naturally: product type, profile, material, application, finish, wholesale, supplier, MOQ and destination requirements. Do not repeat them to meet a density target.
8. Keep product code, name, image subject, specification values and structured data consistent.
9. Provide a clear inquiry action without an intrusive interstitial or false scarcity message.

Before adding new keywords, document the country, language, search intent, candidate query, current ranking page and selected target URL. Use Search Console, Keyword Planner, Trends and commercial SEO tools where licensed. Do not assign the same primary query to multiple pages without a deliberate consolidation plan.

## 14. Image and Video SEO

1. Use descriptive, stable asset paths such as `/images/products/wpc-panel/WP-001/product-cover.avif`.
2. Write alt text for the visible product and view. Do not include unsupported waterproof, fire or certification claims.
3. Keep the category-card cover and the detail-page first image synchronized. The first detail image must remain product-specific and visibly branded with the approved trademark.
4. Give decorative images empty alt text. Do not repeat the product title in every thumbnail alt.
5. Preserve an aspect ratio and intrinsic dimensions to prevent CLS.
6. Store approved product videos locally when reuse rights allow. Preserve the source video in the dated backup folder.
7. Remove or cover only the confirmed supplier identifier area. Do not reconstruct, generate or obscure product evidence.
8. Verify video duration, dimensions, frame rate, audio stream and multiple frames before and after processing.
9. Use a product-specific poster, `preload="metadata"`, an accessible label and an MP4 type. Do not autoplay product video with sound.
10. When video becomes a strategic search asset, add VideoObject JSON-LD only after a stable thumbnail, upload date, duration and content URL are factually available.

## 15. Canonical, International and Structured Data Rules

1. Every indexable product page must self-canonicalize to its final HTTPS production URL.
2. Use one clean lowercase URL. Remove tracking parameters from canonical and internal links.
3. Current English pages may declare `en` and `x-default` to the same URL. Add another hreflang only when a complete, equivalent localized page exists.
4. Hreflang URLs must be absolute, canonical, indexable and reciprocally linked. Do not use hreflang to label an untranslated page.
5. Localize units, terminology, shipping context and buyer questions when adding a market language. Do not perform word-for-word machine translation without review.
6. Keep Product, BreadcrumbList, FAQPage, Organization and WebSite JSON-LD aligned with visible content.
7. Do not add AggregateRating, Review, Offer, priceValidUntil, availability or certification properties without current visible evidence.
8. Product Schema should use stable page and product IDs, SKU, image, material, category, source-backed properties and the real brand field.
9. Test rendered JSON-LD with Rich Results Test and Schema.org Validator after deployment. Rich-result eligibility is not guaranteed.

## 16. Crawling, Indexing and Site Architecture

1. Keep the category page linked from the existing Products navigation and footer structure.
2. Keep every SKU reachable from the category page and link each SKU back to the category through breadcrumbs and contextual copy.
3. Link related products by buyer relevance or series, not randomly for keyword coverage.
4. Keep important pages within a shallow click depth. Do not create orphan product pages.
5. Include canonical category and product URLs in `sitemap.xml`. Use the last verified or materially updated date, not the build time, for product `lastModified`.
6. Keep `robots.txt` accessible and reference the production sitemap. Do not block assets required to render product pages.
7. Submit the sitemap property in Google Search Console after deployment and inspect representative category and product URLs.
8. Check 404s, redirect chains, duplicate canonicals and accidental `noindex` directives after every route or slug change.
9. Use a single permanent redirect for a changed slug. Update internal links and the sitemap to the destination URL.
10. Run a broken-link check across internal pages, images, videos, email links, WhatsApp links and cited external sources before release.

## 17. Content Clusters and GEO Readiness

Create supporting content only when it answers a real buyer question and can be reviewed by someone with relevant product or export experience. Suitable clusters include:

- How to compare indoor WPC panel profiles for a project.
- How to approve WPC wall panel color and surface samples.
- What to request in an indoor wall panel quotation.
- Packing, loading and destination-document checklists.
- Objective comparisons between WPC, PVC, acoustic slat and other relevant interior wall systems.
- Verified project case studies with scope, product code, location permission, images and measurable constraints.

Each supporting page should link to the category page and the most relevant verified products. The category or pillar page should link back to useful supporting content. Keep answer-first summaries, clear definitions, source dates and factual citations so search engines and answer systems can extract the information without losing its qualifications.

Use AnswerThePublic, AlsoAsked, Google People Also Ask, Search Console queries, sales questions and customer-service records to build the editorial backlog. A question appearing in a tool is a topic signal, not permission to invent an answer.

## 18. White-Hat Distribution and Link Earning

1. Publish the canonical original on the company site first.
2. Adapt useful excerpts for LinkedIn, industry forums, newsletters, YouTube and partner channels. Match the format and language to that audience.
3. When republishing a full article, use a canonical link to the original where the platform supports it. Otherwise identify and link the original source clearly.
4. Earn links through useful specification guides, checklists, verified case studies, original research and expert contributions.
5. Pursue relevant supplier, association, architect, distributor and project-partner mentions only when the relationship is real.
6. Do not buy ranking links, exchange links at scale, use private blog networks, hide links or create forum spam.
7. Do not add unsupported reviews or testimonials to attract clicks.
8. Record outreach target, relevance, contact date, resulting URL and link attributes so quality can be reviewed.

Social labels should remain focused: normally three to five relevant LinkedIn tags, one to three Facebook tags, and a small set of accurate YouTube topic tags. Titles, descriptions and the actual content matter more than tag volume.

## 19. Measurement and Iteration

Configure GA4 and Google Search Console on the production domain. Where consent law applies, load analytics only after the appropriate consent choice.

Track:

- Organic impressions, clicks, CTR and query position by page and country.
- Valid indexed product URLs, exclusions, crawl errors and enhancement reports.
- Organic sessions and engaged sessions.
- Product inquiry starts, email-draft actions, WhatsApp actions and confirmed server-side submissions as separate events.
- Conversion rate from organic traffic without treating an opened mail client as a completed lead.
- Field CWV status and page-template regressions.
- New and lost relevant backlinks.

Recommended cadence:

- Weekly: review Search Console errors, unusual traffic changes, top product queries and broken high-value links.
- Monthly: review organic landing pages, CTR, inquiry events, country/device performance, content decay and source-data freshness.
- Quarterly: crawl the site, test representative templates, validate Schema, review Core Web Vitals, update keyword mapping and refresh high-opportunity content.
- Every six months: complete a broader technical, content, E-E-A-T and backlink audit; consolidate weak duplicate pages and retire outdated claims with an appropriate redirect or update plan.

SEO expectations must be stated honestly. Initial movement can take three to six months in lower-competition areas, six to twelve months in moderate competition, and longer in competitive markets. Rankings are not guaranteed.

## 20. Release Gates and Ownership

### Completed in the Current Product Template

- Source-matched local galleries and branded, category-synchronized first images.
- Unique detail URLs, titles, descriptions, canonicals and English/x-default alternates.
- Product, FAQ and breadcrumb structured data without invented ratings or offers.
- Product-specific specification, media, verification and inquiry sections.
- Category/detail internal links, related products, breadcrumbs, sitemap inclusion and robots declaration.
- Responsive image delivery, first-image priority, below-the-fold lazy loading, compression and security headers.
- A reusable local SEO data audit through `npm run audit:seo`.

### Required Before Production Release

1. Finish local processing of the three verified source videos and replace remote video URLs with approved local files.
2. Run dependency installation from the lock file, the production build and the SEO audit.
3. Inspect generated metadata, canonical tags and JSON-LD in production output.
4. Test all 15 detail URLs, all image/video responses, thumbnail switching, inquiry actions, internal links and the browser console.
5. Verify desktop and mobile rendering with no horizontal overflow or incoherent overlap.
6. Deploy through the existing Vercel project without replacing unrelated site pages.

### Post-Deployment Platform Tasks

These tasks cannot be completed truthfully in source code alone:

1. Confirm the Vercel production domain serves HTTPS, compression, cache headers and no redirect chain.
2. Run PageSpeed Insights and Rich Results Test against live URLs.
3. Add and verify the domain property in Google Search Console, submit `sitemap.xml` and request indexing only for final canonical pages.
4. Connect GA4 with documented inquiry events and any legally required consent controls.
5. Monitor field Core Web Vitals until enough real-user data is available.
6. Verify company claims, reviewer identities, certificates, case studies and performance evidence with the responsible business owner before publishing them.
7. Execute content distribution, digital PR and relationship-based link earning as ongoing marketing work.
