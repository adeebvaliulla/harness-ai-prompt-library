import { NextRequest, NextResponse } from 'next/server'
import { getPrompts, createPrompt, updatePrompt, deletePrompt, incrementCopyCount } from '@/lib/store'
import { MODULES } from '@/lib/data'

export async function GET() {
  return NextResponse.json(getPrompts())
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (body.action === 'copy') {
      // Increment copy count in store
      incrementCopyCount(body.promptId)
      return NextResponse.json({ ok: true })
    }

    // Create new prompt
    const { title, content, variables, tags, subUseCaseId, subUseCaseTitle, useCaseId, useCaseTitle, moduleId } = body

    if (!title || !content || !moduleId) {
      return NextResponse.json({ error: 'title, content, and moduleId are required' }, { status: 400 })
    }

    const mod = MODULES.find(m => m.id === moduleId)
    if (!mod) return NextResponse.json({ error: 'Invalid moduleId' }, { status: 400 })

    const prompt = createPrompt({
      title,
      content,
      variables: variables ?? [],
      tags: tags ?? [],
      subUseCaseId: subUseCaseId ?? '',
      subUseCaseTitle: subUseCaseTitle ?? '',
      useCaseId: useCaseId ?? '',
      useCaseTitle: useCaseTitle ?? '',
      moduleId,
      moduleTitle: mod.name,
      moduleColor: mod.color,
    })

    return NextResponse.json(prompt, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { id, ...updates } = body
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })

    const updated = updatePrompt(id, updates)
    if (!updated) return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })

    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })

    const ok = deletePrompt(id)
    if (!ok) return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
