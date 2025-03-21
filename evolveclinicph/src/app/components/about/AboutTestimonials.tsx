import Image from "next/image"

const testimonials = [
  {
    quote:
      "\"Evolve Clinic has completely transformed my skin. After struggling with acne for years, their personalized treatment plan has given me the clear skin I've always wanted.\"",
    name: "Michelle L.",
    location: "Makati City",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "\"The team at Evolve Clinic is exceptional. They're knowledgeable, professional, and truly care about their patients. I wouldn't trust my skin with anyone else.\"",
    name: "Carlos G.",
    location: "Quezon City",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "\"I was nervous about getting laser treatments, but the doctors at Evolve made me feel comfortable and explained everything thoroughly. The results are amazing!\"",
    name: "Sofia R.",
    location: "Pasig City",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const AboutTestimonials = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTestimonials