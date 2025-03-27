import { HomePageProps } from "@/types/props";
import FormHeader from "../FormHeader";

const CONTACT_INFO = {
  phone: "+63 917 875 4379",
  instagram: "@evolveclinic.ph",
  address: "Evolve Dermatology and Cosmetic Surgery 2nd floor WP Fuel Inc building (Caltex) White Plains Quezon City",
}

const MAP_COORDINATES = "14.602391926054954, 121.06896109587211"
const MAP_ZOOM = "18"

export default function ContactComponent({ isHomePage }: HomePageProps) {
  return (
    <section id="contact" className="px-4 py-6 pt-16">
      <FormHeader isHomePage={isHomePage} header="Contact Us" headerTextStyle="text-5xl" />
      <div className="max-w-3xl mx-auto">
        <div className={isHomePage ? "flex justify-center" : "grid md:grid-cols-2 gap-8"}>
          <div className="text-center">
            <p className="text-xl mb-2">
              <span className="font-semibold">Phone: </span>
              <span className="text-turq-shaded">{CONTACT_INFO.phone}</span>
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Instagram: </span>
              <span className="text-turq-shaded">{CONTACT_INFO.instagram}</span>
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Address: </span>
              <span className="text-turq-shaded">{CONTACT_INFO.address}</span>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-[400px] md:h-auto">
            <div className="relative w-full h-full min-h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(CONTACT_INFO.address)}&center=${MAP_COORDINATES}&zoom=${MAP_ZOOM}`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Evolve Clinic PH Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}