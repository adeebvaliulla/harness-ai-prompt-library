import { AnalyticsEvent, AnalyticsSummary, PromptStat, ModuleStat } from './types'
import { SAMPLE_PROMPTS, MODULES } from './data'
import { format, subDays } from 'date-fns'

// In-memory store — resets on server restart.
// Replace with Supabase/Postgres for production persistence.
const events: AnalyticsEvent[] = []

export function trackEvent(event: Omit<AnalyticsEvent, 'timestamp'>) {
  events.push({ ...event, timestamp: new Date().toISOString() })
}

export function getAnalyticsSummary(): AnalyticsSummary {

  const copyEvents = events.filter(e => e.type === 'copy')
  const searchEvents = events.filter(e => e.type === 'search' && e.searchQuery)

  // Total counts
  const totalCopies = copyEvents.length
  const totalSearches = searchEvents.length
  const totalPrompts = SAMPLE_PROMPTS.length

  // Top prompts by copy count
  const promptCounts: Record<string, number> = {}
  copyEvents.forEach(e => {
    if (e.promptId) promptCounts[e.promptId] = (promptCounts[e.promptId] || 0) + 1
  })
  const topPrompts: PromptStat[] = Object.entries(promptCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([promptId, count]) => {
      const prompt = SAMPLE_PROMPTS.find(p => p.id === promptId)
      return {
        promptId,
        title: prompt?.title ?? 'Unknown',
        moduleTitle: prompt?.moduleTitle ?? 'Unknown',
        count,
      }
    })

  // Recent searches (unique, most recent first)
  const searchMap: Record<string, string> = {}
  searchEvents.forEach(e => {
    if (e.searchQuery && (!searchMap[e.searchQuery] || e.timestamp > searchMap[e.searchQuery])) {
      searchMap[e.searchQuery] = e.timestamp
    }
  })
  const recentSearches = Object.entries(searchMap)
    .sort(([, a], [, b]) => b.localeCompare(a))
    .slice(0, 20)
    .map(([query]) => query)

  // Copy trend (last 30 days)
  const trendMap: Record<string, number> = {}
  for (let i = 29; i >= 0; i--) {
    const date = format(subDays(new Date(), i), 'MMM d')
    trendMap[date] = 0
  }
  copyEvents.forEach(e => {
    const date = format(new Date(e.timestamp), 'MMM d')
    if (trendMap[date] !== undefined) trendMap[date]++
  })
  const copyTrend = Object.entries(trendMap).map(([date, count]) => ({ date, count }))

  // Module breakdown
  const moduleCounts: Record<string, number> = {}
  copyEvents.forEach(e => {
    if (e.moduleId) moduleCounts[e.moduleId] = (moduleCounts[e.moduleId] || 0) + 1
  })
  const moduleBreakdown: ModuleStat[] = MODULES.map(m => ({
    moduleId: m.id,
    moduleName: m.shortName,
    count: moduleCounts[m.id] || 0,
    color: m.color,
  })).sort((a, b) => b.count - a.count)

  return { totalCopies, totalSearches, totalPrompts, topPrompts, recentSearches, copyTrend, moduleBreakdown }
}
