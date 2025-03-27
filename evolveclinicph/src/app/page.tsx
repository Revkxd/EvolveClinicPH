import WelcomeComponent from './components/homepage/WelcomeComponent'
import ServicesComponent from './components/homepage/ServicesComponent'
import AboutComponent from './components/homepage/AboutComponent'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <WelcomeComponent />
      <ServicesComponent isHomePage={true} />
      <AboutComponent />
    </div>
  )
}