# Nadya's Music Bridge — Website

A beautiful, mobile-first charity website for the Nadya's Music Bridge (NMB).

**Stack:** Next.js 14 · Tailwind CSS · Decap CMS · Netlify (free hosting)

---

## Quick Start (Local Dev)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Adding Images (Adobe Stock)

Download images from Adobe Stock and save them to `public/images/` with these exact filenames:

| Filename | Adobe Stock # |
|---|---|
| `hero.jpg` | #430896876 |
| `about-lesson.jpg` | #1168877161 |
| `programs-lessons.jpg` | #1087720879 |
| `programs-instruments.jpg` | #1087720879 or similar |
| `programs-ensemble.jpg` | #327148838 |
| `programs-performance.jpg` | #591409743 |
| `donate-atmospheric.jpg` | #1099197001 |

See `public/images/README.md` for full details and descriptions.

---

## Deployment to Netlify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — NMB website"
gh repo create dycp-website --public --source=. --push
# Or use github.com to create the repo and follow the instructions
```

### 2. Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. Connect your GitHub account and select the `dycp-website` repo
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Click **Deploy site**

### 3. Enable the CMS (Netlify Identity)

1. In your Netlify dashboard → **Identity** tab → **Enable Identity**
2. Under **Registration** → set to **Invite only**
3. Under **Services → Git Gateway** → **Enable Git Gateway**
4. Click **Invite users** and enter your friend's email address
5. She will receive an email to set a password

She can then log in at `yoursite.netlify.app/admin/` to write news posts.

### 4. Set Up Donations (Zeffy)

1. Create a free nonprofit account at [zeffy.com](https://www.zeffy.com)
2. Create a **Donation Form** campaign
3. Copy the iframe embed code
4. In `app/donate/page.tsx`, replace the dashed placeholder with the iframe

### 5. Custom Domain (Optional)

In Netlify → **Domain settings** → add your custom domain.
Namecheap, Google Domains, or Cloudflare all work well (~$12/year).

---

## Content Management (CMS)

Your friend can manage **News & Updates** at `/admin/` after logging in.

She can:
- Write and publish new posts (with a rich text editor)
- Upload cover images for posts
- Edit or delete existing posts

Each save automatically commits to GitHub and triggers a new deploy (≈30 seconds).

---

## Project Structure

```
app/                  # Next.js App Router pages
  page.tsx            # Home
  about/page.tsx      # About
  programs/page.tsx   # Programs
  donate/page.tsx     # Donate
  contact/page.tsx    # Contact
  news/page.tsx       # News listing
  news/[slug]/page.tsx # Individual post
components/
  Nav.tsx             # Sticky navbar (transparent on home hero)
  Footer.tsx          # Footer
  ContactForm.tsx     # Netlify Forms contact form
content/posts/        # Markdown blog posts (managed via CMS)
lib/posts.ts          # Reads and parses markdown posts
public/
  admin/              # Decap CMS admin panel
    index.html
    config.yml
  images/             # Place Adobe Stock images here
netlify.toml          # Netlify build config
```

---

## Updating Content (Without CMS)

Static page content (About, Programs, etc.) is in the corresponding `app/*/page.tsx` files.
Open in a text editor, find the relevant text, update it, push to GitHub, and Netlify rebuilds.
