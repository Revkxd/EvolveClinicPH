export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-turq text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Evolve Clinic PH. All rights reserved.</p>
      </div>
    </footer>
  )
}