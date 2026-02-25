'use client'

import { Copy, Check, ExternalLink, Cpu, Wrench, Zap } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import {
  Prompt, AGENT_LABELS, AGENT_COLORS, AVAILABILITY_LABELS,
  COMPLEXITY_LABELS, COMPLEXITY_COLORS, SDLC_STAGE_LABELS, SDLC_STAGE_COLORS,
  PERSONA_LABELS, PromptComplexity,
} from '@/lib/types'
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

function ComplexityDots({ complexity }: { complexity: PromptComplexity }) {
  const levels: PromptComplexity[] = ['beginner', 'intermediate', 'advanced']
  const activeIndex = levels.indexOf(complexity)
  const color = COMPLEXITY_COLORS[complexity]
  return (
    <span className="flex items-center gap-0.5" title={COMPLEXITY_LABELS[complexity]}>
      {levels.map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={
            i <= activeIndex
              ? { backgroundColor: color }
              : { backgroundColor: 'hsl(var(--muted-foreground) / 0.25)' }
          }
        />
      ))}
    </span>
  )
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

  const handleTry = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(prompt.content)
      toast.success('Prompt copied — paste into Harness AI', {
        action: {
          label: 'Open Harness AI',
          onClick: () => window.open('https://app.harness.io', '_blank'),
        },
      })
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'copy', promptId: prompt.id, moduleId: prompt.moduleId }),
      }).catch(() => {})
    } catch {
      toast.error('Failed to copy')
    }
  }

  const modeConfig = MODE_CONFIG[prompt.mode]
  const ModeIcon = modeConfig.icon
  const agentColor = AGENT_COLORS[prompt.agentType]
  const stageColor = SDLC_STAGE_COLORS[prompt.sdlcStage]
  const isUnavailable = prompt.availability === 'q3' || prompt.availability === 'q4'

  const shownPersonas = prompt.personas.slice(0, 2)
  const extraPersonas = prompt.personas.length - 2

  return (
    <div
      onClick={() => onClick(prompt)}
      className={cn(
        'group relative flex flex-col gap-2.5 rounded-xl border border-border/70 bg-card p-4 cursor-pointer transition-all duration-150',
        'hover:border-[var(--harness-blue)]/50 hover:shadow-md hover:shadow-[var(--harness-blue)]/5 hover:-translate-y-0.5',
        isUnavailable && 'opacity-75'
      )}
    >
      {/* Header: module badge + availability + action buttons */}
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
        <div className="flex items-center gap-0.5 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity',
              copied && 'opacity-100 text-green-600'
            )}
            onClick={handleCopy}
            title="Copy prompt"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--harness-blue)]"
            onClick={handleTry}
            title="Copy & open in Harness AI"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm text-foreground leading-snug line-clamp-2">
        {prompt.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {prompt.description}
      </p>

      {/* SDLC Stage + Complexity */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className="text-[10px] font-medium px-1.5 py-0.5 rounded border shrink-0"
          style={{
            backgroundColor: `${stageColor}15`,
            color: stageColor,
            borderColor: `${stageColor}30`,
          }}
        >
          {SDLC_STAGE_LABELS[prompt.sdlcStage]}
        </span>
        <span className="flex items-center gap-1 shrink-0">
          <ComplexityDots complexity={prompt.complexity} />
          <span
            className="text-[10px] font-medium"
            style={{ color: COMPLEXITY_COLORS[prompt.complexity] }}
          >
            {COMPLEXITY_LABELS[prompt.complexity]}
          </span>
        </span>
      </div>

      {/* Personas */}
      {shownPersonas.length > 0 && (
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-muted-foreground shrink-0">For:</span>
          {shownPersonas.map(p => (
            <span
              key={p}
              className="text-[10px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded"
            >
              {PERSONA_LABELS[p]}
            </span>
          ))}
          {extraPersonas > 0 && (
            <span className="text-[10px] text-muted-foreground">+{extraPersonas}</span>
          )}
        </div>
      )}

      {/* Footer: agent badge + mode indicator */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/50">
        <span
          className="text-[10px] font-medium px-1.5 py-0.5 rounded-md flex items-center gap-1 shrink-0"
          style={{ backgroundColor: `${agentColor}18`, color: agentColor }}
        >
          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: agentColor }} />
          {AGENT_LABELS[prompt.agentType]}
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
