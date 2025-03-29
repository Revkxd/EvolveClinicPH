"use client"

import type React from "react"

import { useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ServiceBoxContainerProps {
  title: string
  children: ReactNode[]
}

export default function  ServiceBoxContainer({ title, children }: ServiceBoxContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length)
  }

  const chevronButtonStyle = "p-1 rounded-full bg-turq text-white hover:bg-turq-shaded transition duration-300 transform hover:scale-105"
  return (
    <div className="bg-teal-50 p-4 rounded-lg shadow-md w-full h-[640px] flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-2 text-turq-shaded">{title}</h3>
      <div className="h-5/6 overflow-y-auto mb-4 custom-scrollbar">{children[currentIndex]}</div>
      <div className="flex justify-between items-center">
        <button
          onClick={prevService}
          className={chevronButtonStyle}
          aria-label="Previous service group"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-turq" : "bg-gray-200"
              }`}
              aria-label={`Go to service group ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextService}
          className={chevronButtonStyle}
          aria-label="Next service group"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}