import './globals.css'
import { Inter, Fraunces } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'Aveek Girigoswami - Product Manager & AI Workflow Builder',
  description: 'Product Manager and engineer focused on building practical AI systems that drive business outcomes. Specializing in agentic workflows with LLMs and real-time APIs.',
  keywords: 'Product Manager, AI, Machine Learning, Agentic Workflows, LLM, Amazon, Pune',
  authors: [{ name: 'Aveek Girigoswami' }],
  openGraph: {
    title: 'Aveek Girigoswami - Product Manager & AI Workflow Builder',
    description: 'Product Manager and engineer focused on building practical AI systems that drive business outcomes.',
    url: 'https://aveek.dev',
    siteName: 'Aveek Girigoswami Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-cream text-ink`}>{children}</body>
    </html>
  )
} 