import type React from "react"

interface BulletedServiceBoxProps {
  category: string
  services: string[]
}

export default function BulletedServiceBox({ category, services }: BulletedServiceBoxProps) {
  return (
    <div className="bg-teal-50 p-4 rounded-lg shadow-md flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] mx-2 overflow-y-auto">
      <h3 className="text-xl font-bold mb-2 text-turq-shaded">{category}</h3>
      <ul className="list-disc list-inside pl-4 space-y-2 mb-2">
        {services.map((service, index) => (
          <li key={index} className="text-base">
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}