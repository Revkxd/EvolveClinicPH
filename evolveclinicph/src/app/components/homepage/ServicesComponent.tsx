'use client'

import ServiceBox from '../ServiceBox'

// region SERVICES_LIST
const laserProcedures = [
  {
    title: 'Carbon Pure (Carbon Laser)',
    description: 'A non invasive skin treatment that uses a combination of carbon technology to exfoliate, cleanse and reveal brighter skin. Best for oily and acne prone skin as well those seeking to improve tone and texture.'
  },
  {
    title: 'Pure Tone (Laser Toning)',
    description: 'A quick , no-downtime laser procedure for individuals of all ages looking to address signs of aging, large pores, texture, fine lines and mild scarring.'
  },
  {
    title: 'Pure Fade',
    description: `Hiding dark spots? Erase the past and embrace the future with lighter and brighter skin. 
      Aborbed laser energy heats and breaks down melanin particles which are gradually removed 
      from the skin through your own body’s natural healing process.  Over time , brighter and lighter 
      skin is achieved through increased cell turnover and the promotion of new healthy skin.`
  },
  {
    title: 'Pure Erase (Tattoo Removal)',
    description: `Regret that ink? Lase erase breaks down the pigment particles without damaging the 
      surrounding tissue. It lightens and fades unwanted tattoos after several sessions.`
  },
  {
    title: 'Golden Glow',
    description: `Address both vascular and pigmentary issues while stimulating collagen production. This 
      yellow laser penetrates the dermis ,rejuvenating the skin and making it look fresher and radiant.`
  },
  {
    title: 'Yellow Laser (Red Remove/ Redness Be Gone)',
    description: `Your red marks and vascular lesions stand no chance with our QuadroStarPRO Yellow laser. It 
      has high absorption in melanin as well as high absorption in hemoglobin. For vascular lesions, 
      it heats up the blood and harms the inner vessel wall which “glues” and seals up the vessel. 
      Ideal for post inflammatory erythema, rosacea, facial vessels.`
  },
]

const skinResurfacing = [
  {
    title: 'SkinRevive Basic',
    description: `Traditional micro needling which uses fine needles to create controlled micro-injuries in the 
      skin. This then stimulates collagen production and elastin which improves skin texture, 
      firmness and elasticity as well as improving the appearance of scars.`
  },
  {
    title: 'SkinRevive RF',
    description: `Rejuvenate, restore and renew your skin with the cutting edge technology of RF micro 
      needling. This synergistic approach enhances skin texture , tightens skin and stimulates 
      collagen production more effectively than standalone microneedling. It can also be used to 
      deliver boosters and serums more effectively . Best for lax , textured skin, large pores and acne scars.`,
    addons: 'Exosomes'
  },
  {
    title: 'SkinRevive FractioLase',
    description: `The laser creates thousands of tiny controlled microthermal zones (MTZ) in a grid-like pattern. 
      The laser removes only a fraction of the skin surface leaving the surrounding skin intact. This 
      allows quicker healing and recovery. This laser promotes collagen stimulation and skin 
      remodelling. It can treat a variety of skin concerns such as wrinkles, acne scars and uneven 
      skin texture.`
  },
]
const laserHairRemoval = [
  {
    title: 'Laser Hair Removal',
    description: `Say goodbye to your razor and waxing sessions. Quick and pain free laser hair reduction that 
also smoothens and brightens the treated area. Ideal even for intimate areas and facial hair.`
  },
]

