import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    title: 'World-Class Gaming Experience',
    desc: 'Enjoy a variety of games, from Baccarat and Roulette to Flush and Marriage, all in a premium environment.',
  },
  {
    title: 'Luxurious Ambiance',
    desc: 'Relax in our elegant interiors designed for comfort and sophistication, offering the perfect gaming atmosphere.',
  },
  {
    title: 'Exceptional Hospitality',
    desc: 'Our professional and friendly staff are committed to making your visit seamless and enjoyable.',
  },
  {
    title: 'Exclusive Entertainment',
    desc: 'From live music to themed parties, every night at Casino Pride Nepal is a celebration.',
  },
  {
    title: 'Gourmet Dining',
    desc: 'Savor delicious meals crafted by expert chefs, offering both Nepali and international cuisines.',
  },
  {
    title: 'Safe & Responsible Gaming',
    desc: 'We promote responsible gaming practices to ensure a safe and secure environment for all our guests.',
  },
  {
    title: 'Strategic Location',
    desc: 'Conveniently located in Kathmandu, making us easily accessible for both locals and travelers.',
  },
  {
    title: 'Loyalty Rewards',
    desc: 'Join our Loyalty Program and enjoy VIP privileges, discounts, and exciting rewards.',
  },
  {
    title: 'A Legacy of Excellence',
    desc: 'Part of the Pride Group, we bring years of expertise in luxury gaming and hospitality.',
  },
  {
    title: 'Unforgettable Memories',
    desc: "Whether you're here to win big or celebrate, we guarantee experiences you'll cherish forever.",
  },
]

const attributes = [
  { icon: '♠', label: 'Baccarat' },
  { icon: '★', label: 'VIP Rewards' },
  { icon: '◈', label: 'Safe Gaming' },
  { icon: '♡', label: 'Legacy' },
  { icon: '✦', label: 'Pride Group' },
]

