# Design Source

Track the approved visual design source for this client. Keep raw design exports immutable and preserve material implementation decisions here.

## Current Source

- Provider: UX Pilot
- Export filename: design-source\uxpilot\BrooksElectrical - Home.html
- Import date: 2026-09-04T15:00:17Z
- Imported by:
  Codex
- Design status: imported
- Source location: `design-source/uxpilot/`
- Raw export preserved unchanged: yes
- Export SHA256: b611ff33ce9221cbe1e20f7e33b1dcb911fdb46e00a04a60d20eaa59ba02022c

## Intended Visual Features To Preserve

- Visual composition:
  Floating pill header over a dark full-page layout; left-copy/right-square-image hero; credential strip; asymmetric service bento; alternating image/text diagnostic rows; three-card proof grid; vertical process timeline; residential/commercial split; image-backed service-area band; reviews panel; about/quote card; lead form and sticky call card; multi-column footer.
- Section order:
  Header, hero, trust bar, services, diagnostics, why choose, process, residential/commercial, service area, reviews, about, contact, footer.
- Hero proportions:
  Large desktop hero with headline and actions on left, square rounded image on right; image becomes taller portrait block on narrow mobile.
- Typography hierarchy:
  Archivo headings, Inter body, Space Mono uppercase eyebrows; large hero/title scale preserved with reduced mobile scale.
- Color relationships:
  Ink background, dark elevated panels, blue-gray borders/muted text, gold electrical accent for icons and CTAs.
- Imagery roles:
  Hero electrical-panel image; service detail images; diagnostic symptom images; residential/commercial proof images; local/aerial service-area image; small portrait/review proxy image.
- Visual rhythm:
  Compact 48px section rhythm with alternating dense grids and larger image bands, matching UX Pilot's repeated dark-surface modules.
- Backgrounds/decorative treatment:
  Dark site canvas, elevated cards, bordered panels, gold accents, shadows, and large rounded image frames.
- Alignment/composition notes:
  Preserve centered max-width grid, bento spans, split rows, and bottom-left overlay in local proof.
- Responsive intent:
  Collapse bento/splits to one column, keep CTAs usable, preserve mobile nav as full-screen overlay below header.

## UX Pilot Import Notes

UX Pilot HTML is a design specification, not necessarily production code. FirstLine may refactor markup, CSS organization, JavaScript organization, class names, component architecture, asset paths, semantics, accessibility structure, and generated utility classes while preserving rendered design fidelity.

Do not preserve poor generated code merely for literal similarity. Preserve the rendered design intent.

Inspect and normalize:

- Inline styles:
  UX Pilot uses inline Tailwind config and custom style block. Production normalized to `src/styles/tokens.css` and `src/styles/components.css`.
- Style tags:
  Removed from production HTML except favicon data URL; design tokens live in CSS.
- Tailwind/generated utility classes:
  Replaced with semantic classes and FirstLine-compatible static CSS.
- External CSS:
  Tailwind CDN removed. Google Fonts retained for approved typography. Font Awesome CSS removed.
- Inline scripts:
  Tailwind config and Font Awesome setup removed. Existing `src/main.js` handles year, anchor offsets, mobile nav, demo forms, and footer credit.
- External scripts:
  Font Awesome JS removed; no third-party icon runtime required.
- Inline event handlers:
  None in source; production uses unobtrusive module JS.
- Embedded SVG:
  Small inline bolt mark/favicon added as placeholder brand mark.
- Asset URLs:
  UX Pilot generated image URLs retained as documented concept/demo placeholders; no public third-party business photos downloaded or used.

## Authentic Asset Replacement

Treat UX Pilot image placeholders as visual-role placeholders. For every major image role, determine whether a stronger authentic business asset exists.

Preferred hierarchy:

1. Client-provided imagery
2. Official business-controlled imagery
3. Cleared authentic business imagery
4. Approved/generated concept imagery
5. Generic imagery

Do not assume publicly visible imagery is production-safe. Do not use competitor photography. Preserve provenance in `docs/ASSET_MANIFEST.md`.

Evaluate replacement candidates for resolution, crop, orientation, focal point, contrast, composition, and mobile usability. Do not replace a visually appropriate design image with a poor authentic image merely because it is real.

## Allowed Deviation Reasons

Material UX Pilot deviations are allowed only when needed for:

- Factual accuracy
- Authentic branding/assets
- Accessibility
- Usability
- Responsive behavior
- Performance
- Functionality
- Content reality
- Browser compatibility
- Semantic structure
- Technical constraints

## Implementation Deviations

| Area | UX Pilot intent | Implemented difference | Reason | Approved/needs review |
| --- | --- | --- | --- | --- |
| Business name | Brooks Electrical Services | Brock Electrical Services | User-supplied Facebook and Google references identify the Rochester, NH target as "Brock" | needs review |
| Credentials/trust bar | Licensed & Insured, Emergency Service, BBB Accredited, 5-Star Rated | Rochester based, repairs & installs, local service, clear scheduling | Factual accuracy and customer-facing clarity; no verified BBB, emergency-service, or license/insurance wording in current references | needs review |
| Business details | Generic local metro placeholders, `[Primary City]`, `(555) 123-4567` | Rochester, NH area; 603-834-4243; Google Maps search reference; 22 Rochester Ave. from public directory data | Corrected client research from user references and matching NH directory result | needs review |
| About/person card | Marcus Brooks, Master Electrician portrait | FirstLine review note/testimonial placeholder with no named staff claim | No verified owner/staff/testimonial source yet | needs review |
| Reviews | Google reviews placeholder and invented customer names | Job-readiness panel with practical service promises and a secondary Facebook CTA | Avoid invented review proof; keep public copy customer-facing until real testimonials are approved | needs review |
| Imagery | UX Pilot generated electrical concept images | Retained generated concept images, documented as replacement recommended | No client-provided or permission-cleared authentic imagery available | needs review |

## Design Fidelity QA

Design Fidelity QA asks: "Did we faithfully implement the approved design?"

Compare the UX Pilot design/reference against the FirstLine implementation for layout, section order, spacing, hero proportions, typography hierarchy, colors, visual rhythm, imagery roles, alignment, backgrounds, composition, and decorative treatment.

- Source/reference reviewed:
  `design-source/uxpilot/BrooksElectrical - Home.html`
- Implementation reviewed:
  `index.html`, `src/styles/tokens.css`, `src/styles/components.css`
- Viewports reviewed:
  mobile-375, mobile-390, tablet-768, laptop-1024, desktop-1440 captured; mobile-375, mobile-390, and desktop-1440 manually inspected.
- Result: pass/fail
  pass for local owner review
- Material differences corrected:
  Hero headline measure widened after desktop screenshot review; upload/photo affordance changed to non-interactive demo panel so demo-form safety messaging is reliable.
- Material differences documented:
  yes
- Remaining fidelity risks:
  Generated remote images may load differently by network conditions; authentic image replacement will affect crop and texture.

## Unresolved Visual Questions

- Confirm exact legal/trading entity, spelling, license/registration wording, and business status before launch. The project folder/export say Brooks, while the supplied references say Brock Electrical Services in Rochester, NH.
- Confirm whether UX Pilot generated concept imagery is acceptable for owner review only or should be replaced with client-provided assets immediately.
- Confirm logo, license/registration wording, form destination, domain, analytics, and privacy requirements.
