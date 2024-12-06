import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <Image
          src="/primary-smalt-blue.png"
          alt="Evolve Clinic PH Logo"
          width={200}
          height={200}
          className="mx-auto mb-8"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-8">PAGE DOES NOT EXIST</h1>
        <Link 
          href="/" 
          className="bg-turq hover:bg-turq-shaded text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}