import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/classes', label: 'Classes' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" className="h-8 w-8" alt="PulseFit" />
          <span className="font-black text-xl tracking-tight">PulseFit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-white ${isActive ? 'text-white' : 'text-gray-300'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/membership" className="btn btn-ghost">View Plans</Link>
          <Link to="/contact" className="btn btn-primary">Join Now</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur border-t border-white/5 flex flex-col px-4 py-2 gap-2">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium hover:text-white ${isActive ? 'text-white' : 'text-gray-300'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/membership"
            className="btn btn-ghost mt-2"
            onClick={() => setOpen(false)}
          >
            View Plans
          </Link>
          <Link
            to="/contact"
            className="btn btn-primary mt-2"
            onClick={() => setOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  )
}
