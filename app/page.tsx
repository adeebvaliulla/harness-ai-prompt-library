'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { Search, X, Sparkles, LayoutGrid } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { PromptCard } from '@/components/prompt-card'
import { PromptModal } from '@/components/prompt-modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Prompt } from '@/lib/types'
import { getAllPrompts, getModules } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function HomePage() {
  const allPrompts = useMemo(() => getAllPrompts(), [])
  const modules = useMemo(() => getModules(), [])

  const [query, setQuery] = useState('')
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  // Keyboard shortcut: Cmd+K or Ctrl+K to focus search
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

  // Track search queries
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const handleSearch = (q: string) => {
    setQuery(q)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    if (q.trim().length > 2) {
      searchTimeout.current = setTimeout(() => {
        const filtered = filterPrompts(allPrompts, q, selectedModule)
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'search', searchQuery: q.trim(), resultCount: filtered.length }),
        }).catch(() => {})
      }, 800)
    }
  }

  function filterPrompts(prompts: Prompt[], q: string, moduleId: string | null) {
    let result = prompts
    if (moduleId) result = result.filter(p => p.moduleId === moduleId)
    if (!q.trim()) return result
    const lower = q.toLowerCase()
    return result.filter(p =>
      p.title.toLowerCase().includes(lower) ||
      p.content.toLowerCase().includes(lower) ||
      p.tags.some(t => t.toLowerCase().includes(lower)) ||
      p.useCaseTitle.toLowerCase().includes(lower) ||
      p.subUseCaseTitle.toLowerCase().includes(lower) ||
      p.moduleTitle.toLowerCase().includes(lower)
    )
  }

  const filtered = useMemo(
    () => filterPrompts(allPrompts, query, selectedModule),
    [allPrompts, query, selectedModule]
  )

  const moduleCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    allPrompts.forEach(p => { counts[p.moduleId] = (counts[p.moduleId] ?? 0) + 1 })
    return counts
  }, [allPrompts])

  const openModal = (prompt: Prompt) => {
    setSelectedPrompt(prompt)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-border/60 bg-[var(--sidebar)]">
          <div className="p-4">
            <p className="text-xs font-semibold text-[var(--sidebar-foreground)]/50 uppercase tracking-widest mb-3">
              Modules
            </p>
            <nav className="space-y-0.5">
              <button
                onClick={() => setSelectedModule(null)}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                  selectedModule === null
                    ? 'bg-[var(--harness-blue)] text-white font-medium'
                    : 'text-[var(--sidebar-foreground)]/70 hover:bg-white/10 hover:text-[var(--sidebar-foreground)]'
                )}
              >
                <span className="flex items-center gap-2">
                  <LayoutGrid className="h-3.5 w-3.5 shrink-0" />
                  <span>All modules</span>
                </span>
                <span className="text-[10px] opacity-70 font-mono">{allPrompts.length}</span>
              </button>

              <Separator className="my-2 bg-white/10" />

              {modules.map(mod => (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod.id === selectedModule ? null : mod.id)}
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
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Search bar + filters */}
          <div className="sticky top-14 z-30 bg-background/95 backdrop-blur border-b border-border/60 px-4 md:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchRef}
                  value={query}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder="Search prompts, use cases, tags… (Cmd+K)"
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
                    onClick={() => setSelectedModule(mod.id === selectedModule ? null : mod.id)}
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

            {/* Active filters */}
            {(query || selectedModule) && (
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <span>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
                {selectedModule && (
                  <Badge variant="secondary" className="gap-1 text-[10px]">
                    {modules.find(m => m.id === selectedModule)?.name}
                    <button onClick={() => setSelectedModule(null)}>
                      <X className="h-2.5 w-2.5" />
                    </button>
                  </Badge>
                )}
                {query && (
                  <Badge variant="secondary" className="gap-1 text-[10px]">
                    &ldquo;{query}&rdquo;
                    <button onClick={() => setQuery('')}>
                      <X className="h-2.5 w-2.5" />
                    </button>
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setQuery(''); setSelectedModule(null) }}
                  >
                    Clear filters
                  </Button>
                </div>
              ) : (
                <>
                  {!query && !selectedModule && (
                    <div className="mb-5 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[var(--harness-blue)]" />
                      <h2 className="text-sm font-semibold text-foreground">
                        {allPrompts.length} prompts across {modules.length} modules
                      </h2>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
      />
    </div>
  )
}
