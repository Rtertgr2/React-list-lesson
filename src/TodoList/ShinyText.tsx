import './ShinyText.css'

interface ShinyTextProps {
  text: string
  color?: string
  shineColor?: string
  speed?: number
  delay?: number
  spread?: number
  direction?: 'left' | 'right'
  disabled?: boolean
  className?: string
}

export default function ShinyText({
  text,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  speed = 2,
  delay = 0,
  spread = 120,
  direction = 'left',
  disabled = false,
  className = '',
}: ShinyTextProps) {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        color,
        backgroundImage: disabled
          ? 'none'
          : `linear-gradient(110deg, ${color} ${100 - spread}%, ${shineColor} 50%, ${color} ${100 + spread}%)`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`,
        WebkitTextFillColor: disabled ? color : 'transparent',
      }}
      data-direction={direction}
    >
      {text}
    </span>
  )
}
