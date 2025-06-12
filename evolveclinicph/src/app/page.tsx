import WelcomeComponent from './components/homepage/WelcomeComponent'
import AboutComponent from './components/homepage/AboutComponent'
import FeaturedServices from './components/homepage/FeaturedServicesComponent'
import { featuredServices } from "./data/featured-services"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <WelcomeComponent />
      <FeaturedServices services={featuredServices} />
      <AboutComponent />
    </div>
  )
}