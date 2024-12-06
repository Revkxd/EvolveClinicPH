import { HomePageProps } from "@/types/props";
import Image from "next/image";

export default function FormHeader({ isHomePage, header }: HomePageProps) {
  return (
    <>
    <div className={`flex ${isHomePage ? 'flex-row' : 'flex-col'} items-center justify-center`}>
      {isHomePage ? 
        <Image src="/logo-smalt-blue.png" alt="Evolve Clinic PH Logo" width={90} height={90} className="mr-4 mb-4"/> :
        <Image src="/secondary-smalt-blue.png" alt="Evolve Clinic PH Logo" width={300} height={300} className="mr-4 mb-4"/>
      }
      <h2 className="text-5xl font-bold mb-8 text-center">{header}</h2>
    </div>
    </>
  );
}