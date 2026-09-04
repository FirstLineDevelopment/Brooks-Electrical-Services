# Client Brief

FirstLine-System-Version: 2.3

## Client

- Project folder: Brooks-Electrical-Services
- Name: Brooks Electrical Services
- Business type: Electrical Contractor
- Primary language: English
- Primary audience:
  Homeowners, landlords, and small commercial/industrial property managers in the Stockbridge, Winchester, Andover, and wider Hampshire area.
- Primary conversion action:
  Phone call to the listed office number.
- Secondary conversion actions:
  Demo quote request form; map/directions action; review-listing click.

## Architecture

- Site architecture: single-page
- Primary pages to register in `firstline.config.js`:
  `/` from `index.html`
- Anchor sections:
  services, about, areas, reviews, process, contact
- Detail/shareable pages needed: yes/no
  no

## Research

- Existing website/web presence:
  Public sources identify `www.brookselectricalservices.co.uk` as the business website. Source access/content still needs owner confirmation. Third-party profiles are stronger current research sources for this local build.
- Business research summary:
  Most plausible target is Brooks Electrical Services Ltd of 7b Stonefield Park, Martins Lane, Chilbolton, Stockbridge SO20 6BL. Yell lists phone 01264 860068, Mon-Fri 08:00-17:30, 5.0 from 43 ratings, services across domestic, commercial, and industrial electrical work, and credentials including Constructionline and NICEIC. Yell states service in Winchester, Andover, and throughout Hampshire since 1983. Checkatrade preserves 146 older reviews but says there are no new reviews in the last 12 months and that jobs cannot be requested through Checkatrade. The Gazette published a voluntary winding-up notice for Brooks Electrical Services Ltd on 3 April 2025; this is a launch blocker until the client confirms the correct legal entity and trading status.
- Visual sources searched:
  UX Pilot export; Yell profile; Checkatrade profile; Gazette notice; general search results for same-name electrical businesses.
- Official/client-controlled visual sources:
  No confirmed client-provided production assets in repo. Yell references an official website and Facebook/Google links, but permission for asset reuse is not established.
- Third-party public visual sources:
  Yell listing photos/logo references; Checkatrade profile imagery; public directory records.
- Logo/branding discovered:
  Yell references a logo image, but it has not been downloaded or approved. Production implementation uses a generated/simple bolt mark as a placeholder.
- Real business imagery discovered:
  Directory thumbnails/photos appear on Yell and Checkatrade, but rights are unresolved and images were not adopted into production.
- Strongest authentic assets:
  Yell business listing facts, public service list, address, phone, hours, ratings, and review snippets.
- Weak/unusable authentic assets:
  Third-party directory images are useful for reference only until permission/ownership is confirmed.
- Source/provenance uncertainties:
  Business identity collision with multiple Brooks electrical companies; possible official website availability; Gazette winding-up notice; asset rights; current trading status.
- Client asset requests that would improve production:
  Current logo, branded van/uniform/jobsite photography, verified testimonials, legal trading name, license/registration details, live form destination, approved domain, and analytics preference.
- Asset contact sheet/review artifact:
  `qa-assets/asset-contact-sheet.html`
- Existing-site visual audit:
  - KEEP:
    Dark professional positioning and technical electrical imagery when consistent with approved UX Pilot.
  - IMPROVE:
    Replace placeholders, unsupported US-centric claims, and generic copy with verified local Hampshire/service facts.
  - REMOVE:
    Unsupported "Marcus Brooks", BBB, 5-star Google, 24/7 emergency, and generic metro-area placeholders.
  - ADD:
    Stockbridge/Chilbolton address, office phone, Mon-Fri listed hours, NICEIC/Constructionline references, Hampshire service area, and demo form status.
- Competitive visual benchmark:
  Similar local electricians tend to use bright service grids, badges, and generic van/work photos. The approved dark technical bento direction differentiates Brooks while still fitting electrical work.
- Industry visual expectations:
  Clear phone CTA, trust credentials, safety language, service specificity, reviews, geographic coverage, and easy quote path.
- Differentiation opportunity:
  Premium dark technical system with precise diagnostics and proof-led content rather than a generic handyman layout.
- UX strategy:
  Lead with credibility and immediate call action, then service fit, symptom-based diagnostics, local proof, reviews, and a demo quote form.

## Visual Direction

- Primary visual design source: UX Pilot / FirstLine internal / client-provided / other
  UX Pilot
- UX Pilot export tracked in `docs/DESIGN_SOURCE.md`: yes/no
  yes
- Overall visual concept:
  Dark, modern, safety-forward electrical contractor site with a floating pill header, gold energy accent, bento service grid, diagnostic split bands, review proof, and practical lead form.
- Emotional impression:
  Professional, capable, technical, local, responsive.
- Brand personality:
  Dependable, precise, plain-spoken, safety-led.
- Existing brand signals to preserve:
  Business name, electrical trade category, local contractor trust cues.
- Brand/source materials that must shape the design:
  UX Pilot export; public business listing facts; directory review language; electrical safety/inspection service mix.
- Authentic asset inventory reviewed: yes/no
  yes
