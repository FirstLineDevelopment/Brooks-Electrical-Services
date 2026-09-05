# Asset Manifest

Track primary assets so placeholders do not accidentally ship and visual direction remains honest.

Never use competitor photography as client photography. Generated concept imagery must be marked generated/placeholder unless the client explicitly approves it for final use.

Public discovery does not equal production approval. Preserve source/provenance after downloading or optimizing assets.

Recommended research/staging location: `assets/research/` or another clearly non-production directory. Production assets should be optimized separately before use.

Authenticity classifications:

- REAL - CLIENT PROVIDED
- REAL - BUSINESS CONTROLLED
- REAL - THIRD-PARTY PUBLIC
- GENERATED CONCEPT
- GENERIC / STOCK
- REFERENCE ONLY
- UNKNOWN PROVENANCE

Quality classifications:

- HERO CANDIDATE
- STRONG SUPPORTING IMAGE
- USABLE SUPPORTING IMAGE
- REFERENCE ONLY
- UNUSABLE

Usage statuses:

- production approved
- concept/demo approved
- permission required
- replacement recommended
- reference only
- unknown

| Asset | Local Path/URL | Depicts | Source | Source URL/Reference | Authenticity Classification | Dimensions Original | Dimensions Optimized | Format | Intended Use | Actual Use | Quality Classification | Usage/Permission Status | Saved Locally | Optimized | Replacement Required | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Logo / brand mark | index.html | bolt/electrical symbol | FirstLine generated placeholder | `index.html` data SVG | GENERATED CONCEPT | vector | vector | svg | brand identity | favicon/header mark | USABLE SUPPORTING IMAGE | concept/demo approved | no | n/a | yes | Replace with client-owned logo before launch. |
| Hero image | public/assets/Main.jpg | electrician at modern panel | User supplied from local `dist/assets/Main.png` | `dist/assets/Main.png` | GENERATED CONCEPT | 637x620 | 637x620 | jpg | hero | hero | HERO CANDIDATE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; not authentic business photography. |
| Electrical repairs image | public/assets/repairs.jpg | residential wiring repair | User supplied from local `dist/assets/repairs.png` | `dist/assets/repairs.png` | GENERATED CONCEPT | unknown | optimized local | jpg | primary service visual | services | STRONG SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; replace with client-owned jobsite work if available. |
| Troubleshooting image | public/assets/Troubleshooting.jpg | multimeter testing | User supplied from local `dist/assets/Troubleshooting.png` | `dist/assets/Troubleshooting.png` | GENERATED CONCEPT | 1254x1254 | 1254x1254 | jpg | service visual | services | USABLE SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; technical close-up works for diagnostic tone. |
| Lighting image | public/assets/Lighting.jpg | recessed lighting | User supplied from local `dist/assets/Lighting.png` | `dist/assets/Lighting.png` | GENERATED CONCEPT | 1402x1122 | 1402x1122 | jpg | service visual | services | USABLE SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; replace with approved project imagery. |
| Outlets image | public/assets/Outlets.jpg | outlet/switch installation | User supplied from local `dist/assets/Outlets.png` | `dist/assets/Outlets.png` | GENERATED CONCEPT | 1380x1140 | 1380x1140 | jpg | service visual | services | USABLE SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; replace with approved project imagery. |
| Panel image | public/assets/Consumer Units.jpg | electrical panel | User supplied from local `dist/assets/Consumer Units.png` | `dist/assets/Consumer Units.png` | GENERATED CONCEPT | 1254x1254 | 1254x1254 | jpg | service visual | services | STRONG SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; replace with client-owned panel/work photography. |
| Installations image | public/assets/Installations.jpg | ceiling fan installation | User supplied from local `dist/assets/Installations.png` | `dist/assets/Installations.png` | GENERATED CONCEPT | unknown | optimized local | jpg | service visual | services | USABLE SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; owner imagery preferred. |
| Diagnostic lights image | https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_95deccbe17_be2bf26975482ce1.png | flickering lights | UX Pilot generated export | `design-source/uxpilot/BrooksElectrical - Home.html` | GENERATED CONCEPT | unknown | remote | png | diagnostic visual | diagnostics | STRONG SUPPORTING IMAGE | concept/demo approved | no | no | yes | Supports symptom-led copy. |
| Diagnostic breaker image | public/assets/Breakers.jpg | tripped breaker | User supplied from local `dist/assets/Breakerspng.png` | `dist/assets/Breakerspng.png` | GENERATED CONCEPT | unknown | optimized local | jpg | diagnostic visual | diagnostics | STRONG SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Optimized from supplied PNG; replace with client-owned breaker/panel detail if possible. |
| Residential image | https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5f69f3610f_62f1b84ffb50aefa.png | residential electrical panel | UX Pilot generated export | `design-source/uxpilot/BrooksElectrical - Home.html` | GENERATED CONCEPT | unknown | remote | png | sector visual | not used | REFERENCE ONLY | replacement recommended | no | no | yes | Removed from implementation per user request. |
| Commercial image | https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0bfa36c97d_19f8914a95297475.png | commercial conduit/lighting | UX Pilot generated export | `design-source/uxpilot/BrooksElectrical - Home.html` | GENERATED CONCEPT | unknown | remote | png | sector visual | not used | REFERENCE ONLY | replacement recommended | no | no | yes | Removed from implementation per user request. |
| Service area image | public/assets/Rochester.jpg | Rochester-area aerial/local visual | User supplied from local `dist/assets/Rochester.png` | `dist/assets/Rochester.png` | GENERATED CONCEPT | unknown | optimized local | jpg | service-area cover | service area | USABLE SUPPORTING IMAGE | concept/demo approved | yes | yes | yes | Replaced cleaned UX Pilot aerial with supplied Rochester asset; optimized JPEG used in site. |
| Review portrait proxy | https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8f827d3736_2e14fffe0718f6e4.png | portrait placeholder | UX Pilot generated export | `design-source/uxpilot/BrooksElectrical - Home.html` | GENERATED CONCEPT | unknown | remote | png | quote card | about quote card | REFERENCE ONLY | concept/demo approved | no | no | yes | Do not imply this is staff/customer; alt left empty in implementation. |
| Facebook profile reference | https://www.facebook.com/p/Brock-Electrical-Services-100087914287009/ | business profile/media reference | User-supplied Facebook URL | https://www.facebook.com/p/Brock-Electrical-Services-100087914287009/ | REAL - BUSINESS CONTROLLED | unknown | n/a | html | reference/authentic candidate | local reference link | REFERENCE ONLY | permission required | no | no | yes | Link/reference only; media not reused without owner permission. |
| Google Maps reference | https://www.google.com/maps/search/?api=1&query=Brock+Electrical+Services+Rochester+NH | map/listing reference | User-supplied Google Maps URL | https://www.google.com/maps/search/?api=1&query=Brock+Electrical+Services+Rochester+NH | REAL - THIRD-PARTY PUBLIC | unknown | n/a | unknown | map/location proof | service area CTA | REFERENCE ONLY | reference only | no | no | no | Used as a link only, not as media. |
| NH directory reference | https://www.nhcompanyregistry.com/naics_subcode/0025/35 | Rochester address/contact reference | Public NH company directory search result | https://www.nhcompanyregistry.com/naics_subcode/0025/35 | REAL - THIRD-PARTY PUBLIC | unknown | n/a | html | internal research | local-reference copy | REFERENCE ONLY | reference only | no | no | no | Status/licensing details require owner confirmation before launch. |
