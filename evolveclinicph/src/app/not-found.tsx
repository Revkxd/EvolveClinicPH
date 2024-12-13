import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <Image
          src="/primary-smalt-blue.png"
          alt="Evolve Clinic PH Logo"
          width={200}
          height={200}
          className="mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-8 text-turq-shaded">PAGE DOES NOT EXIST</h1>
        <Link 
          href="/" 
          className="bg-turq hover:bg-turq-shaded text-2xl text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}