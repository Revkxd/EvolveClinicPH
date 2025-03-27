import AboutHero from "../about/AboutHero"
import AboutTeam from "../about/AboutTeam"
import AboutFacilities from "../about/AboutFacilities"
// import AboutTestimonials from "../about/AboutTestimonials"
import ContactComponent from "../homepage/ContactComponent"

export default function AboutComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AboutHero />
      <AboutTeam />
      <AboutFacilities />
      {/* <AboutTestimonials /> */}
      <ContactComponent isHomePage={false} />
    </div>
  )
}