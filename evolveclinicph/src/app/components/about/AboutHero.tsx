const HERO_TITLE = "Why Choose Evolve?"

const HERO_CONTENT = [
  {
    title: "Expert Medical Background",
    description:
      "We pride ourselves with a highly competent medical team. Our doctors have undergone rigorous training coupled with board-certification in their field of specialty. Our team is dynamic and constantly evolving through continuous education in the latest advancements in dermatology and cosmetic surgery to ensure that you receive state-of-the-art care tailored to your needs.",
  },
  {
    title: "Comprehensive Care",
    description:
      "Whether you need a medical treatment, an aesthetic procedure or a surgical intervention, we offer a broad range of services under one roof.",
  },
  {
    title: "Result Driven",
    description:
      "We ensure natural-looking outcomes that complement the unique features of the Asian profile, never overdone but always enhancing one's natural beauty.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "We take pride in building lasting relationships with our patients, ensuring you feel heard, informed, and confident in your treatment decisions.",
  },
  {
    title: "Comfortable Environment",
    description:
      "We provide a relaxing, welcoming and supportive atmosphere, with a team that is committed to making every visit a positive experience.",
  },
]

export default function AboutHero() {
  // Separate the first item (Expert Medical Background) from the rest
  const [firstItem, ...otherItems] = HERO_CONTENT

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-5xl font-bold mb-8 text-center text-black">{HERO_TITLE}</h1>

        <div className="grid grid-cols-1 gap-3">
          {/* First item spans full width */}
          <div className="bg-teal-50 p-6 rounded-xl shadow-md h-full flex flex-col">
            <h3 className="text-xl font-semibold text-turq-shaded mb-2">{firstItem.title}</h3>
            <p className="text-black flex-grow">{firstItem.description}</p>
          </div>

          {/* Grid for the remaining items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {otherItems.map((item, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-xl shadow-md h-full flex flex-col">
                <h3 className="text-xl font-semibold text-turq-shaded mb-2">{item.title}</h3>
                <p className="text-black flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}