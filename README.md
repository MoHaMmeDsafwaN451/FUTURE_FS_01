# FUTURE_FS_01 — Personal Portfolio

deployed live portfolio site is available at:
https://mohammedsafwan451.github.io/FUTURE_FS_01/

A personal portfolio site built with **React + Vite + Tailwind CSS**.
Sections: Hero, About, Skills, Projects, Experience/Education, Certificates, Contact (with a working form) — SEO meta tags included.

Built for **Future Interns — Full Stack Development, Task 1**.

---

## 1. Project structure

```text
FUTURE_FS_01/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← add your real resume here (see step 3)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js      ← EDIT THIS FILE to personalize the whole site
│   ├── hooks/
│   │   └── useReveal.js    ← scroll-reveal animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html               ← SEO meta tags live here
├── tailwind.config.js
├── vite.config.js
├── package.json
└── .gitignore
```

Everything is componentized: one file per section, one shared data file. You never need to touch component code just to change text.

---

## 2. Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Vite hot-reloads on save.

To build for production:

```bash
npm run build     # outputs to /dist
npm run preview   # serve the production build locally
```

---

## 3. Personalize it (do this before deploying)

1. **`src/data/content.js`** — the only file you need to edit for content:
   - `profile` → name, roles, tagline, email, phone, resume link, social links
   - `stats` → the three highlight numbers under About
   - `skills` → grouped skill tags
   - `projects` → title, description, tech stack, GitHub/demo links
   - `education`, `experience`, `certificates`
   - `contactFormEndpoint` → see step 4

2. **`public/resume.pdf`** — replace the placeholder text file with your real resume PDF named exactly `resume.pdf`. The navbar/hero "Resume" button already points at `/resume.pdf`.

3. **`index.html`** — update the `<title>`, `<meta name="description">`, `og:*` tags, and `canonical` URL once you know your deployed URL.

4. **Contact form (email notifications)** — this is a static site, so form submissions need a hosted endpoint:
   - Create a free form at [formspree.io](https://formspree.io) with your email
   - Copy the endpoint (`https://formspree.io/f/xxxxxxx`)
   - Paste it into `contactFormEndpoint` in `content.js`
   - You'll get an email every time someone submits the form — no backend needed

5. **Favicon / OG image** — swap `public/favicon.svg` and add `public/og-image.png` if you want a custom social-share preview image.

---

## 4. Push to GitHub

Naming convention required by the internship: **`FUTURE_FS_01`**.

```bash
cd FUTURE_FS_01
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/FUTURE_FS_01.git
git push -u origin main
```

`.env` and `node_modules/` are already git-ignored, so nothing sensitive or heavy gets committed.

---

## 5. Deploy it live

Any static host works since this builds to plain HTML/CSS/JS. Easiest options:

**Vercel** (recommended, zero config)
```bash
npm i -g vercel
vercel
```
or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Vite.

**Netlify**
- Connect the repo at [app.netlify.com](https://app.netlify.com)
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**
```bash
npm i -D gh-pages
```
Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`, set `base: '/FUTURE_FS_01/'` in `vite.config.js`, then run `npm run deploy`.

After deploying, come back and update the `canonical` / `og:url` values in `index.html` with the real URL.

---

## 6. Tech stack

- **React 18** — component structure
- **Vite** — build tool / dev server
- **Tailwind CSS** — styling, custom design tokens in `tailwind.config.js`
- **lucide-react** — icons
- **Formspree** — serverless contact-form email notifications
- Vanilla `IntersectionObserver` (via `useReveal.js`) for scroll animations — no extra animation library needed

## 7. Accessibility & SEO notes already handled

- Semantic sections with `id`s for anchor navigation
- Visible focus states on all interactive elements
- `prefers-reduced-motion` respected
- Meta description, Open Graph tags, canonical URL scaffolded in `index.html`
- Mobile-responsive nav and layout down to small screens
