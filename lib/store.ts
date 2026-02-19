// Mutable in-memory prompt store.
// Initialized from static data. Admin CRUD changes are reflected here.
// Replace with Supabase for persistence across restarts.

import { Prompt } from './types'
import { SAMPLE_PROMPTS } from './data'

let prompts: Prompt[] = [...SAMPLE_PROMPTS]

export function getPrompts(): Prompt[] {
  return prompts
}

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find(p => p.id === id)
}

export function createPrompt(prompt: Omit<Prompt, 'id' | 'copyCount' | 'createdAt' | 'updatedAt'>): Prompt {
  const now = new Date().toISOString()
  const newPrompt: Prompt = {
    ...prompt,
    id: `prompt-${Date.now()}`,
    copyCount: 0,
    createdAt: now,
    updatedAt: now,
  }
  prompts = [newPrompt, ...prompts]
  return newPrompt
}

export function updatePrompt(id: string, updates: Partial<Omit<Prompt, 'id' | 'createdAt'>>): Prompt | null {
  const idx = prompts.findIndex(p => p.id === id)
  if (idx === -1) return null
  prompts[idx] = { ...prompts[idx], ...updates, updatedAt: new Date().toISOString() }
  return prompts[idx]
}

export function deletePrompt(id: string): boolean {
  const before = prompts.length
  prompts = prompts.filter(p => p.id !== id)
  return prompts.length < before
}

export function incrementCopyCount(id: string): void {
  const prompt = prompts.find(p => p.id === id)
  if (prompt) prompt.copyCount++
}
