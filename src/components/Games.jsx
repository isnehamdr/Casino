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

/* ===================== DATA ===================== */

const games = [
  {
    id: 1,
    title: "Baccarat",
    tagline: "Baccarat",
    description:
      "Experience the timeless elegance of Baccarat, where every card holds the promise of a big win.",
    type: "table",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_punto_banco_2018_0002.jpg.webp",
    svgAnimation: true,
  },
  {
    id: 2,
    title: "Mini Flush",
    tagline: "Mini Flush",
    description:
      "A fast-paced variation of the classic Flush.",
    type: "slot",
    image: "/images/stack3.avif",
    svgAnimation: false,
  },
  {
    id: 3,
    title: "Roulette",
    tagline: "Roulette",
    description:
      "Spin the wheel and let your luck decide.",
    type: "table",
    image:"/images/roulette.png",
    svgAnimation: false,
  },
  {
    id: 4,
    title: "Black Jack",
    tagline: "Beat the bank!",
    description:
      "Hit 21 and beat the dealer.",
    type: "table",
    image:
      "https://asset.montecarlosbm.com/styles/list_item_short_style_desktop_webp/s3/media/orphea/ca_black_jack_2018_0001.jpg.webp",
    svgAnimation: true,
  },
  {
    id: 5,
    title: "Flush",
    tagline: "Flush",
    description:
      "A popular South Asian card game.",
    type: "table",
    image: "/images/stack2.avif",
    svgAnimation: false,
  },
  {
    id: 6,
    title: "Slot Machines",
    tagline: "Slots",
    description:
      "Spin and win instantly.",
    type: "slot",
    image: "/images/stack4.avif",
    svgAnimation: false,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Table Games", value: "table" },
  { label: "Slot Machines", value: "slot" },
];

/* ===================== ANIMATIONS ===================== */

const RouletteAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    let angle = 0;
    let raf;

    const animate = () => {
      angle += 0.05;
      if (ref.current) {
        ref.current.style.transform = `rotate(${angle}rad)`;
      }
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div
        ref={ref}
        className="w-24 h-24 rounded-full border-4 border-white border-dashed"
      />
    </div>
  );
};

const BaccaratAnimation = () => (
  <img
    src="https://www.majesticpride.in/images/animation/baccarat.svg"
    className="w-full h-full object-contain"
  />
);

const BlackJackAnimation = () => (
  <img
    src="https://www.majesticpride.in/images/animation/black-jack.svg"
    className="w-full h-full object-contain"
  />
);

/* ===================== CARD ===================== */

function GameCard({ game, index }) {
  const imgRef = useRef(null);

  const renderAnimation = () => {
    switch (game.title) {
      case "Black Jack":
        return <BlackJackAnimation />;
      case "Baccarat":
        return <BaccaratAnimation />;
      case "Roulette":
        return <RouletteAnimation />;
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-white border overflow-hidden group"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        animation: `fadeInUp 0.6s forwards ${index * 0.1}s`,
      }}
    >
      {/* MEDIA */}
      <div className="relative h-[220px] overflow-hidden bg-gray-900 flex items-center justify-center">
        {game.svgAnimation ? (
          renderAnimation()
        ) : (
          <img
            ref={imgRef}
            src={game.image}
            alt={game.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1570639232944-c0dfb84e7aa3?w=600";
            }}
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 group-hover:text-[#c0392b]">
          {game.title}
        </h3>
        <p className="text-xs text-[#c0392b] uppercase tracking-widest">
          {game.tagline}
        </p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {game.description}
        </p>

        <button className="mt-4 w-full bg-[#c0392b] text-white py-2 text-xs uppercase tracking-widest">
          Find Out More
        </button>
      </div>
    </div>
  );
}

/* ===================== MAIN ===================== */

export default function GamesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visible, setVisible] = useState(6);

  const filtered =
    activeFilter === "all"
      ? games
      : games.filter((g) => g.type === activeFilter);

  const shown = filtered.slice(0, visible);

  useEffect(() => {
    setVisible(6);
  }, [activeFilter]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {opacity:0; transform:translateY(40px);}
          to {opacity:1; transform:translateY(0);}
        }
      `}</style>

      <section className="px-4 lg:px-24 py-12">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl text-[#c0392b]">
            Select a type of game
          </h2>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-6 mb-10 border-b pb-4">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`text-sm uppercase ${
                activeFilter === f.value
                  ? "text-[#c0392b]"
                  : "text-gray-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>

        {/* LOAD MORE */}
        {visible < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="border px-6 py-2 text-sm"
            >
              See More
            </button>
          </div>
        )}
      </section>
    </>
  );
}