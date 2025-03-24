import { HomePageProps } from "@/types/props";
import FormHeader from "../FormHeader";

export default function ContactComponent({ isHomePage }: HomePageProps) {
  return (
    <section id="contact" className="px-4 py-6 pt-16">
      <FormHeader isHomePage={isHomePage} header="Contact Us" headerTextStyle="text-5xl" />
      <div className="max-w-3xl mx-auto">
        <div className={isHomePage ? "flex justify-center" : "grid md:grid-cols-2 gap-8"}>
          <div className="text-center">
            <p className="text-xl mb-2">
              <span className="font-semibold">Phone: </span>
              <span className="text-turq-shaded">+63 917 875 4379</span>
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Instagram: </span>
              <span className="text-turq-shaded">@evolveclinic.ph</span>
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Address: </span>
              <span className="text-turq-shaded">Evolve Dermatology and Cosmetic Surgery 2nd floor WP Fuel Inc building (Caltex) White Plains Quezon City</span>
            </p>
          </div>
          {
            isHomePage ? '' :
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
              </div>
              <button type="submit" className="w-full bg-turq text-white p-2 rounded hover:bg-turq-shaded transition duration-300">Send Message</button>
            </form>
          }
        </div>
      </div>
    </section>
  )
}