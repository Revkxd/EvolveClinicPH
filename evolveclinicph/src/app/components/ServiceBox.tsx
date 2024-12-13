'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Service {
  title: string
  desc: string
  addons?: string 
}

interface ServiceBoxProps {
  category: string
  services: Service[]
}

export default function ServiceBox({ category, services }: ServiceBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const goToService = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="bg-teal-50 p-4 rounded-lg shadow-lg h-[450px] flex flex-col flex-shrink-0 justify-between overflow-y-auto w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
      <div>
        <h3 className="text-xl font-bold mb-2 text-turq-shaded">{category}</h3>
        <h4 className="text-lg font-medium mb-2 text-turq">{services[currentIndex].title}</h4>
        <p className="mb-2">{services[currentIndex].desc}</p>
        <p className="mb-2 font-semibold">
          {services[currentIndex]?.addons !== undefined ? `Add Ons: ${services[currentIndex].addons}` : ''}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToService(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-turq' : 'bg-gray-200'
              } transition-colors duration-300`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          <button 
            onClick={prevService}
            className={`p-1 rounded-full ${services.length <= 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-turq text-white hover:bg-turq-shaded'} transition duration-300`}
            aria-label="Previous service"
            disabled={services.length <= 1}  // Disable button if services length is <= 1
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextService}
            className={`p-1 rounded-full ${services.length <= 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-turq text-white hover:bg-turq-shaded'} transition duration-300`}
            aria-label="Next service"
            disabled={services.length <= 1}  // Disable button if services length is <= 1
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}