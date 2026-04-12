import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const slides = [
  {
    bg: 'https://napoleons-casinos.co.uk/wp-content/uploads/2016/12/chips.jpg',
    heading: 'EXPERIENCE A',
    title: 'NIGHT TO REMEMBER',
    subtitle: '& FIRST CLASS SERVICE',
    cta: 'FIND YOUR LOCAL BRANCH',
    ctaLink: '#',
  },
  {
    bg: '/images/bg2.avif',
    heading: 'WELCOME TO',
    title: 'NAPOLEONS CASINOS',
    subtitle: '& EXCLUSIVE MEMBERS CLUB',
    cta: 'SIGN UP FOR OFFERS',
    ctaLink: '#',
  },
  {
    bg: 'https://napoleons-casinos.co.uk/wp-content/uploads/2016/12/chips-1850x775.jpg',
    heading: 'ENJOY THE THRILL OF',
    title: 'WORLD CLASS GAMING',
    subtitle: '& PREMIUM DINING',
    cta: 'EXPLORE OUR CASINOS',
    ctaLink: '#',
  },
  {
bg: '/images/bg2.avif',
    heading: 'VISIT US IN',
    title: 'FIVE GREAT LOCATIONS',
    subtitle: '& UNFORGETTABLE NIGHTS',
    cta: 'OUR LOCATIONS',
    ctaLink: '#',
  },
]


export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const slideRef = useRef(null)
  const headingRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const navRef = useRef(null)
  const dotsRef = useRef(null)
  const intervalRef = useRef(null)

  const animateIn = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30, letterSpacing: '0.5em' },
      { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 0.7, ease: 'power3.out' }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
        '-=0.3'
      )
  }

  const animateOut = (cb) => {
    gsap.to([headingRef.current, titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
      stagger: 0.05,
      onComplete: cb,
    })
  }

  const goToSlide = (idx) => {
    if (idx === current) return
    animateOut(() => {
      setCurrent(idx)
    })
  }

  const prevSlide = () => goToSlide((current - 1 + slides.length) % slides.length)
  const nextSlide = () => goToSlide((current + 1) % slides.length)

  useEffect(() => {
    animateIn()
    intervalRef.current = setInterval(() => {
      animateOut(() => setCurrent((c) => (c + 1) % slides.length))
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [current])

  useEffect(() => {
    // Nav entrance
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
    gsap.fromTo(
      dotsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.6 }
    )
  }, [])

  const slide = slides[current]

  return (
    <section id="hero">
    <div className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background with smooth transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5 ">
    

      
      </nav>

    

      {/* Slide content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: 'calc(100vh - 120px)' }}
      >
        <p
          ref={headingRef}
          className="text-white/90 font-bold tracking-[0.25em] mb-2 md:mb-3"
          style={{ fontSize: 'clamp(0.75rem, 2vw, 1.1rem)', opacity: 0 }}
        >
          {slide.heading}
        </p>
        <h1
          ref={titleRef}
          className="text-white font-black leading-none mb-3 md:mb-4"
          style={{
            fontSize: 'clamp(2.2rem, 8vw, 4.5rem)',
            letterSpacing: '-0.01em',
            opacity: 0,
            textShadow: '0 4px 32px rgba(0,0,0,0.5)',
          }}
        >
          {slide.title}
        </h1>
        <h2
          ref={subtitleRef}
          className="text-white/90 font-semibold tracking-widest mb-8 md:mb-10"
          style={{
            fontSize: 'clamp(1rem, 3vw, 2rem)',
            letterSpacing: '0.15em',
            opacity: 0,
          }}
        >
          {slide.subtitle}
        </h2>
        <a
          ref={ctaRef}
          href={slide.ctaLink}
          className="inline-block border border-[#c0392b] bg-[#c0392b] text-white font-bold tracking-[0.2em] px-8 md:px-12 py-3 md:py-4 text-xs md:text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(192,57,43,0.5)]"
          style={{ opacity: 0 }}
        >
          {slide.cta}
        </a>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={prevSlide}
        className="absolute font-extrabold left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 text-[#c0392b]  cursor-pointer text-3xl md:text-7xl transition-colors duration-200 p-2 select-none"
        aria-label="Previous"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute font-extrabold right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 text-[#c0392b] cursor-pointer text-3xl md:text-7xl transition-colors duration-200 p-2 select-none"
        aria-label="Next"
      >
        &#8250;
      </button>

      {/* Slide dots */}
      <div ref={dotsRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 font-bold text-sm tracking-widest ${
              i === current
                ? 'text-white border border-white rounded-full w-8 h-8 flex items-center justify-center'
                : 'text-[#c0392b]/50 hover:text-[#c0392b]/80 w-8 h-8 flex items-center justify-center'
            }`}
            aria-label={`Slide ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Mobile signup button (hidden on sm+) */}
      {/* <div className="sm:hidden absolute top-[72px] left-0 right-0 z-20 flex justify-center py-2 border-b border-[#c0392b]/10">
        <a
          href="#"
          className="border border-[#c0392b] text-white text-[10px] font-bold tracking-[0.2em] px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
        >
          SIGN UP FOR OFFERS
        </a>
      </div> */}

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-[115px] sm:top-[72px] left-0 right-0 z-30 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4">
          {['HOME', 'THE CASINOS', 'GAMING', 'DINING', 'EVENTS', 'MEMBERSHIP', 'PROMOTIONS'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white font-bold tracking-[0.2em] text-sm border-b border-white/10 pb-4 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
    </section> 
  )
}