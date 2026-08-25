import { useEffect, useRef } from 'react'

/**
 * Adds the "is-visible" class to an element once it scrolls into view.
 * Pairs with the .reveal / .reveal.is-visible classes in index.css.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
