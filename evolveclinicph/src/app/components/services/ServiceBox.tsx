'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FlipCard from '../FlipCard'

interface Service {
  title: string
  desc: string
  bulletList?: string[]
}

interface ServiceBoxProps {
  category: string
  services: Service[]
  maxHeight?: string
}

const chevronButtonStyle = "p-1 rounded-full bg-turq text-white hover:bg-turq-shaded transition duration-300 transform hover:scale-105"

export default function ServiceBox({ category, services, maxHeight }: ServiceBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = ["https://images.unsplash.com/photo-1565884280295-98eb83e41c65?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D"];

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
    <div className={`service-box bg-teal-50 p-4 rounded-lg shadow-lg ${maxHeight ? `h-[${maxHeight}]` : "h-[36rem]"} flex flex-col flex-shrink-0 justify-between overflow-y-auto w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]`}>
      {/* <div>
        <h3 className="text-xl font-bold mb-2 text-turq-shaded">{category}</h3>
        <h4 className="text-lg font-medium mb-2 text-turq">{services[currentIndex].title}</h4>
        <p className="mb-2">{services[currentIndex].desc}</p>
        {services[currentIndex].bulletList && services[currentIndex].bulletList.map((listItem, index) => (
          <li key={index} className="text-base">
            {listItem}
          </li>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-2">
          {services.length > 1 && services.map((_, index) => (
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
            className={chevronButtonStyle}
            aria-label="Previous service"
            hidden={services.length <= 1}  // Disable button if services length is <= 1
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextService}
            className={chevronButtonStyle}
            aria-label="Next service"
            hidden={services.length <= 1}  // Disable button if services length is <= 1
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div> */}
      <FlipCard
        frontImages={images}
        imageAlt={`${category} services`}
        title={category}
        autoTransitionInterval={4000} // 4 seconds between transitions
      >
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-medium mb-1">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </FlipCard>
    </div>
  )
}