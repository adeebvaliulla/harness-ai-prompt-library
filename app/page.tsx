'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { Search, X, Sparkles, LayoutGrid, Bot } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { PromptCard } from '@/components/prompt-card'
import { PromptModal } from '@/components/prompt-modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Prompt, AgentType, AGENT_LABELS, AGENT_COLORS, CustomerContext } from '@/lib/types'
import { getAllPrompts, getModules } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ContextPanel, CONTEXT_VAR_MAP, loadContext } from '@/components/context-panel'

const AGENTS: { id: AgentType; label: string; color: string }[] = [
  { id: 'devops', label: AGENT_LABELS.devops, color: AGENT_COLORS.devops },
  { id: 'finops', label: AGENT_LABELS.finops, color: AGENT_COLORS.finops },
  { id: 'appsec', label: AGENT_LABELS.appsec, color: AGENT_COLORS.appsec },
  { id: 'reliability', label: AGENT_LABELS.reliability, color: AGENT_COLORS.reliability },
  { id: 'qa', label: AGENT_LABELS.qa, color: AGENT_COLORS.qa },
  { id: 'release', label: AGENT_LABELS.release, color: AGENT_COLORS.release },
  { id: 'sre', label: AGENT_LABELS.sre, color: AGENT_COLORS.sre },
  { id: 'coding', label: AGENT_LABELS.coding, color: AGENT_COLORS.coding },
]

