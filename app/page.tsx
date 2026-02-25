'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { Search, X, Sparkles, Bot, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { PromptCard } from '@/components/prompt-card'
import { PromptModal } from '@/components/prompt-modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Prompt, AgentType, AGENT_LABELS, AGENT_COLORS, CustomerContext,
  SdlcStage, PromptComplexity,
  SDLC_STAGE_LABELS, SDLC_STAGE_COLORS,
  COMPLEXITY_LABELS, COMPLEXITY_COLORS,
} from '@/lib/types'
import { getAllPrompts, getModules } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ContextPanel, CONTEXT_VAR_MAP, loadContext } from '@/components/context-panel'
import { AgentShowcase } from '@/components/agent-showcase'

const SDLC_STAGES: SdlcStage[] = ['plan', 'build', 'test', 'secure', 'release', 'monitor', 'cost', 'govern']
const COMPLEXITIES: PromptComplexity[] = ['beginner', 'intermediate', 'advanced']
const AGENT_IDS: AgentType[] = ['devops', 'finops', 'appsec', 'reliability', 'qa', 'release', 'sre', 'coding']

// ── Sidebar collapsible section ──────────────────────────────────────────────
function FilterSection({
  title, activeCount, children, defaultOpen = true,
}: {
  title: string; activeCount: number; children: React.ReactNode; defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--sidebar-foreground)]/50 hover:text-[var(--sidebar-foreground)]/80 transition-colors"
      >
        <span>{title}</span>
        <span className="flex items-center gap-1">
          {activeCount > 0 && (
            <span className="bg-[var(--harness-blue)] text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none">
              {activeCount}
            </span>
          )}
          {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </span>
      </button>
      {open && <div className="pb-1">{children}</div>}
    </div>
  )
}

