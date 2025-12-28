import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react"
import Header from "./components/header"

export const metadata: Metadata = {
  title: "민준의 개발 블로그",
  description: "AI 개발자 장민준의 기술 블로그 - AI, 머신러닝, 개발 이야기",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="container px-4 md:px-6">
            {children}
          </main>
          <footer className="border-t mt-16">
            <div className="container py-8 px-4 md:px-6">
              <p className="text-sm text-muted-foreground text-center">
                © 2024 장민준. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