export default function HomePage() {
  const allPrompts = useMemo(() => getAllPrompts(), [])
  const modules = useMemo(() => getModules(), [])

  const [query, setQuery] = useState('')
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<AgentType | null>(null)
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [sidebarView, setSidebarView] = useState<'modules' | 'agents'>('modules')
  const [bannerDismissed, setBannerDismissed] = useState(true) // start hidden; set after mount
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

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const handleSearch = (q: string) => {
    setQuery(q)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    if (q.trim().length > 2) {
      searchTimeout.current = setTimeout(() => {
        const result = filterPrompts(allPrompts, q, selectedModule, selectedAgent)
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'search', searchQuery: q.trim(), resultCount: result.length }),
        }).catch(() => {})
      }, 800)
    }
  }

  function filterPrompts(prompts: Prompt[], q: string, moduleId: string | null, agentId: AgentType | null) {
    let result = prompts
    if (moduleId) result = result.filter(p => p.moduleId === moduleId)
    if (agentId) result = result.filter(p => p.agentType === agentId)
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

  const filtered = useMemo(
    () => filterPrompts(allPrompts, query, selectedModule, selectedAgent),
    [allPrompts, query, selectedModule, selectedAgent]
  )

  const moduleCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    allPrompts.forEach(p => { counts[p.moduleId] = (counts[p.moduleId] ?? 0) + 1 })
    return counts
  }, [allPrompts])

  const agentCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    allPrompts.forEach(p => { counts[p.agentType] = (counts[p.agentType] ?? 0) + 1 })
    return counts
  }, [allPrompts])

  const openModal = (prompt: Prompt) => {
    setSelectedPrompt(prompt)
    setModalOpen(true)
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedModule(null)
    setSelectedAgent(null)
  }

  const hasActiveFilters = query || selectedModule || selectedAgent

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* First-run explainer banner */}
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
                  <span className="inline-flex items-center gap-1 font-mono bg-muted px-1 rounded text-[11px]">Architect Mode</span> prompts work best for complex pipelines.{' '}
                  <span className="inline-flex items-center gap-1 font-mono bg-muted px-1 rounded text-[11px]">MCP</span> prompts require a GitHub, Jira, or Datadog MCP integration in Harness AI.
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
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border/60 bg-[var(--sidebar)]">
          {/* Toggle: By Module / By Agent */}
          <div className="p-3 border-b border-white/10 shrink-0">
            <div className="flex rounded-lg overflow-hidden border border-white/15">
              <button
                onClick={() => setSidebarView('modules')}
                className={cn(
                  'flex-1 text-xs font-medium py-1.5 transition-colors',
                  sidebarView === 'modules'
                    ? 'bg-[var(--harness-blue)] text-white'
                    : 'text-[var(--sidebar-foreground)]/60 hover:text-[var(--sidebar-foreground)]'
                )}
              >
                By Module
              </button>
              <button
                onClick={() => setSidebarView('agents')}
                className={cn(
                  'flex-1 text-xs font-medium py-1.5 transition-colors',
                  sidebarView === 'agents'
                    ? 'bg-[var(--harness-blue)] text-white'
                    : 'text-[var(--sidebar-foreground)]/60 hover:text-[var(--sidebar-foreground)]'
                )}
              >
                By Agent
              </button>
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-3">
              <nav className="space-y-0.5">
                {/* All */}
                <button
                  onClick={clearFilters}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                    !selectedModule && !selectedAgent
                      ? 'bg-[var(--harness-blue)] text-white font-medium'
                      : 'text-[var(--sidebar-foreground)]/70 hover:bg-white/10 hover:text-[var(--sidebar-foreground)]'
                  )}
                >
                  <span className="flex items-center gap-2">
                    <LayoutGrid className="h-3.5 w-3.5 shrink-0" />
                    <span>All</span>
                  </span>
                  <span className="text-[10px] opacity-70 font-mono">{allPrompts.length}</span>
                </button>

                <Separator className="my-2 bg-white/10" />

                {sidebarView === 'modules' ? (
                  modules.map(mod => (
                    <button
                      key={mod.id}
                      onClick={() => { setSelectedModule(mod.id === selectedModule ? null : mod.id); setSelectedAgent(null) }}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                        selectedModule === mod.id
                          ? 'bg-[var(--harness-blue)] text-white font-medium'
                          : 'text-[var(--sidebar-foreground)]/70 hover:bg-white/10 hover:text-[var(--sidebar-foreground)]'
                      )}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: selectedModule === mod.id ? 'white' : mod.color }}
                        />
                        <span className="truncate">{mod.shortName}</span>
                      </span>
                      <span className="text-[10px] opacity-70 font-mono shrink-0 ml-1">
                        {moduleCounts[mod.id] ?? 0}
                      </span>
                    </button>
                  ))
                ) : (
                  AGENTS.map(agent => (
                    <button
                      key={agent.id}
                      onClick={() => { setSelectedAgent(agent.id === selectedAgent ? null : agent.id); setSelectedModule(null) }}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                        selectedAgent === agent.id
                          ? 'bg-[var(--harness-blue)] text-white font-medium'
                          : 'text-[var(--sidebar-foreground)]/70 hover:bg-white/10 hover:text-[var(--sidebar-foreground)]'
                      )}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: selectedAgent === agent.id ? 'white' : agent.color }}
                        />
                        <span className="truncate">{agent.label}</span>
                      </span>
                      <span className="text-[10px] opacity-70 font-mono shrink-0 ml-1">
                        {agentCounts[agent.id] ?? 0}
                      </span>
                    </button>
                  ))
                )}
              </nav>
            </div>
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Search bar */}
          <div className="sticky top-14 z-30 bg-background/95 backdrop-blur border-b border-border/60 px-4 md:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchRef}
                  value={query}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder="Search prompts, agents, use cases, tags… (Cmd+K)"
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

              {/* Mobile module filter */}
              <div className="flex md:hidden items-center gap-1.5 overflow-x-auto">
                {modules.map(mod => (
                  <Button
                    key={mod.id}
                    variant={selectedModule === mod.id ? 'default' : 'outline'}
                    size="sm"
                    className={cn(
                      'shrink-0 h-8 text-xs px-2',
                      selectedModule === mod.id && 'bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white border-0'
                    )}
                    onClick={() => { setSelectedModule(mod.id === selectedModule ? null : mod.id); setSelectedAgent(null) }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full mr-1"
                      style={{ backgroundColor: selectedModule === mod.id ? 'white' : mod.color }}
                    />
                    {mod.shortName}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground flex-wrap">
                <span>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
                {selectedModule && (
                  <Badge variant="secondary" className="gap-1 text-[10px]">
                    {modules.find(m => m.id === selectedModule)?.name}
                    <button onClick={() => setSelectedModule(null)}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                )}
                {selectedAgent && (
                  <Badge variant="secondary" className="gap-1 text-[10px]">
                    {AGENT_LABELS[selectedAgent]}
                    <button onClick={() => setSelectedAgent(null)}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                )}
                {query && (
                  <Badge variant="secondary" className="gap-1 text-[10px]">
                    &ldquo;{query}&rdquo;
                    <button onClick={() => setQuery('')}><X className="h-2.5 w-2.5" /></button>
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Prompt grid */}
          <ScrollArea className="flex-1">
            <div className="px-4 md:px-6 py-5">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">No prompts found</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Try a different search term or clear your filters
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear filters
                  </Button>
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
                      <PromptCard
                        key={prompt.id}
                        prompt={prompt}
                        onClick={openModal}
                      />
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
