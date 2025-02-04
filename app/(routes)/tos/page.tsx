import { allLegals } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MdxContent } from '@/components/mdx-content'

export default function TermsOfServicePage() {
  const terms = allLegals.find((doc) => doc._raw.sourceFileName === 'tos.mdx')
  
  if (!terms) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <MdxContent code={terms.body.code} />
    </div>
  )
}
