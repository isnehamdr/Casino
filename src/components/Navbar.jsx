import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const menuItems = [
  { label: "The Casinos Pride", href: "/" },
  { label: "About Casino Pride", href: "#" },
  { label: "Why Choose Us", href: "#" },
  { label: "Packages", href: "#" },
  { label: "Games", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact Us", href: "#" },
];

// Icons
const HamburgerIcon = () => (
  <svg className="w-7 h-6" viewBox="0 0 50 36.5">
    <g stroke="#d72921" strokeWidth="3" strokeLinecap="round">
      <path d="M2 2.5h35M2 18.5h27M2 34.5h46" />
    </g>
  </svg>
);

const LocationIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.11,7.91A7.74,7.74,0,1,0,2,11.08,10.72,10.72,0,0,0,3.6,14.6a80.8,80.8,0,0,0,5.76,7.33c.12.14.17.12.28,0,1.51-1.75,3-3.52,4.37-5.37a20.42,20.42,0,0,0,2.54-4.06A7.8,7.8,0,0,0,17.11,7.91ZM9.5,12.76a3.38,3.38,0,1,1,3.38-3.38A3.39,3.39,0,0,1,9.5,12.76Z" stroke="white" strokeWidth="1.25" fill="none"/> </svg> );

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 35.5 35.5">
    <path d="M32.9 33.2L2.7 3M32.9 3L2.7 33.2" stroke="#d72921" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const sideMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);

  // Header animation
  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
  }, []);

  // Side menu animation
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(sideMenuRef.current, { display: "flex" });
      gsap.fromTo(sideMenuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.4 }
      );

      gsap.to(overlayRef.current, { opacity: 1 });
    } else {
      document.body.style.overflow = "";

      gsap.to(sideMenuRef.current, {
        x: "-100%",
        duration: 0.4,
        onComplete: () =>
          gsap.set(sideMenuRef.current, { display: "none" }),
      });

      gsap.to(overlayRef.current, { opacity: 0 });
    }
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header ref={headerRef} className="bg-transparent text-white fixed w-full z-50 transition-colors duration-300">
        <div className="flex justify-between items-center px-4 md:px-10 h-[65px]">

          {/* LEFT */}
          <button onClick={() => setMenuOpen(true)} className="flex items-center gap-2 text-[#d72921] cursor-pointer">
            <HamburgerIcon />
            <span className="hidden sm:block text-sm uppercase">Menu</span>
          </button>

          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer">
            <img src="/images/logo.png" alt="logo" className="h-10 md:h-12"/>
          </div>

          {/* RIGHT */}
          <button
            onClick={() => setMapOpen(true)}
            className="text-white bg-[#d72921] text-sm uppercase flex gap-2 items-center cursor-pointer border border-[#d72921] px-3 py-2"
          >
            <LocationIcon />
            <span className="hidden sm:block">Our Casino</span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/60 opacity-0 z-40"
        style={{ display: menuOpen ? "block" : "none" }}
      />

      {/* SIDE MENU */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 left-0 w-[80%] md:w-[350px] h-full bg-[#1b1b1b] z-50 flex-col p-6"
        style={{ display: "none" }}
      >
        {/* CLOSE */}
        <button onClick={() => setMenuOpen(false)} className="mb-6 text-[#d72921] flex gap-2 items-center cursor-pointer">
          <CloseIcon /> Close
        </button>

        {/* MENU ITEMS */}
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block text-xl md:text-2xl uppercase text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* GOOGLE MAP MODAL */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-black w-full max-w-3xl relative">

            {/* CLOSE */}
            <button
              onClick={() => setMapOpen(false)}
              className="absolute top-3 right-3 text-[#d72921] cursor-pointer"
            >
              <CloseIcon />
            </button>

            {/* MAP */}
            <iframe
              title="Casino Location"
              src="https://www.google.com/maps?q=Casino+Pride+Goa&output=embed"
              className="w-full h-[400px] md:h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}