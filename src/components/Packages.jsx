import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const packages = [
  {
    id: 1,
    number: '01',
    label: 'Premium Gaming',
    sublabel: 'Live Tables & Slots',
    desc: 'Enjoy Baccarat, Roulette, Flush, Marriage and more — all on world-class live tables with expert croupiers.',
    bg: 'https://asset.montecarlosbm.com/styles/hotel_intro_left_image_webp/s3/media/orphea/place_du_casino_2020_0025.jpg.webp?h=74f5ab82&itok=MIh3bkA-',
  },
  {
    id: 2,
    number: '02',
    label: 'VIP Membership',
    sublabel: 'Exclusive Privileges',
    desc: 'Join our elite loyalty programme and unlock access to private tables, concierge service and VIP-only events.',
    bg: 'https://asset.montecarlosbm.com/styles/hotel_intro_center_image_webp/s3/media/orphea/ca_gambling_european_room_0016_0.jpg.webp?h=df804d75&itok=O_taeqU5',
  },
  {
    id: 3,
    number: '03',
    label: 'Gourmet Dining',
    sublabel: 'Nepali & International',
    desc: 'Savour expertly crafted dishes from our master chefs — blending Nepali flavours with international cuisine.',
    bg: 'https://asset.montecarlosbm.com/styles/hotel_intro_right_image_webp/s3/media/orphea/ca_roulette_2018_0004.jpg.webp?h=1ff7816e&itok=KUI-6_hk',
  },
  {
    id: 4,
    number: '04',
    label: 'Live Entertainment',
    sublabel: 'Music & Themed Nights',
    desc: 'From live bands to themed celebration nights — every evening at Casino Pride Nepal is an unforgettable event.',
    bg: 'https://asset.montecarlosbm.com/styles/hotel_intro_left_image_webp/s3/media/orphea/place_du_casino_2020_0025.jpg.webp?h=74f5ab82&itok=MIh3bkA-',
  },
  {
    id: 5,
    number: '05',
    label: 'Loyalty Rewards',
    sublabel: 'Points & VIP Perks',
    desc: 'Earn points with every visit. Redeem for dining, gaming credits, exclusive gifts and premium experiences.',
    bg: 'https://asset.montecarlosbm.com/styles/hotel_intro_center_image_webp/s3/media/orphea/ca_gambling_european_room_0016_0.jpg.webp?h=df804d75&itok=O_taeqU5',
  },
]

