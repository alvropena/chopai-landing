'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-6">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold mb-3">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-semibold mb-2">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-relaxed">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-blue-500 underline hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-outside ml-6 mb-4 space-y-2 marker:text-foreground">
      {children}
    </ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),
}

export function MdxContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)

  return (
    <div className="prose dark:prose-invert prose-pre:bg-secondary prose-pre:border prose-pre:border-border max-w-none">
      <MDXContent components={components} />
    </div>
  )
}