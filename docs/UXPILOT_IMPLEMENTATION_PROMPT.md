# FirstLine UX Pilot Implementation Prompt

Project path: C:\Users\burgo\Projects\FirstLine-Clients\Brooks-Electrical-Services
UX Pilot export: design-source\uxpilot\BrooksElectrical - Home.html
UX Pilot export SHA256: b611ff33ce9221cbe1e20f7e33b1dcb911fdb46e00a04a60d20eaa59ba02022c
Import date: 2026-09-04T15:00:17Z

You are working inside a FirstLine Development client repository. Read AGENTS.md, docs/CLIENT_BRIEF.md, docs/DESIGN_SOURCE.md, docs/ASSET_MANIFEST.md, irstline.config.js, and the raw UX Pilot export before editing implementation files.

## Goal

Take this client from UX Pilot HTML export to approximately 90-95% complete locally:

New-FirstLineClient -> UX Pilot HTML dropped into client -> one FirstLine build/import workflow -> researched, wired, responsive, optimized, QA'd, design-faithful website -> user opens the project primarily for review/corrections.

## Authority Model

UX Pilot is the preferred authority for visual composition, visual direction, section composition, visual hierarchy, overall aesthetic, layout concept, color relationships, imagery roles, and visual rhythm.

FirstLine is responsible for client/research intelligence, factual accuracy, content, asset provenance, authentic business imagery, implementation, code quality, functionality, accessibility, responsive behavior, SEO, metadata, forms, maps, links, phone CTAs, analytics hooks, QA, design fidelity, and production readiness.

The UX Pilot HTML is a design specification, not necessarily production code. Preserve rendered design fidelity, but do not preserve poor generated code merely for literal similarity.

## Required Import Analysis

Inspect the export for inline styles, style tags, Tailwind/generated utility classes, external CSS, inline scripts, external scripts, inline event handlers, embedded SVG, and asset URLs.

Normalize into maintainable FirstLine project files where appropriate. Prefer separated production HTML/CSS/JS and the existing project architecture. Do not over-componentize simple static sites. Do not let starter CSS override approved UX Pilot visual intent.

## Research And Assets

Complete or refresh business research and real-business asset discovery before final implementation decisions. Treat UX Pilot images as visual-role placeholders until provenance is known.

For every major image role, prefer:

1. client-provided imagery
2. official business-controlled imagery
3. cleared authentic business imagery
4. approved/generated concept imagery
5. generic imagery

Do not assume publicly visible imagery is production-safe. Do not use competitor photography. Preserve provenance in docs/ASSET_MANIFEST.md. Do not replace a visually appropriate design image with a poor authentic image merely because it is real; evaluate resolution, crop, orientation, focal point, contrast, composition, and mobile usability.

## Implementation Work

Implement the design, verified client facts, content, navigation, phone links, map links/embeds as appropriate, forms with explicit demo/live behavior, social links, service content, metadata, local SEO, accessibility, responsive behavior, analytics placeholders/hooks, image optimization, and production-readiness corrections.

Material deviations from UX Pilot must be documented in docs/DESIGN_SOURCE.md. Valid reasons include factual accuracy, authentic branding/assets, accessibility, usability, responsive behavior, performance, functionality, content reality, browser compatibility, semantic structure, or technical constraints.

## QA

Run relevant build, lint, tests, metadata, UTF-8, asset QA, engineering screenshot QA, Design Fidelity QA, Visual QA, screenshot review, and learning-log updates. Design Fidelity QA asks whether the approved UX Pilot design was implemented faithfully. Visual QA asks whether the implemented website is polished across real devices. Both are required.

Make local commits when coherent. Do not push, deploy, contact the client, submit real forms, or modify FirstLine-System from this client workflow.
