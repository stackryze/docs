# Documentation project instructions — Stackryze

> For Mintlify component reference, configuration, and writing standards, install the Mintlify skill: `npx skills add https://mintlify.com/docs`

## About this project

- This is the **Stackryze docs site** (`docs.stackryze.com`), built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Navigation and theme live in `docs.json`.
- The site documents Stackryze's product surface — **Stackryze DNS**, **Stackryze Domains**, and the broader roadmap. Brand voice and product positioning are set by the web app at [`stackryze/`](../stackryze) — see [`stackryze/BRAND.md`](../stackryze/BRAND.md) and [`stackryze/PRODUCTS.md`](../stackryze/PRODUCTS.md).

## Terminology

- **Stackryze DNS** — the authoritative DNS product (`dns.stackryze.com`). May be referred to as "StackNS" in product copy, but use **Stackryze DNS** in docs.
- **Stackryze Domains** — the domain registration / free subdomain product (`domain.stackryze.com`).
- **Stackryze** (no qualifier) — the company. Use for company-level statements ("Stackryze ships every two weeks").
- **Zone** — a DNS zone file managed in Stackryze DNS. Use "zone" not "domain" when referring to the DNS-side record set.
- **Stackryze account** / **Stackryze user** — never "customer" or "subscriber" unless quoting billing copy.
- **Founder, freelancer, small team, the curious** — the canonical audience set. Use these nouns, not "users".

## Style preferences

- Active voice, second person ("you").
- One idea per sentence. Short sentences.
- Sentence case for headings.
- Bold for UI elements: Click **Settings**.
- Code formatting for file names, commands, paths, and code references.
- Use `example.com` (not `yourdomain.com`) in examples unless the placeholder needs to feel personal.
- Prices in **USD** with the `$` prefix (`$12/year`). Spell out "free" — don't use `$0`.
- Time periods in plain English: "30 minutes", not "1800 seconds".
- Avoid "simply", "just", "easy", "obviously", "leverage", "robust", "powerful".

## Content boundaries

- **Document:** user-facing product features, public API, integration guides, pricing tiers, account management.
- **Do not document:** internal admin tools, billing reconciliation flows, fraud/risk workflows, infrastructure-as-code that isn't published.
- **Out of scope unless explicitly requested:** competitor comparisons, speculative roadmap features, support runbooks.

## Structure

```
docs.json                       # navigation, theme, colors, logos
index.mdx                       # docs landing
quickstart.mdx                  # 5-minute DNS setup
account-verification.mdx        # verification flow
docs/                           # one folder per product — overview & reference content
  domains/                      #   Stackryze Domains (indevs.in subdomains)
    index.mdx                   #     product overview (anchor for the Domains tab)
    media/                      #     screenshots (Cloudflare, Route 53, DigitalOcean, dashboard)
  dns/index.mdx                 #   Stackryze DNS records & zones (anchor for the StackNS tab)
  hosting/index.mdx             #   Stackryze Hosting (planned; anchor for the Hosting tab)
guides/                         # all task-oriented and how-to content
  add-a-custom-domain.mdx
  point-domain-to-stackryze.mdx
  transfer-domain.mdx
  configure-dns-records.mdx
  enable-dnssec.mdx
  dynamic-dns.mdx
  api-quickstart.mdx
  webhooks.mdx
  billing-introduction.mdx
  domains/                      # Stackryze Domains how-to guides (under the Guides tab)
    getting-started.mdx         #   registration walkthrough
    managing-domains.mdx        #   renewals, nameservers, deletion
    faq.mdx                     #   frequently asked questions
    troubleshooting.mdx         #   common errors and fixes
    dns-providers.mdx           #   provider index
    dns-providers/              #   one page per supported provider
      cloudflare.mdx            #     (full guide)
      route53.mdx               #     (full guide)
      digitalocean.mdx          #     (full guide)
      google-cloud-dns.mdx
      azure-dns.mdx
      hetzner.mdx
      cloudns.mdx
      hurricane-electric.mdx
      namecheap.mdx
      vercel-dns.mdx
      desec.mdx
      powerdns.mdx              #     (full self-host guide)
      custom.mdx                #     (full custom DNS guide)
changelog/
  introduction.mdx
  v1-*.mdx                      # one file per release
```

## Voice anchors

When in doubt, look at these pages — they were written with the desired voice and structure:

- `index.mdx` — landing tone
- `quickstart.mdx` — task-oriented, step-driven
- `changelog/introduction.mdx` — release note cadence

## Mintlify component usage

- **`<Steps>` + `<Step>`** for every multi-step task. Numbered, ordered, scannable.
- **`<Card>`** for navigation tiles at the end of every page (max 4, always linked).
- **`<Tip>`** for non-blocking advice. **`<Note>`** for context the user must know.
- **`<CodeGroup>`** with curl + JavaScript + Python when showing API requests.
- **`<ParamField>`** in every API reference page.
- **`<ResponseField>`** for every documented response.

## Local development

```bash
npm i -g mint
mint dev
```

Visit `http://localhost:3000`.

If a page 404s: confirm it's listed under `navigation.tabs[].pages` in `docs.json`.
If a component renders blank: confirm the Mintlify version supports it — run `mint update`.