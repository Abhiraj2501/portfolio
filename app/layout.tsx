import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer Portfolio | Full Stack Developer",
  description:
    "Professional portfolio showcasing modern web development skills, projects, and experience in React, Next.js, TypeScript, and more.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "full stack"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Developer Portfolio | Full Stack Developer",
    description: "Professional portfolio showcasing modern web development skills and projects.",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Full Stack Developer",
    description: "Professional portfolio showcasing modern web development skills and projects.",
    creator: "@yourusername",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
