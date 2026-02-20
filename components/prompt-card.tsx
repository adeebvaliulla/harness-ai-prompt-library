'use client'

import { Copy, Check, Layers, Cpu, Wrench, Zap } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Prompt, AGENT_LABELS, AGENT_COLORS, AVAILABILITY_LABELS } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PromptCardProps {
  prompt: Prompt
  onClick: (prompt: Prompt) => void
}

const MODE_CONFIG = {
  standard: { label: 'Standard', icon: Cpu, className: 'text-muted-foreground' },
  architect: { label: 'Architect Mode', icon: Wrench, className: 'text-[var(--harness-blue)]' },
  mcp: { label: 'MCP', icon: Zap, className: 'text-amber-500' },
}

const AVAILABILITY_STYLES: Record<string, string> = {
  ga: '',
  beta: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  q3: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  q4: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
}

export function PromptCard({ prompt, onClick }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(prompt.content)
      setCopied(true)
      toast.success('Prompt copied!', { description: prompt.title })
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'copy', promptId: prompt.id, moduleId: prompt.moduleId }),
      }).catch(() => {})
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy')
    }
  }

  const modeConfig = MODE_CONFIG[prompt.mode]
  const ModeIcon = modeConfig.icon
  const agentColor = AGENT_COLORS[prompt.agentType]
  const agentLabel = AGENT_LABELS[prompt.agentType]
  const isUnavailable = prompt.availability === 'q3' || prompt.availability === 'q4'

  return (
    <div
      onClick={() => onClick(prompt)}
      className={cn(
        'group relative flex flex-col gap-3 rounded-xl border border-border/70 bg-card p-4 cursor-pointer transition-all duration-150',
        'hover:border-[var(--harness-blue)]/50 hover:shadow-md hover:shadow-[var(--harness-blue)]/5 hover:-translate-y-0.5',
        isUnavailable && 'opacity-75'
      )}
    >
      {/* Header: module badge + availability + copy button */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Badge
            className="text-white text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md shrink-0"
            style={{ backgroundColor: prompt.moduleColor }}
          >
            {prompt.moduleTitle}
          </Badge>
          {prompt.availability !== 'ga' && (
            <span className={cn(
              'text-[10px] font-medium px-1.5 py-0.5 rounded border',
              AVAILABILITY_STYLES[prompt.availability]
            )}>
              {AVAILABILITY_LABELS[prompt.availability]}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'h-7 w-7 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity',
            copied && 'opacity-100 text-green-600'
          )}
          onClick={handleCopy}
          title="Copy raw prompt"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm text-foreground leading-snug line-clamp-2">
        {prompt.title}
      </h3>

      {/* Description — replaces old content preview */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {prompt.description}
      </p>

      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
        <Layers className="h-3 w-3 shrink-0" />
        <span className="truncate">{prompt.useCaseTitle}</span>
        <span className="shrink-0">›</span>
        <span className="truncate">{prompt.subUseCaseTitle}</span>
      </div>

      {/* Footer: agent badge + mode indicator */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/50">
        <span
          className="text-[10px] font-medium px-1.5 py-0.5 rounded-md flex items-center gap-1 shrink-0"
          style={{ backgroundColor: `${agentColor}18`, color: agentColor }}
        >
          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: agentColor }} />
          {agentLabel}
        </span>

        <span className={cn('text-[10px] flex items-center gap-0.5 shrink-0', modeConfig.className)}>
          <ModeIcon className="h-3 w-3" />
          {modeConfig.label}
        </span>
      </div>

      {/* MCP requirements */}
      {prompt.mcpRequirements && prompt.mcpRequirements.length > 0 && (
        <div className="flex items-center gap-1 -mt-1">
          <Zap className="h-2.5 w-2.5 text-amber-500 shrink-0" />
          <span className="text-[10px] text-amber-600 font-medium">
            Requires: {prompt.mcpRequirements.join(', ')} MCP
          </span>
        </div>
      )}
    </div>
  )
}
