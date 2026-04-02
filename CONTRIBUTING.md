# Contributing to the Harness AI Prompt Library

Thank you for helping grow this library! This guide covers everything you need to add new prompts, fix existing ones, or propose new use cases.

---

## Table of Contents

1. [Getting started](#getting-started)
2. [How the data is structured](#how-the-data-is-structured)
3. [Adding a new prompt](#adding-a-new-prompt)
4. [Adding a new use case or sub-use case](#adding-a-new-use-case-or-sub-use-case)
5. [Prompt writing guidelines](#prompt-writing-guidelines)
6. [Metadata reference](#metadata-reference)
7. [Submitting your contribution](#submitting-your-contribution)

---

## Getting started

```bash
git clone https://github.com/adeebvaliulla/harness-ai-prompt-library.git
cd harness-ai-prompt-library
npm install
npm run dev        # http://localhost:3000
```

---

## How the data is structured

Each prompt is defined across **two files**:

| File | What goes here |
|------|---------------|
| `lib/data.ts` | The raw prompt content — title, template text, variables, tags, and hierarchy (module → use case → sub-use case) |
| `lib/prompt-metadata.ts` | Everything about *how* the prompt is used — agent, mode, complexity, SDLC stage, personas, availability |

The `enrich()` function in `lib/data.ts` merges them at runtime into the full `Prompt` object shown in the UI.

---

## Adding a new prompt

### Step 1 — Add the raw prompt to `lib/data.ts`

Find the relevant `SAMPLE_PROMPTS` array and append an entry:

```ts
{
  id: 'cd-001',                          // unique, kebab-case, module-prefixed
  title: 'Blue-Green Deployment Setup',
  content: `Set up a blue-green deployment in Harness CD for the service [SERVICE_NAME]...`,
  variables: [
    {
      id: 'SERVICE_NAME',
      name: 'SERVICE_NAME',
      label: 'Service Name',
      placeholder: 'e.g. payments-api',
      type: 'text',
    },
  ],
  tags: ['blue-green', 'deployment', 'zero-downtime'],
  subUseCaseId: 'cd-deployment-strategies',   // must match an existing subUseCase id
  subUseCaseTitle: 'Deployment Strategies',
  useCaseId: 'cd-deployment-strategies',
  useCaseTitle: 'Deployment Strategies',
  moduleId: 'cd',
  moduleTitle: 'Continuous Delivery & GitOps',
  moduleColor: '#10B981',
  copyCount: 0,
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
},
```

> **Tip:** Look up the correct `moduleId`, `useCaseId`, and `subUseCaseId` values from the `MODULES` array at the top of `lib/data.ts`.

### Step 2 — Add metadata to `lib/prompt-metadata.ts`

Add a matching entry in `PROMPT_METADATA` using the same `id`:

```ts
'cd-001': {
  description: 'Configures a blue-green deployment with instant traffic switching and automatic rollback on health check failure.',
  agentType: 'devops',
  mode: 'standard',
  availability: 'ga',
  complexity: 'intermediate',
  sdlcStage: 'release',
  personas: ['devops-engineer', 'developer'],
},
```

### Step 3 — Verify

```bash
npm run build   # or: npx tsc --noEmit
```

No TypeScript errors means you're good.

---

## Adding a new use case or sub-use case

If your prompt doesn't fit any existing use case, add one inside the relevant module in `lib/data.ts`:

```ts
{
  id: 'cd-rollback',
  title: 'Rollback Automation',
  description: 'Automate rollback on deployment failure',
  moduleId: 'cd',
  subUseCases: [
    { id: 'cd-auto-rollback', title: 'Automated Rollback on Failure', useCaseId: 'cd-rollback' },
  ],
},
```

Then reference the new IDs in your prompt entry.

---

## Prompt writing guidelines

**Write for copy-paste into Harness AI.** The user will copy the prompt exactly as written (with their filled-in variables) and paste it into the Harness AI chat panel.

| Do | Avoid |
|----|-------|
| Be specific about Harness constructs (pipeline, stage, step group, connector) | Vague instructions like "set up CI" |
| Use `[VARIABLE_NAME]` placeholders for customer-specific values | Hardcoded values like `my-service` |
| State the expected output format (e.g. "Return the YAML") | Ambiguous endings |
| One prompt = one concrete task | Multi-task prompts that are hard to complete in one go |
| Architect Mode for complex, multi-step pipeline design | Architect Mode for simple queries |

**Complexity guidelines:**
- `beginner` — single concept, no cross-module knowledge required
- `intermediate` — multi-step setup, requires familiarity with Harness
- `advanced` — cross-module, production-grade, or requires deep Harness expertise

**Mode guidelines:**
- `standard` — default for most prompts
- `architect` — use for complex pipeline creation that benefits from Harness AI's Architect Mode (asks 3 probing questions before generating)
- `mcp` — use when the prompt requires a connected MCP tool (GitHub, Jira, Datadog, etc.); add `mcpRequirements` to the metadata

---

## Metadata reference

### `agentType`

| Value | Agent |
|-------|-------|
| `devops` | DevOps Agent — pipelines, services, envs, connectors |
| `finops` | FinOps Agent — cloud cost, budgets, anomalies |
| `appsec` | AppSec Agent — SAST/DAST, dependency vulns *(Coming Q4)* |
| `reliability` | Reliability Agent — chaos, SLO/SLA |
| `qa` | QA Agent — test authoring, self-healing |
| `release` | Release Agent — feature flags, FME |
| `sre` | SRE Agent — incident response, RCA, postmortems *(Coming Q3)* |
| `coding` | Coding Agent — self-healing CI, PR reviews *(Coming Q3)* |

### `availability`

| Value | Meaning |
|-------|---------|
| `ga` | Generally available today |
| `beta` | In beta |
| `q3` | Targeting Q3 release |
| `q4` | Targeting Q4 release |

### `sdlcStage`

`plan` · `build` · `test` · `secure` · `release` · `monitor` · `cost` · `govern`

### `personas`

`devops-engineer` · `developer` · `security-engineer` · `finops-analyst` · `sre` · `platform-engineer` · `team-lead`

---

## Submitting your contribution

1. **Fork** the repo and create a branch: `git checkout -b prompts/your-feature-name`
2. Make your changes following the steps above
3. Run `npx tsc --noEmit` — fix any errors before opening a PR
4. Open a **Pull Request** against `main` with:
   - A short title describing what was added (e.g. `Add 3 new STO prompts for DAST scanning`)
   - A brief description of each prompt and why it's useful for SEs/customers
5. Tag a reviewer from the Harness AI team

---

Questions? Reach out in the Harness AI Slack channel or open a GitHub Discussion.
