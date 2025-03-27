import Image from "next/image"

const TEAM_TITLE = "Meet Our Team"

const TEAM_MEMBERS = [
  {
    name: "Dr. Jacqueline Cua-Lim",
    role: "Ear, Nose, and Throat (ENT) - Head and Neck surgeon",
    bio: "Dr. Jacqueline Cua-Lim is an Ear, Nose, and Throat (ENT)- Head and Neck surgeon with specialized expertise in facial aesthetic surgery and cosmetic procedures. With a strong foundation in otolaryngology, Dr. Cua-Lim has dedicated years of advanced training and practice to enhancing patients’ facial features through both functional and aesthetic approaches.",
    image: "/doctors/DocCuaLim.webp",
  },
  {
    name: "Dr. Cristina Cuenca",
    role: "Medical and Cosmetic Dermatology",
    bio: `
    Dr. Cristina Cuenca specializes in both medical and cosmetic dermatology. After earning a medical degree she then pursued dermatology residency at the Southern Philippines Medical Center. She is board-certified by the Philippine Dermatological Society.
    As a board-certified dermatologist, 
    She offers comprehensive dermatologic services designed to address a wide range of skin conditions. Whether you’re seeking treatment for acne, eczema, or simply want to maintain healthy, youthful skin,  her team is there to help. 
    `,
    image: "/doctors/DocCuenca.webp",
  },
]

const cardOverflow = false

export default function AboutTeam() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">{TEAM_TITLE}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-[28rem] md:h-[30rem] lg:h-[32rem] w-full">
                <Image
                  src={member.image || "/blank.png"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className={`p-6 relative bg-white ${cardOverflow ? "-mt-[5rem]": ""} min-h-[12.5rem]`}>
                <div>
                  <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                  <p className="text-turq-shaded font-medium mb-3">{member.role}</p>
                </div>
                <p className="text-black text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}