const acneScars = [
  {
    title: 'Subcision',
    description: `A minimally invasive surgical procedure to treat depressed scars. This breaks down fibrotic 
      bands of scar tissue that tether the skin down.`
  },
  {
    title: 'TCA Cross',
    description: `Specific treatment for ice-pick scars and scars with sharp , angled edges. This technique 
      involves the application of a high concentration of trichloroacetic acid directly to the scar.`
  },
  {
    title: 'Evolve Clear Fusion',
    description: `A powerful combination of different techniques (subcision, tca, needling etc) to target even the 
      most stubborn and deep acne scarring.`
  },
  {
    title: 'ScarLift',
    description: `Precision healing for your scars. It is a specialized injectable treatment specially designed for 
      acne scars utilizing polynucleotide technology to promote natural regeneration and tissue 
      repair.`
  },
]
const wartsRemoval = [
  {
    title: 'Electrocautery',
    description: `Banish warts , fast, easy and pain free via heat through electrical resistance.`
  },
  {
    title: 'Laser',
    description: `Precise application of high-energy CO2 laser. Water in the tissue absorbs the laser light 
      causing the lesion to vaporize. This selective absorption targets the wart tissue with minimal 
      damage to the surrounding skin.`
  },
]
const injectables = [
  {
    title: 'Skin Line',
    description: ``
  },
  {
    title: 'RevitaCell by NCTF',
    description: `New Cellular Treatment Factor (NTCF) is designed to directly revitalize and renew the dermis  
      by delivering a blend of active ingredients (Vit. C & E, AA, HA, minerals, NA).  These injections 
      improves skin texture ,hydration, plumpness and overall skin appearance . May be used on the 
      entire face , the undereyes, neck and hands.`
  },
  {
    title: 'RevitaHeal by Rejuran H/HB',
    description: `Turn back the clock with cellular repair properties of polynucleotides (PN) from salmon sperm.
      A perfect alternative for fillers and toxins. This treatment improves wrinkles, tightens the skin, 
      reduces pigmentation and increases hydration.`
  },
  {
    title: 'Revital-eyes by Rejuran I',
    description: `Tired of looking tired? Revitalize you eye are with Rejuran I , a polynucleotide specially made 
      for the delicate eye area. It improves fine lines and wrinkles, appearance of eyebags as well a 
      reduces dark circles and crows feet.`
  },
]
const toxinInjections = [
  {
    title: 'Wrinkletox / Wrinkle Eraser',
    description: `Scientifically-backed solution for achieving a more youthful appearance by relaxing facial 
      muscles that creates and deepens facial lines. Quick, safe and with visible results after 1 
      session.`
  },
  {
    title: 'Jawtox/JawSculpt',
    description: `Sculpt your ideal jawA treatment to reduce the appearance of a square or hypertrophic jaw by 
      relaxing the masseter muscle. This treatment is also suitable for those suffering from bruxism 
      and TMJ dysfunction.`
  },
  {
    title: 'Axitox/AxiDry',
    description: `Stay dry and confident! This treatment allows you to be free from sweat stains and odor 
      caused by hyperhydrosis. One session wonder!`
  },
  {
    title: 'Other areas',
    description: `*Other areas may be done upon consultation`
  },
]
const slimmingAndContouring = [
  {
    title: 'V-Slim',
    description: `Redefine your face shape with our mesotherapy solution formulated specifically for the face. 
      Reduce chubby cheeks and double chin with this facial contouring treatment. Noticeable 
      improvements with minimal to no downtime.`
  },
  {
    title: 'Liquid Lipo',
    description: `Precision fat reduction , no surgery needed! A safe and effective fat melting solution for all 
      body parts. Lasting results with multiple sessions.`
  },
  {
    title: 'SculptEase',
    description: `Shape up with the power of ProCareXP. Ultrasound cavitation technology breaks down 
      stubborn fat cells in combination with radiofrequency and electric muscle stimulation to tighten 
      the treatment areas.`
  },
]
// endregion

export default function ServicesComponent() {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="max-w-6xl max-h-[520px] mx-auto px-4 overflow-y-scroll scrollbar-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceBox category="Laser Procedures" services={laserProcedures} />
          <ServiceBox category="Skin Resurfacing" services={skinResurfacing} />
          <ServiceBox category="Hair Removal" services={laserHairRemoval} />
          <ServiceBox category="Acne Scars" services={acneScars} />
          <ServiceBox category="Wart Removal" services={wartsRemoval} />
          <ServiceBox category="Injectables - Subtle Enhancements, Dramatic Results" services={injectables} />
          <ServiceBox category="Toxin Injections" services={toxinInjections} />
          <ServiceBox category="Slimming and Contouring" services={slimmingAndContouring} />
        </div>
      </div>
    </section>
  )
}