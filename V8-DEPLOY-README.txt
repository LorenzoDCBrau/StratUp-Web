STRATUP V8 ULTRA — MOBILE PERFORMANCE / ACCESSIBILITY
=====================================================

This release builds on V7 and keeps:
- final SEO clean URLs
- canonical tags
- Schema JSON-LD
- ES/EN routing and language lock
- final favicon
- sitemap / robots
- llms.txt

V8 improvements:
1. Shared CSS extracted from every HTML into /assets/stratup.css.
2. Shared application JavaScript extracted into /assets/stratup.js and loaded with defer.
3. Removed unused inline base64 logo constants.
4. Replaced ~1024px inline PRISM data URI with a compact 384px WebP asset.
5. Shared assets are now browser-cacheable across all 110 URLs.
6. Strengthened remaining low-contrast foreground/background combinations.
7. Darkened WhatsApp control so its white label meets accessibility contrast.
8. Existing CLS/content-visibility/image-dimension improvements are preserved.

Deploy:
cd ~/Downloads/StratUp-Web
git add .
git commit -m "V8 externalize shared assets and optimize mobile performance"
git push origin main

After Vercel shows Ready:
- verify homepage and ES/EN navigation
- run PageSpeed Mobile first
- then Desktop
