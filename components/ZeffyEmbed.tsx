'use client'

import { useEffect } from 'react'

export default function ZeffyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.zeffy.com/embed/v2/zeffy-embed.js'
    script.onerror = () => {
      document.querySelectorAll('[data-zeffy-embed-fallback]').forEach((el) => {
        ;(el as HTMLElement).style.display = 'block'
        el.querySelectorAll('iframe[data-zeffy-embed-src]').forEach((f) => {
          ;(f as HTMLIFrameElement).src = f.getAttribute('data-zeffy-embed-src') ?? ''
        })
      })
    }
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      {/* Primary Zeffy embed */}
      <div
        data-zeffy-embed
        data-form-url="/embed/donation-form/donate-to-change-lives-29144"
      />
      {/* Fallback iframe if the script fails to load */}
      <div data-zeffy-embed-fallback style={{ display: 'none' }}>
        <div style={{ position: 'relative', overflow: 'hidden', height: '450px', width: '100%' }}>
          <iframe
            title="Donation form powered by Zeffy"
            style={{
              position: 'absolute',
              border: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
            data-zeffy-embed-src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-29144"
            allow="payment"
          />
        </div>
      </div>
    </div>
  )
}
