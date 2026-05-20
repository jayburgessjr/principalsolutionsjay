# jay-burgess.me

**[https://jay-burgess.me](https://jay-burgess.me)**

Portfolio site for Jay Burgess — Founder & CEO, Revuity Systems. AI-first software studio based in Los Angeles.

## Stack

- Vite 5 + React 18 + React Router 7
- Global CSS (no Tailwind, no CSS Modules)
- Supabase Edge Functions (AI chat)
- Netlify (hosting + deploy)
- Prerendering via `vite-plugin-prerender` + Puppeteer

## Pages

| Route                 | Description                       |
| --------------------- | --------------------------------- |
| `/`                   | Main portfolio                    |
| `/about`              | About Jay                         |
| `/engagement`         | Engagement models & rates         |
| `/reggie-case-study`  | ReggieAI — Title IV compliance AI |
| `/revuity-case-study` | Revuity Systems — AI studio       |
| `/walmart-case-study` | Walmart Creative Operations       |
| `/revuity-products`   | Full product catalog              |
| `/articles`           | Articles index (15 articles)      |
| `/article/*`          | Individual article pages          |

## Dev

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build + prerender
```

## Contact

- **Site:** https://jay-burgess.me
- **Email:** jay@revuitysys.com
- **Company:** https://revuitysystems.com
- **LinkedIn:** https://linkedin.com/in/jayburgessjr
