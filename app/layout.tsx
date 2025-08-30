import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Numan Razzaq - Frontend Developer",
  description:
    "Frontend Developer with expertise in React, TypeScript, and modern web technologies. Building interactive web applications and user-centric solutions.",
  keywords: ["Frontend Developer", "React", "TypeScript", "JavaScript", "Web Development", "Numan Razzaq"],
  authors: [{ name: "Numan Razzaq" }],
  creator: "Numan Razzaq",
  openGraph: {
    title: "Numan Razzaq - Frontend Developer",
    description: "Frontend Developer specializing in React and TypeScript applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
