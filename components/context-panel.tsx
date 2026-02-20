'use client'

import { useState, useEffect, useCallback } from 'react'
import { UserCog, ChevronDown, ChevronUp, RotateCcw, Check } from 'lucide-react'
import { CustomerContext } from '@/lib/types'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'harness-customer-context'

const EMPTY_CONTEXT: CustomerContext = {
  companyName: '',
  projectName: '',
  pipelineName: '',
  serviceName: '',
  environment: '',
  cloudProvider: '',
  teamName: '',
  repoName: '',
}

export function loadContext(): CustomerContext {
  if (typeof window === 'undefined') return EMPTY_CONTEXT
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? { ...EMPTY_CONTEXT, ...JSON.parse(stored) } : EMPTY_CONTEXT
  } catch {
    return EMPTY_CONTEXT
  }
}

/**
 * Maps CustomerContext fields to the variable names used across prompts.
 * When a prompt variable matches a key here, its default value is pre-filled.
 */
export const CONTEXT_VAR_MAP: Record<keyof CustomerContext, string[]> = {
  companyName: ['company_name', 'organization', 'account_name'],
  projectName: ['project_name', 'project', 'app_name'],
  pipelineName: ['pipeline_name', 'pipeline'],
  serviceName: ['service_name', 'service', 'app_name'],
  environment: ['environment', 'target_environment', 'env'],
  cloudProvider: ['cloud_provider', 'provider', 'cloud'],
  teamName: ['team_name', 'team'],
  repoName: ['repo_url', 'repo_name', 'repository'],
}

interface ContextPanelProps {
  onContextChange?: (ctx: CustomerContext) => void
}

export function ContextPanel({ onContextChange }: ContextPanelProps) {
  const [ctx, setCtx] = useState<CustomerContext>(EMPTY_CONTEXT)
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const loaded = loadContext()
    setCtx(loaded)
    onContextChange?.(loaded)
    // Auto-open if any field is filled
    const hasValues = Object.values(loaded).some(v => v.trim())
    if (hasValues) setOpen(true)
  }, [])

  const handleChange = useCallback((field: keyof CustomerContext, value: string) => {
    setCtx(prev => {
      const next = { ...prev, [field]: value }
      return next
    })
  }, [])

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ctx))
    onContextChange?.(ctx)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    setCtx(EMPTY_CONTEXT)
    localStorage.removeItem(STORAGE_KEY)
    onContextChange?.(EMPTY_CONTEXT)
  }

  const filledCount = Object.values(ctx).filter(v => v.trim()).length
  const totalFields = Object.keys(EMPTY_CONTEXT).length

  return (
    <div className="border-b border-border/60 bg-muted/20">
      {/* Collapsed header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 md:px-6 py-2.5 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <UserCog className="h-4 w-4 text-[var(--harness-blue)] shrink-0" />
          <span className="text-xs font-semibold text-foreground">Customer Context</span>
          {filledCount > 0 && (
            <span className="text-[10px] bg-[var(--harness-blue)]/10 text-[var(--harness-blue)] px-1.5 py-0.5 rounded font-medium">
              {filledCount}/{totalFields} filled
            </span>
          )}
          {filledCount === 0 && (
            <span className="text-[10px] text-muted-foreground">
              — pre-fill variables across all prompts
            </span>
          )}
        </div>
        {open ? (
          <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        )}
      </button>

      {/* Expanded form */}
      {open && (
        <div className="px-4 md:px-6 pb-4">
          <p className="text-xs text-muted-foreground mb-3">
            Fill in your customer details once. These values auto-populate matching variables in every prompt you open.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="space-y-1">
              <Label className="text-xs">Company / Account</Label>
              <Input
                value={ctx.companyName}
                onChange={e => handleChange('companyName', e.target.value)}
                placeholder="e.g., Acme Corp"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Project Name</Label>
              <Input
                value={ctx.projectName}
                onChange={e => handleChange('projectName', e.target.value)}
                placeholder="e.g., payment-platform"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Primary Service</Label>
              <Input
                value={ctx.serviceName}
                onChange={e => handleChange('serviceName', e.target.value)}
                placeholder="e.g., checkout-service"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Pipeline Name</Label>
              <Input
                value={ctx.pipelineName}
                onChange={e => handleChange('pipelineName', e.target.value)}
                placeholder="e.g., deploy-prod"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Environment</Label>
              <Select value={ctx.environment} onValueChange={v => handleChange('environment', v)}>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Select env" />
                </SelectTrigger>
                <SelectContent>
                  {['development', 'staging', 'production', 'dr'].map(e => (
                    <SelectItem key={e} value={e} className="text-xs">{e}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Cloud Provider</Label>
              <Select value={ctx.cloudProvider} onValueChange={v => handleChange('cloudProvider', v)}>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Select cloud" />
                </SelectTrigger>
                <SelectContent>
                  {['AWS', 'GCP', 'Azure', 'Multi-cloud', 'On-premise'].map(c => (
                    <SelectItem key={c} value={c} className="text-xs">{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Team Name</Label>
              <Input
                value={ctx.teamName}
                onChange={e => handleChange('teamName', e.target.value)}
                placeholder="e.g., Platform Eng"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Repository</Label>
              <Input
                value={ctx.repoName}
                onChange={e => handleChange('repoName', e.target.value)}
                placeholder="e.g., github.com/org/repo"
                className="h-8 text-xs"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Button
              size="sm"
              onClick={handleSave}
              className={cn(
                'h-7 text-xs gap-1.5 transition-all',
                saved
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white'
              )}
            >
              {saved ? <><Check className="h-3 w-3" /> Saved</> : 'Save Context'}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleReset}
              className="h-7 text-xs gap-1.5 text-muted-foreground"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
