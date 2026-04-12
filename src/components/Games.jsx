// import { useEffect, useRef, useState } from "react";

// const games = [
//   {
//     id: 1,
//     title: "Prices and Conditions of Entry",
//     tagline: "Welcome to Monte-Carlo",
//     description:
//       "Monte-Carlo Société des Bains de Mer welcomes you to the casinos in the heart of Monaco, on the legendary Casino Square. Find all the information about the Casino de Monte-Carlo.",
//     location: ["Casino de Monte-Carlo"],
//     type: "entry",
//     image:
//       "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/image/casino-de-monte-carlo-place-du-casino-2024-127%20%281%29.jpg.webp?h=049aeee8&itok=uoio0Ko5",
//   },
//   {
//     id: 2,
//     title: "Slot Machines",
//     tagline: "Bet on the atmosphere!",
//     description:
//       "You win on a slot machine when you have the same symbols on one of the win lines. Some slot machines also have Wild symbols, so even more combinations!",
//     location: ["Casino de Monte-Carlo", "Casino Café de Paris"],
//     type: "slot",
//     image:
//       "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/image/3-CCDP%20SALLE.jpg.webp?itok=n9P3iEUu",
//   },
//   {
//     id: 3,
//     title: "Punto Banco",
//     tagline: "Punto or Banco?",
//     description:
//       "The objective is to predict which hand will win: Punto, Banco or will it be a tie? Cards have the following values — the maximum is 9 points.",
//     location: ["Casino de Monte-Carlo"],
//     type: "table",
//     image:
//       "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_punto_banco_2018_0002.jpg.webp?h=a4ad037a&itok=LcnpNnqu",
//   },
//   {
//     id: 4,
//     title: "Poker Texas Hold'em Ultimate",
//     tagline: "Beat the dealer!",
//     description:
//       "The objective is to get a better hand than the dealer. The final hand is a combination of your cards and the open cards on the table.",
//     location: ["Casino de Monte-Carlo", "Casino Café de Paris"],
//     type: "table",
//     image:
//       "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_poker_2018_0001_0.jpg.webp?h=39ab1d28&itok=r1uN9KPW",
//   },
//   {
//     id: 5,
//     title: "Black Jack",
//     tagline: "Beat the bank!",
//     description:
//       "Black Jack or '21' is considered one of the world's most popular gambling games. The aim is to acquire a total value as near as possible to 21, without exceeding it.",
//     location: ["Casino de Monte-Carlo", "Casino Café de Paris"],
//     type: "table",
//     image:
//       "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_black_jack_2018_0001.jpg.webp?itok=ZHfoOkv9",
//   },
//   {
//     id: 6,
//     title: "Craps",
//     tagline: "Can you roll it?",
//     description:
//       "CRAPS is a fast-paced and exciting game. You roll the two dice and the numbers shown will determine your luck. On some bets you win with 7, on some you lose.",
//     location: ["Casino de Monte-Carlo"],
//     type: "table",
//     image:
//       "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/sc_craps_2018_0001_0.jpg.webp?h=5a2fa510&itok=-rA1yrbK",
//   },
// ];

// const filters = [
//   { label: "All", value: "all" },
//   { label: "Table Games", value: "table" },
//   { label: "Slot Machines", value: "slot" },
// ];

// const HeartIcon = ({ filled }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill={filled ? "currentColor" : "none"}
//     viewBox="2 3 20 18"
//     className="w-5 h-5"
//     stroke="currentColor"
//     strokeWidth={filled ? 0 : 1.5}
//   >
//     <path d="M12.4 20.4C12.1 20.5 11.9 20.5 11.6 20.4C9.9 19.2 2.5 14 2.5 9.1C2.5 2.8 10 1.8 12 6.1C14 1.8 21.5 2.8 21.5 9.1C21.5 14 14.1 19.2 12.4 20.4Z" />
//   </svg>
// );

// function GameCard({ game, index, wishlist, onWishlist }) {
//   const cardRef = useRef(null);
//   const imgRef = useRef(null);
//   const isFav = wishlist.includes(game.id);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     const handleMouseEnter = () => {
//       if (imgRef.current) {
//         imgRef.current.style.transform = "scale(1.08)";
//         imgRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
//       }
//     };
//     const handleMouseLeave = () => {
//       if (imgRef.current) {
//         imgRef.current.style.transform = "scale(1)";
//         imgRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
//       }
//     };

