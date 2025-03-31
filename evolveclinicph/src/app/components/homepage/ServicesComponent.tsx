'use client'

import { useState, useRef } from 'react';
import Link from "next/link"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HomePageProps } from '@/types/props'
import ServiceBox from '../services/ServiceBox'
import WideServiceBox from '../services/WideServiceBox'

// #region SERVICES_LIST
const consultations = [
  {
    title: 'Consultation with a Board-Certified Dermatologist',
    desc: 'Comprehensive consultation with our board-certified dermatologist to properly asses your medical and aesthetic concerns.'
  },
]

const laserProceduresFace = [
  {
    title: 'Carbon Peel',
    desc: 'A non-invasive and painless treatment that uses a combination of carbon & laser technology to deep cleanse, exfoliate, rejuvenate and reveal brighter skin. This treatment may also reduce oil production. Best for oily and acne prone skin as well those seeking to improve tone and texture.'
  },
  {
    title: 'Q Rejuvenation + Toning',
    desc: 'A quick, no-downtime laser procedure that uses a Q-switched laser to helps break down pigment into smaller particles which are then naturally eliminated by the body over time. Additionally, it can stimulate the production of collagen and elastin, helping to rejuvenate the skin. Ideal for scar spots from acne or melas as well as for overall skin quality.'
  },
  {
    title: 'Q Rejuvenation + Tightening',
    desc: 'A safe and effective treatment that uses a Q-switched laser technology to stimulate collagen via rapid pulses of light that penetrate the dermis. It addresses skin laxity, fine lines, skin tone and overall texture.'
  },
  {
    title: 'Panda Eyes Laser',
    desc: 'A gentle and easy fix for tired-looking dark undereyes with the use of a non-ablative laser that penetrates deep into the skin to address fine lines and hyperpigmentation.'
  },
  {
    title: 'Golden Glow',
    desc: 'Achieve instantly glowing skin with a 577 nm laser technology. It is an effective and comfortable choice for individuals looking to achieve smoother, brighter and more even skin. It is an ideal quick fix prior to events or for those who would like to boost their facial treatments.'
  },
  {
    title: 'Gold Rejuvenation',
    desc: 'Yellow laser (577nm) addresses various skin concerns, particularly those related to pigmentation and vascular issues. It is commonly used for skin rejuvenation, brightening and the treatment of rosacea, telangiectasia, sunspots, hyperpigmentation and dullness.'
  },
  {
    title: 'Gold Fusion',
    desc: 'A combination of gold rejuvenation and gold toning to achieve best results. It is ideal for most skin types , including those with sensitive or darker skin tones.'
  },
  {
    title: 'FraxLite (CO2 Low Fractional Mode)',
    desc: 'Fractional CO2 laser that creates thousands of tiny controlled microthermal zones (MTZ) in a grid-like pattern. Best for mild skin rejuvenation and mild scarring.'
  },
  {
    title: 'PureFraction (CO2 Full Fractional Mode)',
    desc: 'A powerful and advanced skin treatment that that uses CO2 to deliver microbeams that penetrate to the dermis to stimulate collagen production and promote skin regeneration. The laser removes only a fraction of the skin surface leaving the surrounding skin intact. This allows quicker healing and recovery. It can address fine lines, wrinkles, acne scars, aged skin as well as stretch marks.'
  },
  {
    title: 'Tattoo Eraser',
    desc: 'Remove or fade unwanted tattoos with laser technology. The laser selectively targets the pigment without damaging the surrounding skin. It is suitable for a variety of tattoo colors and skin types, and while multiple sessions are required for optimal results, it offers a relatively safe way to break down and eliminate the ink with minimal downtime.'
  },
]

const laserTreatmentsBody = [
  {
    title: 'Laser Lightening',
    desc: `Q-switched Nd-YAG laser technology that delivers light in rapid, high energy pulses. Laser 
      energy is absorbed by the pigment (melanin), causing the pigment to break into smaller 
      particles. These smaller particles are then naturally eliminated by the body over time.`,
    bulletList: [
      'Spot Bright (1x1)',
      'Axi-light',
      'Small Area (Neck, Elbow, Knees)',
      'Medium (Bikini Line, Butt)',
      'Large Area (Half Arm, Half Leg, Chest, Abdomen',
    ]
  },
  {
    title: 'Laser Hair Removal',
    desc: `Powerful and efficient laser hair removal that uses a triple wavelength handpiece. This provides 
      optimal coverage whilst delivering short pulses with ultra lightning speed. The treatment 
      provides powerful cooling that ensures a comfortable treatment as well as safety from the risk 
      of burns. Ideal even for intimate areas and facial hair.`,
    bulletList: [
      'Upper Lip',
      'Underarms',
      'Full Arms',
      'Full Back',
      'Bikini',
      'Brazillian',
      'Legs (Half)',
      'Legs (Full)',
    ]
  },
]

