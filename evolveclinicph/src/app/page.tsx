import WelcomeComponent from './components/WelcomeComponent'
import ServicesComponent from './components/ServicesComponent'
import BookingsComponent from './components/BookingsComponent'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'

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