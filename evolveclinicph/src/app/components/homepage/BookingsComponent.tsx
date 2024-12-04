export default function BookingsComponent() {
  return (
    <section id="bookings" className="px-4 py-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Book an Appointment</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="service" className="block mb-2">Service</label>
          <select id="service" name="service" className="w-full p-2 border rounded" required>
            <option value="">Select a service</option>
            <option value="facial">Facial Treatment</option>
            <option value="peel">Chemical Peel</option>
            <option value="microderm">Microdermabrasion</option>
            <option value="laser">Laser Therapy</option>
            <option value="botox">Botox Injection</option>
            <option value="filler">Dermal Filler</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">Preferred Date</label>
          <input type="date" id="date" name="date" className="w-full p-2 border rounded" required />
        </div>
        <button type="submit" className="w-full bg-turq-shaded1 text-white p-2 rounded hover:bg-turq-shaded2 transition duration-300">Book Now</button>
      </form>
    </section>
  )
}