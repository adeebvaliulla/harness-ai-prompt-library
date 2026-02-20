'use client'

import { useState, useEffect, useMemo } from 'react'
import { Copy, Check, ChevronRight, Wrench, Zap, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import {
  Prompt, Variable,
  AGENT_LABELS, AGENT_COLORS,
  AVAILABILITY_LABELS,
  CustomerContext,
} from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface PromptModalProps {
  prompt: Prompt | null
  open: boolean
  onClose: () => void
  customerContext?: CustomerContext
  contextVarMap?: Record<keyof CustomerContext, string[]>
}

function extractVariableNames(content: string): string[] {
  const matches = content.match(/\{\{([^}]+)\}\}/g) ?? []
  return [...new Set(matches.map(m => m.slice(2, -2).trim()))]
}

function fillTemplate(content: string, values: Record<string, string>): string {
  return content.replace(/\{\{([^}]+)\}\}/g, (_, name) => {
    const val = values[name.trim()]
    return val || `{{${name.trim()}}}`
  })
}

function getVariableDefinition(name: string, variables: Variable[]): Variable {
  return variables.find(v => v.name === name) ?? {
    id: name,
    name,
    label: name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    placeholder: `Enter ${name.replace(/_/g, ' ')}`,
    type: 'text',
  }
}

const AVAILABILITY_BANNER: Record<string, { label: string; className: string }> = {
  beta: { label: 'Beta — may change before GA', className: 'bg-blue-500/10 text-blue-700 border-blue-500/20' },
  q3: { label: 'Coming Q3 — not yet available in Harness AI', className: 'bg-amber-500/10 text-amber-700 border-amber-500/20' },
  q4: { label: 'Coming Q4 — not yet available in Harness AI', className: 'bg-orange-500/10 text-orange-700 border-orange-500/20' },
}

