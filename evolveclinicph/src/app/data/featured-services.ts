import type { FeaturedService } from "../components/homepage/FeaturedServicesComponent"

export const featuredServices: FeaturedService[] = [
  {
    id: "laser-procedures",
    name: "Laser Procedures",
    images: [
      "/services/goldenglow_1.jpg",
      "/services/goldrejuvenation_1.jpg",
    ],
    description:
      "Advanced laser treatments for skin rejuvenation, pigmentation correction, and more. Our state-of-the-art technology delivers exceptional results with minimal downtime.",
    link: "/services",
  },
  // {
  //   id: "skin-resurfacing",
  //   name: "Skin Resurfacing",
  //   images: [
  //     "/services/skin-resurfacing-1.jpg",
  //     "/services/skin-resurfacing-2.jpg",
  //     "/services/skin-resurfacing-3.jpg",
  //   ],
  //   description:
  //     "Revitalize your skin with our advanced resurfacing treatments. Perfect for addressing fine lines, uneven texture, and dullness for a smoother, more radiant complexion.",
  //   link: "/services",
  // },
  {
    id: "facials",
    name: "Facials",
    images: [
      "/services/facials.jpg",
    ],
    description:
      "Revitalize your skin with our advanced resurfacing treatments. Perfect for addressing fine lines, uneven texture, and dullness for a smoother, more radiant complexion.",
    link: "/services",
  },
  {
    id: "acne-scars",
    name: "Acne Scar Solutions",
    images: ["/services/microneedling_1.jpg", "/services/microneedling_2.jpg"],
    description:
      "Comprehensive treatments to address all types of acne scarring. Our customized approach combines multiple modalities for optimal results and skin renewal.",
    link: "/services",
  },
  {
    id: "injectables",
    name: "Premium Injectables",
    images: ["/services/revitacell_1.jpg", "/services/revitacell_2.jpg"],
    description:
      "Restore volume and reduce signs of aging with our premium injectable treatments. Administered by our expert medical professionals for natural-looking results.",
    link: "/services",
  },
  {
    id: "slimming",
    name: "Body Contouring",
    images: [
      "/services/contourcare.jpg",
      "/services/slimline_liquid_lipo.jpg",
    ],
    description:
      "Sculpt and define your body with our non-invasive and minimally invasive contouring treatments. Target stubborn fat and achieve your desired silhouette.",
    link: "/services",
  },
]