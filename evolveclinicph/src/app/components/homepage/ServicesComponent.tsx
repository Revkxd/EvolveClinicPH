'use client'

import { useState, useRef } from 'react';
import Link from "next/link"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HomePageProps } from '@/types/props'
import ServiceBox from '../ServiceBox'
import WideServiceBox from '../WideServiceBox'
import BulletedServiceBox from '../BulletedServiceBox';
import ServiceBoxContainer from '../ServiceBoxContainer';

// #region SERVICES_LIST
const facialServices = [
  {
    title: 'Evolve Express Glow',
    formerName: 'Express Refresh',
    desc: `A revitalizing facial designed for clients on the go, delivering instant hydration and radiance in just 30 minutes. Perfect for a mid
      day refresh.`,
    duration: '30 minutes',
    expectation: `Your experience begins with a thorough yet gentle cleanse to remove impurities and makeup, followed by a light 
      exfoliation to unveil smooth, refreshed skin. A soothing facial massage stimulates circulation, while steam helps open up pores for a 
      deep cleanse. To finish, we use cooling cryo sticks that tone and lift your skin, leaving you radiant and energized.`,
    reasoning: `In just half an hour, this treatment deeply hydrates and exfoliates, removing dead skin cells and boosting circulation 
      for a quick yet visible transformation. It’s ideal for those needing a fast pick-me-up, delivering hydration and a natural glow.`,
    enhancement: `Add a Vitamin C infusion to brighten and protect your skin, leaving you glowing for even longer.`
  },
  {
    title: 'Evolve Time Rewind Facial',
    formerName: 'Rewind/Anti-Aging Facial',
    desc: `This anti-aging facial uses advanced collagen-boosting techniques combined with luxurious ingredients like the Rose Anti-Aging 
      Alginate Mask to firm, lift, and smooth your skin for a more youthful look.`,
    duration: '60 minutes',
    expectation: `We start with a gentle cleanse, followed by a deep exfoliation to smooth skin texture and increase absorption. The 
      Rose Anti-Aging Alginate Mask works its magic by boosting collagen production, while cryo sticks and high-frequency technology 
      firm and tone the skin. The session ends with a relaxing facial massage to improve circulation and rejuvenate tired skin.`,
    reasoning: `The key to youthful skin is hydration and collagen. This facial enhances both, using powerful ingredients to combat 
      fine lines, wrinkles, and sagging skin. The combination of advanced technology and natural botanicals ensures you leave with a 
      visibly lifted and refreshed complexion.`,
    enhancement: `Maximize collagen production with LED light therapy, which stimulates skin’s natural healing processes 
      and delivers longer-lasting anti-aging benefits.`
  },
  {
    title: 'Evolve Radiance Reveal Facial',
    formerName: 'Natural Light/Whitening Facial',
    desc: `This brightening facial targets dark spots and pigmentation using cutting-edge arbutin technology, leaving your skin radiant and 
      camera-ready for any event.`,
    duration: '45 minutes',
    expectation: `Your skin is gently cleansed with an arbutin-based formula, followed by a light peel to exfoliate and smooth the 
      skin. Steam opens your pores, allowing for deeper product penetration, and we perform extractions if necessary. A brightening mask 
      is applied to even out skin tone and reduce pigmentation, leaving your complexion visibly brighter.`,
    reasoning: `Arbutin is a naturally derived brightening agent that is extracted from plants like bearberry and pear. It works by 
      inhibiting the enzyme that causes pigmentation in the skin, making it a safer, more effective alternative to harsh chemical lighteners. 
      It reduces dark spots and uneven tone, leaving your skin radiant and glowing. Combined with deep hydration and a brightening 
      mask, this facial transforms dull, uneven skin into a glowing, even-toned complexion.`,
    enhancement: `Maximize the brightening effects with a Vitamin C infusion. Vitamin C works synergistically with arbutin, 
      boosting its ability to fade dark spots while also providing antioxidant protection to keep your skin glowing and youthful for longer.`
  },
  {
    title: 'Evolve Clear Confidence Facial',
    formerName: 'Acne Rescue Facial',
    desc: `This facial deeply purifies acne-prone skin, reducing breakouts and inflammation, while balancing your complexion for a 
      healthier, clearer look.`,
    duration: '60 minutes',
    expectation: `We start with a purifying cleanse followed by a gentle AHA/PHA exfoliation to clear clogged pores. Steam helps 
      soften the skin for extractions, which are done with care to prevent irritation. High-frequency treatment follows to eliminate acne
      causing bacteria, while a soothing mask calms any redness or inflammation.`,
    reasoning: `This facial addresses the root causes of acne by deeply cleansing the skin, reducing oil production, and calming 
      inflammation. The combination of high-frequency therapy and soothing masks ensures your skin looks clearer and feels balanced, 
      even after one treatment.`,
    enhancement: `Add a Salicylic Acid Spot Treatment: This targeted treatment works to deeply exfoliate pores and reduce 
      inflammation in problem areas, accelerating healing and minimizing future breakouts. It’s perfect for clients with stubborn acne or 
      those who want an extra layer of acne control.`
  },
  {
    title: 'Evolve Hydra Perfection Facial',
    formerName: 'Hydra Pure Facial',
    desc: `An intensive hydrating facial designed to deeply nourish, plump, and refresh your skin, leaving it radiant and revitalized for days. 
      Perfect for clients seeking long-lasting hydration and a renewed complexion.`,
    duration: '75 minutes',
    expectation: `We begin with a thorough cleanse to remove impurities, followed by a light exfoliation to gently resurface the skin 
      and remove dead cells. As steam opens your pores, your skin is prepped for the infusion of deeply hydrating serums. A focused facial 
      massage stimulates circulation, enhancing product absorption. LED light therapy is then applied to stimulate collagen production 
      and reduce inflammation, improving skin texture and tone. To finish, we apply our exclusive Evolve Radiance Elixir, locking in 
      moisture and ensuring your skin remains hydrated, plump, and glowing long after your treatment.`,
    reasoning: `Deep hydration is essential for maintaining youthful, radiant skin. This facial delivers moisture where it’s needed 
      most, using advanced hydration techniques and collagen-boosting LED therapy to combat dryness, fine lines, and dullness. The 
      combination of intensive hydration and anti-inflammatory light therapy leaves your skin looking visibly plumped, smoother, and 
      refreshed for days after the session.`,
    enhancement: `For an added boost, opt for a Hyaluronic Acid Serum Infusion, which intensifies moisture retention, or a 
      Collagen-Enhancing Treatment to further firm and smooth your skin for longer-lasting hydration and anti-aging benefits.`
  },
  {
    title: 'Evolve Cellular Renewal Facial',
    formerName: 'Ensod Neo Exosome Facial',
    desc: `This advanced facial harnesses the power of exosome technology to accelerate skin regeneration, improve elasticity, and reduce 
      signs of aging, leaving your skin firmer, smoother, and visibly more youthful.`,
    duration: '90 minutes',
    expectation: `We begin with a deep cleanse and exfoliation to remove impurities and prepare your skin for maximum absorption. 
      Following this, any necessary extractions are performed with care. Cryo-stick therapy is then applied to tone and soothe the skin, 
      ensuring it is calm and ready for the exosome application. The exosome serum is gently massaged into the skin, promoting deep 
      cellular renewal and improving overall skin function. The session concludes with the application of a protective sunblock to shield 
      your freshly renewed skin from environmental stressors.`,
    reasoning: `Exosomes work at the cellular level, promoting skin regeneration and enhancing collagen production. This facial is 
      ideal for clients seeking a non-invasive yet powerful anti-aging solution. Over the following weeks, your skin continues to improve as 
      wrinkles fade, elasticity increases, and your complexion looks more youthful and vibrant.`,
    enhancement: `Maximize the regenerative benefits with a Second Exosome Infusion, further enhancing collagen 
      production and skin renewal for even longer-lasting results. Alternatively, pair the treatment with LED Light Therapy to accelerate 
      healing and enhance the skin's ability to repair itself.`
  },
]
const laserProcedures = [
  {
    title: 'Carbon Pure (Carbon Laser)',
    desc: 'A non invasive skin treatment that uses a combination of carbon technology to exfoliate, cleanse and reveal brighter skin. Best for oily and acne prone skin as well those seeking to improve tone and texture.'
  },
  {
    title: 'Pure Tone (Laser Toning)',
    desc: 'A quick , no-downtime laser procedure for individuals of all ages looking to address signs of aging, large pores, texture, fine lines and mild scarring.'
  },
  {
    title: 'Pure Fade',
    desc: `Hiding dark spots? Erase the past and embrace the future with lighter and brighter skin. 
      Aborbed laser energy heats and breaks down melanin particles which are gradually removed 
      from the skin through your own body’s natural healing process.  Over time , brighter and lighter 
      skin is achieved through increased cell turnover and the promotion of new healthy skin.`
  },
  {
    title: 'Pure Erase (Tattoo Removal)',
    desc: `Regret that ink? Lase erase breaks down the pigment particles without damaging the 
      surrounding tissue. It lightens and fades unwanted tattoos after several sessions.`
  },
  {
    title: 'Golden Glow',
    desc: `Address both vascular and pigmentary issues while stimulating collagen production. This 
      yellow laser penetrates the dermis ,rejuvenating the skin and making it look fresher and radiant.`
  },
  {
    title: 'Yellow Laser (Red Remove/ Redness Be Gone)',
    desc: `Your red marks and vascular lesions stand no chance with our QuadroStarPRO Yellow laser. It 
      has high absorption in melanin as well as high absorption in hemoglobin. For vascular lesions, 
      it heats up the blood and harms the inner vessel wall which “glues” and seals up the vessel. 
      Ideal for post inflammatory erythema, rosacea, facial vessels.`
  },
]

