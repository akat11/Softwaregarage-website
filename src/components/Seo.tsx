import { useEffect } from 'react'

interface Props {
  title: string
  description: string
}

/**
 * Sets document title + meta description per route. Restores the previous
 * values on unmount so navigating away never leaves stale metadata behind.
 */
export default function Seo({ title, description }: Props) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    const prevDescription = meta?.getAttribute('content') ?? ''

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)

    return () => {
      document.title = prevTitle
      meta?.setAttribute('content', prevDescription)
    }
  }, [title, description])

  return null
}
