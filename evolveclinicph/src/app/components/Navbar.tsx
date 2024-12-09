'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isScrollingUp = prevScrollPos > currentScrollPos
      const isAtTop = currentScrollPos < 10

      setVisible(isScrollingUp || isAtTop)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className={`bg-turq-shaded shadow-lg fixed w-full z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image src="/logo-light.png" alt="Evolve Clinic PH Logo" width={120} height={120} />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/services" className="py-4 px-4 text-white text-3xl font-semibold hover:text-gray-300 transition duration-300">Services</Link>
            <Link href="/bookings" className="py-4 px-4 text-white text-3xl font-semibold hover:text-gray-300 transition duration-300">Bookings</Link>
            <Link href="/about" className="py-4 px-4 text-white text-3xl font-semibold hover:text-gray-300 transition duration-300">About Us</Link>
            <Link href="/contact" className="py-4 px-4 text-white text-3xl font-semibold hover:text-gray-300 transition duration-300">Contact Us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-10 h-10 text-white hover:text-gray-300"
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="/services" className="block py-2 px-5 text-xl text-white hover:text-gray-300 transition duration-300" onClick={closeMenu}>Services</Link>
        <Link href="/bookings" className="block py-2 px-5 text-xl text-white hover:text-gray-300 transition duration-300" onClick={closeMenu}>Bookings</Link>
        <Link href="/about" className="block py-2 px-5 text-xl text-white hover:text-gray-300 transition duration-300" onClick={closeMenu}>About Us</Link>
        <Link href="/contact" className="block py-2 px-5 text-xl text-white hover:text-gray-300 transition duration-300" onClick={closeMenu}>Contact Us</Link>
      </div>
    </nav>
  )
}