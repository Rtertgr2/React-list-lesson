import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const links = [
  { to: '/', label: 'หน้าแรก', end: true },
  { to: '/greeting', label: 'Greeting' },
  { to: '/subjects', label: 'วิชา' },
  { to: '/profile', label: 'Profile' },
  { to: '/todo', label: 'Todo' },
  { to: '/products', label: 'Products' },
]

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <span className="navbar-brand">
        React<span className="dot">.</span>Notebook
      </span>
      <div className="navbar-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {l.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  )
}