const skinResurfacing = [
  {
    title: 'SkinRevive Basic',
    desc: `Traditional micro needling which uses fine needles to create controlled micro-injuries in the 
      skin. This then stimulates collagen production and elastin which improves skin texture, 
      firmness and elasticity as well as improving the appearance of scars.`
  },
  {
    title: 'SkinRevive RF',
    desc: `Rejuvenate, restore and renew your skin with the cutting edge technology of RF micro 
      needling. This synergistic approach enhances skin texture , tightens skin and stimulates 
      collagen production more effectively than standalone microneedling. It can also be used to 
      deliver boosters and serums more effectively . Best for lax , textured skin, large pores and acne scars.`,
    addons: 'Exosomes'
  },
  {
    title: 'SkinRevive FractioLase',
    desc: `The laser creates thousands of tiny controlled microthermal zones (MTZ) in a grid-like pattern. 
      The laser removes only a fraction of the skin surface leaving the surrounding skin intact. This 
      allows quicker healing and recovery. This laser promotes collagen stimulation and skin 
      remodelling. It can treat a variety of skin concerns such as wrinkles, acne scars and uneven 
      skin texture.`
  },
]
const laserHairRemoval = [
  {
    title: 'Laser Hair Removal',
    desc: `Say goodbye to your razor and waxing sessions. Quick and pain free laser hair reduction that 
also smoothens and brightens the treated area. Ideal even for intimate areas and facial hair.`
  },
]

