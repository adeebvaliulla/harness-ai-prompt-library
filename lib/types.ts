export interface Variable {
  id: string
  name: string
  label: string
  placeholder: string
  type: 'text' | 'dropdown' | 'textarea'
  options?: string[]
  defaultValue?: string
}

export type AgentType =
  | 'devops'
  | 'finops'
  | 'appsec'
  | 'reliability'
  | 'qa'
  | 'release'
  | 'sre'
  | 'coding'

export type PromptMode = 'standard' | 'architect' | 'mcp'

export type PromptAvailability = 'ga' | 'beta' | 'q3' | 'q4'

export type PromptComplexity = 'beginner' | 'intermediate' | 'advanced'

export type SdlcStage = 'plan' | 'build' | 'test' | 'secure' | 'release' | 'monitor' | 'cost' | 'govern'

export type PersonaTag =
  | 'devops-engineer'
  | 'developer'
  | 'security-engineer'
  | 'finops-analyst'
  | 'sre'
  | 'platform-engineer'
  | 'team-lead'

export const AGENT_LABELS: Record<AgentType, string> = {
  devops: 'DevOps Agent',
  finops: 'FinOps Agent',
  appsec: 'AppSec Agent',
  reliability: 'Reliability Agent',
  qa: 'QA Agent',
  release: 'Release Agent',
  sre: 'SRE Agent',
  coding: 'Coding Agent',
}

export const AGENT_COLORS: Record<AgentType, string> = {
  devops: '#6366f1',
  finops: '#f59e0b',
  appsec: '#ef4444',
  reliability: '#ec4899',
  qa: '#14b8a6',
  release: '#8b5cf6',
  sre: '#f97316',
  coding: '#3b82f6',
}

export const AGENT_DESCRIPTIONS: Record<AgentType, string> = {
  devops: 'Pipelines, services, environments & connectors. Supports Architect Mode for deep pipeline design.',
  finops: 'Cloud cost optimization, budget policies & anomaly detection across multi-cloud.',
  appsec: 'SAST/DAST scanning, dependency vulnerability detection & auto-remediation.',
  reliability: 'Chaos experiments, SLO/SLA impact analysis & resilience validation.',
  qa: 'No-code test authoring, self-healing test maintenance & coverage analysis.',
  release: 'Feature flag workflows, FME experimentation & progressive delivery.',
  sre: 'Incident response, root cause analysis & postmortem generation.',
  coding: 'Self-healing CI, automated PR reviews & autonomous code maintenance.',
}

export const AGENT_AVAILABILITY: Record<AgentType, PromptAvailability> = {
  devops: 'ga',
  finops: 'ga',
  appsec: 'q4',
  reliability: 'ga',
  qa: 'ga',
  release: 'ga',
  sre: 'q3',
  coding: 'q3',
}

export const AVAILABILITY_LABELS: Record<PromptAvailability, string> = {
  ga: 'Available',
  beta: 'Beta',
  q3: 'Coming Q3',
  q4: 'Coming Q4',
}

export const COMPLEXITY_LABELS: Record<PromptComplexity, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export const COMPLEXITY_COLORS: Record<PromptComplexity, string> = {
  beginner: '#22c55e',
  intermediate: '#f59e0b',
  advanced: '#ef4444',
}

export const SDLC_STAGE_LABELS: Record<SdlcStage, string> = {
  plan: 'Plan',
  build: 'Build',
  test: 'Test',
  secure: 'Secure',
  release: 'Release',
  monitor: 'Monitor',
  cost: 'Cost',
  govern: 'Govern',
}

export const SDLC_STAGE_COLORS: Record<SdlcStage, string> = {
  plan: '#6366f1',
  build: '#3b82f6',
  test: '#14b8a6',
  secure: '#ef4444',
  release: '#8b5cf6',
  monitor: '#f97316',
  cost: '#f59e0b',
  govern: '#64748b',
}

export const PERSONA_LABELS: Record<PersonaTag, string> = {
  'devops-engineer': 'DevOps Engineer',
  'developer': 'Developer',
  'security-engineer': 'Security Engineer',
  'finops-analyst': 'FinOps Analyst',
  'sre': 'SRE',
  'platform-engineer': 'Platform Engineer',
  'team-lead': 'Team Lead',
}

// Full prompt — returned by getAllPrompts() after metadata merge
export interface Prompt {
  id: string
  title: string
  description: string
  content: string
  variables: Variable[]
  tags: string[]
  agentType: AgentType
  mode: PromptMode
  availability: PromptAvailability
  mcpRequirements?: string[]
  complexity: PromptComplexity
  sdlcStage: SdlcStage
  personas: PersonaTag[]
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

// Raw prompt stored in data.ts — new metadata fields added via prompt-metadata.ts
export type RawPrompt = Omit<Prompt, 'description' | 'agentType' | 'mode' | 'availability' | 'mcpRequirements' | 'complexity' | 'sdlcStage' | 'personas'>

export interface SubUseCase {
  id: string
  title: string
  useCaseId: string
}

export interface UseCase {
  id: string
  title: string
  description: string
  moduleId: string
  subUseCases: SubUseCase[]
}

export interface Module {
  id: string
  name: string
  shortName: string
  description: string
  color: string
  icon: string
  useCases: UseCase[]
}

export interface AnalyticsEvent {
  type: 'copy' | 'search' | 'view'
  promptId?: string
  moduleId?: string
  searchQuery?: string
  resultCount?: number
  timestamp: string
}

export interface PromptStat {
  promptId: string
  title: string
  moduleTitle: string
  count: number
}

export interface ModuleStat {
  moduleId: string
  moduleName: string
  count: number
  color: string
}

export interface AnalyticsSummary {
  totalCopies: number
  totalSearches: number
  totalPrompts: number
  topPrompts: PromptStat[]
  recentSearches: string[]
  copyTrend: { date: string; count: number }[]
  moduleBreakdown: ModuleStat[]
}

export interface CustomerContext {
  companyName: string
  projectName: string
  pipelineName: string
  serviceName: string
  environment: string
  cloudProvider: string
  teamName: string
  repoName: string
}