//     card.addEventListener("mouseenter", handleMouseEnter);
//     card.addEventListener("mouseleave", handleMouseLeave);
//     return () => {
//       card.removeEventListener("mouseenter", handleMouseEnter);
//       card.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className="game-card bg-white border border-gray-200 overflow-hidden group cursor-pointer"
//       style={{
//         opacity: 0,
//         transform: "translateY(40px)",
//         animationFillMode: "forwards",
//         animationName: "fadeInUp",
//         animationDuration: "0.65s",
//         animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//         animationDelay: `${index * 0.12}s`,
//       }}
//     >
//       <div className="relative overflow-hidden aspect-[16/9]">
//         <img
//           ref={imgRef}
//           src={game.image}
//           alt={game.title}
//           className="w-full h-full object-cover"
//           style={{ transform: "scale(1)", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
//           onError={(e) => {
//             e.target.src = `https://images.unsplash.com/photo-1570639232944-c0dfb84e7aa3?w=610&q=80`;
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         {/* <button
//           onClick={(e) => {
//             e.stopPropagation();
//             onWishlist(game.id);
//           }}
//           className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
//             isFav
//               ? "bg-[#c0392b] text-white scale-110"
//               : "bg-white/90 text-gray-500 hover:bg-white hover:text-[#c0392b]"
//           }`}
//         >
//           <HeartIcon filled={isFav} />
//         </button> */}
//       </div>

//       <div className="p-5 flex flex-col gap-3">
//         <div>
//           <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1 group-hover:text-[#c0392b] transition-colors duration-300">
//             {game.title}
//           </h3>
//           <p className="text-[#c0392b] text-xs font-medium uppercase tracking-widest mb-2">
//             {game.tagline}
//           </p>
//           <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{game.description}</p>
//         </div>

//         <div className="flex flex-wrap gap-1.5 mt-1">
//           {game.location.map((loc) => (
//             <span
//               key={loc}
//               className="text-xs text-gray-500 border border-gray-200 px-2 py-0.5 rounded-sm"
//             >
//               {loc}
//             </span>
//           ))}
//         </div>

//         <button className="mt-2 w-full bg-[#c0392b] hover:bg-[#c0392b] active:scale-95 text-white text-xs font-semibold tracking-widest uppercase py-3 transition-all duration-300">
//           Find Out More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function GamesSection() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [wishlist, setWishlist] = useState([]);
//   const [visible, setVisible] = useState(6);
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const filterRef = useRef(null);

//   const filtered =
//     activeFilter === "all"
//       ? games
//       : games.filter((g) => g.type === activeFilter);

//   const shown = filtered.slice(0, visible);

//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   useEffect(() => {
//     setVisible(6);
//   }, [activeFilter]);

