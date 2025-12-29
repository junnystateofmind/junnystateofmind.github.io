import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react"
import Header from "./components/header"

export const metadata: Metadata = {
  title: "Junnystateofmind",
  description: "AI Agent Developer 장민준의 기술 블로그",
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
