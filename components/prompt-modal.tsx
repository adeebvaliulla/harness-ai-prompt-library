'use client'

import { useState, useEffect, useMemo } from 'react'
import { Copy, Check, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { Prompt, Variable } from '@/lib/types'
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

export function PromptModal({ prompt, open, onClose }: PromptModalProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)

  const variableNames = useMemo(
    () => (prompt ? extractVariableNames(prompt.content) : []),
    [prompt]
  )

  // Reset values when prompt changes, applying defaults
  useEffect(() => {
    if (!prompt) return
    const defaults: Record<string, string> = {}
    variableNames.forEach(name => {
      const def = getVariableDefinition(name, prompt.variables)
      defaults[name] = def.defaultValue ?? ''
    })
    setValues(defaults)
    setCopied(false)
  }, [prompt, variableNames])

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
              {variableNames.length > 0 && !allFilled && (
                <p className="text-xs text-muted-foreground">
                  Fill in all fields to customize your prompt
                </p>
              )}
              <div className="flex-1" />
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
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Prompt
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
