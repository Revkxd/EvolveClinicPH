'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ExpandedService {
  title: string,
  formerName: string,
  desc: string,
  duration: string,
  expectation: string,
  reasoning: string,
  enhancement: string
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
    <div className="bg-teal-50 p-4 rounded-lg shadow-md h-[500px] flex flex-col justify-between">
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        <h3 className="text-xl font-bold mb-2 text-turq-shaded">{category}</h3>
        <h4 className="text-lg font-medium mb-2 text-turq">{services[currentIndex].title}</h4>
        <p className="mb-2">{services[currentIndex].desc}</p>
        <p className="mb-2">
          <span className="font-semibold">Former Name: </span>
          <span>{services[currentIndex].formerName}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Duration: </span>
          <span>{services[currentIndex].duration}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Expectation: </span>
          <span>{services[currentIndex].expectation}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Reasoning: </span>
          <span>{services[currentIndex].reasoning}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Enhancement: </span>
          <span>{services[currentIndex].enhancement}</span>
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
            className="p-1 rounded-full bg-turq text-white hover:bg-turq-shaded transition duration-300"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextService}
            className="p-1 rounded-full bg-turq text-white hover:bg-turq-shaded transition duration-300"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}