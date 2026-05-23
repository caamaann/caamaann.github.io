# Muhammad Salman Al Hafizh — Portfolio

Personal portfolio of a Fullstack Engineer specializing in frontend web
development. Built with Next.js and statically exported to **GitHub Pages**.

🔗 Live: https://caamaann.github.io

## Tech stack

- **Next.js 16** (App Router, `output: "export"` — fully static)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **framer-motion** (animations) · **Lenis** (smooth scroll)
- **next-themes** (dark/light) · bilingual EN/ID
- **Web3Forms** (serverless contact form backend)

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static export to ./out
pnpm lint
```

## Environment variables

| Variable                    | Required | Description                                              |
| --------------------------- | -------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | for form | Public Web3Forms access key. Without it the form is disabled and visitors are pointed to the email/social links. |

Get a free key at https://web3forms.com (enter your email, the key is emailed
to you). It is a **public** key by design — safe to expose in client code.

For local dev, create `.env.local`:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages.

To enable the contact form in production, add the key as a **repository
variable** (not a secret — it's public and needs to be inlined at build time):

> Repo **Settings → Secrets and variables → Actions → Variables → New variable**
> Name: `WEB3FORMS_KEY` · Value: your Web3Forms access key

## SEO & metadata

- Open Graph / Twitter card image generated at build (`opengraph-image.tsx`)
- `sitemap.xml`, `robots.txt`, and a web manifest (`app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`)
- JSON-LD `Person` structured data and canonical URL in `app/layout.tsx`

## A note on security headers

GitHub Pages serves static files only and cannot send custom HTTP response
headers, so a true `Content-Security-Policy`, `HSTS`, etc. aren't possible.
The strongest available fallback — a `<meta http-equiv>` CSP plus
`referrer` policy and `rel="noopener noreferrer"` on external links — is
applied in `app/layout.tsx`. Directives that only work as real headers
(e.g. `frame-ancestors`) are included for completeness but ignored by browsers
in `<meta>` form.
