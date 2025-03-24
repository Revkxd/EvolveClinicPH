import WelcomeComponent from './components/homepage/WelcomeComponent'
import ServicesComponent from './components/homepage/ServicesComponent'
// import BookingsComponent from './components/homepage/BookingsComponent'
import AboutComponent from './components/homepage/AboutComponent'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <WelcomeComponent />
      <ServicesComponent isHomePage={true} />
      {/* <BookingsComponent isHomePage={true} /> */}
      <AboutComponent />
    </div>
  )
}