const acneScars = [
  {
    title: 'Subcision',
    desc: `A minimally invasive surgical procedure to treat depressed scars. This breaks down fibrotic 
      bands of scar tissue that tether the skin down.`
  },
  {
    title: 'TCA Cross',
    desc: `Specific treatment for ice-pick scars and scars with sharp , angled edges. This technique 
      involves the application of a high concentration of trichloroacetic acid directly to the scar.`
  },
  {
    title: 'Evolve Clear Fusion',
    desc: `A powerful combination of different techniques (subcision, tca, needling etc) to target even the 
      most stubborn and deep acne scarring.`
  },
  {
    title: 'ScarLift',
    desc: `Precision healing for your scars. It is a specialized injectable treatment specially designed for 
      acne scars utilizing polynucleotide technology to promote natural regeneration and tissue 
      repair.`
  },
]
const wartsRemoval = [
  {
    title: 'Electrocautery',
    desc: `Banish warts , fast, easy and pain free via heat through electrical resistance.`
  },
  {
    title: 'Laser',
    desc: `Precise application of high-energy CO2 laser. Water in the tissue absorbs the laser light 
      causing the lesion to vaporize. This selective absorption targets the wart tissue with minimal 
      damage to the surrounding skin.`
  },
]
const injectables = [
  {
    title: 'Skin Line',
    desc: ``
  },
  {
    title: 'RevitaCell by NCTF',
    desc: `New Cellular Treatment Factor (NTCF) is designed to directly revitalize and renew the dermis  
      by delivering a blend of active ingredients (Vit. C & E, AA, HA, minerals, NA).  These injections 
      improves skin texture ,hydration, plumpness and overall skin appearance . May be used on the 
      entire face , the undereyes, neck and hands.`
  },
  {
    title: 'RevitaHeal by Rejuran H/HB',
    desc: `Turn back the clock with cellular repair properties of polynucleotides (PN) from salmon sperm.
      A perfect alternative for fillers and toxins. This treatment improves wrinkles, tightens the skin, 
      reduces pigmentation and increases hydration.`
  },
  {
    title: 'Revital-eyes by Rejuran I',
    desc: `Tired of looking tired? Revitalize you eye are with Rejuran I , a polynucleotide specially made 
      for the delicate eye area. It improves fine lines and wrinkles, appearance of eyebags as well a 
      reduces dark circles and crows feet.`
  },
]
const toxinInjections = [
  {
    title: 'Wrinkletox / Wrinkle Eraser',
    desc: `Scientifically-backed solution for achieving a more youthful appearance by relaxing facial 
      muscles that creates and deepens facial lines. Quick, safe and with visible results after 1 
      session.`
  },
  {
    title: 'Jawtox/JawSculpt',
    desc: `Sculpt your ideal jawA treatment to reduce the appearance of a square or hypertrophic jaw by 
      relaxing the masseter muscle. This treatment is also suitable for those suffering from bruxism 
      and TMJ dysfunction.`
  },
  {
    title: 'Axitox/AxiDry',
    desc: `Stay dry and confident! This treatment allows you to be free from sweat stains and odor 
      caused by hyperhydrosis. One session wonder!`
  },
  {
    title: 'Other areas',
    desc: `*Other areas may be done upon consultation`
  },
]
const slimmingAndContouring = [
  {
    title: 'V-Slim',
    desc: `Redefine your face shape with our mesotherapy solution formulated specifically for the face. 
      Reduce chubby cheeks and double chin with this facial contouring treatment. Noticeable 
      improvements with minimal to no downtime.`
  },
  {
    title: 'Liquid Lipo',
    desc: `Precision fat reduction , no surgery needed! A safe and effective fat melting solution for all 
      body parts. Lasting results with multiple sessions.`
  },
  {
    title: 'SculptEase',
    desc: `Shape up with the power of ProCareXP. Ultrasound cavitation technology breaks down 
      stubborn fat cells in combination with radiofrequency and electric muscle stimulation to tighten 
      the treatment areas.`
  },
]
const surgicalServices = [
  {
    category: "Face",
    services: [
      "Upper Blepharoplasty (Surgical Eyelid Rejuvenation)",
      "Lower Blepharoplasty (Surgical Eyebag Removal)",
      "Brow Lift",
      "Temporal Lift",
      "Otoplasty (Ear Tuck)",
      "Surgical Face Lift",
      "Buccal Fat Removal",
      "Submental Liposuction",
      "Goretex Rhinoplasty",
      "Silicone Rhinoplasty",
      "Alar Trimming",
      "Tip Plasty",
      "Chin Augmentation (Mentoplasty)",
    ],
  },
  {
    category: "Body",
    services: [
      "Breast Augmentation",
      "Breast Lift",
      "Vaser Liposuction",
      "Abdominoplasty (Tummy Tuck)",
      "Arm Liposuction",
      "Brazilian Butt Lift (BBL)",
    ],
  },
]
// #endregion