const microneedling = [
  {
    title: 'DermaRoller',
    desc: `Traditional microneedling which uses fine needles in a roller to create controlled micro-injuries. 
      This stimulates collagen production and elastin which improves skin texture,
      firmness and elasticity as well as improving the appearance of scars. May be combined with 
      other treatments (exosomes, peel) for better results.`
  },
  {
    title: 'Pen Microneedling',
    desc: `Automated microneedling is a minimally invasive skincare treatment designed to improve skin 
      texture, fine lines and scars. It uses a device shaped like a pen to create mirco-channels in the 
      skin. The micro-injuries trigger the skin’s natural healing process and stimulate collagen and 
      elastin which are the the key structural proteins responsible for keeping the skin youthful. The 
      depth of the needles can be adjusted based on the treatment area and skin condition. It may 
      be combined with other treatments such as topical solutions for a greater outcome.`
  },
  {
    title: 'Radiofrequency Microneedling',
    desc: `Cutting edge technology that combines radiofrequency with microneedling. This synergistic 
      approach yields superior results compared to conventional methods. skin texture, tightens 
      skin and stimulatescollagen production more effectively than conventional microneedling. It 
      can also be used todeliver other skincare products more effectively. Best for lax, textured 
      skin, large pores and acne scars.`
  },
]

const scarSolutions = [
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
    title: 'DermaRoller',
    desc: `Traditional microneedling which uses fine needles in a roller to create controlled micro-injuries. 
      This stimulates collagen production and elastin which improves skin texture, 
      firmness and elasticity as well as improving the appearance of scars. May be combined with 
      other treatments (exosomes, peel) for better results.`
  },
  {
    title: 'Pen Microneedling',
    desc: `Automated microneedling is a minimally invasive skincare treatment designed to improve skin 
      texture, fine lines and scars. It uses a device shaped like a pen to create mirco-channels in the 
      skin. The micro-injuries trigger the skin’s natural healing process and stimulate collagen and 
      elastin which are the the key structural proteins responsible for keeping the skin youthful. The 
      depth of the needles can be adjusted based on the treatment area and skin condition. It may 
      be combined with other treatments such as topical solutions for a greater outcome.`
  },
  {
    title: 'RF Microneedling',
    desc: `Cutting edge technology that combines radiofrequency with microneedling. This synergistic 
      approach yields superior results compared to conventional methods. skin texture, tightens 
      skin and stimulatescollagen production more effectively than conventional microneedling. It 
      can also be used todeliver other skincare products more effectively. Best for lax, textured 
      skin, large pores and acne scars.`
  },
  {
    title: 'FraxLite (CO2 Low Fractional Mode)',
    desc: `Fractional CO2 laser that creates thousands of tiny controlled microthermal zones (MTZ) in a grid-like pattern. Best for mild skin rejuvenation and mild scarring.`
  },
  {
    title: 'PureFraction (CO2 Full Fractional Mode)',
    desc: `A powerful and advanced skin treatment that that uses CO2 to deliver microbeams that 
      penetrate to the dermis to stimulate collagen production and promote skin regeneration. The 
      laser removes only a fraction of the skin surface leaving the surrounding skin intact. This 
      allows quicker healing and recovery. It can address fine lines, wrinkles, acne scars, aged skin 
      as well as stretch marks.`
  },
  {
    title: 'Evolve Clear Fusion',
    desc: `A powerful combination of different techniques (subcision, tca, needling etc) to target even the 
      most stubborn and deep acne scarring.`
  },
  {
    title: 'Scar Elixir',
    desc: `Precision healing for your scars. It is a specialized injectable treatment specially designed for 
      acne scars utilizing polynucleotide technology to promote natural regeneration and tissue 
      repair.`
  },
]

const wartsRemoval = [
  {
    title: 'Electrocautery',
    desc: `Banish warts, fast, easy and pain free via heat through electrical resistance.`
  },
  {
    title: 'CO2 Laser',
    desc: `Precise application of high-energy CO2 laser. Water in the tissue absorbs the laser light 
      causing the lesion to vaporize. This selective absorption targets the wart tissue with minimal 
      damage to the surrounding skin.`
  },
]

