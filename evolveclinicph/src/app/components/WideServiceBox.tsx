'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ExpandedService {
  title: string,
  desc: string,
  bulletList?: string[]
}

interface WideServiceBoxProps {
  category: string
  services: ExpandedService[]
}

export default function WideServiceBox({ category, services }: WideServiceBoxProps) {
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
    <div className="bg-teal-50 p-4 rounded-lg shadow-md h-[36rem] flex flex-col justify-between">
      <div className="overflow-y-auto custom-scrollbar">
        <h3 className="text-xl font-bold mb-2 text-turq-shaded">{category}</h3>
        <h4 className="text-lg font-medium mb-2 text-turq">{services[currentIndex].title}</h4>
        <p className="mb-2">{services[currentIndex].desc}</p>
        <ul className="list-disc list-inside pl-4 space-y-2 mb-2">
        {services[currentIndex].bulletList && services[currentIndex].bulletList.map((listItem, index) => (
          <li key={index} className="text-base">
            {listItem}
          </li>
        ))}
      </ul>
      </div>
      <div className="flex flex-col items-center space-y-4 pt-4">
        <div className="flex justify-center space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToService(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-turq' : 'bg-gray-200'
              } transition-colors duration-300`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          <button 
            onClick={prevService}
            className="p-1 rounded-full bg-turq text-white hover:bg-turq-shaded transition duration-300 transform hover:scale-105"
            aria-label="Previous service"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextService}
            className="p-1 rounded-full bg-turq text-white hover:bg-turq-shaded transition duration-300 transform hover:scale-105"
            aria-label="Next service"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}