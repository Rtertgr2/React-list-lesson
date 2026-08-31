import { useEffect, useState } from 'react'

function getInitial(): 'light' | 'dark' {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={theme === 'light' ? 'เปลี่ยนเป็นโหมดมืด' : 'เปลี่ยนเป็นโหมดสว่าง'}
      title={theme === 'light' ? 'โหมดสว่าง' : 'โหมดมืด'}
    >
      {theme === 'light' ? '🌙' : '☀'}
    </button>
  )
}
