# Harness AI Prompt Library

A curated, searchable library of AI prompts for the Harness platform. Designed for DevOps, FinOps, security, reliability, and platform engineering teams to get the most out of Harness AI agents.

---

## Overview

The Harness AI Prompt Library is a Next.js web application that provides a searchable, filterable catalog of ready-to-use prompts for Harness AI agents. Each prompt is tailored to a specific use case within the software delivery lifecycle — from pipeline creation and cloud cost optimization to incident response and chaos engineering.

Prompts can be customized with runtime variables (project names, environments, cloud providers, etc.) via an interactive modal, then copied directly into any Harness AI chat interface.

---

## Features

### Prompt Discovery
- **Full-text search** across prompt titles, descriptions, and tags
- **Agent filter** — filter by any of the 8 Harness AI agents (DevOps, FinOps, AppSec, Reliability, QA, Release, SRE, Coding)
- **SDLC stage tabs** — browse by pipeline stage: Plan, Build, Test, Secure, Release, Monitor, Cost, Govern
- **Module filter** — narrow by Harness module (CI/CD, CCM, STO, IDP, SEI, CE, IaCM, etc.)
- **Complexity filter** — Beginner, Intermediate, Advanced
- **Mode filter** — Standard, Architect Mode, MCP
- **Availability filter** — GA, Beta, Coming Q3/Q4
- **Persona filter** — DevOps Engineer, Developer, Security Engineer, FinOps Analyst, SRE, Platform Engineer, Team Lead

### Agent Showcase
An interactive section at the top of the library displaying all 8 Harness AI agents as cards. Each card shows:
- Agent name and color-coded indicator dot
- Short description of what the agent does
- Live prompt count for that agent
- Availability badge (Coming Q3 / Coming Q4) where applicable

Clicking an agent card filters the prompt grid to show only that agent's prompts. Multiple agents can be selected at once.

### Prompt Cards
Each prompt card displays:
- Title and description
- Agent badge with agent color
- Mode badge (Standard / Architect Mode / MCP)
- SDLC stage tag
- Complexity indicator (color-coded: green/amber/red)
- Copy count (total times copied)
- Persona tags

### Prompt Modal
Clicking any prompt opens a full modal that:
- Renders the complete prompt template
- Auto-fills variables from the Customer Context panel (company name, project, pipeline, service, environment, cloud provider, team, repo)
- Provides editable input fields for any remaining `{{variable}}` placeholders
- Supports text inputs, dropdowns, and textareas per variable type
- One-click copy to clipboard with toast confirmation
- Tracks copy counts via the analytics API

### Customer Context Panel
A collapsible right-side panel where users configure their environment details once:
- Company name
- Project name
- Pipeline name
- Service name
- Environment (dev/staging/production)
- Cloud provider (AWS/GCP/Azure)
- Team name
- Repository name

These values auto-populate into matching prompt variables on every prompt.

### Admin Dashboard (`/admin`)
A password-protected admin panel with:
- **Analytics overview** — total copies, total searches, total prompts
- **Top prompts** — ranked list of most-copied prompts
- **Module breakdown** — pie chart of copies by Harness module
- **Copy trend** — line chart of daily copy activity over 30 days
- **Prompt management** — CRUD interface to create, edit, and delete prompts
- **Search term tracking** — recent search queries

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| Language | TypeScript 5.7.3 |
| Styling | Tailwind CSS 4.1.9 |
| UI Components | Radix UI + shadcn/ui |
| Charts | Recharts 2.15.0 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Notifications | Sonner |
| Analytics | @vercel/analytics |
| Runtime | React 19.2.4 |
| Package Manager | pnpm |

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
git clone <repository-url>
cd harness-ai-prompt-library
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

No environment variables are required — all prompt data is embedded directly in TypeScript source files.

---

## Project Structure

