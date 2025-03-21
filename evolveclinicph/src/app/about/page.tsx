import AboutHero from "../components/about/AboutHero"
import AboutTeam from "../components/about/AboutTeam"
import AboutFacilities from "../components/about/AboutFacilities"
// import AboutTestimonials from "../components/about/AboutTestimonials"
import ContactComponent from "../components/homepage/ContactComponent"

export default function AboutPage() {
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