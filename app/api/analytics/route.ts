import { NextRequest, NextResponse } from 'next/server'
import { trackEvent, getAnalyticsSummary } from '@/lib/analytics'

export async function GET() {
  const summary = getAnalyticsSummary()
  return NextResponse.json(summary)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, promptId, moduleId, searchQuery, resultCount } = body

    if (!['copy', 'search', 'view'].includes(type)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 })
    }

    trackEvent({ type, promptId, moduleId, searchQuery, resultCount })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
