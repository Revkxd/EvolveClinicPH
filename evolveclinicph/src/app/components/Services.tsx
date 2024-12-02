const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Facial Treatments', 'Chemical Peels', 'Microdermabrasion', 'Laser Therapy', 'Botox Injections', 'Dermal Fillers'].map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services