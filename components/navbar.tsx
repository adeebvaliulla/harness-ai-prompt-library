'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex h-14 items-center px-4 md:px-6 gap-4">
        {/* Logo + title */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/harness-logo.svg"
            alt="Harness"
            width={28}
            height={28}
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-sm text-foreground tracking-tight">
              Harness AI
            </span>
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
              Prompt Library
            </span>
          </div>
        </Link>

        <div className="flex-1" />

        {/* Nav actions */}
        <nav className="flex items-center gap-1">
          <Button
            asChild
            variant={isAdmin ? 'ghost' : 'ghost'}
            size="sm"
            className={cn(
              'gap-1.5 text-muted-foreground',
              !isAdmin && 'text-foreground'
            )}
          >
            <Link href="/">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Browse</span>
            </Link>
          </Button>
          <Button
            asChild
            variant={isAdmin ? 'default' : 'outline'}
            size="sm"
            className={cn('gap-1.5', isAdmin && 'bg-[var(--harness-blue)] hover:bg-[var(--harness-blue-dark)] text-white border-0')}
          >
            <Link href="/admin">
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
