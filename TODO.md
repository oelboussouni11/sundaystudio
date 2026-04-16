# TODO — Sunday Studio Website

Pending work to wire up once client assets and credentials arrive.

## 1. Contact form → Gmail (highest priority)

**Status:** form is UI-only. `src/components/contact/ContactForm.tsx` shows a success state after a `setTimeout`; nothing actually sends.

**Plan:** Nodemailer + Gmail SMTP via a Next.js Server Action.

**What the client needs to provide:**
- Destination Gmail address (e.g. `hello@sundaystudio.co` if Google Workspace, or a personal `@gmail.com`)
- The account must have **2-Step Verification enabled**
- Generate an **App Password** at https://myaccount.google.com/apppasswords (16-char password, Gmail only lets you generate these on 2FA-enabled accounts)

**Implementation steps:**
1. `npm install nodemailer` and `npm install -D @types/nodemailer`
2. Create `.env.local` (gitignored) with:
   ```
   GMAIL_USER=hello@sundaystudio.co
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   CONTACT_TO=hello@sundaystudio.co
   ```
3. Create `src/app/actions/send-contact.ts` as a server action:
   - `"use server"` directive
   - Validates fields (name, email, subject, message) — reject empty/malformed
   - Basic spam protection: honeypot field + rate-limit by IP (simple in-memory Map or Upstash if we want durable)
   - Uses `nodemailer.createTransport({ service: "gmail", auth: { user, pass } })`
   - Sends email with `replyTo: form.email` so replying in Gmail goes straight to the sender
   - Returns `{ ok: true }` or `{ ok: false, error }`
4. Wire `ContactForm.tsx` to call the action on submit — replace the fake `setTimeout` with real await + error state UI.
5. Test locally with real credentials before deploying.

**Gotchas:**
- Gmail caps free accounts at ~500 sends/day. Fine for a contact form.
- If using Workspace domain email, may need to whitelist the "less secure app" flow or use OAuth2 instead of app password.
- Server actions run on the Node runtime, not Edge. No config change needed for Next 15 app router.

**Alternative if client prefers:** Resend (free tier 100/day, cleaner DX, needs verified domain) — drop-in swap at the transport layer.

## 2. Switzer font files

**Status:** `@font-face` declarations exist in `src/app/globals.css` pointing to `/fonts/Switzer-{Medium,Bold,Black}.woff2`, but the files aren't in `public/fonts/` yet. Site currently falls back to Helvetica Neue.

**Action:** Download Switzer woff2 files from https://www.fontshare.com/fonts/switzer (free, commercial use allowed) and drop into `sunday-studio/public/fonts/`. No code changes needed.

If client eventually provides Neue Haas Grotesk licensed files, swap them in the same folder and update the `@font-face` src URLs in `globals.css`.

## 3. Real content from client

Currently using placeholder copy — replace when client provides:

- **Social links** (`src/lib/constants.ts` → `socials`): actual Instagram / TikTok / Behance / LinkedIn URLs
- **Contact info** (`src/components/contact/ContactInfo.tsx` → `items`): real email, phone, location
- **Team** (`src/components/about/TeamSection.tsx` → `team`): real names, roles, maybe photos (would need to swap lucide icons for `next/image` avatars)
- **Services copy** (`src/lib/constants.ts` → `services`): taglines and item bullets currently mine — confirm with client or replace

## 4. Nice-to-haves (not blocking launch)

- **Metadata / OG images**: add `opengraph-image.tsx` or static `/og.png` at `src/app/` root, plus per-route metadata for `/services`, `/about`, `/contact` (basic `title` + `description` already set)
- **Favicon**: replace default `src/app/favicon.ico` with a Sunday-branded one (could render the red ® from the logo)
- **404 page**: `src/app/not-found.tsx` — currently uses Next default
- **Sitemap + robots**: `src/app/sitemap.ts` and `src/app/robots.ts` for SEO
- **Analytics**: Plausible or Vercel Analytics, whichever client prefers
- **Real project/case study pages** if scope expands beyond the single-page marketing site

## 5. Known design / content decisions deferred

- Team avatars are lucide icons in red circles — swap to real photos once received
- Contact form has no attachments support. If client wants file uploads (briefs, PDFs), we'd need to upgrade to `multipart/form-data` handling and likely S3 or UploadThing
- Light mode uses `localStorage` only (no SSR theme detection from cookies) — acceptable flash-free since the inline `ThemeScript` runs before hydration