export default function ServicesComponent({ isHomePage }: HomePageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth
      const newScrollPosition = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  const checkScrollability = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
    }
  }

  return (
    <section id="services" className="py-20">
      <h2 className="text-5xl font-bold mb-8 text-center">Facials, Dermatologic & Surgical Services</h2>
      <div className={`max-w-6xl mx-auto px-4 ${isHomePage ? 'max-h-[40rem] overflow-y-auto custom-scrollbar' : ''}`}>
        <div className="py-4">
          <WideServiceBox category="Facial Services" services={facialServices} />
        </div>
        {!isHomePage && (<>
        <div className="relative max-w-6xl mx-auto">
          <button 
            onClick={() => scroll('left')} 
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10
              ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'bg-turq text-white hover:bg-turq-shaded'}
              transform hover:scale-105`}
            hidden={!canScrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <div 
            ref={scrollContainerRef} 
            className="flex flex-nowrap overflow-x-scroll space-x-4 pb-4 custom-scrollbar gap-1"
            onScroll={checkScrollability}
          >
            <ServiceBox category="Laser Procedures" services={laserProcedures} />
            <ServiceBox category="Skin Resurfacing" services={skinResurfacing} />
            <ServiceBox category="Hair Removal" services={laserHairRemoval} />
            <ServiceBox category="Acne Scars" services={acneScars} />
            <ServiceBox category="Wart Removal" services={wartsRemoval} />
            <ServiceBox category="Injectables - Subtle Enhancements, Dramatic Results" services={injectables} />
            <ServiceBox category="Toxin Injections" services={toxinInjections} />
            <ServiceBox category="Slimming and Contouring" services={slimmingAndContouring} />
          </div>
          <button 
            onClick={() => scroll('right')} 
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10
              ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'bg-turq text-white hover:bg-turq-shaded'}
              transform hover:scale-105`}
            hidden={!canScrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <ServiceBoxContainer title='Surgical Services'>
          {surgicalServices.map((group, index) => (
            <BulletedServiceBox key={index} category={group.category} services={group.services} />
          ))}
        </ServiceBoxContainer>
        </>)}
      </div>
      {isHomePage && (
      <div className="flex justify-center mt-4">
        <Link
          href="/services"
          className="bg-turq text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full shadow-md
          font-medium text-sm sm:text-base md:text-lg transition-all duration-300
          hover:bg-turq-shaded hover:shadow-lg transform hover:scale-105"
        >
          More Services
        </Link>
      </div>
      )}
    </section>
  )
}