- What authentic visual material can this design be built around?
  Verified facts and reviews for now; production should be upgraded with client-owned jobsite, van, logo, or team imagery.
- Color strategy and rationale:
  Preserve UX Pilot deep ink/surface palette with gold electrical accent for power/safety/visibility.
- Typography strategy and rationale:
  Preserve Archivo/Inter/Space Mono hierarchy from UX Pilot for technical authority and readable service content.
- Imagery importance: image-critical / image-supporting / image-light
  image-supporting
- Photography/imagery strategy:
  Use UX Pilot generated concept imagery as documented demo imagery until authentic, approved business imagery is supplied.
- Hero strategy:
  Preserve square technical electrical-panel hero role and strong left-copy/right-image composition.
- Hero authentic-image decision:
  No cleared authentic hero asset found; retained UX Pilot generated concept image as placeholder with replacement recommended.
- Layout grammar:
  Floating capsule nav, dark full-page background, large rounded image windows, compact credential strip, asymmetrical bento services, alternating diagnostic rows, timeline process, and proof-led CTA footer.
- Why this section sequence fits this client:
  It moves from trust and urgent service fit to concrete symptoms, qualifications, local coverage, third-party proof, and contact.
- Visible differences from recent similar FirstLine builds:
  Dark technical composition, bento service system, problem-diagnosis section, and map-cover proof are more specific than a standard light contractor card stack.
- Client-specific modules:
  Local service area proof, NICEIC/Constructionline credential cues, review excerpts, landlord certificate/service testing fields.
- Clone-risk comparison:
  Reduced by service mix, Stockbridge/Hampshire local proof, rating/source links, and electrical diagnostic content; still needs authentic imagery for final brand specificity.
- Page composition strategy:
  Single-page architecture with direct anchor nav and repeated phone/quote CTAs.
- Section rhythm strategy:
  Alternate dense bento, large image/text rows, compact proof cards, vertical timeline, and full-width local cover.
- Whitespace/depth/layering/texture strategy:
  Generous dark spacing, bordered elevated surfaces, large image radii, and restrained shadows.
- CTA hierarchy:
  Phone call is primary live action; form is demo-only secondary for owner review.
- Signature visual element(s):
  Gold bolt mark, floating pill nav, and bento electrical service grid.
- Mobile visual strategy:
  Collapse into single-column sections, preserve first-screen action clarity, avoid horizontal overflow, and keep mobile nav full-screen below header.
- Brand specificity test answer:
  Pass for local electrical contractor category and Brooks public details; final pass depends on approved logo and authentic imagery.
- Known visual compromises:
  Generated concept imagery remains in production markup for local review; legal/trading status needs confirmation.

## Brand

- Logo files:
  Inline generated bolt favicon/mark only; client logo needed.
- Primary color:
  #0A0E1A
- Accent color:
  #F2A900
- Typography notes:
  Archivo headings, Inter body, Space Mono eyebrows.
- Imagery source:
  UX Pilot generated concept imagery retained as placeholder.
- Favicon/app icon source:
  Inline generated SVG bolt placeholder.

## Content

- Required pages/sections:
  One-page site: hero, trust strip, services, diagnostics, why choose/about, process, sectors, service area, reviews, contact, footer.
- Spanish or accented content: yes/no
  no
- Legal pages required: yes/no
  unknown; likely no for local brochure prelaunch, but privacy/cookie policy may be needed when analytics/live forms are configured.
- Newsletter/email capture: yes/no
  no
- Locations/map needs: yes/no
  yes

## Forms

- Default form mode: demo / live
  demo
- Live form destination/API:
  not configured
- Required fields:
  name, phone, email, service needed
- Demo status copy approved: yes/no
  yes, inherited FirstLine demo copy

## Launch

- Domain:
  `www.brookselectricalservices.co.uk` appears in public listings; owner confirmation required.
- Hosting:
  not configured
- Analytics:
  not configured
- Social preview asset:
  UX Pilot generated hero image placeholder
- Footer credit allowed: yes/no
  unknown; enabled for local FirstLine review

## Visual QA

- Screenshot set reviewed:
  pending this implementation pass
- Engineering QA result:
  pending
- Design Fidelity QA required: yes/no
  yes
- Design Fidelity QA result: pass/fail/not applicable
  pending
- Design-source deviations documented in `docs/DESIGN_SOURCE.md`: yes/no
  yes
- Visual QA result: pass/fail
  pending
- Authentic imagery usage review:
  complete; no production-approved authentic imagery available
- Visual score summary:
  pending after screenshots
- Weakest dimensions:
  likely authentic imagery and legal/business-status certainty
- Refinement pass notes:
  pending
- Commercial readiness result:
  pending; legal/trading-status confirmation required before launch
- Actual-business specificity result:
  provisional pass based on researched facts; needs authentic assets
- Structural uniqueness result:
  pass against standard contractor starter layout
- Existing-site comparison result for redesigns:
  no accessible confirmed existing site content reviewed

## Client-Specific Overrides

Document any approved exception to FirstLine global standards here.

- No client-owned imagery is present yet; UX Pilot generated imagery is retained for local review as concept/demo imagery only.
- Possible legal/trading-status conflict discovered in public records requires owner confirmation before launch.
