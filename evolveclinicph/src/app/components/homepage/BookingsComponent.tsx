import { HomePageProps } from "@/types/props";
import FormHeader from "../FormHeader";

interface ServiceOption {
  key: string;
  name: string;
}

const allServices: ServiceOption[] = [
  {
    key: 'expressglow',
    name: 'Evolve Express Glow'
  },
  {
    key: 'timerewind',
    name: 'Evolve Time Rewind Facial '
  },
  {
    key: 'radiancereveal',
    name: 'Evolve Radiance Reveal Facial'
  },
  {
    key: 'clearconfidence',
    name: 'Evolve Clear Confidence Facial'
  },
  {
    key: 'hydraperfection',
    name: 'Evolve Hydra Perfection Facial '
  },
  {
    key: 'cellrenewal',
    name: 'Evolve Cellular Renewal Facial'
  },
  {
    key: 'carbonpure',
    name: 'Carbon Pure (Carbon Laser) | Laser Procedures'
  },
  {
    key: 'puretone',
    name: 'Pure Tone (Laser Toning) | Laser Procedures'
  },
  {
    key: 'purefade',
    name: 'Pure Fade | Laser Procedures'
  },
  {
    key: 'pureerase',
    name: 'Pure Erase (Tattoo Removal | Laser Procedures'
  },
  {
    key: 'goldenglow',
    name: 'Golden Glow | Laser Procedures'
  },
  {
    key: 'yellowlaser',
    name: 'Yellow Laser (Red Remove / Redness Be Gone) | Laser Procedures'
  },
  {
    key: 'skinrevbasic',
    name: 'Skin Revive Basic | Skin Resurfacing'
  },
  {
    key: 'skinrevrf',
    name: 'Skin Revive RF | Skin Resurfacing'
  },
  {
    key: 'skinrevfrac',
    name: 'Skin Revive FractioLase | Skin Resurfacing'
  },
  {
    key: 'laserhairremoval',
    name: 'Laser Hair Removal'
  },
  {
    key: 'subcision',
    name: 'Subcision | Acne Scars'
  },
  {
    key: 'tcacross',
    name: 'TCA Cross | Acne Scars'
  },
  {
    key: 'clearfusion',
    name: 'Evolve Clear Fusion | Acne Scars'
  },
  {
    key: 'scarlift',
    name: 'ScarLift | Acne Scars'
  },
  {
    key: 'elecautery',
    name: 'Electrocautery | Wart Removal'
  },
  {
    key: 'wartlaser',
    name: 'Laser | Wart Removal'
  },
  {
    key: 'revitacell',
    name: 'RevitaCell by NCTF | Injectables (Skin Line)'
  },
  {
    key: 'revitaheal',
    name: 'RevitaHeal by Rejuran H/HB | Injectables (Skin Line)'
  },
  {
    key: 'revitaleyes',
    name: 'Revital-eyes by Rejuran I | Injectables (Skin Line)'
  },
  {
    key: 'wrinkletox',
    name: 'Wrinkletox / Wrinkle Eraser | Toxin Injections'
  },
  {
    key: 'jawtox',
    name: 'Jawtox/JawSculpt | Toxin Injections'
  },
  {
    key: 'axitox',
    name: 'Axitox/AxiDry | Toxin Injections'
  },
  {
    key: 'vslim',
    name: 'V-Slim | Slimming and Contouring'
  },
  {
    key: 'liqlipo',
    name: 'Liquid Lipo | Slimming and Contouring'
  },
  {
    key: 'sculptease',
    name: 'SculptEase | Slimming and Contouring'
  },
];

export default function BookingsComponent({ isHomePage }: HomePageProps) {
  return (
    <section id="bookings" className="px-4 py-6 bg-gray-100 pt-16">
      <FormHeader isHomePage={isHomePage} header="Book an Appointment" />
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" required placeholder="Name"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" required placeholder="Email Address"/>
        </div>
        <div className="mb-4">
          <label htmlFor="service" className="block mb-2">Service</label>
          <select id="service" name="service" className="w-full p-2 border rounded" required>
            <option key="invalid" value="invalid" disabled>SELECT A SERVICE</option>
            {allServices.map((service) => (
              <option key={service.key} value={service.key}>{service.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">Preferred Date</label>
          <input type="date" id="date" name="date" className="w-full p-2 border rounded" required />
        </div>
        <button type="submit" className="w-full bg-turq text-white p-2 rounded hover:bg-turq-shaded transition duration-300">Book Now</button>
      </form>
    </section>
  )
}