```
harness-ai-prompt-library/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Main library page (search, filters, grid)
│   ├── admin/
│   │   └── page.tsx            # Admin dashboard with analytics + CRUD
│   └── api/
│       ├── analytics/
│       │   └── route.ts        # GET/POST analytics events
│       └── prompts/
│           └── route.ts        # GET/POST/PUT/DELETE prompts
├── components/
│   ├── agent-showcase.tsx      # Agent filter cards section
│   ├── prompt-card.tsx         # Individual prompt card in the grid
│   ├── prompt-modal.tsx        # Prompt detail modal with variable inputs
│   ├── context-panel.tsx       # Customer context sidebar
│   ├── navbar.tsx              # Top navigation bar
│   └── ui/                     # shadcn/ui base components
├── lib/
│   ├── types.ts                # All TypeScript types, enums, and label maps
│   ├── data.ts                 # Raw prompt data (SAMPLE_PROMPTS array)
│   ├── prompt-metadata.ts      # Metadata enrichment + MCP prompts
│   ├── store.ts                # In-memory data store with CRUD + analytics
│   ├── analytics.ts            # Client-side analytics helpers
│   └── utils.ts                # cn() utility for class merging
└── public/                     # Static assets
```

---

## Data Architecture

### Two-Layer Prompt Model

Prompts are stored in two parts that are merged at runtime:

**1. `RawPrompt`** (in `lib/data.ts`) — the prompt body and structure:
```typescript
{
  id: string           // e.g. "ci-001"
  title: string
  content: string      // prompt template with {{variable}} placeholders
  variables: Variable[]
  tags: string[]
  subUseCaseId: string
  subUseCaseTitle: string
  useCaseId: string
  useCaseTitle: string
  moduleId: string
  moduleTitle: string
  moduleColor: string
  copyCount: number
  createdAt: string
  updatedAt: string
}
```

**2. `PromptMetadata`** (in `lib/prompt-metadata.ts`) — agent and classification metadata:
```typescript
{
  id: string
  description: string
  agentType: AgentType      // 'devops' | 'finops' | 'appsec' | ...
  mode: PromptMode          // 'standard' | 'architect' | 'mcp'
  availability: PromptAvailability  // 'ga' | 'beta' | 'q3' | 'q4'
  complexity: PromptComplexity      // 'beginner' | 'intermediate' | 'advanced'
  sdlcStage: SdlcStage              // 'plan' | 'build' | 'test' | ...
  personas: PersonaTag[]
  mcpRequirements?: string[]
}
```

The `enrich()` function in `prompt-metadata.ts` merges these two layers into a full `Prompt` object.

MCP-mode prompts (including Feature Flag cleanup prompts) are stored directly in `prompt-metadata.ts` as `MCP_PROMPTS`, which includes both raw content and metadata in a single object.

### Data Flow

```
SAMPLE_PROMPTS (data.ts)
         +
MCP_PROMPTS (prompt-metadata.ts)
         ↓
    ALL_RAW array
         ↓
    enrich() function
         ↓
    Full Prompt[]  ←→  In-memory store (store.ts)
         ↓
    API routes (/api/prompts)
         ↓
    page.tsx (search + filter)
```

### In-Memory Store

`lib/store.ts` provides a runtime data store that:
- Initialises from the static prompt arrays on first access
- Supports full CRUD (create, read, update, delete) operations
- Tracks copy counts per prompt
- Records analytics events (copies, searches, views)
- Aggregates analytics into summary statistics

The store is in-memory and resets on server restart. It is designed to be swapped for a persistent database (Postgres, SQLite, etc.) without changing the API surface.

---

## Agents

| Agent | Status | Description |
|---|---|---|
| DevOps Agent | GA | Pipelines, services, environments & connectors. Supports Architect Mode. |
| FinOps Agent | GA | Cloud cost optimization, budget policies & anomaly detection. |
| Reliability Agent | GA | Chaos experiments, SLO/SLA impact analysis & resilience validation. |
| QA Agent | GA | No-code test authoring, self-healing test maintenance & coverage analysis. |
| Release Agent | GA | Feature flag workflows, FME experimentation & progressive delivery. |
| AppSec Agent | Coming Q4 | SAST/DAST scanning, dependency vulnerability detection & auto-remediation. |
| SRE Agent | Coming Q3 | Incident response, root cause analysis & postmortem generation. |
| Coding Agent | Coming Q3 | Self-healing CI, automated PR reviews & autonomous code maintenance. |

