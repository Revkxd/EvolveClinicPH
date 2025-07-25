'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Service {
  title: string
  desc: string
  image?: boolean
  src?: string
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
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-turq-shaded">{category}</h3>
        {services[currentIndex].image && services[currentIndex].src ? (
          <div className="flex justify-center items-center flex-grow min-h-0" style={{ minHeight: '18rem', maxHeight: '28rem' }}>
            <img
              src={services[currentIndex].src}
              alt={services[currentIndex].title}
              className="rounded-lg object-cover max-h-[26rem] w-auto shadow-md"
              style={{ maxWidth: '100%', maxHeight: '26rem' }}
            />
          </div>
        ) : (
          <>
            <h4 className="text-lg font-medium mb-2 text-turq">{services[currentIndex].title}</h4>
            <p className="mb-2">{services[currentIndex].desc}</p>
            {services[currentIndex].bulletList && services[currentIndex].bulletList.map((listItem, index) => (
              <li key={index} className="text-base">
                {listItem}
              </li>
            ))}
          </>
        )}
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
      </div>
    </div>
  )
}