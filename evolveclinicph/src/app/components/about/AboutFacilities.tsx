"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const FACILITIES_TITLE = "Our Facilities"

// Manually define your facility images here
const FACILITY_IMAGES = [
  {
    src: "/facilities/Evolve_67.jpg",
    alt: "Evolve Clinic Reception Area",
  },
  {
    src: "/facilities/Evolve_RoomAR.jpg",
    alt: "State-of-the-Art Treatment Room A",
  },
  {
    src: "/facilities/Evolve_RoomBR.jpg",
    alt: "Room B",
  },
  {
    src: "/facilities/Evolve_TowelsR.jpg",
    alt: "_",
  },
  {
    src: "/facilities/m1.jpg",
    alt: "Machine 1",
  },
  {
    src: "/facilities/m2.jpg",
    alt: "Machine 2",
  },
  {
    src: "/facilities/m3.jpg",
    alt: "Machine 3",
  },
  {
    src: "/facilities/m4.jpg",
    alt: "Machine 4",
  },
  {
    src: "/facilities/m5.jpg",
    alt: "Machine 5",
  },
  {
    src: "/facilities/m6.jpg",
    alt: "Machine 6",
  },
  {
    src: "/facilities/m7.jpg",
    alt: "Machine 7",
  },
  {
    src: "/facilities/m8.jpg",
    alt: "Machine 8",
  },
]

export default function AboutFacilities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FACILITY_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + FACILITY_IMAGES.length) % FACILITY_IMAGES.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Setup auto-sliding
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, currentIndex])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const chevronButtonStyle = "absolute top-1/2 transform -translate-y-1/2 bg-turq/60 p-2 rounded-full shadow-md z-3 text-white hover:bg-turq-shaded transition-colors transform hover:scale-105"
  return (
    <section className="py-16 rounded-xl">
      <div className="max-w-3xl mx-auto px-4 rounded-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">{FACILITIES_TITLE}</h2>

        <div className="relative">
          <div
            className="relative h-72 sm:h-96 md:h-[500px] rounded-xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={FACILITY_IMAGES[currentIndex].src || "/placeholder.svg"}
              alt={FACILITY_IMAGES[currentIndex].alt}
              fill
              style={{objectFit: "contain"}}
              className="object-cover transition-opacity duration-500 rounded-3xl"
              priority={currentIndex === 0}
            />

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              className={`left-4 ${chevronButtonStyle}`}
              aria-label="Previous facility image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              className={`right-4 ${chevronButtonStyle}`}
              aria-label="Next facility image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {FACILITY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-turq" : "bg-gray-200"
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}