---

## Prompt Modes

| Mode | Description |
|---|---|
| Standard | Direct conversational prompts for the Harness AI chat interface |
| Architect Mode | Deep research prompts for the DevOps Agent — triggers 3 probing questions before generating a full pipeline design |
| MCP | Prompts that leverage the Harness MCP server, compatible with VSCode, Cursor, Windsurf, and Claude for Desktop |

---

## Adding Prompts

### 1. Add raw prompt content to `lib/data.ts`

Append a new object to the `SAMPLE_PROMPTS` array:

```typescript
{
  id: 'module-NNN',
  title: 'Your Prompt Title',
  content: `Your prompt template with {{variable_name}} placeholders.

Use {{another_variable}} for dynamic values.`,
  variables: [
    {
      id: 'variable_name',
      name: 'variable_name',
      label: 'Variable Label',
      placeholder: 'e.g. my-service',
      type: 'text',
    },
  ],
  tags: ['tag1', 'tag2'],
  subUseCaseId: 'sub-use-case-id',
  subUseCaseTitle: 'Sub Use Case Title',
  useCaseId: 'use-case-id',
  useCaseTitle: 'Use Case Title',
  moduleId: 'module-id',
  moduleTitle: 'Module Title',
  moduleColor: '#6366f1',
  copyCount: 0,
  createdAt: '2026-02-01',
  updatedAt: '2026-02-01',
}
```

> **Note:** If your prompt template contains `${{...}}` patterns (e.g., for cost thresholds), escape the dollar sign: `\${{monthly_threshold}}` to avoid TypeScript template literal errors.

### 2. Add metadata to `lib/prompt-metadata.ts`

Add an entry to the `PROMPT_METADATA` array:

```typescript
{
  id: 'module-NNN',
  description: 'One-sentence description shown on the prompt card.',
  agentType: 'devops',          // 'devops' | 'finops' | 'appsec' | 'reliability' | 'qa' | 'release' | 'sre' | 'coding'
  mode: 'standard',             // 'standard' | 'architect' | 'mcp'
  availability: 'ga',           // 'ga' | 'beta' | 'q3' | 'q4'
  complexity: 'intermediate',   // 'beginner' | 'intermediate' | 'advanced'
  sdlcStage: 'build',           // 'plan' | 'build' | 'test' | 'secure' | 'release' | 'monitor' | 'cost' | 'govern'
  personas: ['devops-engineer'], // one or more from PersonaTag
},
```

### Adding MCP prompts

For MCP-mode prompts, add a full entry to the `MCP_PROMPTS` array in `prompt-metadata.ts` instead — it combines both raw content and metadata in a single object.

---

## Analytics

The app includes lightweight in-memory analytics:

- **Copy events** — recorded every time a prompt is copied
- **Search events** — recorded on every search query with result count
- **View events** — recorded when prompts are opened in the modal

Analytics data is available via `GET /api/analytics` and displayed in the admin dashboard with charts for trends, top prompts, and module breakdowns.

---

## Admin Panel

Navigate to `/admin` to access the admin dashboard.

Features:
- Summary statistics (total copies, searches, prompts)
- Top 10 most-copied prompts
- Copy trend line chart (last 30 days)
- Module breakdown pie chart
- Full prompt list with edit and delete actions
- Create new prompts via a form

---

## Roadmap

The following Harness AI capabilities are on the roadmap and will be reflected in new prompts as they become available:

- **Rules** — natural-language policy guardrails (design-time + run-time), targeting Q3
- **Memory** — durable scoped context for agents (short-term + long-term), targeting Q3
- **Blueprints** — versioned best-practice pipeline templates, targeting Q4
- **SRE Agent GA** — incident response and RCA workflows
- **Coding Agent GA** — self-healing CI and autonomous maintenance
- **AppSec Agent GA** — SAST/DAST auto-remediation

---

## Contributing

1. Fork the repository
2. Add your prompts following the steps in [Adding Prompts](#adding-prompts)
3. Run `pnpm build` to verify TypeScript compiles cleanly
4. Open a pull request with a description of the new prompts and their use cases

---

## License

Private — Harness internal use.
