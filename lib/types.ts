export interface Variable {
  id: string
  name: string
  label: string
  placeholder: string
  type: 'text' | 'dropdown' | 'textarea'
  options?: string[]
  defaultValue?: string
}

export interface Prompt {
  id: string
  title: string
  content: string
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
