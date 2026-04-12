import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Animated illusion diamond grid (CSS + JS animated SVG pattern)
const DiamondIllusion = () => {
  const svgRef = useRef(null)

  useEffect(() => {
    const diamonds = svgRef.current?.querySelectorAll('.diamond-cell')
    if (!diamonds) return

    // Wave ripple illusion animation
    diamonds.forEach((el, i) => {
      const row = Math.floor(i / 12)
      const col = i % 12
      const delay = (row + col) * 0.04

      gsap.to(el, {
        opacity: 0.08,
        scale: 0.7,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay % 2,
        transformOrigin: 'center center',
      })
    })
  }, [])

  const cols = 14
  const rows = 8
  const size = 36

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${cols * size} ${rows * size}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const cx = c * size + size / 2
            const cy = r * size + size / 2
            const half = size * 0.38
            const points = `${cx},${cy - half} ${cx + half},${cy} ${cx},${cy + half} ${cx - half},${cy}`
            return (
              <g key={`${r}-${c}`}>
                <polygon
                  className="diamond-cell"
                  points={points}
                  fill="none"
                  stroke="#b5182a"
                  strokeWidth="0.8"
                  opacity="0.18"
                />
                <polygon
                  points={`${cx},${cy - half * 0.6} ${cx + half * 0.6},${cy} ${cx},${cy + half * 0.6} ${cx - half * 0.6},${cy}`}
                  fill="none"
                  stroke="#b5182a"
                  strokeWidth="0.4"
                  opacity="0.10"
                />
              </g>
            )
          })
        )}
      </svg>
    </div>
  )
}

// Animated counting number
const StatCard = ({ number, label, delay }) => {
  const numRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%' },
      }
    )
    // Count-up animation
    const obj = { val: 0 }
    gsap.to(obj, {
      val: parseInt(number),
      duration: 2,
      ease: 'power2.out',
      delay: delay + 0.3,
      scrollTrigger: { trigger: cardRef.current, start: 'top 85%' },
      onUpdate: () => {
        if (numRef.current) numRef.current.textContent = Math.round(obj.val) + (number.includes('+') ? '+' : '')
      },
    })
  }, [number, delay])

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center p-6 border border-[#c0392b]/20 bg-white/70 backdrop-blur-sm hover:border-[#c0392b]/60 transition-all duration-300 group"
      style={{ opacity: 0 }}
    >
      <span
        ref={numRef}
        className="text-3xl md:text-4xl font-black text-[#c0392b] mb-1"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        0
      </span>
      <span className="text-xs font-bold tracking-[0.18em] text-[#4d4d4d]/70 uppercase text-center">{label}</span>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const bodyRef = useRef(null)
  const noteRef = useRef(null)
  const ctaRef = useRef(null)
  const tagsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title slide in
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
        }
      )
      // Decorative line expand
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 0.8, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
        }
      )
      // Body text
      gsap.fromTo(
        bodyRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: bodyRef.current, start: 'top 88%' },
        }
      )
      // Note
      gsap.fromTo(
        noteRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.1,
          scrollTrigger: { trigger: noteRef.current, start: 'top 90%' },
        }
      )
      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.5)', delay: 0.2,
          scrollTrigger: { trigger: ctaRef.current, start: 'top 92%' },
        }
      )
      // Feature tags - only animate if the element exists
      if (tagsRef.current?.children) {
        gsap.fromTo(
          tagsRef.current.children,
          { opacity: 0, scale: 0.85, y: 15 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)',
            stagger: 0.1,
            scrollTrigger: { trigger: tagsRef.current, start: 'top 90%' },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // const features = [
  //   'Live Gaming', 'Blackjack', 'Electronic Gaming', 'Fine Dining',
  //   'Premium Bar', 'VIP Membership', 'Live Events', 'Kathmandu',
  // ]

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '500+', label: 'Gaming Positions' },
    { number: '5', label: 'Star Experience' },
    { number: '1000+', label: 'Happy Members' },
  ]

  return (
    <section id='about'
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundColor: '#f5f4f2',
      }}
    >
      {/* Animated diamond SVG illusion overlay */}
      <DiamondIllusion />

      {/* Subtle gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f4f2]/60 via-transparent to-[#f5f4f2]/60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">

        {/* Eyebrow label */}
        <p className="text-[#c0392b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
          About Us
        </p>

        {/* Main Title */}
        <h2
          ref={titleRef}
          className="font-bold text-[#1a1a1a] leading-tight mb-4"
          style={{
           
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            opacity: 0,
          }}
        >
          Welcome To Casino Pride Nepal
          <br />
          {/* <span style={{ color: '#c0392b', fontStyle: 'italic' }}>Bars &amp; Restaurants</span> */}
        </h2>

        {/* Decorative line */}
        <div
          ref={lineRef}
          className="mx-auto mb-8 h-[2px] bg-gradient-to-r from-transparent via-[#c0392b] to-transparent"
          style={{ width: '120px', transformOrigin: 'center', transform: 'scaleX(0)' }}
        />

        {/* Body text */}
        <p
          ref={bodyRef}
          className="text-[#4d4d4d] leading-relaxed mb-6 text-center"
          style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)', opacity: 0 }}
        >
          Casino Pride Nepal is part of the renowned Pride Group, a leader in luxury gaming and hospitality across Asia.
          Located in the stunning landscapes of Kathmandu, our casino is designed to offer a top-tier gaming experience
          combined with the highest standards of service and elegance. With over a decade of expertise in the gaming
          industry, Casino Pride Nepal brings you an unforgettable experience in gaming, entertainment, and hospitality.
        </p>

        {/* Feature tags */}
        {/* <div ref={tagsRef} className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((f) => (
            <span
              key={f}
              className="border border-[#c0392b]/30 text-[#c0392b] text-[10px] font-bold tracking-[0.15em] px-3 py-1 uppercase hover:bg-[#c0392b] hover:text-white transition-colors duration-300 cursor-default"
            >
              {f}
            </span>
          ))}
        </div> */}

        {/* Age notice */}
        <p
          ref={noteRef}
          className="font-bold text-[#1a1a1a] mb-10 text-sm md:text-base"
          style={{ opacity: 0 }}
        >
          Over 18 only – if you are lucky enough to look under 25 you will need to bring a valid photo ID.
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ opacity: 0 }}>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[#c0392b] font-bold tracking-[0.22em] text-sm uppercase group border-b-2 border-[#c0392b]/30 pb-1 hover:border-[#c0392b] transition-all duration-300"
          >
           SIGN IN HERE
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>

      {/* Stats row */}
      {/* <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} number={s.number} label={s.label} delay={i * 0.12} />
        ))}
      </div> */}

      {/* Bottom decorative border */}
      {/* <div className="relative z-10 mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-16 h-[1px] bg-[#c0392b]/30" />
          <div className="w-2 h-2 rotate-45 border border-[#c0392b]/50" />
          <div className="w-2 h-2 rotate-45 bg-[#c0392b]/40" />
          <div className="w-2 h-2 rotate-45 border border-[#c0392b]/50" />
          <div className="w-16 h-[1px] bg-[#c0392b]/30" />
        </div>
      </div> */}
    </section>
  )
}


// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// /* ================= FLOATING PARTICLES ================= */
// const FloatingDots = () => (
//   <div className="absolute inset-0 pointer-events-none">
//     {Array.from({ length: 20 }).map((_, i) => (
//       <span
//         key={i}
//         className="absolute w-[2px] h-[2px] bg-[#c0392b]/30 rounded-full animate-pulse"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           animationDelay: `${Math.random() * 5}s`,
//         }}
//       />
//     ))}
//   </div>
// )

// /* ================= DIAMOND GRID ================= */
// const DiamondIllusion = () => {
//   const svgRef = useRef(null)

//   useEffect(() => {
//     const diamonds = svgRef.current?.querySelectorAll('.diamond-cell')
//     if (!diamonds) return

//     diamonds.forEach((el, i) => {
//       const row = Math.floor(i / 12)
//       const col = i % 12

//       gsap.to(el, {
//         opacity: gsap.utils.random(0.05, 0.2),
//         scale: gsap.utils.random(0.6, 1),
//         duration: gsap.utils.random(1.5, 3),
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         delay: (row + col) * 0.05,
//       })
//     })
//   }, [])

//   const cols = 14
//   const rows = 8
//   const size = 36

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
//       <svg
//         ref={svgRef}
//         width="100%"
//         height="100%"
//         viewBox={`0 0 ${cols * size} ${rows * size}`}
//         preserveAspectRatio="xMidYMid slice"
//       >
//         {Array.from({ length: rows }).map((_, r) =>
//           Array.from({ length: cols }).map((_, c) => {
//             const cx = c * size + size / 2
//             const cy = r * size + size / 2
//             const half = size * 0.38
//             const points = `${cx},${cy - half} ${cx + half},${cy} ${cx},${cy + half} ${cx - half},${cy}`

