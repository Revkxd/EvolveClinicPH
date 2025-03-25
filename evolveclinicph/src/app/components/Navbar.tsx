'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavOptions from './NavOptions'

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

  const desktopButtonStyle = "py-3 px-6 ml-2 bg-white text-turq text-2xl font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
  const mobileButtonStyle = "py-2 px-4 bg-white text-turq text-lg font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-md"

  return (
    <nav className={`bg-turq shadow-lg fixed w-full z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`} aria-label='primary menu'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2" aria-label='home'>
                <Image src="/primary-light.webp" alt="Evolve Clinic PH Logo" width={130} height={130} priority />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <NavOptions
              classes="py-4 px-4 text-white text-3xl font-semibold hover:text-gray-300 transition duration-300"
              buttonStyle={desktopButtonStyle}
            />
          </div>
          <div className="md:hidden flex items-center space-x-3">
            <Link href="/contact" aria-label="contact info" className={mobileButtonStyle}>
              Contact Us
            </Link>

            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-10 h-10 text-white hover:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-turq-lighterdefault`}>
        <NavOptions
          classes="block py-2 px-5 text-xl text-white hover:text-gray-300 transition duration-300"
          onClickFunction={closeMenu}
          buttonStyle={mobileButtonStyle}
          excludeContact={true}
        />
      </div>
    </nav>
  )
}