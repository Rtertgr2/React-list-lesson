import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ตั้ง theme ก่อน render เพื่อไม่ให้กระพริบ (no flash)
const saved = localStorage.getItem('theme')
const initial = saved === 'dark' || saved === 'light' ? saved : 'light'
document.documentElement.setAttribute('data-theme', initial)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
