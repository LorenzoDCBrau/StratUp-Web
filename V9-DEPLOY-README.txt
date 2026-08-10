STRATUP V9 GODMODE — PERFORMANCE + ACCESSIBILITY + AGENTIC
==========================================================

Implemented:
- Removed Google Fonts network dependency from all 110 pages.
- Uses fast system font stack to improve remaining mobile FCP/LCP.
- Hardened text contrast tokens to target the remaining accessibility contrast audit.
- Added a real WebMCP navigation tool using document.modelContext.registerTool.
- Added declarative WebMCP annotations to search, contact, booking and revenue calculator forms.
- Preserved llms.txt.
- Shortened homepage headline to:
  ES: Convertimos complejidad en crecimiento.
  EN: We turn complexity into growth.
- Canonical, Schema, SEO URLs, sitemap, favicon, ES/EN routing remain intact.

Deploy:
cd ~/Downloads/StratUp-Web
git add .
git commit -m "V9 optimize mobile LCP contrast and WebMCP agent readiness"
git push origin main

After deploy:
1. Verify homepage copy + ES/EN navigation.
2. Run PageSpeed Mobile.
3. Run PageSpeed Desktop.
