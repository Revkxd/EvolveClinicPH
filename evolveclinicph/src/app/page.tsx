import Welcome from './components/Welcome'
import Services from './components/Services'
import Bookings from './components/Bookings'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Welcome />
      <Services />
      <Bookings />
      <About />
      <Contact />
    </div>
  )
}