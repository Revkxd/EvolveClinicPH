"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export interface FlipCardProps {
  frontImages: string[] // Changed to array of images
  imageAlt: string
  title: string
  children: React.ReactNode
  className?: string
  autoTransitionInterval?: number // Time in milliseconds between image transitions
}

export default function FlipCard({
  frontImages,
  imageAlt,
  title,
  children,
  className = "",
  autoTransitionInterval = 3000, // Default 3 seconds
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-transition images
  useEffect(() => {
    if (frontImages.length <= 1) return // Don't auto-transition if only one image

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % frontImages.length)
    }, autoTransitionInterval)

    return () => clearInterval(interval)
  }, [frontImages.length, autoTransitionInterval])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`perspective-1000 relative w-full h-[400px] cursor-pointer ${className}`}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleFlip()
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={`Flip card for ${title}`}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md overflow-hidden">
          <Image
            src={frontImages[currentImageIndex] || "/placeholder.svg"}
            alt={`${imageAlt} - ${currentImageIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />

          {/* Image indicators - only show if multiple images */}
          {frontImages.length > 1 && (
            <div className="absolute top-4 right-4 flex space-x-1">
              {frontImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <h3 className="text-xl font-semibold p-6 text-white">{title}</h3>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md p-6 flex flex-col rotate-y-180 overflow-hidden">
          <h3 className="text-xl font-semibold mb-4 text-turq">{title}</h3>
          <div className="overflow-y-auto flex-grow custom-scrollbar pr-2">{children}</div>
        </div>
      </motion.div>
    </div>
  )
}