export function PromptModal({ prompt, open, onClose, customerContext, contextVarMap }: PromptModalProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)

  const variableNames = useMemo(
    () => (prompt ? extractVariableNames(prompt.content) : []),
    [prompt]
  )

  useEffect(() => {
    if (!prompt) return
    const defaults: Record<string, string> = {}
    variableNames.forEach(name => {
      const def = getVariableDefinition(name, prompt.variables)
      // Check if customer context has a value for this variable
      let contextValue = ''
      if (customerContext && contextVarMap) {
        for (const [ctxKey, varNames] of Object.entries(contextVarMap) as [keyof CustomerContext, string[]][]) {
          if (varNames.includes(name) && customerContext[ctxKey]) {
            contextValue = customerContext[ctxKey]
            break
          }
        }
      }
      defaults[name] = contextValue || def.defaultValue || ''
    })
    setValues(defaults)
    setCopied(false)
  }, [prompt, variableNames, customerContext, contextVarMap])

  const filledContent = useMemo(
    () => (prompt ? fillTemplate(prompt.content, values) : ''),
    [prompt, values]
  )

  const allFilled = variableNames.every(name => values[name]?.trim())

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(filledContent)
      setCopied(true)
      toast.success('Prompt copied!', { description: 'Your customized prompt is in the clipboard.' })
      if (prompt) {
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'copy', promptId: prompt.id, moduleId: prompt.moduleId }),
        }).catch(() => {})
      }
      setTimeout(() => setCopied(false), 2500)
    } catch {
      toast.error('Failed to copy')
    }
  }

  if (!prompt) return null

  const agentColor = AGENT_COLORS[prompt.agentType]
  const agentLabel = AGENT_LABELS[prompt.agentType]
  const availabilityBanner = AVAILABILITY_BANNER[prompt.availability]
  const isArchitect = prompt.mode === 'architect'
  const isMcp = prompt.mode === 'mcp'

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="max-w-3xl sm:max-w-3xl w-full p-0 gap-0 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-border/60 shrink-0">
          <div className="flex items-start gap-3">
            <Badge
              className="text-white text-[10px] font-semibold uppercase tracking-wide mt-0.5 shrink-0"
              style={{ backgroundColor: prompt.moduleColor }}
            >
              {prompt.moduleTitle}
            </Badge>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-base font-semibold leading-snug">
                {prompt.title}
              </DialogTitle>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <span>{prompt.useCaseTitle}</span>
                <ChevronRight className="h-3 w-3" />
                <span>{prompt.subUseCaseTitle}</span>
              </div>
            </div>
          </div>

          {/* Agent + mode row */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1.5"
              style={{ backgroundColor: `${agentColor}18`, color: agentColor }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: agentColor }} />
              {agentLabel}
            </span>

            {isArchitect && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 bg-[var(--harness-blue)]/10 text-[var(--harness-blue)]">
                <Wrench className="h-3 w-3" />
                Use in Architect Mode for best results
              </span>
            )}

            {isMcp && prompt.mcpRequirements && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 bg-amber-500/10 text-amber-700">
                <Zap className="h-3 w-3" />
                Requires: {prompt.mcpRequirements.join(', ')} MCP connection
              </span>
            )}
          </div>

          {/* Availability banner */}
          {availabilityBanner && (
            <div className={cn(
              'flex items-center gap-2 mt-2 px-3 py-2 rounded-lg border text-xs font-medium',
              availabilityBanner.className
            )}>
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {availabilityBanner.label}
            </div>
          )}
        </DialogHeader>

        {/* Body */}
        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          {/* Left: Variables */}
          {variableNames.length > 0 && (
            <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-border/60 shrink-0">
              <ScrollArea className="h-full max-h-56 md:max-h-none">
                <div className="p-4 space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Customize ({variableNames.length} variable{variableNames.length !== 1 ? 's' : ''})
                  </p>
                  {variableNames.map(name => {
                    const def = getVariableDefinition(name, prompt.variables)
                    return (
                      <div key={name} className="space-y-1">
                        <Label className="text-xs font-medium">{def.label}</Label>
                        {def.type === 'dropdown' && def.options ? (
                          <Select
                            value={values[name] ?? ''}
                            onValueChange={val => setValues(prev => ({ ...prev, [name]: val }))}
                          >
                            <SelectTrigger className="h-8 text-xs">
                              <SelectValue placeholder={def.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {def.options.map(opt => (
                                <SelectItem key={opt} value={opt} className="text-xs">
                                  {opt}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : def.type === 'textarea' ? (
                          <Textarea
                            value={values[name] ?? ''}
                            onChange={e => setValues(prev => ({ ...prev, [name]: e.target.value }))}
                            placeholder={def.placeholder}
                            className="text-xs min-h-[60px] resize-none"
                          />
                        ) : (
                          <Input
                            value={values[name] ?? ''}
                            onChange={e => setValues(prev => ({ ...prev, [name]: e.target.value }))}
                            placeholder={def.placeholder}
                            className="h-8 text-xs"
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              </ScrollArea>
            </div>
          )}

          {/* Right: Preview */}
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <ScrollArea className="flex-1">
              <div className="p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  {variableNames.length > 0 ? 'Live Preview' : 'Prompt'}
                </p>
                <pre className="whitespace-pre-wrap text-xs font-mono leading-relaxed text-foreground bg-muted/40 rounded-lg p-4 border border-border/50">
                  {filledContent.split(/(\{\{[^}]+\}\})/g).map((part, i) => {
                    if (/^\{\{[^}]+\}\}$/.test(part)) {
                      return (
                        <mark key={i} className="bg-[var(--harness-blue)]/15 text-[var(--harness-blue)] rounded px-0.5 not-italic font-mono">
                          {part}
                        </mark>
                      )
                    }
                    return part
                  })}
                </pre>
                {prompt.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {prompt.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>

            <Separator />

            {/* Footer */}
            <div className="px-4 py-3 flex items-center justify-between gap-3 shrink-0">
              <div className="flex-1 min-w-0">
                {variableNames.length > 0 && !allFilled && (
                  <p className="text-xs text-muted-foreground">
                    Fill in all fields to customize your prompt
                  </p>
                )}
                {isArchitect && (
                  <p className="text-xs text-[var(--harness-blue)]">
                    Tip: Start a new Harness AI chat and type &ldquo;Architect Mode&rdquo; before pasting
                  </p>
                )}
              </div>
              <Button variant="outline" size="sm" onClick={onClose}>
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleCopy}
                className={cn(
                  'gap-2 min-w-36 transition-all',
                  copied
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white'
                )}
              >
                {copied ? (
                  <><Check className="h-4 w-4" /> Copied!</>
                ) : (
                  <><Copy className="h-4 w-4" /> Copy Prompt</>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
