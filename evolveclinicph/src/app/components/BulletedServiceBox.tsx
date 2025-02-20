import type React from "react"

interface BulletedServiceBoxProps {
  category: string
  services: string[]
}

export default function BulletedServiceBox({ category, services }: BulletedServiceBoxProps) {
  return (
    <div className="sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] mx-2 overflow-y-auto scrollbar-none">
      <h3 className="text-lg font-bold mb-2 text-turq-shaded">{category}</h3>
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