# Axion Space LLP Group — The V

Vite + React 19 + Tailwind CSS 3 multi-page site.

## Pages
| URL | Source |
|---|---|
| `/` | `src/App.jsx` |
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

## Enquiry form
The form POSTs JSON `{ name, phone, email, interest, message }` to
`${VITE_BACKEND_URL}/api/enquiries`. Copy `.env.example` to `.env` and set
`VITE_BACKEND_URL` to your backend; without a backend the form shows an error toast.

## Things to edit
- Phone / WhatsApp numbers: `src/components/FloatingContact.jsx` (currently placeholder `919999999999`)
- Images are hot-linked from Unsplash in `Hero.jsx`, `Portfolio.jsx` and the `IMG` constant at the top of each file in `src/pages/`.
