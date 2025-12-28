"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link className="flex items-center" href="/">
            <span className="font-bold text-lg">민준의 개발 블로그</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition-colors notion-hover",
                pathname === "/" ? "bg-secondary font-medium" : "text-muted-foreground"
              )}
            >
              블로그
            </Link>
            <Link
              href="/about"
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition-colors notion-hover",
                pathname === "/about" ? "bg-secondary font-medium" : "text-muted-foreground"
              )}
            >
              소개
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