// ── Reusable checkbox-style filter item ──────────────────────────────────────
function FilterItem({
  label, count, selected, color, onToggle,
}: {
  label: string; count: number; selected: boolean; color?: string; onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'w-full flex items-center justify-between px-3 py-1.5 text-xs transition-colors',
        selected
          ? 'text-[var(--sidebar-foreground)] font-medium'
          : 'text-[var(--sidebar-foreground)]/60 hover:text-[var(--sidebar-foreground)]'
      )}
    >
      <span className="flex items-center gap-2 truncate">
        <span
          className={cn(
            'h-3 w-3 rounded border shrink-0 flex items-center justify-center transition-colors',
            selected
              ? 'border-[var(--harness-blue)] bg-[var(--harness-blue)]'
              : 'border-white/25'
          )}
        >
          {selected && (
            <svg viewBox="0 0 8 8" className="h-2 w-2">
              <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        {color && (
          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
        )}
        <span className="truncate">{label}</span>
      </span>
      <span className="text-[10px] opacity-50 font-mono shrink-0 ml-1">{count}</span>
    </button>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const allPrompts = useMemo(() => getAllPrompts(), [])
  const modules = useMemo(() => getModules(), [])

  const [query, setQuery] = useState('')
  const [selectedModules, setSelectedModules] = useState<string[]>([])
  const [selectedAgents, setSelectedAgents] = useState<AgentType[]>([])
  const [selectedComplexities, setSelectedComplexities] = useState<PromptComplexity[]>([])
  const [selectedStage, setSelectedStage] = useState<SdlcStage | null>(null)
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(true)
  const [customerContext, setCustomerContext] = useState<CustomerContext>(loadContext)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dismissed = localStorage.getItem('harness-banner-dismissed')
    if (!dismissed) setBannerDismissed(false)
  }, [])

  const dismissBanner = () => {
    setBannerDismissed(true)
    localStorage.setItem('harness-banner-dismissed', '1')
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  function filterPrompts(
    prompts: Prompt[],
    q: string,
    mods: string[],
    agents: AgentType[],
    complexities: PromptComplexity[],
    stage: SdlcStage | null,
  ) {
    let result = prompts
    if (mods.length > 0) result = result.filter(p => mods.includes(p.moduleId))
    if (agents.length > 0) result = result.filter(p => agents.includes(p.agentType))
    if (complexities.length > 0) result = result.filter(p => complexities.includes(p.complexity))
    if (stage) result = result.filter(p => p.sdlcStage === stage)
    if (!q.trim()) return result
    const lower = q.toLowerCase()
    return result.filter(p =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.content.toLowerCase().includes(lower) ||
      p.tags.some(t => t.toLowerCase().includes(lower)) ||
      p.useCaseTitle.toLowerCase().includes(lower) ||
      p.subUseCaseTitle.toLowerCase().includes(lower) ||
      p.moduleTitle.toLowerCase().includes(lower) ||
      AGENT_LABELS[p.agentType].toLowerCase().includes(lower)
    )
  }

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const handleSearch = (q: string) => {
    setQuery(q)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    if (q.trim().length > 2) {
      searchTimeout.current = setTimeout(() => {
        const result = filterPrompts(allPrompts, q, selectedModules, selectedAgents, selectedComplexities, selectedStage)
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'search', searchQuery: q.trim(), resultCount: result.length }),
        }).catch(() => {})
      }, 800)
    }
  }

  const filtered = useMemo(
    () => filterPrompts(allPrompts, query, selectedModules, selectedAgents, selectedComplexities, selectedStage),
    [allPrompts, query, selectedModules, selectedAgents, selectedComplexities, selectedStage] // eslint-disable-line react-hooks/exhaustive-deps
  )

  // Counts for sidebar items (based on full prompt list, not filtered)
  const moduleCounts = useMemo(() => {
    const c: Record<string, number> = {}
    allPrompts.forEach(p => { c[p.moduleId] = (c[p.moduleId] ?? 0) + 1 })
    return c
  }, [allPrompts])

  const agentCounts = useMemo(() => {
    const c: Record<string, number> = {}
    allPrompts.forEach(p => { c[p.agentType] = (c[p.agentType] ?? 0) + 1 })
    return c
  }, [allPrompts])

  const complexityCounts = useMemo(() => {
    const c: Record<string, number> = {}
    allPrompts.forEach(p => { c[p.complexity] = (c[p.complexity] ?? 0) + 1 })
    return c
  }, [allPrompts])

  const stageCounts = useMemo(() => {
    const c: Record<string, number> = {}
    allPrompts.forEach(p => { c[p.sdlcStage] = (c[p.sdlcStage] ?? 0) + 1 })
    return c
  }, [allPrompts])

  const openModal = (prompt: Prompt) => {
    setSelectedPrompt(prompt)
    setModalOpen(true)
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedModules([])
    setSelectedAgents([])
    setSelectedComplexities([])
    setSelectedStage(null)
  }

  const toggleModule = (id: string) =>
    setSelectedModules(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const toggleAgent = (id: AgentType) =>
    setSelectedAgents(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const toggleComplexity = (c: PromptComplexity) =>
    setSelectedComplexities(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])

  const activeFilterCount =
    selectedModules.length + selectedAgents.length + selectedComplexities.length + (selectedStage ? 1 : 0)
  const hasActiveFilters = !!query || activeFilterCount > 0

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* First-run banner */}
      {!bannerDismissed && (
        <div className="bg-[var(--harness-blue)]/5 border-b border-[var(--harness-blue)]/20 px-4 md:px-6 py-3">
          <div className="flex items-start justify-between gap-4 max-w-5xl">
            <div className="flex items-start gap-3">
              <Bot className="h-5 w-5 text-[var(--harness-blue)] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">How to use this library</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Browse prompts → fill in your details → click <strong>Copy Prompt</strong> → paste into the{' '}
                  <strong>Harness AI</strong> chat panel in your Harness account.{' '}
                  <span className="font-mono bg-muted px-1 rounded text-[11px]">Architect Mode</span> prompts work best for complex pipelines.{' '}
                  <span className="font-mono bg-muted px-1 rounded text-[11px]">MCP</span> prompts require a GitHub, Jira, or Datadog MCP integration.
                </p>
              </div>
            </div>
            <button
              onClick={dismissBanner}
              className="text-muted-foreground hover:text-foreground shrink-0 mt-0.5"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Customer context panel */}
      <ContextPanel onContextChange={setCustomerContext} />

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border/60 bg-[var(--sidebar)]">
          {/* Header */}
          <div className="px-3 py-2.5 border-b border-white/10 shrink-0 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--sidebar-foreground)]">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-[var(--harness-blue)] text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
                  {activeFilterCount}
                </span>
              )}
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-[10px] text-[var(--sidebar-foreground)]/50 hover:text-[var(--sidebar-foreground)] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <ScrollArea className="flex-1">
            <div className="py-2">
              {/* All prompts */}
              <div className="px-3 pb-1">
                <button
                  onClick={clearFilters}
                  className={cn(
                    'w-full flex items-center justify-between px-2 py-1.5 rounded-md text-xs transition-colors',
                    !hasActiveFilters
                      ? 'bg-[var(--harness-blue)] text-white font-medium'
                      : 'text-[var(--sidebar-foreground)]/70 hover:bg-white/10 hover:text-[var(--sidebar-foreground)]'
                  )}
                >
                  <span>All Prompts</span>
                  <span className="text-[10px] opacity-70 font-mono">{allPrompts.length}</span>
                </button>
              </div>

              <Separator className="my-1 bg-white/10" />

              {/* Module multi-select */}
              <FilterSection title="Module" activeCount={selectedModules.length}>
                {modules.map(mod => (
                  <FilterItem
                    key={mod.id}
                    label={mod.shortName}
                    count={moduleCounts[mod.id] ?? 0}
                    selected={selectedModules.includes(mod.id)}
                    color={mod.color}
                    onToggle={() => toggleModule(mod.id)}
                  />
                ))}
              </FilterSection>

              <Separator className="my-1 bg-white/10" />

              {/* Agent multi-select */}
              <FilterSection title="Agent" activeCount={selectedAgents.length}>
                {AGENT_IDS.map(agentId => (
                  <FilterItem
                    key={agentId}
                    label={AGENT_LABELS[agentId]}
                    count={agentCounts[agentId] ?? 0}
                    selected={selectedAgents.includes(agentId)}
                    color={AGENT_COLORS[agentId]}
                    onToggle={() => toggleAgent(agentId)}
                  />
                ))}
              </FilterSection>

              <Separator className="my-1 bg-white/10" />

              {/* Complexity multi-select */}
              <FilterSection title="Complexity" activeCount={selectedComplexities.length} defaultOpen={false}>
                {COMPLEXITIES.map(c => (
                  <FilterItem
                    key={c}
                    label={COMPLEXITY_LABELS[c]}
                    count={complexityCounts[c] ?? 0}
                    selected={selectedComplexities.includes(c)}
                    color={COMPLEXITY_COLORS[c]}
                    onToggle={() => toggleComplexity(c)}
                  />
                ))}
              </FilterSection>
            </div>
          </ScrollArea>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Search + active chips */}
          <div className="sticky top-14 z-30 bg-background/95 backdrop-blur border-b border-border/60 px-4 md:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchRef}
                  value={query}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder="Search prompts, agents, use cases, tags… (⌘K)"
                  className="pl-9 pr-8 h-9 text-sm bg-muted/40 border-border/60 focus-visible:ring-[var(--harness-blue)]/30"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Mobile module chips */}
              <div className="flex md:hidden items-center gap-1.5 overflow-x-auto">
                {modules.map(mod => (
                  <Button
                    key={mod.id}
                    variant={selectedModules.includes(mod.id) ? 'default' : 'outline'}
                    size="sm"
                    className={cn(
                      'shrink-0 h-8 text-xs px-2',
                      selectedModules.includes(mod.id) &&
                        'bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white border-0'
                    )}
                    onClick={() => toggleModule(mod.id)}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full mr-1"
                      style={{ backgroundColor: selectedModules.includes(mod.id) ? 'white' : mod.color }}
                    />
                    {mod.shortName}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                <span className="text-[11px] text-muted-foreground shrink-0">
                  {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                </span>
                {selectedStage && (
                  <Badge variant="secondary" className="gap-1 text-[10px] py-0.5 h-auto">
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: SDLC_STAGE_COLORS[selectedStage] }}
                    />
                    {SDLC_STAGE_LABELS[selectedStage]}
                    <button onClick={() => setSelectedStage(null)}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                )}
                {selectedModules.map(mId => {
                  const mod = modules.find(m => m.id === mId)
                  return mod ? (
                    <Badge key={mId} variant="secondary" className="gap-1 text-[10px] py-0.5 h-auto">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: mod.color }} />
                      {mod.shortName}
                      <button onClick={() => toggleModule(mId)}><X className="h-2.5 w-2.5" /></button>
                    </Badge>
                  ) : null
                })}
                {selectedAgents.map(aId => (
                  <Badge key={aId} variant="secondary" className="gap-1 text-[10px] py-0.5 h-auto">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: AGENT_COLORS[aId] }} />
                    {AGENT_LABELS[aId]}
                    <button onClick={() => toggleAgent(aId)}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                ))}
                {selectedComplexities.map(c => (
                  <Badge key={c} variant="secondary" className="gap-1 text-[10px] py-0.5 h-auto">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: COMPLEXITY_COLORS[c] }} />
                    {COMPLEXITY_LABELS[c]}
                    <button onClick={() => toggleComplexity(c)}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                ))}
                {query && (
                  <Badge variant="secondary" className="gap-1 text-[10px] py-0.5 h-auto">
                    &ldquo;{query}&rdquo;
                    <button onClick={() => setQuery('')}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                )}
                <button
                  onClick={clearFilters}
                  className="text-[10px] text-muted-foreground hover:text-foreground underline underline-offset-2 ml-0.5"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* SDLC Stage tab bar */}
          <div className="border-b border-border/60 bg-background px-4 md:px-6 overflow-x-auto shrink-0">
            <div className="flex items-center gap-0.5 py-2 min-w-max">
              <button
                onClick={() => setSelectedStage(null)}
                className={cn(
                  'shrink-0 text-xs font-medium px-3 py-1 rounded-full transition-all whitespace-nowrap',
                  !selectedStage
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                All <span className={cn('ml-0.5', !selectedStage ? 'opacity-60' : 'opacity-50')}>{allPrompts.length}</span>
              </button>
              {SDLC_STAGES.map(stage => {
                const isActive = selectedStage === stage
                const color = SDLC_STAGE_COLORS[stage]
                return (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(isActive ? null : stage)}
                    className={cn(
                      'shrink-0 text-xs font-medium px-3 py-1 rounded-full transition-all whitespace-nowrap',
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    style={isActive ? { backgroundColor: color } : {}}
                  >
                    {SDLC_STAGE_LABELS[stage]} <span className="opacity-60">{stageCounts[stage] ?? 0}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Agent Showcase */}
          <AgentShowcase
            agentCounts={agentCounts}
            selectedAgents={selectedAgents}
            onToggle={toggleAgent}
          />

          {/* Prompt grid */}
          <ScrollArea className="flex-1">
            <div className="px-4 md:px-6 py-5">
              {filtered.length === 0 ? (
                /* ── Empty state ── */
                <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-muted/60 flex items-center justify-center">
                    <Search className="h-6 w-6 text-muted-foreground/60" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-semibold text-sm">No prompts match</p>
                    <p className="text-xs text-muted-foreground max-w-[260px] leading-relaxed">
                      {query
                        ? `No results for "${query}". Try different keywords or remove some filters.`
                        : 'No prompts match the active filters. Try removing one or more.'}
                    </p>
                  </div>
                  {activeFilterCount > 0 && (
                    <p className="text-[11px] text-muted-foreground">
                      {activeFilterCount} active filter{activeFilterCount !== 1 ? 's' : ''}
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={clearFilters}>
                      Clear all filters
                    </Button>
                    {query && (
                      <Button variant="ghost" size="sm" onClick={() => setQuery('')}>
                        Clear search
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {!hasActiveFilters && (
                    <div className="mb-5 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[var(--harness-blue)]" />
                      <h2 className="text-sm font-semibold text-foreground">
                        {allPrompts.length} prompts across {modules.length} modules
                      </h2>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {filtered.map(prompt => (
                      <PromptCard key={prompt.id} prompt={prompt} onClick={openModal} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </ScrollArea>
        </main>
      </div>

      <PromptModal
        prompt={selectedPrompt}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        customerContext={customerContext}
        contextVarMap={CONTEXT_VAR_MAP}
      />
    </div>
  )
}
