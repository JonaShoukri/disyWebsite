# DiSy website

Marketing site for DiSy: operations analytics for Quebec manufacturers. Next.js (App Router), Tailwind CSS and Framer Motion.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the booking link and contact email
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Configuration

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_BOOKING_URL` | Scheduler link (Calendly, Cal.com, Microsoft Bookings…). Every "Book a call" button leads to `/book`, which embeds this link. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shown on `/book`; used as the fallback when no booking link is set. |

## Where things live

```
app/
  page.tsx                 Home: launch logo, intro, link to services
  services/page.tsx        Both services, how they work together, call to action
  services/[slug]/page.tsx One page per service (generated from app/lib/services.ts)
  about/page.tsx           Who DiSy is and what it stands for
  book/page.tsx            Booking page (?service=<slug> shows the topic)
  partners/page.tsx        Placeholder
  components/
    layout/                Side navigation, animated background, home mark, page scroll container
    home/                  Launch logo and home title
    services/              Service card and service detail page
    ui/                    Shared building blocks (animated text, steps, buttons, hero…)
  i18n/
    dictionaries/fr.ts     All French copy (the source of truth for the text shape)
    dictionaries/en.ts     All English copy (TypeScript fails the build if a key is missing)
    LanguageProvider.tsx   Current language + switch, saved in a cookie
  lib/
    services.ts            List of services (slug + accent color)
    site.ts                Booking link and contact email
```

## Common changes

- **Edit any text:** change it in both `app/i18n/dictionaries/fr.ts` and `en.ts`.
- **Add a service:** add `{ slug, accent }` to `app/lib/services.ts`, then its copy under `services.items.<slug>` in both dictionaries. The services page, its detail page and the booking topic pick it up automatically.
- **Add a page:** create `app/<name>/page.tsx`, wrap the content in `<PageScroll>`, read text with `useLanguage()`.

## Language

French is the default (Loi 96). A visitor whose browser prefers English gets English on the first visit; the side-nav switch saves their choice in the `disy-locale` cookie.
