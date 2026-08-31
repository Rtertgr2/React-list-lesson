import { useState, useRef, type ReactNode, type MouseEvent } from 'react'

interface RippleButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  ariaLabel?: string
  title?: string
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export default function RippleButton({
  children,
  onClick,
  className = '',
  ariaLabel,
  title,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const idRef = useRef(0)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = idRef.current++
    setRipples((r) => [...r, { id, x, y, size }])
    // ลบ ripple หลังจบ animation
    window.setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id))
    }, 600)
    onClick?.()
  }

  return (
    <button
      className={`ripple-btn ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      title={title}
    >
      <span className="ripple-content">{children}</span>
      <span className="ripple-layer" aria-hidden="true">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple"
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}
      </span>
    </button>
  )
}