/* ── Magnetic icon tile ── */
function MagneticTile({ attr }) {
  return (
    <div
      className="flex flex-col items-center justify-center 
                 py-2 px-1 
                 border border-[#c0392b]/15 
                 bg-[#faf9f7] 
                 hover:border-[#c0392b]/60 
                 hover:bg-[#c0392b]/5 
                 transition-all duration-300 
                 group cursor-default h-full"
    >
      <span className="text-sm md:text-lg text-[#c0392b] mb-1 group-hover:scale-110 transition-transform duration-200">
        {attr.icon}
      </span>
      <span className="text-[8px] md:text-[10px] font-bold tracking-wide text-[#888] text-center leading-tight">
        {attr.label}
      </span>
    </div>
  )
}

/* ── Animated list item ── */
function ListItem({ item, index }) {
  const itemRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.55, ease: 'power3.out',
        delay: index * 0.08,
        scrollTrigger: { trigger: itemRef.current, start: 'top 90%' },
      }
    )
  }, [])

  return (
    <div
      ref={itemRef}
      className="flex gap-3 items-start group"
      style={{ opacity: 0 }}
      onMouseEnter={() => gsap.to(barRef.current, { scaleX: 1, duration: 0.35, ease: 'power2.out' })}
      onMouseLeave={() => gsap.to(barRef.current, { scaleX: 0, duration: 0.25, ease: 'power2.in' })}
    >
      {/* Animated red diamond bullet */}
      <span className="text-[#c0392b] text-md mt-[3px] flex-shrink-0 group-hover:rotate-45 transition-transform duration-300 inline-block">
        ◆
      </span>
      <div className="relative flex-1">
        {/* Sliding underline on hover */}
        <div
          ref={barRef}
          className="absolute -bottom-0.5 left-0 h-[1px] w-full bg-[#c0392b]/30"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
        />
        <p className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#c0392b] transition-colors duration-200 leading-snug">
          {item.title}
        </p>
        <p className="text-sm text-[#666] leading-relaxed mt-0.5">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Choose() {
  const sectionRef   = useRef(null)
  const eyebrowRef   = useRef(null)
  const titleRef     = useRef(null)
  const lineRef      = useRef(null)
  const leftImgRef   = useRef(null)
  const centerImgRef = useRef(null)
  const rightImgRef  = useRef(null)
  const iconsRef     = useRef(null)
  const shimmerRef   = useRef(null)

  const [expanded, setExpanded] = useState(false)
  const visibleItems = expanded ? highlights : highlights.slice(0, 4)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Eyebrow letter-by-letter reveal ── */
      if (eyebrowRef.current) {
        const letters = eyebrowRef.current.querySelectorAll('span')
        gsap.fromTo(letters,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.03,
            scrollTrigger: { trigger: eyebrowRef.current, start: 'top 88%' } }
        )
      }

      /* ── Title clip-reveal ── */
      gsap.fromTo(titleRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power3.inOut',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      )

      /* ── Line expand ── */
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.out', delay: 0.15,
          scrollTrigger: { trigger: lineRef.current, start: 'top 88%' } }
      )

      /* ── Images: staggered parallax slide-in ── */
      gsap.fromTo(leftImgRef.current,
        { opacity: 0, x: -60, scale: 1.08 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: leftImgRef.current, start: 'top 82%' } }
      )
      gsap.fromTo(centerImgRef.current,
        { opacity: 0, y: 60, scale: 1.06 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: centerImgRef.current, start: 'top 82%' } }
      )
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 60, scale: 1.06 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: rightImgRef.current, start: 'top 82%' } }
      )

      /* ── Attribute icon tiles pop-in ── */
      if (iconsRef.current) {
        gsap.fromTo(iconsRef.current.children,
          { opacity: 0, scale: 0.6, rotate: -15 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(1.7)',
            stagger: 0.1, delay: 0.5,
            scrollTrigger: { trigger: iconsRef.current, start: 'top 88%' } }
        )
      }

      /* ── Continuous shimmer sweep on right panel ── */
      if (shimmerRef.current) {
        gsap.fromTo(shimmerRef.current,
          { x: '-100%' },
          { x: '200%', duration: 2.4, ease: 'power1.inOut',
            repeat: -1, repeatDelay: 4,
            scrollTrigger: { trigger: shimmerRef.current, start: 'top 85%' } }
        )
      }

      /* ── Subtle scroll parallax on images ── */
      ;[leftImgRef, centerImgRef, rightImgRef].forEach((ref, i) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            gsap.to(ref.current?.querySelector('img'), {
              y: self.progress * 30 * (i + 1) * 0.5,
              ease: 'none',
              duration: 0,
            })
          },
        })
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  /* Wrap eyebrow text into individual letter spans */
  const eyebrowText = 'Casino Pride Nepal'
  const eyebrowSpans = eyebrowText.split('').map((ch, i) => (
    <span key={i} style={{ display: 'inline-block', opacity: 0 }}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ))

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* Faint diagonal texture */}
      {/* <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg,#c0392b 0,#c0392b 1px,transparent 0,transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      /> */}

      <div className="relative z-10 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT TEXT PANEL ── */}
          <div className="w-full lg:w-[42%] flex-shrink-0">

            {/* Eyebrow — letter-by-letter */}
            <p
              ref={eyebrowRef}
              className="text-xl font-bold tracking-[3px] uppercase mb-3"
              style={{ color: '#c0392b' }}
            >
              {eyebrowSpans}
            </p>

            {/* Title — clip-path reveal */}
            <h2
              ref={titleRef}
              className="font-bold text-[#1a1a1a] leading-tight mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 3.4rem)', opacity: 0 }}
            >
              Why Choose <br />
              <span className="text-[#c0392b]">Casino Pride Nepal</span>
            </h2>

            {/* Expanding line */}
            <div
              ref={lineRef}
              className="h-[2px] bg-gradient-to-r from-[#c0392b] to-transparent mb-6"
              style={{ width: '80px', transformOrigin: 'left', transform: 'scaleX(0)' }}
            />

            {/* Highlight list */}
            <div className="flex flex-col gap-[14px]">
              {visibleItems.map((item, i) => (
                <ListItem key={item.title} item={item} index={i} />
              ))}
            </div>

            {/* Expand toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-5 text-[11px] font-bold tracking-[0.16em] cursor-pointer text-[#c0392b] uppercase underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
            >
              {expanded ? 'Show Less ↑' : 'For more information ↓'}
            </button>
          </div>

          {/* ── RIGHT: Image collage + icons ── */}
          <div className="relative w-full lg:w-[64%]">

            {/* Shimmer sweep overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-none">
              <div
                ref={shimmerRef}
                className="absolute inset-y-0 w-1/3"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                }}
              />
            </div>

            {/* Row 1 */}
            <div className="flex gap-2 md:gap-3 items-end mb-2 md:mb-3">
              <div
                ref={leftImgRef}
                className="relative overflow-hidden group flex-[1.4]"
                style={{ opacity: 0 }}
              >
                <img
                  src="https://asset.montecarlosbm.com/styles/hotel_intro_left_image_webp/s3/media/orphea/place_du_casino_2020_0025.jpg.webp?h=74f5ab82&itok=MIh3bkA-"
                  alt="Casino Pride Nepal exterior"
                  className="w-full h-[200px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                />
                {/* <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" /> */}
                {/* Caption fade-up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="border-t border-white/40 pt-2">
                    <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/75">Casino Pride</p>
                    <p className="text-sm font-semibold text-white">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div
                ref={centerImgRef}
                className="relative overflow-hidden group flex-[0.7]"
                style={{ opacity: 0 }}
              >
                <img
                  src="https://asset.montecarlosbm.com/styles/hotel_intro_center_image_webp/s3/media/orphea/ca_gambling_european_room_0016_0.jpg.webp?h=df804d75&itok=O_taeqU5"
                  alt="Gaming floor"
                  className="w-full h-[200px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                />
                {/* <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" /> */}
              </div>
            </div>

            {/* Row 2 */}
          <div className="flex gap-2 md:gap-3 items-stretch">
  
  {/* Image */}
  <div
    ref={rightImgRef}
    className="relative overflow-hidden group flex-1 h-[120px] md:h-[220px]"
    style={{ opacity: 0 }}
  >
    <img
      src="https://asset.montecarlosbm.com/styles/hotel_intro_right_image_webp/s3/media/orphea/ca_roulette_2018_0004.jpg.webp?h=1ff7816e&itok=KUI-6_hk"
      alt="Roulette table"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

  {/* ICON GRID */}
  <div
    ref={iconsRef}
    className="grid grid-cols-3 grid-rows-2 gap-2 mt-3 flex-1 h-[120px] md:h-[205px]"
  >
    {attributes.map((attr) => (
      <MagneticTile key={attr.label} attr={attr} />
    ))}
  </div>

</div>
          </div>

        </div>
      </div>
    </section>
  )
}