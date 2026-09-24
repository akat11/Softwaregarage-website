import { useEffect } from 'react'
import { headTags, jsonLd, type PageMeta } from '@/data/seo'
import type { Project } from '@/data/projects'

interface Props {
  meta: PageMeta
  /** Pass on case-study pages to add CreativeWork structured data. */
  project?: Project
}

/**
 * Swaps the page's <head> SEO tags on client-side navigation. Every managed
 * tag carries `data-seo`, including the ones the build prerenders into each
 * route's HTML, so we can drop the previous page's set wholesale.
 */
export default function Seo({ meta, project }: Props) {
  useEffect(() => {
    document.title = meta.title
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())

    for (const { tag, attrs } of headTags(meta)) {
      const el = document.createElement(tag)
      for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
      el.setAttribute('data-seo', '')
      document.head.appendChild(el)
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo', '')
    script.textContent = JSON.stringify(jsonLd(meta, project))
    document.head.appendChild(script)
  }, [meta, project])

  return null
}
