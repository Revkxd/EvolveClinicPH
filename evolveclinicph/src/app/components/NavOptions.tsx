import { NavOptionsProps } from "@/types/props";
import Link from "next/link";

export default function NavOptions({ classes, onClickFunction }: NavOptionsProps) {
  return (
    <>
      <Link aria-label='services' href="/services" className={classes} onClick={onClickFunction || undefined}>Services</Link>
      <Link aria-label='appointment bookings' href="/bookings" className={classes} onClick={onClickFunction || undefined}>Bookings</Link>
      <Link aria-label='about' href="/about" className={classes} onClick={onClickFunction || undefined}>About Us</Link>
      <Link aria-label='contact info' href="/contact" className={classes} onClick={onClickFunction || undefined}>Contact Us</Link>
    </>
  )
}