const injectables = [
  {
    title: 'RevitaCell',
    desc: `New Cellular Treatment Factor (NTCF) is designed to directly revitalize and renew the dermis 
      by delivering a blend of active ingredients (Vit. C & E, AA, HA, minerals, NA). These injections 
      improves skin texture, hydration, plumpness and overall skin appearance. May be used on the 
      entire face, the undereyes, neck and hands.`
  },
  {
    title: 'RevitaHeal',
    desc: `Turn back the clock with cellular repair properties of polynucleotides (PN) from salmon sperm. 
      A perfect alternative for fillers and toxins. This treatment improves wrinkles, tightens the skin, 
      reduces pigmentation and increases hydration.`
  },
  {
    title: 'Revital-eyes',
    desc: `Tired of looking tired? Revitalize you eye are with Rejuran I, a polynucleotide specially made 
      for the delicate eye area. It improves fine lines and wrinkles, appearance of eyebags as well a 
      reduces dark circles and crows feet.`
  },
  {
    title: 'SkinPlenish',
    desc: `Innovative treatment using a non-crosslinked HA to combat aging while improving skin tone, 
      hydration and laxity.`
  },
  {
    title: 'Exosomes',
    desc: `A scientifically advanced treatment from stem cells. Exosomes play a critical role in cell 
      communication and have powerful regenerative effects. Exosomes promote healing, anti-aging and rejuvenation.`,
    bulletList: [
      'Face',
      'Scalp / Hair',
    ]
  },
  {
    title: 'Toxin Injections',
    desc: `Achieve smoother & less wrinkled skin while maintaining a natural facial expression. Safe and 
      effective treatment for other concerns such as hyperhydrosis and bruxism.`
  },
]

const slimmingAndContouring = [
  {
    title: 'Contour Care',
    desc: `A non-surgical, minimally-invasive injectable solution to target unwanted facial fat. Noticeable 
      results with little to no downtime.`
  },
  {
    title: 'SlimLine Liquid Lipo',
    desc: `Targeted fat reduction without the need for incisions, anesthesia or long recovery times. 
      Gradual fat loss for a subtle yet noticeable difference.`
  },
  {
    title: 'SculptPro',
    desc: `A non-invasive and relaxing treatment to tighten loose skin, reduce cellulite, tone muscles and 
      to relieve muscle pain. A comprehensive treatment that employs Radiofrequency & Electrical 
      Muscle Stimulation. Treatment may be done together with mesotherapy for optimal results.`,
    bulletList: [
      'Face (RF)',
      'Arms (RF/EMS)',
      'Abdomen (RF/Vacuum/EMS)',
      'Back (RF/Vacuum)',
      'Thighs (RF/Vacuum/EMS)',
    ]
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
      const serviceBoxWidth = container.querySelector('div[class*="service-box"]')?.clientWidth || 0
      const gap = 20 // gap-4 equals 16px
      const scrollAmount = serviceBoxWidth + gap
      
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
    <section id="services" className={isHomePage ? "py-4" : "py-20"}>
      <h2 className="text-5xl font-bold mb-8 text-center">Facials, Dermatologic & Surgical Services</h2>
      <div className={`max-w-6xl mx-auto px-4 ${isHomePage ? 'max-h-[45rem] overflow-y-auto custom-scrollbar' : ''}`}>
        {!isHomePage ? <WideServiceBox category="Consultations" services={consultations} maxHeight="4rem"/> : <></>}
        <div className="py-2">
          <WideServiceBox category="Laser Procedures (BODY)" services={laserTreatmentsBody} />
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
            className="flex flex-nowrap overflow-x-hidden space-x-4 pb-4 gap-1 scollbar-none"
            onScroll={checkScrollability}
          >
            <ServiceBox category="Laser Procedures (FACE)" services={laserProceduresFace} />
            <ServiceBox category="Microneedling" services={microneedling} />
            <ServiceBox category="Scar Solutions" services={scarSolutions} />
            <ServiceBox category="Injectables" services={injectables} />
            <ServiceBox category="Slimming and Contouring" services={slimmingAndContouring} />
            <ServiceBox category="Removal of Benign Lesions / Wart Removal" services={wartsRemoval} />
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
        </>)}
      </div>
      {isHomePage && (
      <div className="flex justify-center mt-4">
        <Link
          href="/services"
          className="bg-turq text-white px-12 py-4 sm:px-8 sm:py-3 md:px-16 md:py-4 rounded-full shadow-md
          font-medium text-base sm:text-lg md:text-xl transition-all duration-300
          hover:bg-turq-shaded hover:shadow-lg transform hover:scale-105"
        >
          More Services
        </Link>
      </div>
      )}
    </section>
  )
}