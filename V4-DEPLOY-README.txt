STRATUP SEO PRODUCTION V4 — ROUTING REPAIR
========================================

What changed:
1. Removed cleanUrls dependency.
2. Removed all host redirects from vercel.json to prevent www/apex redirect loops.
3. Added explicit same-project Vercel rewrites for every clean URL to its exact .html file.
4. Rebuilt favicon as a larger, bolder mark optimized for browser tabs.
5. Added cache-busted v4 favicon filenames.
6. Preserved canonical, hreflang, Open Graph, sitemap and Schema JSON-LD on every page.
7. Header language switch is URL-driven and CTA/navigation labels are localized.
8. No legacy #/es/... or #/en/... links remain.

IMPORTANT VERCEL DOMAIN SETTING:
Use only ONE domain-level redirect in Vercel:
- stratup.app = Production
- www.stratup.app = Redirect to stratup.app
Do not add any www/apex redirect in vercel.json.

Deployment:
Replace the repository root contents with this package, then:
git add .
git commit -m "V4 production routing repair and favicon hardening"
git push origin main
