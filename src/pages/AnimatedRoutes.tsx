import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './HomePage'
import GreetingPage from './GreetingPage'
import SubjectsPage from './SubjectsPage'
import ProfilePage from './ProfilePage'
import TodoPage from './TodoPage'
import ProductsPage from '../products/ProductsPage'

const order = ['/', '/greeting', '/subjects', '/profile', '/todo', '/products']

export default function AnimatedRoutes() {
  const location = useLocation()
  const prevIndex = useRef(0)
  const [transition, setTransition] = useState<'forward' | 'back' | 'none'>('none')

  useEffect(() => {
    const cur = order.indexOf(location.pathname)
    const prev = prevIndex.current
    if (cur === -1 || prev === -1 || cur === prev) {
      setTransition('none')
    } else {
      setTransition(cur > prev ? 'forward' : 'back')
    }
    prevIndex.current = cur === -1 ? prev : cur
  }, [location.pathname])

  const cls =
    transition === 'forward'
      ? 'page-slide-forward'
      : transition === 'back'
        ? 'page-slide-back'
        : 'page-fade'

  return (
    <div key={location.pathname} className={`route-wrap ${cls}`}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}
