# M_06 Study Site

Study companion for **M_06 Digital Marketing & Business Models** (CODE University of Applied Sciences): topic explainers, the mid-term assessment explained, and MCQ + flashcard exercises. For educational purposes only.

Built with [Astro](https://astro.build) (static) + MDX. No backend, no accounts; quiz and flashcard progress lives in `sessionStorage` (survives a refresh, cleared when the tab closes).

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Where things live

```
src/content/
  topics/        NN-slug.mdx          one explainer per lecture (frontmatter: title, order, unit, unitName, slug, takeaway)
  mcq/           NN-slug.yaml         ~20 questions per lecture (answer = index of the correct option)
  flashcards/    NN-slug.yaml         ~25 cards per lecture
  assessment/    index.mdx            logistics, the 8 points, rubric, peer review
                 elements.yaml        the 7 elements (6 poster boxes + marketing & ROI)
                 <element>.mdx        one summary page per element
src/components/mdx/                   components usable in any .mdx without importing
                                      (Callout, Exercise, Card, Grid, Chips, Formula, Hl, DataInsight,
                                      Canvas, ResearchGrid, TwoByTwo, Sliders, Pyramid, ValueProp,
                                      Layers, PathToConversion, Journey, ZoneMatrix)
src/components/  Mcq.astro, Flashcards.astro, Poster.astro
src/styles/global.css                 brand tokens, light/dark mode
```

File names tie everything together: `topics/04-channel-strategy.mdx`, `mcq/04-channel-strategy.yaml` and `flashcards/04-channel-strategy.yaml` all become lecture 04.

### Authoring rules
- MCQ: exactly 4 options; spread correct answers evenly across positions (~25% each). Options are shuffled in the browser anyway.
- MDX: write `{`, `}` and `<` only inside backticks or code blocks.
- No people's names (students, instructor); describe projects instead.

## Deploy to Cloudflare

Push the repo to GitHub, then in the Cloudflare dashboard create a project from the repo:

- **Workers** (static assets): build command `npm run build`; deploy command `npx wrangler deploy` (uses `wrangler.jsonc`).
- **Pages**: framework preset **Astro**, build command `npm run build`, output directory `dist`.

Every push to the main branch redeploys automatically.
