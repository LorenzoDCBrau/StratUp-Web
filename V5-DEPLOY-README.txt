STRATUP SEO PRODUCTION V5 — STABILIZATION RELEASE
=================================================

This release specifically fixes the production symptoms observed after V4:

1. /en/home and /home are now permanent migration redirects to /en and /.
2. Old /es/... routes self-heal to the canonical Spanish URL.
3. Old singular internal routes (industry, capability, situation, etc.) redirect to the new SEO architecture.
4. Language switch no longer reconstructs routes from internal keys; it switches the current canonical pathname directly.
5. Favicon is generated from the EXACT mark contained in the approved StratUp logo, not a manually redrawn approximation.
6. HTML no longer advertises SVG favicon; PNG + ICO are used to maximize browser consistency.
7. Explicit Vercel rewrites remain for every canonical clean URL.
8. No host redirect exists in vercel.json. Keep domain redirect ONLY in Vercel:
   stratup.app = Production
   www.stratup.app = 308 -> stratup.app

DEPLOY:
cd ~/Downloads/StratUp-Web
git add .
git commit -m "V5 stabilize language routing legacy URLs and exact favicon"
git push origin main

POST-DEPLOY TESTS:
https://stratup.app/
https://stratup.app/home                  -> must become /
https://stratup.app/en/home               -> must become /en
https://stratup.app/industries/real-estate
https://stratup.app/en/industries/real-estate
https://stratup.app/stratup-favicon-v5-32.png?v=5
