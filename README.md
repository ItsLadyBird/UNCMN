# UNCMN — Uncommon

**From Soil to Skin. Nothing in Between.**

Colombian cacay oil, cacao butter lipsticks and natural lip care.  
Built by people from the land. Full traceability. Responsibly sourced.

---

## Project Structure

```
uncmn-website/
├── index.html          ← Home page
├── cacay-oil.html      ← Cacay Oil ingredient deep-dive
├── about.html          ← Our Story, Traceability, Values
│
├── style.css           ← ALL shared styles (one file, every page uses it)
├── main.js             ← ALL shared scripts (nav, animations, newsletter)
│
├── README.md           ← This file
└── images/
    ├── uncmn-logo.png
    ├── cacay-oil.png
    ├── cacay-fruit-fresh.png
    ├── cacay-harvest.png
    ├── serum-model.png
    └── [add more images here as needed]
```

## How to Add a New Page

1. Create a new `.html` file (e.g., `products.html`)
2. Add these two lines in `<head>`:
   ```html
   <link rel="stylesheet" href="style.css" />
   ```
3. Add this line before `</body>`:
   ```html
   <script src="main.js"></script>
   ```
4. Copy the `<nav>`, mobile menu, footer, and `.footer-bottom` blocks from any existing page
5. Add your page-specific styles inside a `<style>` block in `<head>`
6. Add your content between the nav and footer

That's it — the new page automatically gets the shared nav, animations, newsletter styles, footer, and all CSS tokens.

## Brand Tokens (in style.css)

| Token        | Value     | Use                        |
|-------------|-----------|----------------------------|
| `--white`   | `#FFFFFF` | Backgrounds                |
| `--black`   | `#0A0A0A` | Text, borders              |
| `--gold`    | `#C49A2A` | Accents, labels, highlights|
| `--gold-lt` | `#E8C96A` | Gold on dark backgrounds   |
| `--grey`    | `#F5F4F2` | Section backgrounds        |
| `--grey-md` | `#D9D6D0` | Borders, dividers          |
| `--grey-dk` | `#8A8580` | Body text, captions        |

Fonts: `Cormorant Garamond` (headings) + `DM Sans` (body) via Google Fonts.

## Deployment

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source: main branch, root folder**
3. Site is live at `https://yourusername.github.io/uncmn-website`

### Netlify (drag & drop)
Go to [netlify.com/drop](https://netlify.com/drop) and drag the entire folder.

### Vercel
```bash
npx vercel
```

---

© 2025 UNCMN. All rights reserved.
