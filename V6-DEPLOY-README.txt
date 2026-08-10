STRATUP V6 — LANGUAGE LOCK + FAVICON COMPACT
=============================================
Fixes:
- English navigation is language-locked: same-site links cannot fall back to Spanish.
- Header hrefs are explicitly rewritten per current language.
- Static English header is correct even before JavaScript render.
- /en/home references removed.
- Favicon now uses ONE exact arrow from the approved StratUp logo mark, enlarged to fill the square.
- New v6 filenames/query strings break favicon cache.
- Canonical + Schema preserved.

Vercel Domains must remain:
stratup.app = Production
www.stratup.app = 308 redirect to stratup.app
strat-up-web.vercel.app = Production

Deploy:
cd ~/Downloads/StratUp-Web
git add .
git commit -m "V6 lock English navigation and enlarge exact favicon"
git push origin main
