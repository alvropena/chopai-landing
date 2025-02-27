'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  h1: ({ ...props }) => (
    <h1 className="text-3xl font-bold mb-4" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="text-2xl font-bold mb-4" {...props} />
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-nav">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg md:text-xl font-semibold mb-2 text-nav">{children}</h4>
  ),
  p: ({ ...props }) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-primary underline hover:text-primary/80 transition-colors"
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
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 marker:text-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),
}

export function MdxContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <div className="prose dark:prose-invert prose-pre:bg-secondary prose-pre:border prose-pre:border-border max-w-none">
      <Component components={components} />
    </div>
  )
}