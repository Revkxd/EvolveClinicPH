export default function ContactComponent() {
  return (
    <section id="contact" className="px-4 py-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">Phone: +63 123 456 7890</p>
            <p className="mb-2">Email: info@evolveclinicph.com</p>
            <p className="mb-2">Address: 123 Main Street, Makati City, Philippines</p>
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
            <button type="submit" className="w-full bg-turq-shaded1 text-white p-2 rounded hover:bg-turq-shaded2 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}