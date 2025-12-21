import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MuiThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authentication Assignment',
  description: 'Login and Signup pages with validation',
}

/**
 * Root layout component that wraps the entire application
 * Sets up MUI theme provider and global styles
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  )
}