/* ─── Individual stacking card ─── */
function PackageCard({ pkg, index, panelRef, innerRef }) {
  return (
    <div
      ref={panelRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div ref={innerRef} className="w-full h-full relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={pkg.bg}
            alt={pkg.label}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-20 z-10">
          <span
            className="text-white/15 font-black leading-none select-none mb-3 md:mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              letterSpacing: '-0.04em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {pkg.number}
          </span>

          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
            <div className="w-6 md:w-10 h-[1px] bg-[#c0392b]/80" />
            <span className="text-[#c0392b] text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
              {pkg.sublabel}
            </span>
            <div className="w-6 md:w-10 h-[1px] bg-[#c0392b]/80" />
          </div>

          <h2
            className="text-white font-bold leading-tight mb-3 md:mb-4 drop-shadow-lg"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 6vw, 4.5rem)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            {pkg.label}
          </h2>

          <p 
            className="text-white/80 max-w-lg leading-relaxed px-2 drop-shadow-md"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}
          >
            {pkg.desc}
          </p>

          <a
            href="#"
            className="mt-6 md:mt-8 inline-flex items-center gap-2 md:gap-3 border border-white/40 text-white text-[10px] md:text-xs font-bold tracking-[0.18em] md:tracking-[0.22em] uppercase px-5 md:px-7 py-2.5 md:py-3 hover:border-[#c0392b] hover:bg-[#c0392b]/20 hover:gap-3 md:hover:gap-5 transition-all duration-300 rounded-sm backdrop-blur-sm"
          >
            EXPLORE PACKAGE
            <span className="text-sm md:text-base">→</span>
          </a>
        </div>

        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex items-center gap-2 text-white/40 text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] z-10">
          <span className="text-[#c0392b]">{pkg.number}</span>
          <span>/</span>
          <span>{String(packages.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Main section ─── */
export default function Packages() {
  const sectionRef  = useRef(null)
  const headingRef  = useRef(null)
  const lineRef     = useRef(null)
  const subRef      = useRef(null)

  const panelRefs = useRef(packages.map(() => React.createRef()))
  const innerRefs = useRef(packages.map(() => React.createRef()))

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.15,
          scrollTrigger: { trigger: subRef.current, start: 'top 88%' } }
      )
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 90%' } }
      )
    }, sectionRef)

    // Desktop stacking (min-width: 768px)
    const desktopMM = gsap.matchMedia()
    desktopMM.add('(min-width: 768px)', () => {
      panelRefs.current.forEach((panelRef, i) => {
        if (i === packages.length - 1) return

        const panel = panelRef.current
        const inner = innerRefs.current[i].current
        if (!panel || !inner) return

        const panelH  = inner.offsetHeight
        const winH    = window.innerHeight
        const diff    = panelH - winH
        const fakeRatio = diff > 0 ? diff / (diff + winH) : 0

        if (fakeRatio) {
          panel.style.marginBottom = panelH * fakeRatio + 'px'
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'bottom bottom',
            end: () => fakeRatio ? `+=${inner.offsetHeight}` : 'bottom top',
            pinSpacing: false,
            pin: true,
            scrub: true,
            anticipatePin: 1,
          },
        })

        if (fakeRatio) {
          tl.to(inner, {
            yPercent: -100,
            y: winH,
            duration: 1 / (1 - fakeRatio) - 1,
            ease: 'none',
          })
        }

        tl.fromTo(panel,
          { scale: 1, opacity: 1 },
          { scale: 0.88, opacity: 0.4, duration: 0.9, ease: 'power2.inOut' }
        ).to(panel, { opacity: 0, duration: 0.1 })
      })
    })

    // Mobile stacking (max-width: 767px) - SIMPLIFIED but WORKING version
    const mobileMM = gsap.matchMedia()
    mobileMM.add('(max-width: 767px)', () => {
      panelRefs.current.forEach((panelRef, i) => {
        if (i === packages.length - 1) return

        const panel = panelRef.current
        const inner = innerRefs.current[i].current
        if (!panel || !inner) return

        // Simplified mobile stacking - no complex calculations
        panel.style.marginBottom = '20px' // Small gap between cards
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top top',
            end: '+=100%', // Scroll 100% of viewport height
            pin: true,
            pinSpacing: false,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        // Simple fade and scale for mobile
        tl.fromTo(panel,
          { scale: 1, opacity: 1 },
          { scale: 0.9, opacity: 0.3, duration: 0.8, ease: 'power2.inOut' }
        )
      })
    })

    return () => {
      ctx.revert()
      desktopMM.revert()
      mobileMM.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="bg-white">
      {/* Section header */}
      <div className="relative py-12 md:py-20 px-4 md:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/bg.gif')`,    
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <p className="text-[#c0392b] text-[8px] md:text-[10px] font-bold tracking-[0.25em] md:tracking-[0.35em] uppercase mb-2 md:mb-3">
                Casino Pride Nepal
              </p>
              <h2
                ref={headingRef}
                className="font-bold text-black leading-tight"
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 3.2rem)',
                }}
              >
                Packages We{' '}
                <span className="text-[#c0392b] relative inline-block">
                  Provide
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c0392b]/30 transform scale-x-0 transition-transform duration-500"></span>
                </span>
              </h2>
              <div
                ref={lineRef}
                className="mt-2 md:mt-3 h-[2px] mx-auto md:mx-0"
                style={{ width: '60px', transformOrigin: 'left' }}
              />
            </div>
            <p
              ref={subRef}
              className="text-black/60 text-xs md:text-sm max-w-md leading-relaxed text-center md:text-left"
            >
              Crafted for every kind of guest — from first-timers to seasoned VIPs. Scroll through our exclusive offerings.
            </p>
          </div>
          
          <div className="mt-8 md:mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-black/30 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase">
              <div className="w-[1px] h-8 md:h-10 bg-black/30 animate-pulse" />
              <span className="hidden sm:inline">Scroll to explore</span>
              <span className="sm:hidden">Explore</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stacking cards */}
      <div className="relative">
        {packages.map((pkg, i) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            index={i}
            panelRef={panelRefs.current[i]}
            innerRef={innerRefs.current[i]}
          />
        ))}
      </div>
    </div>
  )
}