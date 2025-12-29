"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container flex h-14 items-center justify-between">
        <Link className="flex items-center" href="/">
          <span className="text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Junnystateofmind
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm transition-colors hover:text-foreground ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors hover:text-foreground ${
              pathname === "/about" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
