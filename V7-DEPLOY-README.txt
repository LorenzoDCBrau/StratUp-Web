STRATUP V7 — PERFORMANCE + ACCESSIBILITY + AGENT READINESS
===========================================================

Primary changes:
- Removed render-blocking Google Fonts @import.
- Loads DM Sans + Inter asynchronously using display=optional.
- Reserves at least one viewport for #main before JS rendering to eliminate the major initial CLS source.
- Adds content-visibility to below-the-fold sections.
- Adds explicit intrinsic dimensions to logo and PRISM images.
- Improves the contrast of the soft-blue display token and dark-theme text/blue tokens.
- Adds reduced-motion support.
- Adds /llms.txt for agent discoverability.
- Adds cache headers for stable static brand assets.
- Preserves routing, language lock, canonical, Schema and final favicon implementation.

Deploy:
cd ~/Downloads/StratUp-Web
git add .
git commit -m "V7 optimize Core Web Vitals accessibility and agent readiness"
git push origin main

After Vercel is Ready, rerun PageSpeed Insights in Mobile and Desktop.
