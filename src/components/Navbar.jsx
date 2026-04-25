import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Works', path: '/our-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Careers', path: '/careers' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="MGC Logo"
              className="h-16 w-auto object-contain"  
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact-us"
              className="px-6 py-2 bg-white text-blue-700 border-2 border-blue-900 hover:bg-blue-950 hover:text-white transition-colors duration-300 font-semibold"  
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

       {/* Mobile Navigation */}
{isOpen && (
  <div className="lg:hidden pb-4 border-t border-gray-200">
    {navLinks.map(link => (
      <Link
        key={link.path}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 text-center"
      >
        {link.name}
      </Link>
    ))}
    <Link
      to="/contact-us"
      onClick={() => setIsOpen(false)}
      className="block mx-4 mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold text-center"
    >
      Get Quote
    </Link>
  </div>
)}
      </div>
    </nav>
  )
}


