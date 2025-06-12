type ServiceImage = {
  category: string
  images: string[] // Changed to array of images
}

export const serviceImages: ServiceImage[] = [
  {
    category: "Laser Procedures",
    images: [
      "/services/laser-procedures-1.jpg",
      "/services/laser-procedures-2.jpg",
      "/services/laser-procedures-3.jpg",
      "/services/laser-procedures-4.jpg",
    ],
  },
  {
    category: "Skin Resurfacing",
    images: [
      "/services/skin-resurfacing-1.jpg",
      "/services/skin-resurfacing-2.jpg",
      "/services/skin-resurfacing-3.jpg",
    ],
  },
  {
    category: "Hair Removal",
    images: ["/services/hair-removal-1.jpg", "/services/hair-removal-2.jpg"],
  },
  {
    category: "Acne Scars",
    images: ["/services/acne-scars-1.jpg", "/services/acne-scars-2.jpg", "/services/acne-scars-3.jpg"],
  },
  {
    category: "Wart Removal",
    images: ["/services/wart-removal-1.jpg", "/services/wart-removal-2.jpg"],
  },
  {
    category: "Injectables",
    images: ["/services/injectables-1.jpg", "/services/injectables-2.jpg", "/services/injectables-3.jpg"],
  },
  {
    category: "Toxin Injections",
    images: ["/services/toxin-injections-1.jpg", "/services/toxin-injections-2.jpg"],
  },
  {
    category: "Slimming and Contouring",
    images: [
      "/services/slimming-contouring-1.jpg",
      "/services/slimming-contouring-2.jpg",
      "/services/slimming-contouring-3.jpg",
    ],
  },
  {
    category: "Surgical Services",
    images: [
      "/services/surgical-services-1.jpg",
      "/services/surgical-services-2.jpg",
      "/services/surgical-services-3.jpg",
      "/services/surgical-services-4.jpg",
    ],
  },
]

// Function to get images for a specific category
export function getServiceImages(category: string): string[] {
  const service = serviceImages.find((s) => s.category === category)
  return service?.images || ["/services/default-service.jpg"]
}
