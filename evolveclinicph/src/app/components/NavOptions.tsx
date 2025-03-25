"use client"

import type { NavOptionsProps } from "@/types/props"
import Link from "next/link"

export default function NavOptions({ classes, onClickFunction, buttonStyle, excludeContact }: NavOptionsProps) {
  // Regular nav links
  const regularLinks = [
    { href: "/services", label: "services", text: "Services" },
    { href: "/bookings", label: "appointment bookings", text: "Bookings" },
    { href: "/about", label: "about", text: "About Us" },
  ]

  // Contact link (will be styled as a button)
  const contactLink = { href: "/contact", label: "contact info", text: "Contact Us" }

  return (
    <>
      {/* Regular navigation links */}
      {regularLinks.map((link) => (
        <Link
          key={link.href}
          aria-label={link.label}
          href={link.href}
          className={classes}
          onClick={onClickFunction || undefined}
        >
          {link.text}
        </Link>
      ))}

      {/* Contact Us button */}
      {!excludeContact && (
        <Link
          aria-label={contactLink.label}
          href={contactLink.href}
          className={buttonStyle || classes}
          onClick={onClickFunction || undefined}
        >
          {contactLink.text}
        </Link>
      )}
    </>
  )
}