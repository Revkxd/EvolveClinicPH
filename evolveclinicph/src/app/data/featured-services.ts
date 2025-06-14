import type { FeaturedService } from "../components/homepage/FeaturedServicesComponent"

export const featuredServices: FeaturedService[] = [
  {
    id: "laser-procedures",
    name: "Laser Procedures",
    images: [
      "/services/goldenglow_1.webp",
      "/services/goldrejuvenation_1.webp",
    ],
    description:
      "Advanced laser treatments for skin rejuvenation, pigmentation correction, and more. Our state-of-the-art technology delivers exceptional results with minimal downtime.",
    link: "/services",
  },
  // {
  //   id: "skin-resurfacing",
  //   name: "Skin Resurfacing",
  //   images: [
  //     "/services/skin-resurfacing-1.webp",
  //     "/services/skin-resurfacing-2.webp",
  //     "/services/skin-resurfacing-3.webp",
  //   ],
  //   description:
  //     "Revitalize your skin with our advanced resurfacing treatments. Perfect for addressing fine lines, uneven texture, and dullness for a smoother, more radiant complexion.",
  //   link: "/services",
  // },
  {
    id: "facials",
    name: "Facials",
    images: [
      "/services/face_treatment.webp",
    ],
    description:
      "Indulge in our luxurious facial treatments designed to cleanse, exfoliate, and hydrate your skin. Tailored to your unique skin type for optimal results.",
    link: "/services",
  },
  {
    id: "acne-scars",
    name: "Acne Scar Solutions",
    images: ["/services/microneedling_1.webp", "/services/microneedling_2.webp"],
    description:
      "Comprehensive treatments to address all types of acne scarring. Our customized approach combines multiple modalities for optimal results and skin renewal.",
    link: "/services",
  },
  {
    id: "injectables",
    name: "Premium Injectables",
    images: ["/services/revitacell_1.webp", "/services/revitacell_2.webp"],
    description:
      "Restore volume and reduce signs of aging with our premium injectable treatments. Administered by our expert medical professionals for natural-looking results.",
    link: "/services",
  },
  {
    id: "slimming",
    name: "Body Contouring",
    images: [
      "/services/contourcare.webp",
      "/services/slimline_liquid_lipo.webp",
    ],
    description:
      "Sculpt and define your body with our non-invasive and minimally invasive contouring treatments. Target stubborn fat and achieve your desired silhouette.",
    link: "/services",
  },
]