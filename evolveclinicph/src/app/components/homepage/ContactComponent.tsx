import { HomePageProps } from "@/types/props";
import FormHeader from "../FormHeader";

export default function ContactComponent({ isHomePage }: HomePageProps) {
  return (
    <section id="contact" className="px-4 py-6 pt-16">
      <FormHeader isHomePage={isHomePage} header="Contact Us" />
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">Phone: +63 917 875 4379</p>
            <p className="mb-2">Instagram: @evolveclinic.ph</p>
            <p className="mb-2">Address: Evolve Dermatology and Cosmetic Surgery 2nd floor WP Fuel Inc building (caltex) White Plains Quezon City</p>
          </div>
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
        </div>
      </div>
    </section>
  )
}