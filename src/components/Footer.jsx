import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a1a" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const casinos = ["Flush", "Mini Flush", "Baccarat", "Roulette", "Black Jack"];
const discover = ["The Experience", "Your First Visit?", "How to Play Guides", "Dining", "FAQs", "Contact us"];
const bottomLinks = ["Careers", "Sensible Gaming", "Our Policies"];

export default function Footer() {
  const footerRef = useRef(null);
  const searchRef = useRef(null);
  const followRef = useRef(null);
  const casinosRef = useRef(null);
  const discoverRef = useRef(null);
  const offersRef = useRef(null);
  const bottomRef = useRef(null);
  const dividerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered column reveal on scroll
      const columns = [searchRef.current, casinosRef.current, discoverRef.current, offersRef.current];
      gsap.fromTo(
        columns,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );

      // Follow section
      gsap.fromTo(
        followRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );

      // Divider line draw
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 90%",
          },
        }
      );

      // Bottom links
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
          },
        }
      );

      // Social icon pop-in
      const socials = followRef.current?.querySelectorAll(".social-icon");
      if (socials) {
        gsap.fromTo(
          socials,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: followRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // Casino & discover links stagger
      const casinoLinks = casinosRef.current?.querySelectorAll(".nav-link");
      const discoverLinks = discoverRef.current?.querySelectorAll(".nav-link");
      [casinoLinks, discoverLinks].forEach((links) => {
        if (links) {
          gsap.fromTo(
            links,
            { opacity: 0, x: -15 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: links[0],
                start: "top 90%",
              },
            }
          );
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Hover effect for social icons
  const handleSocialHover = (e, isEnter) => {
    gsap.to(e.currentTarget, {
      scale: isEnter ? 1.15 : 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  // Hover effect for nav links
  const handleLinkHover = (e, isEnter) => {
    gsap.to(e.currentTarget, {
      x: isEnter ? 6 : 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Button hover
  const handleBtnHover = (e, isEnter) => {
    gsap.to(e.currentTarget, {
      scale: isEnter ? 1.04 : 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#1a1a1a] text-white font-['Cormorant_Garamond',serif] pt-16 pb-0 px-0"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14">

          {/* Column 1: Search + Follow */}
          <div ref={searchRef} className="flex flex-col gap-12">
            {/* Search */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#d72921] mb-5 font-light uppercase">
                Search
              </p>
              <div className="relative group">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search"
                  className="w-full bg-[#f5f0e8] text-[#1a1a1a] placeholder-[#9a8a7a] text-sm px-4 py-3 pr-12 rounded-none outline-none focus:ring-2 focus:ring-[#d72921] transition-all duration-300"
                  style={{ fontFamily: "inherit" }}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b5c4a] hover:text-[#d72921] transition-colors duration-200">
                  <SearchIcon />
                </button>
              </div>
            </div>

            {/* Follow */}
            <div ref={followRef}>
              <p className="text-xs tracking-[0.3em] text-[#d72921] mb-5 font-light uppercase">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FacebookIcon />, label: "Facebook" },
                  { icon: <XIcon />, label: "X" },
                  { icon: <InstagramIcon />, label: "Instagram" },
                  { icon: <YoutubeIcon />, label: "YouTube" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="social-icon w-10 h-10 rounded-full bg-[#d72921] text-white flex items-center justify-center hover:bg-[#b81f19] transition-colors duration-200 cursor-pointer"
                    onMouseEnter={(e) => handleSocialHover(e, true)}
                    onMouseLeave={(e) => handleSocialHover(e, false)}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Casinos */}
          <div ref={casinosRef}>
            <p className="text-xs tracking-[0.3em] text-[#d72921] mb-6 font-light uppercase">
              Games
            </p>
            <ul className="flex flex-col gap-4">
              {casinos.map((casino) => (
                <li key={casino}>
                  <a
                    href="#"
                    className="nav-link inline-block text-white hover:text-[#d72921] text-base font-light tracking-wide transition-colors duration-200 relative group"
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-[#d72921] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {casino}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Discover */}
          <div ref={discoverRef}>
            <p className="text-xs tracking-[0.3em] text-[#d72921] mb-6 font-light uppercase">
              Discover
            </p>
            <ul className="flex flex-col gap-4">
              {discover.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="nav-link inline-block text-white hover:text-[#d72921] text-base font-light tracking-wide transition-colors duration-200 relative group"
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-[#d72921] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offers */}
          <div ref={offersRef}>
            <p className="text-xs tracking-[0.3em] text-[#d72921] mb-6 font-light uppercase">
              Offers
            </p>
            <button
              className="border border-[#d72921] text-white bg-[#d72921] text-xs tracking-[0.25em] uppercase px-6 py-4 hover:bg-[#d72921] hover:text-white transition-all duration-300 cursor-pointer font-medium"
              onMouseEnter={(e) => handleBtnHover(e, true)}
              onMouseLeave={(e) => handleBtnHover(e, false)}
            >
              Sign Up For Offers
            </button>
          </div>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="h-px bg-[#3a3530]" />

        {/* Bottom Bar */}
        <div ref={bottomRef} className="py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Left: Links + Copyright */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {bottomLinks.map((link, i) => (
                <span key={link} className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-[#d72921] text-xs tracking-wide transition-colors duration-200"
                  >
                    {link}
                  </a>
                  {i < bottomLinks.length - 1 && (
                    <span className="text-[#4a443e] text-xs">–</span>
                  )}
                </span>
              ))}
            </div>
          
          </div>

          {/* Right: BeGambleAware */}
          <div className="flex items-center gap-3 flex-shrink-0 text-white">
            Crafted by 
            <a href="https://sait.com.np/" className="hover:text-[#d72921] transition-colors duration-200">S.A.I.T Solution Trade and Concern</a>
          </div>
        </div>
      </div>
    </footer>
  );
}