//             return (
//               <g key={`${r}-${c}`}>
//                 <polygon
//                   className="diamond-cell"
//                   points={points}
//                   fill="none"
//                   stroke="#b5182a"
//                   strokeWidth="0.8"
//                   opacity="0.18"
//                 />
//                 <polygon
//                   points={`${cx},${cy - half * 0.6} ${cx + half * 0.6},${cy} ${cx},${cy + half * 0.6} ${cx - half * 0.6},${cy}`}
//                   fill="none"
//                   stroke="#b5182a"
//                   strokeWidth="0.4"
//                   opacity="0.10"
//                 />
//               </g>
//             )
//           })
//         )}
//       </svg>
//     </div>
//   )
// }

// /* ================= MAIN COMPONENT ================= */
// export default function About() {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const lineRef = useRef(null)
//   const bodyRef = useRef(null)
//   const noteRef = useRef(null)
//   const ctaRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.9,
//           ease: 'power3.out',
//           scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
//         }
//       )

//       gsap.fromTo(
//         lineRef.current,
//         { scaleX: 0 },
//         {
//           scaleX: 1,
//           duration: 0.8,
//           ease: 'power2.out',
//           scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
//         }
//       )

//       gsap.fromTo(
//         bodyRef.current,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//           delay: 0.2,
//           scrollTrigger: { trigger: bodyRef.current, start: 'top 88%' },
//         }
//       )

//       gsap.fromTo(
//         noteRef.current,
//         { opacity: 0, x: -20 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           ease: 'power2.out',
//           scrollTrigger: { trigger: noteRef.current, start: 'top 90%' },
//         }
//       )

//       gsap.fromTo(
//         ctaRef.current,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           ease: 'back.out(1.5)',
//           scrollTrigger: { trigger: ctaRef.current, start: 'top 92%' },
//         }
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 md:py-28 overflow-hidden"
//       style={{
//         backgroundImage: `url('/images/bg.png')`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'repeat',
//         backgroundColor: '#f5f4f2',
//       }}
//     >
//       {/* ✨ SHIMMER OVERLAY */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light"
//         style={{
//           backgroundImage: `url('/images/shimmer_bg.gif')`,
//           backgroundSize: 'cover',
//           backgroundRepeat: 'repeat',
//         }}
//       />

//       {/* 💎 Diamond Animation */}
//       <DiamondIllusion />

//       {/* 🌌 Floating Particles */}
//       <FloatingDots />

//       {/* 🔥 Glow Behind Title */}
//       <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[300px] h-[300px] bg-[#c0392b]/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#f5f4f2]/60 via-transparent to-[#f5f4f2]/60 pointer-events-none" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">

//         <p className="text-[#c0392b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
//           About Us
//         </p>

//         <h2
//           ref={titleRef}
//           className="font-bold text-[#1a1a1a] leading-tight mb-4"
//           style={{
//             fontFamily: 'Georgia, serif',
//             fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
//             letterSpacing: '0.02em',
//             opacity: 0,
//           }}
//         >
//           Welcome To Casino Pride Nepal
//         </h2>

//         <div
//           ref={lineRef}
//           className="mx-auto mb-8 h-[2px] bg-gradient-to-r from-transparent via-[#c0392b] to-transparent"
//           style={{ width: '120px', transformOrigin: 'center', transform: 'scaleX(0)' }}
//         />

//         <p
//           ref={bodyRef}
//           className="text-[#4d4d4d] leading-[1.8] mb-6"
//           style={{ opacity: 0 }}
//         >
//           Casino Pride Nepal is part of the renowned Pride Group, offering a luxury gaming
//           experience in Kathmandu with world-class hospitality and entertainment.
//         </p>

//         <p
//           ref={noteRef}
//           className="font-bold text-[#1a1a1a] mb-10 text-sm md:text-base"
//           style={{ opacity: 0 }}
//         >
//           Over 18 only – valid ID required.
//         </p>

//         <div ref={ctaRef} style={{ opacity: 0 }}>
//           <a
//             href="#"
//             className="relative inline-flex items-center gap-3 text-[#c0392b] font-bold tracking-[0.22em] text-sm uppercase group pb-1"
//           >
//             SIGN IN HERE
//             <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>

//             {/* underline animation */}
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#c0392b] transition-all duration-500 group-hover:w-full"></span>
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }