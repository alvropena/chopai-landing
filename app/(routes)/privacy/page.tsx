import { allLegals } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MdxContent } from '@/components/mdx-content'

export default function PrivacyPage() {
  const privacy = allLegals.find((doc) => doc._raw.sourceFileName === 'privacy.mdx')
  
  if (!privacy) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <MdxContent code={privacy.body.code} />
    </div>
  )
}
