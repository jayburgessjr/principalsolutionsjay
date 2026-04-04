import { useEffect } from 'react'

function setOrCreateMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function setOrCreateLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function usePageMeta({ title, description, image = '/og-image.png' }) {
  useEffect(() => {
    const url = window.location.href
    const imageUrl = new URL(image, window.location.origin).href

    document.title = title

    setOrCreateMeta('meta[name="description"]', { name: 'description', content: description })
    setOrCreateMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setOrCreateMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setOrCreateMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    setOrCreateMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    setOrCreateMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setOrCreateMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    setOrCreateMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    setOrCreateLink('canonical', url)
  }, [description, image, title])
}
