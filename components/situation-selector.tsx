'use client'

import { useState } from 'react'
import { XCircle, Rocket, GitPullRequest, AlertTriangle, TrendingUp, Zap, ChevronUp, ChevronDown } from 'lucide-react'
import {
  SituationType, SITUATION_LABELS, SITUATION_COLORS, SITUATION_DESCRIPTIONS,
} from '@/lib/types'
import { cn } from '@/lib/utils'

const SITUATION_IDS: SituationType[] = [
  'build-failed',
  'ready-to-deploy',
  'pr-review',
  'incident-firing',
  'cost-spike',
  'optimize',
]

const SITUATION_ICONS: Record<SituationType, React.ElementType> = {
  'build-failed': XCircle,
  'ready-to-deploy': Rocket,
  'pr-review': GitPullRequest,
  'incident-firing': AlertTriangle,
  'cost-spike': TrendingUp,
  'optimize': Zap,
}

interface SituationSelectorProps {
  situationCounts: Record<string, number>
  selectedSituation: SituationType | null
  onSelect: (situation: SituationType | null) => void
}

export function SituationSelector({ situationCounts, selectedSituation, onSelect }: SituationSelectorProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="border-b border-border/60 bg-muted/20">

      {/* ── Section header ───────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 md:px-6 pt-4 pb-2">
        <div className="flex items-baseline gap-2">
          <h2 className="text-[13px] font-semibold tracking-tight text-foreground">
            What&apos;s happening?
          </h2>
          <span className="text-[11px] text-muted-foreground">
            Pick a situation to surface the right prompts
          </span>
        </div>
        <div className="flex items-center gap-3">
          {selectedSituation && (
            <button
              onClick={() => onSelect(null)}
              className="text-[11px] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              Clear
            </button>
          )}
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
      </div>

      {/* ── Situation cards ──────────────────────────────────────────── */}
      {!collapsed && (
        <div className="flex gap-3 overflow-x-auto px-4 md:px-6 pt-1 pb-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {SITUATION_IDS.map(situationId => {
            const color = SITUATION_COLORS[situationId]
            const isSelected = selectedSituation === situationId
            const count = situationCounts[situationId] ?? 0
            const Icon = SITUATION_ICONS[situationId]

            return (
              <button
                key={situationId}
                onClick={() => onSelect(isSelected ? null : situationId)}
                className={cn(
                  'group shrink-0 w-[200px] text-left rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
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

                  {/* Icon + label */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: isSelected ? color : 'hsl(var(--muted-foreground))' }}
                    />
                    <span
                      className="text-[13px] font-semibold leading-tight truncate"
                      style={{ color: isSelected ? color : 'hsl(var(--foreground))' }}
                    >
                      {SITUATION_LABELS[situationId]}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2 mb-3.5">
                    {SITUATION_DESCRIPTIONS[situationId]}
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
