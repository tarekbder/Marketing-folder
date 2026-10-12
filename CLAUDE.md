# M_06 Study Site — agent entry

Static Astro + MDX study site for M_06 Digital Marketing & Business Models (CODE University).
No backend. Source of truth for structure, authoring rules and deploy: `README.md`.
Content schemas: `src/content.config.ts`. This file only routes.

## Where to go for a task

| Task | Open | Usually also touch |
|---|---|---|
| Edit/add a lecture explainer | `src/content/topics/NN-slug.mdx` | `mcq/` + `flashcards/` with the same `NN-slug` |
| Edit/add MCQ questions | `src/content/mcq/NN-slug.yaml` | — (check answer spread, README rules) |
| Edit/add flashcards | `src/content/flashcards/NN-slug.yaml` | — |
| Assessment overview / rubric | `src/content/assessment/index.mdx` | — |
| One assessment element | `src/content/assessment/<id>.mdx` | `assessment/elements.yaml` (same `id`) |
| Poster boxes on assessment page | `src/components/Poster.astro` | `assessment/elements.yaml` |
| Add an MDX component | `src/components/mdx/<Name>.astro` | register it in `src/components/mdx.ts` |
| Unit names (Unit 1, Unit 2…) | `src/lib/topics.ts` | topic frontmatter `unit` / `unitName` |
| Look and feel, dark mode | `src/styles/global.css` | `src/layouts/Base.astro` |
| Routes / page templates | `src/pages/` | — |
| Deploy | `wrangler.jsonc` (Workers) or Pages settings | README "Deploy" |

## Hidden couplings (what a change hits)

- **Filename is the join key.** A lecture is tied together by the file stem (`04-channel-strategy`) across
  `topics/`, `mcq/`, `flashcards/`. Routes use it too (`/topics/<stem>/`, `/exercises/mcq/<stem>/`).
  Renaming one file silently unlinks it from the others. The `topic:` field inside mcq/flashcards YAML
  and the `slug:` field in topic frontmatter are **not** read by the code (schema strips `slug`).
- **Topic order** comes from frontmatter `order`, not the filename prefix. Keep both in step.
- **Assessment element `id`** in `elements.yaml` must equal an `assessment/<id>.mdx` filename;
  `Poster.astro` looks elements up by hard-coded id.
- **MCQ schema** rejects anything other than exactly 4 options and `answer` 0–3 — the build fails.
- **MDX components** are global (no imports) only if listed in `src/components/mdx.ts`.

## Do not edit

`.astro/` (generated), `dist/`, `node_modules/`, `package-lock.json` by hand.
