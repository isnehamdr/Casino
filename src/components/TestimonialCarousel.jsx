import React, { useEffect, useRef, useState } from 'react';

const testimonialsData = [
  {
    name: 'EMILIANO AQUILANI',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.',
    imageUrl: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
  },
  {
    name: 'ANNA ITURBE',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.',
    imageUrl: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
  },
  {
    name: 'LARA ATKINSON',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.',
    imageUrl: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
  },
  {
    name: 'IAN OWEN',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.',
    imageUrl: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
  },
  {
    name: 'MICHAEL TEDDY',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.',
    imageUrl: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [itemsPerView, setItemsPerView] = useState(3);
  const autoplayRef = useRef(null);

  const getItemsPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1170) return 2;
    return 3;
  };

  const getVisibleItems = () => {
    const total = testimonialsData.length;
    const visible = [];
    const half = Math.floor(itemsPerView / 2);

    for (let i = -half; i <= half; i++) {
      let idx = (currentIndex + i + total) % total;
      visible.push(testimonialsData[idx]);
    }
    return visible;
  };

  const visibleItems = getVisibleItems();
  const centerPosition = Math.floor(itemsPerView / 2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative py-20">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.gif')",
        }}
      />

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4">

        {/* 🔥 Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Testimonials
          </h2>
          <p className="text-white mt-3 max-w-xl mx-auto">
            What our customers say about our experience
          </p>
        </div>

        {/* 🔥 Arrows */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#d72921] text-white backdrop-blur-md p-3 rounded-full cursor-pointer"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#d72921] text-white backdrop-blur-md p-3 rounded-full cursor-pointer"
          >
            ❯
          </button>
        </div>

        {/* 🔥 Carousel */}
        <div className="flex justify-center items-center gap-6">

          {visibleItems.map((item, idx) => {
            const centered = idx === centerPosition;

            return (
              <div
                key={idx}
                className={`
                  transition-all duration-500
                  ${centered ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}
                  ${itemsPerView === 1 ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'}
                `}
              >
                <div className="text-center">

                  {/* 🔥 Card */}
                  <div className="bg-white backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-xl hover:scale-[1.02] transition">

                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white"
                    />

                    <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* 🔥 Name */}
                  <div className="mt-4 inline-block bg-[#d72921] px-6 py-2 rounded-lg text-white text-sm shadow-lg">
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonialsData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`
                cursor-pointer rounded-full transition-all
                ${currentIndex === idx ? 'w-6 h-3 bg-white' : 'w-3 h-3 bg-gray-400'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;