'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Service {
  title: string
  description: string
  addons?: string 
}

interface ServiceBoxProps {
  category: string
  services: Service[]
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ category, services }) => {
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
    <div className="bg-white p-4 rounded-lg shadow-md h-[450px] flex flex-col justify-between overflow-y-auto">
      <div>
        <h3 className="text-xl font-bold mb-2">{category}</h3>
        <h4 className="text-lg font-medium mb-2">{services[currentIndex].title}</h4>
        <p className="mb-2">{services[currentIndex].description}</p>
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
                index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
              } transition-colors duration-300`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          <button 
            onClick={prevService}
            className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextService}
            className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceBox