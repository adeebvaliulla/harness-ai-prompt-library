'use client'

import { Copy, Check, Layers } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Prompt } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PromptCardProps {
  prompt: Prompt
  onClick: (prompt: Prompt) => void
}

export function PromptCard({ prompt, onClick }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(prompt.content)
      setCopied(true)
      toast.success('Prompt copied!', { description: prompt.title })
      // Track copy event
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

  const preview = prompt.content
    .replace(/\{\{[^}]+\}\}/g, '___')
    .slice(0, 160)
    .trim() + (prompt.content.length > 160 ? '…' : '')

  return (
    <div
      onClick={() => onClick(prompt)}
      className="group relative flex flex-col gap-3 rounded-xl border border-border/70 bg-card p-4 cursor-pointer transition-all duration-150 hover:border-[var(--harness-blue)]/50 hover:shadow-md hover:shadow-[var(--harness-blue)]/5 hover:-translate-y-0.5"
    >
      {/* Module badge */}
      <div className="flex items-start justify-between gap-2">
        <Badge
          className="text-white text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md shrink-0"
          style={{ backgroundColor: prompt.moduleColor }}
        >
          {prompt.moduleTitle}
        </Badge>
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

      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
        <Layers className="h-3 w-3 shrink-0" />
        <span className="truncate">{prompt.useCaseTitle}</span>
        <span className="shrink-0">›</span>
        <span className="truncate">{prompt.subUseCaseTitle}</span>
      </div>

      {/* Preview */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
        {preview}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/50">
        <div className="flex flex-wrap gap-1">
          {prompt.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-medium"
            >
              {tag}
            </span>
          ))}
          {prompt.tags.length > 3 && (
            <span className="text-[10px] text-muted-foreground">+{prompt.tags.length - 3}</span>
          )}
        </div>
        <span className="text-[10px] text-muted-foreground shrink-0 flex items-center gap-0.5">
          <Copy className="h-2.5 w-2.5" />
          {prompt.copyCount.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
