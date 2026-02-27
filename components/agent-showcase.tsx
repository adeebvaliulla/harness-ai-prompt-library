'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
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

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 md:px-6 pt-5 pb-2">
        <h2 className="text-[13px] font-semibold tracking-tight text-foreground">
          AI Agents
        </h2>
        <button
          onClick={() => setCollapsed(c => !c)}
          className="flex items-center gap-0.5 text-[12px] font-medium text-[var(--harness-blue)] hover:opacity-70 transition-opacity"
        >
          {collapsed ? 'Show' : 'Hide'}
          {collapsed
            ? <ChevronDown className="h-3.5 w-3.5" />
            : <ChevronUp className="h-3.5 w-3.5" />
          }
        </button>
      </div>

      {/* ── Agent cards ────────────────────────────────────────────────── */}
      {!collapsed && (
        <div className="flex gap-3 overflow-x-auto px-4 md:px-6 pt-2 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                  'group shrink-0 w-[200px] text-left rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isComingSoon && !isSelected && 'opacity-60',
                  !isSelected && [
                    'bg-card',
                    'shadow-[0_1px_3px_rgba(0,0,0,0.07),0_0_0_0.5px_rgba(0,0,0,0.08)]',
                    'hover:shadow-[0_6px_18px_rgba(0,0,0,0.10),0_0_0_0.5px_rgba(0,0,0,0.08)]',
                    'hover:-translate-y-0.5',
                  ].join(' '),
                )}
                style={isSelected ? {
                  backgroundColor: `${color}0d`,
                  boxShadow: `0 0 0 1.5px ${color}70, 0 6px 20px ${color}22`,
                } : {}}
              >
                <div className="p-4 flex flex-col gap-0">

                  {/* Agent name + dot */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="h-2 w-2 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: color }}
                    />
                    <span
                      className="text-[13px] font-semibold leading-tight flex-1 min-w-0 truncate"
                      style={{ color: isSelected ? color : 'hsl(var(--foreground))' }}
                    >
                      {AGENT_LABELS[agentId]}
                    </span>
                    {isComingSoon && (
                      <span
                        className="shrink-0 text-[9px] font-semibold px-1.5 py-[3px] rounded-full leading-none"
                        style={{ backgroundColor: `${color}18`, color }}
                      >
                        {AVAILABILITY_LABELS[availability]}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2 mb-3.5">
                    {AGENT_DESCRIPTIONS[agentId]}
                  </p>

                  {/* Prompt count */}
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-[13px] font-semibold tabular-nums"
                      style={{ color: isSelected ? color : 'hsl(var(--foreground))' }}
                    >
                      {count}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      prompt{count !== 1 ? 's' : ''}
                    </span>
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
