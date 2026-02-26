'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
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
    <div className="border-b border-border/60 bg-background">
      {/* ── Section header ── */}
      <div className="flex items-center justify-between px-4 md:px-6 pt-3.5 pb-2.5">
        <span className="text-[10.5px] font-semibold uppercase tracking-widest text-muted-foreground/50 select-none">
          AI Agents
        </span>
        <button
          onClick={() => setCollapsed(c => !c)}
          className="group flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-muted-foreground/60 hover:bg-muted hover:text-foreground transition-all duration-150"
        >
          {collapsed ? 'Show agents' : 'Hide'}
          {collapsed
            ? <ChevronDown className="h-3 w-3 opacity-70 group-hover:opacity-100" />
            : <ChevronUp className="h-3 w-3 opacity-70 group-hover:opacity-100" />
          }
        </button>
      </div>

      {/* ── Agent cards ── */}
      {!collapsed && (
        <div className="flex gap-3 overflow-x-auto px-4 md:px-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                  'group shrink-0 w-[196px] text-left rounded-xl border transition-all duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isSelected
                    ? 'shadow-md'
                    : 'border-border/50 bg-card hover:border-border/80 hover:shadow-md hover:-translate-y-0.5',
                  isComingSoon && !isSelected && 'opacity-55'
                )}
                style={isSelected ? {
                  borderColor: `${color}50`,
                  backgroundColor: `${color}0a`,
                  boxShadow: `0 4px 16px ${color}18, 0 0 0 1px ${color}40`,
                } : {}}
              >
                {/* Colored top accent bar */}
                <div
                  className="h-[3px] w-full transition-opacity duration-200"
                  style={{
                    backgroundColor: color,
                    opacity: isSelected ? 1 : 0.35,
                  }}
                />

                <div className="p-3.5">
                  {/* Agent name + availability badge */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className={cn(
                      'text-[13px] font-semibold leading-snug',
                      isSelected ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                    )}
                    style={isSelected ? { color } : {}}
                    >
                      {AGENT_LABELS[agentId]}
                    </span>
                    {isComingSoon && (
                      <span
                        className="shrink-0 mt-0.5 text-[9px] font-semibold px-1.5 py-0.5 rounded-full leading-none whitespace-nowrap"
                        style={{ backgroundColor: `${color}18`, color }}
                      >
                        {AVAILABILITY_LABELS[availability]}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[10.5px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {AGENT_DESCRIPTIONS[agentId]}
                  </p>

                  {/* Footer: prompt count + state */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[11px] font-semibold tabular-nums"
                      style={{ color: isSelected ? color : 'hsl(var(--muted-foreground))' }}
                    >
                      {count} prompt{count !== 1 ? 's' : ''}
                    </span>
                    {isSelected ? (
                      <span
                        className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-full leading-none"
                        style={{ backgroundColor: `${color}20`, color }}
                      >
                        ✓ Active
                      </span>
                    ) : (
                      <span className="text-[10px] text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-all duration-150">
                        Filter
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
