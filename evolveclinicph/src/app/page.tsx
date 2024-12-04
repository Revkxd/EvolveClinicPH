import WelcomeComponent from './components/homepage/WelcomeComponent'
import ServicesComponent from './components/homepage/ServicesComponent'
import BookingsComponent from './components/homepage/BookingsComponent'
import AboutComponent from './components/homepage/AboutComponent'
import ContactComponent from './components/homepage/ContactComponent'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <WelcomeComponent />
      <ServicesComponent />
      <BookingsComponent />
      <AboutComponent />
      <ContactComponent />
    </div>
  )
}