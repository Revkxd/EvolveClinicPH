"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export interface FeaturedService {
  id: string
  name: string
  images: string[]
  description: string
  link: string
}

interface FeaturedServicesProps {
  services: FeaturedService[]
  autoRotateInterval?: number // milliseconds
}

export default function FeaturedServices({ services, autoRotateInterval = 5000 }: FeaturedServicesProps) {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const currentService = services[currentServiceIndex]

  // Auto-rotate between services
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
      setCurrentImageIndex(0) // Reset image index when changing service
    }, autoRotateInterval)

    return () => clearInterval(serviceInterval)
  }, [services.length, autoRotateInterval])

  // Auto-rotate between images within a service
  useEffect(() => {
    if (currentService.images.length <= 1) return

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentService.images.length)
    }, 2500) // Faster than service rotation

    return () => clearInterval(imageInterval)
  }, [currentService, currentServiceIndex])

  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] rounded-xl overflow-hidden shadow-2xl">
          {/* Service indicators */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentServiceIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Service content with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentServiceIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              {/* Image */}
              <Image
                src={currentService.images[currentImageIndex] || "/placeholder.svg"}
                alt={currentService.name}
                fill
                className="object-cover"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Service info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-white">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6"
                >
                  {currentService.name}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 lg:mb-10 max-w-4xl"
                >
                  {currentService.description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link
                    href={currentService.link}
                    className="inline-block bg-turq text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full shadow-md font-medium text-lg lg:text-xl transition-all duration-300 hover:bg-turq-shaded hover:shadow-lg transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>

              {/* Image indicators - only if multiple images */}
              {currentService.images.length > 1 && (
                <div className="absolute top-6 right-6 flex space-x-2">
                  {currentService.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Services button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="bg-turq text-white px-8 py-4 rounded-full shadow-md font-medium text-xl transition-all duration-300 hover:bg-turq-shaded hover:shadow-lg transform hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}