//   useEffect(() => {
//     if (headerRef.current) {
//       headerRef.current.style.opacity = "0";
//       headerRef.current.style.transform = "translateY(-24px)";
//       setTimeout(() => {
//         if (headerRef.current) {
//           headerRef.current.style.transition =
//             "opacity 0.7s ease, transform 0.7s ease";
//           headerRef.current.style.opacity = "1";
//           headerRef.current.style.transform = "translateY(0)";
//         }
//       }, 100);
//     }
//     if (filterRef.current) {
//       filterRef.current.style.opacity = "0";
//       filterRef.current.style.transform = "translateY(-16px)";
//       setTimeout(() => {
//         if (filterRef.current) {
//           filterRef.current.style.transition =
//             "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s";
//           filterRef.current.style.opacity = "1";
//           filterRef.current.style.transform = "translateY(0)";
//         }
//       }, 100);
//     }
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .game-card {
//           animation-fill-mode: both;
//         }
//         .filter-btn {
//           position: relative;
//         }
//         .filter-btn::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: #d97706;
//           transition: width 0.3s ease;
//         }
//         .filter-btn.active::after,
//         .filter-btn:hover::after {
//           width: 100%;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>

//       <section ref={sectionRef} className=" px-4 sm:px-6 lg:px-24 py-12 lg:py-20">
//         <div ref={headerRef} className="text-center mb-8">
        
//           <h2 className="text-3xl lg:text-4xl font-light text-[#c0392b] tracking-tight">
//             Select a type of game
//           </h2>
//           <div className="mt-4 mx-auto w-16 h-px bg-[#c0392b]" />
//         </div>

//         <div ref={filterRef} className="flex items-center justify-center gap-6 sm:gap-10 mb-10 border-b border-gray-200 pb-4">
//           {filters.map((f) => (
//             <button
//               key={f.value}
//               onClick={() => setActiveFilter(f.value)}
//               className={`filter-btn text-xs sm:text-sm font-semibold uppercase tracking-widest pb-1 transition-colors duration-300 ${
//                 activeFilter === f.value
//                   ? "text-[#c0392b] active"
//                   : "text-gray-400 hover:text-gray-700"
//               }`}
//             >
//               {f.label}
//             </button>
//           ))}
//         </div>

//         <div
//           key={activeFilter}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {shown.map((game, i) => (
//             <GameCard
//               key={game.id}
//               game={game}
//               index={i}
//               wishlist={wishlist}
//               onWishlist={toggleWishlist}
//             />
//           ))}
//         </div>

//         {visible < filtered.length && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={() => setVisible((v) => v + 3)}
//               className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-xs font-semibold uppercase tracking-widest px-10 py-3.5 transition-all duration-300 active:scale-95"
//             >
//               See More
//             </button>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";

const games = [
  {
    id: 1,
    title: "Prices and Conditions of Entry",
    tagline: "Welcome to Monte-Carlo",
    description:
      "Monte-Carlo Société des Bains de Mer welcomes you to the casinos in the heart of Monaco, on the legendary Casino Square. Find all the information about the Casino de Monte-Carlo.",
    location: ["Casino de Monte-Carlo"],
    type: "entry",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/image/casino-de-monte-carlo-place-du-casino-2024-127%20%281%29.jpg.webp?h=049aeee8&itok=uoio0Ko5",
    svgAnimation: null, // No specific animation for this game
  },
  {
    id: 2,
    title: "Slot Machines",
    tagline: "Bet on the atmosphere!",
    description:
      "You win on a slot machine when you have the same symbols on one of the win lines. Some slot machines also have Wild symbols, so even more combinations!",
    location: ["Casino de Monte-Carlo", "Casino Café de Paris"],
    type: "slot",
    
    svgAnimation: null,
  },
  {
    id: 3,
    title: "Punto Banco",
    tagline: "Punto or Banco?",
    description:
      "The objective is to predict which hand will win: Punto, Banco or will it be a tie? Cards have the following values — the maximum is 9 points.",
    location: ["Casino de Monte-Carlo"],
    type: "table",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_punto_banco_2018_0002.jpg.webp?h=a4ad037a&itok=LcnpNnqu",
    svgAnimation: null,
  },
  {
    id: 4,
    title: "Poker Texas Hold'em Ultimate",
    tagline: "Beat the dealer!",
    description:
      "The objective is to get a better hand than the dealer. The final hand is a combination of your cards and the open cards on the table.",
    location: ["Casino de Monte-Carlo", "Casino Café de Paris"],
    type: "table",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_poker_2018_0001_0.jpg.webp?h=39ab1d28&itok=r1uN9KPW",
    svgAnimation: null,
  },
  {
    id: 5,
    title: "Black Jack",
    tagline: "Beat the bank!",
    description:
      "Black Jack or '21' is considered one of the world's most popular gambling games. The aim is to acquire a total value as near as possible to 21, without exceeding it.",
    location: ["Casino de Monte-Carlo", "Casino Café de Paris"],
    type: "table",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_black_jack_2018_0001.jpg.webp?itok=ZHfoOkv9",
    svgAnimation: "https://www.majesticpride.in/images/animation/black-jack.svg",
  },
  {
    id: 6,
    title: "Craps",
    tagline: "Can you roll it?",
    description:
      "CRAPS is a fast-paced and exciting game. You roll the two dice and the numbers shown will determine your luck. On some bets you win with 7, on some you lose.",
    location: ["Casino de Monte-Carlo"],
    type: "table",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/sc_craps_2018_0001_0.jpg.webp?h=5a2fa510&itok=-rA1yrbK",
    svgAnimation: null,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Table Games", value: "table" },
  { label: "Slot Machines", value: "slot" },
];

const HeartIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    viewBox="2 3 20 18"
    className="w-5 h-5"
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
  >
    <path d="M12.4 20.4C12.1 20.5 11.9 20.5 11.6 20.4C9.9 19.2 2.5 14 2.5 9.1C2.5 2.8 10 1.8 12 6.1C14 1.8 21.5 2.8 21.5 9.1C21.5 14 14.1 19.2 12.4 20.4Z" />
  </svg>
);

// Roulette Animation Component
const RouletteAnimation = () => {
  const containerRef = useRef(null);
  const ballRef = useRef(null);
  const animationRef = useRef(null);
  const rotationRef = useRef(0);
  const ballAngleRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find the roulette wheel element within the SVG
    const svg = container.querySelector('svg');
    if (!svg) return;

    // Get the wheel group (the main rotating part)
    const wheelGroup = svg.querySelector('#eiRtFVECdkw2, #eiRtFVECdkw32, #eiRtFVECdkw42, #eiRtFVECdkw52') || svg.querySelector('g');
    
    let startTime = null;
    let lastTimestamp = 0;
    let isSpinning = true;
    let spinDecay = 0.98; // Decay factor for slowing down
    let currentSpeed = 0.5; // Initial spin speed (radians per frame approx)
    
    // Create ball element if not exists
    let ball = ballRef.current;
    if (!ball) {
      ball = document.createElement('div');
      ball.className = 'roulette__ball';
      ballRef.current = ball;
      container.appendChild(ball);
    }

    // Animation function
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const delta = Math.min(50, timestamp - (lastTimestamp || timestamp));
      lastTimestamp = timestamp;

      if (isSpinning && wheelGroup) {
        // Rotate the wheel
        rotationRef.current += currentSpeed * (delta / 16);
        wheelGroup.setAttribute('transform', `rotate(${rotationRef.current * 180 / Math.PI})`);
        
        // Move the ball in a circular path
        ballAngleRef.current += currentSpeed * 1.5 * (delta / 16);
        const radius = 140;
        const centerX = 154;
        const centerY = 155;
        const ballX = centerX + Math.cos(ballAngleRef.current) * radius;
        const ballY = centerY + Math.sin(ballAngleRef.current) * radius;
        
        if (ball) {
          ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
        }
        
        // Gradually slow down
        currentSpeed *= spinDecay;
        if (currentSpeed < 0.005) {
          isSpinning = false;
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Re-spin on click
    const handleClick = () => {
      isSpinning = true;
      currentSpeed = 0.8;
      spinDecay = 0.985;
    };

    container.addEventListener('click', handleClick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="roulette__wrapper" ref={containerRef}>
      <svg 
        viewBox="0 0 308 269" 
        className="roulette img-fluid"
        style={{ width: '100%', height: 'auto', maxWidth: '308px', margin: '0 auto' }}
      >
        <use href="#roulette-svg" />
      </svg>
    </div>
  );
};

// Baccarat Animation Component
const BaccaratAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Load SVG and initialize player if needed
    const svg = container.querySelector('svg');
    if (svg && window.__SVGATOR_PLAYER__) {
      // The SVG already contains the animation script
      // The player will auto-initialize
    }
  }, []);

  return (
    <div className="games__media">
      <div className="roulette__wrapper">
        <object 
          type="image/svg+xml" 
          data="https://www.majesticpride.in/images/animation/baccarat.svg"
          className="roulette img-fluid"
          style={{ width: '100%', height: 'auto', maxWidth: '308px', margin: '0 auto' }}
        >
          <img 
            src="https://www.majesticpride.in/images/animation/baccarat.svg" 
            alt="baccarat"
            className="roulette img-fluid"
          />
        </object>
        <div className="roulette__ball"></div>
      </div>
    </div>
  );
};

