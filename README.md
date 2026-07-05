# Stackryze Docs

The source for [docs.stackryze.com](https://docs.stackryze.com), built on [Mintlify](https://mintlify.com).

This repo contains:

- Product reference — DNS, Domains, Billing, Security, Pricing
- Integration guides — connect domains, configure records, automate via API
- The Stackryze changelog — every release, every fix, every minor improvement

## Stack

- **Framework:** Mintlify (MDX + YAML frontmatter)
- **Config:** `docs.json` — navigation, theme, colors, logos
- **Content:** `.mdx` files under `features/`, `guides/`, and `changelog/`
- **Logos:** `logo/light.svg`, `logo/dark.svg`, `favicon.svg`

## Local development

Install the Mintlify CLI:

```bash
npm i -g mint
```

From the repo root (where `docs.json` lives), run:

```bash
mint dev
```

Preview at `http://localhost:3000`.

## Editing content

- Pages are MDX. YAML frontmatter at the top of every file declares `title` and `description`.
- Navigation lives in `docs.json` — add a page there once it's written.
- Use Mintlify components (`<Card>`, `<Steps>`, `<Tip>`, `<Note>`, `<Columns>`, `<CodeGroup>`) — see the Mintlify skill for the full reference.

Install the Mintlify skill for your editor:

```bash
npx skills add https://mintlify.com/docs
```

## Brand

This docs site uses the Stackryze bi-stack mark — the same mark that ships in the marketing site navbar. If you change the mark, update **three** files together:

- `docs/logo/light.svg`
- `docs/logo/dark.svg`
- `docs/favicon.svg`

And mirror the change in the web app at `stackryze/public/logos/` so the favicon and OG image stay in sync.

Brand guidelines live in [`stackryze/BRAND.md`](../stackryze/BRAND.md).

## Publishing

The docs deploy automatically when changes land on the default branch. The Mintlify GitHub app reads this repo and builds on every push.

If a page 404s locally, double-check that `docs.json` lists it under `navigation.tabs[].pages` — Mintlify will not auto-discover pages.

## Need help?

- Stackryze product questions — [support@stackryze.com](mailto:support@stackryze.com)
- Mintlify component reference — [mintlify.com/docs](https://mintlify.com/docs)