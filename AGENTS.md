# AGENTS.md

This repository is a FirstLine Development client project. Follow global FirstLine standards unless client-specific docs in this repo explicitly override them.

FirstLine-System-Version: 2.3

## Read First

- `AGENTS.md`
- `docs/CLIENT_BRIEF.md`
- `docs/DESIGN_SOURCE.md`
- `docs/FIRSTLINE_LEARNING.md`
- Raw UX Pilot exports under `design-source/uxpilot/`, when present
- Relevant design, content, launch, or approval notes

## Mandatory Checks

- Preserve client-specific instructions.
- Do not edit global `FirstLine-System` from this repo.
- Record reusable corrections in `docs/FIRSTLINE_LEARNING.md` as candidates.
- Treat visual quality as a first-class requirement; engineering correctness is not sufficient.
- Treat an approved UX Pilot HTML export as the preferred primary visual design source when present. UX Pilot is a design specification, not necessarily production code.
- Preserve rendered UX Pilot visual intent while refactoring markup, CSS, JavaScript, class names, asset paths, semantics, accessibility structure, and component architecture as needed for maintainable FirstLine production code.
- Never overwrite raw UX Pilot exports in `design-source/uxpilot/`.
- Complete or refresh business research, real business asset discovery, existing-site/competitive visual review, and design-source analysis before substantial UI implementation.
- Preserve useful existing-site brand equity when redesigning.
- Establish and document imagery strategy before layout; track authentic, generated, stock, unknown, and placeholder assets accurately.
- Establish a client-specific layout grammar before implementation when no approved UX Pilot design exists. When UX Pilot exists, preserve its approved composition unless a documented FirstLine reason requires deviation.
- Compare the proposed design against recent similar FirstLine projects. If it shares the same hero model, section order, card rhythm, palette habits, and form/footer sequence, redesign before building.
- Supplied logos, business cards, menus, flyers, vehicle wraps, signage, storefronts, packaging, or social-profile artwork must actively influence palette, typography, composition, modules, and content structure unless rejected with a documented reason.
- Separate public discovery from production usage approval. Preserve source/provenance, permission status, replacement needs, and local staging paths for meaningful assets.
- Treat authenticity as a design asset. Use strong real-business imagery when it materially improves credibility, personality, and brand specificity; do not force weak imagery.
- Treat UX Pilot image placeholders as visual-role placeholders. Prefer client-provided, official business-controlled, cleared authentic business, approved/generated concept, then generic imagery. Do not assume public imagery is production-safe, and do not use competitor photography.
- Avoid generic flat heroes, repetitive bordered cards, excessive rectangles, weak imagery, and template aesthetics.
- Avoid changing only the business name, colors, and images while keeping a previous client site's structure.
- Do not expose internal uncertainty on public pages. Provenance, assumptions, rights notes, launch blockers, and owner-confirmation needs belong in internal docs, not customer-facing copy.
- Apply the brand specificity test before handoff.
- Choose single-page or multi-page architecture intentionally and register all primary pages in `firstline.config.js`.
- Validate responsive behavior at 360px, 375px, 390px, 430px, 768px, 1024px, and desktop when practical.
- Validate sticky/fixed header anchor landings.
- Validate mobile nav close behavior and `aria-expanded`.
- Forms must declare `demo` or `live` mode; demo forms must not imply real delivery.
- Run build, lint, tests, metadata checks, UTF-8 checks, engineering screenshot QA, Design Fidelity QA when a design source exists, and visual critique when scripts exist.
- Screenshot QA must be inspected, scored, and allowed to fail. Refine material visual weaknesses and recapture affected screenshots.
- Design Fidelity QA and Visual QA are different. Design Fidelity QA asks whether the approved design was implemented faithfully; Visual QA asks whether the implemented site is polished across real devices.
- Check all relevant pages, not only the homepage.
- Run UTF-8/content checks for Spanish or accented content.
- Complete metadata, asset, hosting, analytics/privacy, and footer credit checks before deployment.
- Complete commercial readiness review before owner review.
