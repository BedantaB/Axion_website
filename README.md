# Axion Space LLP Group — The V

Vite + React 19 + Tailwind CSS 3 multi-page site.

## Pages
| URL | Source |
|---|---|
| `/` | `src/App.jsx` |
| `/realty/` | `src/pages/RealtyPage.jsx` |
| `/interiors/` | `src/pages/InteriorsPage.jsx` |
| `/infrastructure/` | `src/pages/InfrastructurePage.jsx` |
| `/fincorp/` | `src/pages/FincorpPage.jsx` |

Each page has its own folder with an `index.html` (registered in `vite.config.js`), so the pages work on any
static host without rewrite rules. Shared layout: `src/components/PageLayout.jsx`; shared section blocks:
`src/components/page/Blocks.jsx`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve dist/
```

## Enquiry form → Google Sheet
Each enquiry is added as a row to a Google Sheet that only you can see. The
form posts to a small Google Apps Script ([apps-script/Code.gs](apps-script/Code.gs))
that can append rows but cannot read the sheet.

One-time setup:
1. Create a new Google Sheet (e.g. "Axion Enquiries") in your Google account.
2. In the sheet: **Extensions → Apps Script**. Delete the sample code, paste in
   the contents of `apps-script/Code.gs`, and save.
3. **Deploy → New deployment** → type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone** (this lets the website submit; it does not share the sheet)
   Click **Deploy** and approve the permission prompt (choose your account →
   Advanced → Go to project → Allow).
4. Copy the **Web app URL** (ends in `/exec`).
5. Locally: copy `.env.example` to `.env` and set `VITE_SHEETS_WEBAPP_URL` to that URL.
6. On Vercel: Project → Settings → Environment Variables → add
   `VITE_SHEETS_WEBAPP_URL` with the same URL, then redeploy.

The first enquiry creates an "Enquiries" tab with the headers
Submitted At, Name, Phone, Email, Interest, Message, Page.

If you later edit `Code.gs`, use **Deploy → Manage deployments → Edit → Version:
New version** so the URL stays the same.

## Things to edit
- Phone / WhatsApp numbers: `src/components/FloatingContact.jsx` (currently `919318411787`)
- Images are hot-linked from Unsplash in `Hero.jsx`, `Portfolio.jsx` and the `IMG` constant at the top of each file in `src/pages/`.
