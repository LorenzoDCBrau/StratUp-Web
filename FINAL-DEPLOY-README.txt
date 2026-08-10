STRATUP — FINAL CLEAN PRODUCTION PACKAGE
========================================

Favicon cleanup:
- Uses your Illustrator file exactly as favicon.svg.
- Only 3 icon assets remain:
  1. favicon.svg        -> modern browsers, exact vector source
  2. favicon.ico        -> legacy/fallback browser compatibility
  3. apple-touch-icon.png -> iPhone/iPad home-screen icon
- No manifest and no extra favicon PNG variants remain.
- No v3/v4/v5/v6/v61/v62 favicon files remain.
- All 110 HTML files point to the same final icon set.
- Canonical and Schema remain intact.

IMPORTANT WHEN COPYING:
Delete the old contents of your local StratUp-Web folder EXCEPT the hidden .git folder,
then copy this package into StratUp-Web.
Do not simply paste over the existing folder, because obsolete favicon files would remain.

Recommended terminal cleanup (run inside StratUp-Web):
find . -maxdepth 1 -type f \( -iname '*favicon*' -o -iname '*apple-touch*' -o -iname 'site.webmanifest' \) -delete

Then copy this package contents and deploy.
