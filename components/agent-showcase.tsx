'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Bot } from 'lucide-react'
import {
  AgentType, AGENT_LABELS, AGENT_COLORS, AGENT_DESCRIPTIONS,
  AGENT_AVAILABILITY, AVAILABILITY_LABELS,
} from '@/lib/types'
import { cn } from '@/lib/utils'

const AGENT_IDS: AgentType[] = ['devops', 'finops', 'appsec', 'reliability', 'qa', 'release', 'sre', 'coding']

interface AgentShowcaseProps {
  agentCounts: Record<string, number>
  selectedAgents: AgentType[]
  onToggle: (agent: AgentType) => void
}

export function AgentShowcase({ agentCounts, selectedAgents, onToggle }: AgentShowcaseProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="border-b border-border/60 bg-muted/20 px-4 md:px-6 py-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          <Bot className="h-3 w-3" />
          AI Agents
        </span>
        <button
          onClick={() => setCollapsed(c => !c)}
          className="flex items-center gap-0.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
        >
          {collapsed ? 'Show' : 'Hide'}
          {collapsed ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
        </button>
      </div>

      {!collapsed && (
        <div className="flex gap-2.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {AGENT_IDS.map(agentId => {
            const color = AGENT_COLORS[agentId]
            const isSelected = selectedAgents.includes(agentId)
            const count = agentCounts[agentId] ?? 0
            const availability = AGENT_AVAILABILITY[agentId]
            const isComingSoon = availability === 'q3' || availability === 'q4'

            return (
              <button
                key={agentId}
                onClick={() => onToggle(agentId)}
                className={cn(
                  'shrink-0 w-[188px] text-left rounded-lg border p-3 transition-all duration-150',
                  isSelected
                    ? 'border-[var(--harness-blue)] bg-[var(--harness-blue)]/5 shadow-sm ring-1 ring-[var(--harness-blue)]/20'
                    : 'border-border/60 bg-card hover:border-border hover:bg-muted/40 hover:-translate-y-0.5 hover:shadow-sm',
                  isComingSoon && !isSelected && 'opacity-60'
                )}
              >
                {/* Agent name row */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="flex items-center gap-1.5 min-w-0">
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs font-semibold text-foreground truncate">
                      {AGENT_LABELS[agentId]}
                    </span>
                  </span>
                  {isComingSoon && (
                    <span className="text-[9px] font-medium px-1 py-0.5 rounded bg-muted text-muted-foreground shrink-0 leading-none">
                      {AVAILABILITY_LABELS[availability]}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
                  {AGENT_DESCRIPTIONS[agentId]}
                </p>

                {/* Footer: prompt count + selected indicator */}
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: isSelected ? color : 'hsl(var(--muted-foreground))' }}
                  >
                    {count} prompt{count !== 1 ? 's' : ''}
                  </span>
                  {isSelected && (
                    <span
                      className="text-[9px] font-semibold"
                      style={{ color }}
                    >
                      ✓ Filtering
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