// Black Jack Animation Component
const BlackJackAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Load SVG animation for blackjack
    const svg = container.querySelector('svg');
    if (svg && window.__SVGATOR_PLAYER__) {
      // The SVG contains the animation script that auto-initializes
    }
  }, []);

  return (
    <div className="games__media">
      <div className="roulette__wrapper">
        <object 
          type="image/svg+xml" 
          data="https://www.majesticpride.in/images/animation/black-jack.svg"
          className="roulette img-fluid"
          style={{ width: '100%', height: 'auto', maxWidth: '308px', margin: '0 auto' }}
        >
          <img 
            src="https://www.majesticpride.in/images/animation/black-jack.svg" 
            alt="blackjack"
            className="roulette img-fluid"
          />
        </object>
        <div className="roulette__ball"></div>
      </div>
    </div>
  );
};

function GameCard({ game, index, wishlist, onWishlist }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const isFav = wishlist.includes(game.id);
  const hasAnimation = game.svgAnimation !== null;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      if (imgRef.current && !hasAnimation) {
        imgRef.current.style.transform = "scale(1.08)";
        imgRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      }
    };
    const handleMouseLeave = () => {
      if (imgRef.current && !hasAnimation) {
        imgRef.current.style.transform = "scale(1)";
        imgRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasAnimation]);

  // Select animation based on game type or ID
  const renderAnimation = () => {
    if (game.id === 5) {
      return <BlackJackAnimation />;
    }
    if (game.type === 'table' && game.id === 3) {
      return <BaccaratAnimation />;
    }
    if (game.type === 'slot') {
      return <RouletteAnimation />;
    }
    return null;
  };

  return (
    <div
      ref={cardRef}
      className="game-card bg-white border border-gray-200 overflow-hidden group cursor-pointer"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        animationFillMode: "forwards",
        animationName: "fadeInUp",
        animationDuration: "0.65s",
        animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        animationDelay: `${index * 0.12}s`,
      }}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 min-h-[200px] flex items-center justify-center">
        {hasAnimation || game.type === 'table' || game.type === 'slot' ? (
          renderAnimation() || (
            <img
              ref={imgRef}
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
              style={{ transform: "scale(1)", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              onError={(e) => {
                e.target.src = `https://images.unsplash.com/photo-1570639232944-c0dfb84e7aa3?w=610&q=80`;
              }}
            />
          )
        ) : (
          <img
            ref={imgRef}
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
            style={{ transform: "scale(1)", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-1570639232944-c0dfb84e7aa3?w=610&q=80`;
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1 group-hover:text-[#c0392b] transition-colors duration-300">
            {game.title}
          </h3>
          <p className="text-[#c0392b] text-xs font-medium uppercase tracking-widest mb-2">
            {game.tagline}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{game.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {game.location.map((loc) => (
            <span
              key={loc}
              className="text-xs text-gray-500 border border-gray-200 px-2 py-0.5 rounded-sm"
            >
              {loc}
            </span>
          ))}
        </div>

        <button className="mt-2 w-full bg-[#c0392b] hover:bg-[#c0392b] active:scale-95 text-white text-xs font-semibold tracking-widest uppercase py-3 transition-all duration-300">
          Find Out More
        </button>
      </div>
    </div>
  );
}

export default function GamesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [visible, setVisible] = useState(6);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);

  const filtered =
    activeFilter === "all"
      ? games
      : games.filter((g) => g.type === activeFilter);

  const shown = filtered.slice(0, visible);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    setVisible(6);
  }, [activeFilter]);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(-24px)";
      setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
          headerRef.current.style.opacity = "1";
          headerRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
    if (filterRef.current) {
      filterRef.current.style.opacity = "0";
      filterRef.current.style.transform = "translateY(-16px)";
      setTimeout(() => {
        if (filterRef.current) {
          filterRef.current.style.transition =
            "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s";
          filterRef.current.style.opacity = "1";
          filterRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .game-card {
          animation-fill-mode: both;
        }
        .filter-btn {
          position: relative;
        }
        .filter-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c0392b;
          transition: width 0.3s ease;
        }
        .filter-btn.active::after,
        .filter-btn:hover::after {
          width: 100%;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .games__media {
          text-align: center;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        .roulette__wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          max-width: 308px;
          margin: 0 auto;
        }
        .roulette {
          width: 100%;
          height: auto;
          display: block;
        }
        .roulette__ball {
          position: absolute;
          width: 16px;
          height: 16px;
          background: radial-gradient(circle at 30% 30%, #fff, #ddd);
          border-radius: 50%;
          top: 0;
          left: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          pointer-events: none;
          z-index: 10;
          transition: transform 0.05s linear;
        }
        @media (max-width: 767px) {
          .games__media {
            margin-bottom: 20px;
          }
        }
      `}</style>

      {/* Hidden SVG definitions for roulette */}
      <svg style={{ display: 'none' }}>
        <defs>
          <g id="roulette-svg" viewBox="0 0 308 269">
            <g transform="matrix(0.830484 0.557042 -0.557042 0.830484 102.417233 -20.080123)">
              <path d="M215.993,168.73L128.87,235.164c-4.193,3.199-10.157,2.358-13.33-1.871L6.92613,88.3631c-3.1722-4.2286-2.33819-10.2448,1.85418-13.4445L95.9041,8.48478C100.096,5.28514,106.061,6.12636,109.233,10.355l108.622,144.93c3.172,4.229,2.338,10.245-1.854,13.445h-.008Z" fill="#2c3e50" stroke="#1a252f"/>
              <path d="M54.2259,86.804c-.5585-.0901-1.1393.3605-1.2137.9238-.5511,4.1986-3.6041,13.7822-.1043,18.4542c2.8744,3.831,7.439,2.606,9.3677-.571.9233-1.524,1.2659-2.779,1.385-3.643.7298,1.127,1.5936,2.607,1.7202,3.486.1712,1.134-1.1617,2.456-1.3479,2.598l-.0223.015.6776.902l3.2095-2.449.0968-.075l3.2094-2.449-.6776-.901-.0224.015c-.1936.143-1.8169,1.074-2.852.601-.8042-.368-1.9807-1.607-2.8594-2.621.901.203,2.3382.285,4.304-.361c3.2914-1.0814,5.4509-5.3926,2.7478-8.9978-3.4775-4.6418-13.91-4.3263-17.6333-4.9272h.0149Z" fill="#e74c3c"/>
              <path d="M73.8319,112.971c-.5585-.09-1.1393.361-1.2138.924-.551,4.199-3.6041,13.783-.1042,18.455c2.8743,3.83,7.439,2.606,9.3676-.571.9234-1.525,1.2659-2.779,1.3851-3.643.7297,1.127,1.5935,2.606,1.7201,3.485.1713,1.134-1.1616,2.456-1.3478,2.599l-.0223.015.6776.901l3.2094-2.448.0968-.076l3.2095-2.448-.6777-.901-.0223.015c-.1936.142-1.817,1.074-2.852.601-.8042-.369-1.9808-1.608-2.8595-2.622.9011.203,2.3382.286,4.3041-.36c3.2913-1.082,5.4508-5.393,2.7478-8.998-3.4775-4.642-13.9101-4.327-17.6333-4.928h.0149Z" fill="#27ae60"/>
              <path d="M98.2108,53.2689c-.5585-.0902-1.1393.3605-1.2138.9238-.551,4.1986-3.6041,13.7825-.1042,18.4543c2.8743,3.8305,7.4392,2.6062,9.3672-.5709.924-1.5247,1.266-2.779,1.385-3.6428.73,1.1267,1.594,2.6063,1.721,3.4851.171,1.1341-1.162,2.4561-1.348,2.5988l-.023.015.678.9013l3.21-2.4485.096-.0752l3.21-2.4485-.678-.9013-.022.015c-.194.1427-1.817,1.0741-2.852.6009-.804-.3681-1.981-1.6074-2.86-2.6213.901.2028,2.339.2854,4.304-.3605c3.292-1.0816,5.451-5.3929,2.748-8.9981-3.477-4.6417-13.91-4.3263-17.6331-4.9271h.0149Z" fill="#f39c12"/>
            </g>
          </g>
        </defs>
      </svg>

      <section ref={sectionRef} className="px-4 sm:px-6 lg:px-24 py-12 lg:py-20">
        <div ref={headerRef} className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-light text-[#c0392b] tracking-tight">
            Select a type of game
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#c0392b]" />
        </div>

        <div ref={filterRef} className="flex items-center justify-center gap-6 sm:gap-10 mb-10 border-b border-gray-200 pb-4">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`filter-btn text-xs sm:text-sm font-semibold uppercase tracking-widest pb-1 transition-colors duration-300 ${
                activeFilter === f.value
                  ? "text-[#c0392b] active"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {shown.map((game, i) => (
            <GameCard
              key={game.id}
              game={game}
              index={i}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
            />
          ))}
        </div>

        {visible < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-xs font-semibold uppercase tracking-widest px-10 py-3.5 transition-all duration-300 active:scale-95"
            >
              See More
            </button>
          </div>
        )}
      </section>
    </>
  );
}