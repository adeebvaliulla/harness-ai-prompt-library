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

export const AVAILABILITY_LABELS: Record<PromptAvailability, string> = {
  ga: 'Available',
  beta: 'Beta',
  q3: 'Coming Q3',
  q4: 'Coming Q4',
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
export type RawPrompt = Omit<Prompt, 'description' | 'agentType' | 'mode' | 'availability' | 'mcpRequirements'>

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
