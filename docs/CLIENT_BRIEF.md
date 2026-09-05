# Client Brief

FirstLine-System-Version: 2.3

## Client

- Project folder: Brooks-Electrical-Services
- Name: Brock Electrical Services
- Business type: Electrical Contractor
- Primary language: English
- Primary audience:
  Homeowners and small commercial property owners/managers in Rochester, New Hampshire and nearby Seacoast/Strafford County communities.
- Primary conversion action:
  Phone call to the listed Rochester number.
- Secondary conversion actions:
  Demo quote request form; map/directions lookup; Facebook profile click from secondary reference CTA only.

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
  User-supplied references identify Brock Electrical Services via Facebook and Google Maps search for Rochester, NH. No standalone official website has been confirmed.
- Business research summary:
  Corrected target is Brock Electrical Services / Brock Electrical Services LLC in Rochester, NH. User supplied Facebook and Google Maps references. Additional public NH directory data lists BROCK ELECTRICAL SERVICES LLC at 22 Rochester Ave., Rochester, NH 03867 with phone 603-834-4243 and email redacted by the search result. The same directory result says "Not In Good Standing"; this must be owner-confirmed before launch and should not be surfaced on public pages.
- Visual sources searched:
  UX Pilot export; user-supplied Facebook reference; user-supplied Google Maps search reference; public NH company directory search result.
- Official/client-controlled visual sources:
  Facebook page may be business-controlled, but media reuse permission is not established from the current accessible result.
- Third-party public visual sources:
  Google Maps listing/search; NH company directory result.
- Logo/branding discovered:
  No approved logo file in repo. Production implementation uses a simple generated bolt mark as a placeholder.
- Real business imagery discovered:
  No production-approved authentic image files available in repo.
- Strongest authentic assets:
  User-supplied Facebook/Google references, Rochester location, NH phone number, and business-name correction.
- Weak/unusable authentic assets:
  Any public profile imagery remains reference-only until owner permission is confirmed.
- Source/provenance uncertainties:
  Exact legal name, current good-standing/license status, service radius, approved service list, hours, testimonials, logo, and image permissions.
- Client asset requests that would improve production:
  Current logo, branded truck/uniform/jobsite photos, verified testimonials, NH electrician license/registration wording, exact service area, business hours, domain, and live form destination.
- Asset contact sheet/review artifact:
  `qa-assets/asset-contact-sheet.html`
- Existing-site visual audit:
  - KEEP:
    UX Pilot's dark technical electrical tone and strong first impression.
  - IMPROVE:
    Replace the mistaken UK business facts with Rochester/NH-specific references and avoid unsupported credential/review claims.
  - REMOVE:
    UK address, Hampshire service area, Yell/Checkatrade proof, NICEIC/Constructionline, 01264 phone, landlord certificate language, and invented reviews.
  - ADD:
    Brock spelling, Rochester NH location, 603 phone number, Facebook/Google references, and owner-confirmation blockers.
- Competitive visual benchmark:
  Local electrician sites commonly rely on light service cards, badges, and stock trade photography. The UX Pilot dark technical system remains distinctive for a Rochester contractor.
- Industry visual expectations:
  Clear phone CTA, service categories, local area, safety-first language, practical proof points, and simple quote path.
- Differentiation opportunity:
  A polished electrical-specific bento layout that feels more premium than a generic home-services template.
- UX strategy:
  Lead with Rochester-local positioning and direct call action, then service fit, symptom-based diagnostics, practical trust/service benefits, and a demo quote form.

## Visual Direction

- Primary visual design source: UX Pilot / FirstLine internal / client-provided / other
  UX Pilot
- UX Pilot export tracked in `docs/DESIGN_SOURCE.md`: yes/no
  yes
- Overall visual concept:
  Dark, modern, safety-forward electrical contractor site with a floating pill header, gold energy accent, bento service grid, diagnostic split bands, local-reference panel, and practical lead form.
- Emotional impression:
  Professional, capable, technical, local, responsive.
- Brand personality:
  Dependable, precise, plain-spoken, safety-led.
- Existing brand signals to preserve:
  Brock business name, electrical trade category, Rochester/NH locality.
- Brand/source materials that must shape the design:
  UX Pilot export; user-supplied Facebook and Google Maps references; Rochester/NH directory data.
- Authentic asset inventory reviewed: yes/no
  yes
- What authentic visual material can this design be built around?
  Verified local identity/contact references for now; production should be upgraded with client-owned logo and jobsite imagery.
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
  It moves from local trust and urgent service fit to concrete symptoms, service categories, practical job-readiness proof, and contact.
- Visible differences from recent similar FirstLine builds:
  Dark technical composition, bento service system, problem-diagnosis section, and map-cover proof are more specific than a standard light contractor card stack.
- Client-specific modules:
  Rochester service-area proof, job-readiness panel, and demo quote form.
- Clone-risk comparison:
  Reduced by Rochester/NH local proof and electrical diagnostic content; still needs authentic imagery for final brand specificity.
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
  Provisional pass for local electrical contractor category and Brock/Rochester references; final pass depends on approved logo, imagery, testimonials, and license/status confirmation.
- Known visual compromises:
  Generated concept imagery remains in production markup for local review; business status, license wording, service radius, and hours need owner confirmation.

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
  One-page site: hero, trust strip, services, diagnostics, why choose/about, process, sectors, service area, job-readiness proof, contact, footer.
- Spanish or accented content: yes/no
  no
- Legal pages required: yes/no
  unknown; likely privacy/cookie policy if analytics or live forms are configured.
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
  not confirmed
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
  pending corrected-client recapture
- Engineering QA result:
  pending corrected-client recapture
- Design Fidelity QA required: yes/no
  yes
- Design Fidelity QA result: pass/fail/not applicable
  pending corrected-client recapture
- Design-source deviations documented in `docs/DESIGN_SOURCE.md`: yes/no
  yes
- Visual QA result: pass/fail
  pending corrected-client recapture
- Authentic imagery usage review:
  complete; no production-approved authentic imagery available
- Visual score summary:
  pending corrected-client recapture
- Weakest dimensions:
  authentic imagery, proof/testimonials, business/license/status certainty
- Refinement pass notes:
  pending corrected-client recapture
- Commercial readiness result:
  pending; entity/status/license confirmation required before launch
- Actual-business specificity result:
  provisional pass based on corrected references; needs authentic assets
- Structural uniqueness result:
  pass against standard contractor starter layout
- Existing-site comparison result for redesigns:
  no standalone official existing site confirmed

## Client-Specific Overrides

Document any approved exception to FirstLine global standards here.

- No client-owned imagery is present yet; UX Pilot generated imagery is retained for local review as concept/demo imagery only.
- The project folder and UX Pilot export use "Brooks" naming, but the supplied business references point to "Brock Electrical Services" in Rochester, NH.
- Public directory status/licensing details require owner confirmation before launch.
