'use client'

import { useState, useEffect, useCallback } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Plus, Pencil, Trash2, Search, Copy, TrendingUp, FileText, Hash, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Prompt, AgentType, PromptMode, PromptAvailability, AGENT_LABELS, AGENT_COLORS } from '@/lib/types'
import { getModules } from '@/lib/data'
import { AnalyticsSummary } from '@/lib/types'

const MODULES = getModules()

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ title, value, icon: Icon, sub }: { title: string; value: string | number; icon: React.ElementType; sub?: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{typeof value === 'number' ? value.toLocaleString() : value}</div>
        {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
      </CardContent>
    </Card>
  )
}

// ─── Prompt Editor Dialog ─────────────────────────────────────────────────────
function PromptEditorDialog({
  open,
  onClose,
  prompt,
  onSaved,
}: {
  open: boolean
  onClose: () => void
  prompt: Prompt | null
  onSaved: () => void
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [moduleId, setModuleId] = useState('')
  const [useCaseTitle, setUseCaseTitle] = useState('')
  const [subUseCaseTitle, setSubUseCaseTitle] = useState('')
  const [tagsInput, setTagsInput] = useState('')
  const [agentType, setAgentType] = useState<AgentType>('devops')
  const [mode, setMode] = useState<PromptMode>('standard')
  const [availability, setAvailability] = useState<PromptAvailability>('ga')
  const [mcpInput, setMcpInput] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (prompt) {
      setTitle(prompt.title)
      setDescription(prompt.description ?? '')
      setContent(prompt.content)
      setModuleId(prompt.moduleId)
      setUseCaseTitle(prompt.useCaseTitle)
      setSubUseCaseTitle(prompt.subUseCaseTitle)
      setTagsInput(prompt.tags.join(', '))
      setAgentType(prompt.agentType ?? 'devops')
      setMode(prompt.mode ?? 'standard')
      setAvailability(prompt.availability ?? 'ga')
      setMcpInput(prompt.mcpRequirements?.join(', ') ?? '')
    } else {
      setTitle(''); setDescription(''); setContent(''); setModuleId('')
      setUseCaseTitle(''); setSubUseCaseTitle(''); setTagsInput('')
      setAgentType('devops'); setMode('standard'); setAvailability('ga'); setMcpInput('')
    }
  }, [prompt, open])

  const selectedModule = MODULES.find(m => m.id === moduleId)
  const useCases = selectedModule?.useCases ?? []
  const selectedUseCase = useCases.find(uc => uc.title === useCaseTitle)
  const subUseCases = selectedUseCase?.subUseCases ?? []

  const handleSave = async () => {
    if (!title.trim() || !content.trim() || !moduleId) {
      toast.error('Title, content, and module are required')
      return
    }
    setSaving(true)
    try {
      const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean)
      const mcpRequirements = mcpInput ? mcpInput.split(',').map(t => t.trim()).filter(Boolean) : undefined
      const selectedUC = useCases.find(uc => uc.title === useCaseTitle)
      const payload = {
        title, description, content, moduleId, tags,
        agentType, mode, availability,
        ...(mcpRequirements?.length ? { mcpRequirements } : {}),
        useCaseId: selectedUC?.id ?? '',
        useCaseTitle: useCaseTitle ?? '',
        subUseCaseId: subUseCases.find(s => s.title === subUseCaseTitle)?.id ?? '',
        subUseCaseTitle: subUseCaseTitle ?? '',
        variables: prompt?.variables ?? [],
      }

      if (prompt) {
        await fetch('/api/prompts', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: prompt.id, ...payload }) })
        toast.success('Prompt updated')
      } else {
        await fetch('/api/prompts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        toast.success('Prompt created')
      }
      onSaved()
      onClose()
    } catch {
      toast.error('Save failed')
    } finally {
      setSaving(false)
    }
  }

  const detectedVars = [...new Set((content.match(/\{\{([^}]+)\}\}/g) ?? []).map(m => m.slice(2, -2).trim()))]

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="max-w-3xl w-full flex flex-col max-h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle>{prompt ? 'Edit Prompt' : 'New Prompt'}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1">
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-1.5">
              <Label>Title</Label>
              <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Generate CI Pipeline YAML" />
            </div>

            <div className="space-y-1.5">
              <Label>Description <span className="text-muted-foreground font-normal text-xs">(what Harness AI will produce)</span></Label>
              <Input value={description} onChange={e => setDescription(e.target.value)} placeholder="e.g., Generates a complete CI pipeline YAML with build, test, and caching stages." />
            </div>

            {/* Agent / Mode / Availability */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label>AI Agent</Label>
                <Select value={agentType} onValueChange={v => setAgentType(v as AgentType)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.entries(AGENT_LABELS) as [AgentType, string][]).map(([id, label]) => (
                      <SelectItem key={id} value={id}>
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full shrink-0 inline-block" style={{ backgroundColor: AGENT_COLORS[id] }} />
                          {label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Mode</Label>
                <Select value={mode} onValueChange={v => setMode(v as PromptMode)}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="architect">Architect Mode</SelectItem>
                    <SelectItem value="mcp">MCP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Availability</Label>
                <Select value={availability} onValueChange={v => setAvailability(v as PromptAvailability)}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ga">GA</SelectItem>
                    <SelectItem value="beta">Beta</SelectItem>
                    <SelectItem value="q3">Coming Q3</SelectItem>
                    <SelectItem value="q4">Coming Q4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {mode === 'mcp' && (
              <div className="space-y-1.5">
                <Label>MCP Requirements <span className="text-muted-foreground font-normal text-xs">(comma-separated)</span></Label>
                <Input value={mcpInput} onChange={e => setMcpInput(e.target.value)} placeholder="e.g., GitHub, Jira, Datadog" />
              </div>
            )}

            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Module</Label>
                <Select value={moduleId} onValueChange={v => { setModuleId(v); setUseCaseTitle(''); setSubUseCaseTitle('') }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select module" />
                  </SelectTrigger>
                  <SelectContent>
                    {MODULES.map(m => (
                      <SelectItem key={m.id} value={m.id}>
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full shrink-0 inline-block" style={{ backgroundColor: m.color }} />
                          {m.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Use Case</Label>
                  <Select value={useCaseTitle} onValueChange={v => { setUseCaseTitle(v); setSubUseCaseTitle('') }} disabled={!moduleId}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select use case" />
                    </SelectTrigger>
                    <SelectContent>
                      {useCases.map(uc => <SelectItem key={uc.id} value={uc.title}>{uc.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Sub Use Case</Label>
                  <Select value={subUseCaseTitle} onValueChange={setSubUseCaseTitle} disabled={!useCaseTitle}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select sub use case" />
                    </SelectTrigger>
                    <SelectContent>
                      {subUseCases.map(s => <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="flex items-center justify-between">
                Prompt Content
                <span className="text-xs text-muted-foreground font-normal">Use {'{{variable_name}}'} for dynamic fields</span>
              </Label>
              <Textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Write your prompt here. Use {{variable_name}} for customizable fields the user will fill in."
                className="min-h-[200px] font-mono text-xs resize-y"
              />
              {detectedVars.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="text-xs text-muted-foreground mr-1">Detected variables:</span>
                  {detectedVars.map(v => (
                    <Badge key={v} variant="secondary" className="text-[10px] font-mono">
                      {`{{${v}}}`}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label>Tags <span className="text-muted-foreground font-normal text-xs">(comma-separated)</span></Label>
              <Input value={tagsInput} onChange={e => setTagsInput(e.target.value)} placeholder="e.g., pipeline, docker, kubernetes" />
            </div>
          </div>
        </ScrollArea>
        <DialogFooter className="px-6 py-3 border-t">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white"
          >
            {saving ? 'Saving…' : prompt ? 'Save Changes' : 'Create Prompt'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null)
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [promptSearch, setPromptSearch] = useState('')
  const [editorOpen, setEditorOpen] = useState(false)
  const [editingPrompt, setEditingPrompt] = useState<Prompt | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Prompt | null>(null)
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    setLoading(true)
    const [analyticsRes, promptsRes] = await Promise.all([
      fetch('/api/analytics').then(r => r.json()),
      fetch('/api/prompts').then(r => r.json()),
    ])
    setAnalytics(analyticsRes)
    setPrompts(promptsRes)
    setLoading(false)
  }, [])

  useEffect(() => { loadData() }, [loadData])

  const handleDelete = async (prompt: Prompt) => {
    await fetch(`/api/prompts?id=${prompt.id}`, { method: 'DELETE' })
    toast.success('Prompt deleted')
    setDeleteTarget(null)
    loadData()
  }

  const filteredPrompts = prompts.filter(p =>
    p.title.toLowerCase().includes(promptSearch.toLowerCase()) ||
    p.moduleTitle.toLowerCase().includes(promptSearch.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <Link href="/" className="hover:text-foreground flex items-center gap-1">
                <ArrowLeft className="h-3.5 w-3.5" /> Browse
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Admin</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage prompts and view usage analytics
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wide hidden md:flex">
            Open access — protect this route in production
          </Badge>
        </div>

        <Tabs defaultValue="analytics">
          <TabsList className="mb-6">
            <TabsTrigger value="analytics" className="gap-1.5">
              <TrendingUp className="h-4 w-4" /> Analytics
            </TabsTrigger>
            <TabsTrigger value="prompts" className="gap-1.5">
              <FileText className="h-4 w-4" /> Manage Prompts
            </TabsTrigger>
          </TabsList>

          {/* ── Analytics Tab ──────────────────────────────────────── */}
          <TabsContent value="analytics" className="space-y-6 mt-0">
            {loading || !analytics ? (
              <div className="text-center py-16 text-muted-foreground text-sm">Loading analytics…</div>
            ) : (
              <>
                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard title="Total Prompts" value={analytics.totalPrompts} icon={FileText} />
                  <StatCard title="Total Copies" value={analytics.totalCopies} icon={Copy} sub="across all prompts" />
                  <StatCard title="Total Searches" value={analytics.totalSearches} icon={Search} />
                  <StatCard
                    title="Most Copied"
                    value={analytics.topPrompts[0]?.title.slice(0, 24) + '…' ?? '—'}
                    icon={Hash}
                    sub={analytics.topPrompts[0] ? `${analytics.topPrompts[0].count} copies` : undefined}
                  />
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Copy trend */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold">Daily Copies — Last 30 Days</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={analytics.copyTrend}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                          <XAxis
                            dataKey="date"
                            tick={{ fontSize: 10 }}
                            tickLine={false}
                            interval={6}
                          />
                          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                          <Tooltip
                            contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }}
                          />
                          <Line
                            type="monotone"
                            dataKey="count"
                            stroke="var(--harness-blue)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Module breakdown */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold">Copies by Module</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={analytics.moduleBreakdown} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                          <XAxis type="number" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                          <YAxis dataKey="moduleName" type="category" tick={{ fontSize: 10 }} tickLine={false} width={36} />
                          <Tooltip
                            contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }}
                          />
                          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                            {analytics.moduleBreakdown.map((entry, i) => (
                              <Cell key={i} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                {/* Top prompts + recent searches */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold">Top Copied Prompts</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border">
                        {analytics.topPrompts.slice(0, 8).map((p, i) => (
                          <div key={p.promptId} className="flex items-center gap-3 px-6 py-2.5">
                            <span className="text-xs font-mono text-muted-foreground w-4">{i + 1}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate">{p.title}</p>
                              <p className="text-[10px] text-muted-foreground">{p.moduleTitle}</p>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                              <Copy className="h-3 w-3" />
                              {p.count.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold">Recent Searches</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {analytics.recentSearches.slice(0, 20).map((q, i) => (
                          <Badge key={i} variant="secondary" className="text-xs font-normal">
                            <Search className="h-2.5 w-2.5 mr-1" />
                            {q}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </TabsContent>

          {/* ── Prompts Tab ─────────────────────────────────────────── */}
          <TabsContent value="prompts" className="mt-0">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={promptSearch}
                  onChange={e => setPromptSearch(e.target.value)}
                  placeholder="Search prompts…"
                  className="pl-9 h-9 text-sm"
                />
              </div>
              <Button
                onClick={() => { setEditingPrompt(null); setEditorOpen(true) }}
                className="gap-1.5 bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white"
                size="sm"
              >
                <Plus className="h-4 w-4" /> New Prompt
              </Button>
            </div>

            <Card>
              <div className="divide-y divide-border">
                {filteredPrompts.length === 0 && (
                  <div className="py-12 text-center text-sm text-muted-foreground">No prompts found</div>
                )}
                {filteredPrompts.map(prompt => (
                  <div key={prompt.id} className="flex items-center gap-4 px-4 py-3 hover:bg-muted/30 transition-colors">
                    <Badge
                      className="text-white text-[10px] uppercase tracking-wide shrink-0"
                      style={{ backgroundColor: prompt.moduleColor }}
                    >
                      {prompt.moduleTitle}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{prompt.title}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {prompt.useCaseTitle} › {prompt.subUseCaseTitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Copy className="h-3 w-3" />
                      {prompt.copyCount}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => { setEditingPrompt(prompt); setEditorOpen(true) }}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:text-destructive"
                        onClick={() => setDeleteTarget(prompt)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <PromptEditorDialog
        open={editorOpen}
        onClose={() => setEditorOpen(false)}
        prompt={editingPrompt}
        onSaved={loadData}
      />

      <AlertDialog open={!!deleteTarget} onOpenChange={v => !v && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete prompt?</AlertDialogTitle>
            <AlertDialogDescription>
              &ldquo;{deleteTarget?.title}&rdquo; will be permanently deleted. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive hover:bg-destructive/90 text-white"
              onClick={() => deleteTarget && handleDelete(deleteTarget)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
