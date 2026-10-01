# Centre for Indian Language Sciences — IIT Kanpur

A self-contained static website for GitHub Pages.

## Files

- `index.html` — page structure and content
- `style.css` — responsive visual design
- `script.js` — tab navigation, mobile menu, and hash routing

## Run locally

Open `index.html` directly in a browser, or use a local server such as:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and this `README.md` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will provide the Pages URL.

No build step is required.

## Notes

The site is intentionally dependency-free: it uses plain HTML, CSS, and JavaScript and does not require npm, React, a server, or a backend.

The institutional wording in the site is based on the publicly accessible CILS Google Site:
https://sites.google.com/view/language-sciences-centre

The source site's public page exposes the centre overview, vision, mission, affiliates, address, and contact information. The GitHub version reorganizes that content into a tabbed static layout and changes the visual design.
