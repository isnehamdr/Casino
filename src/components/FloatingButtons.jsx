import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Open WhatsApp chat
  const openWhatsApp = () => {
    // Replace with your WhatsApp number (include country code, no '+' or spaces)
    const phoneNumber = '1234567890'; // Change this to your number
    const message = 'Hello! I need assistance.'; // Optional pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Contact on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12.031 1.969c-5.516 0-9.984 4.468-9.984 9.984 0 1.75.453 3.453 1.312 4.969l-1.344 4.906 5.078-1.328c1.5.844 3.187 1.297 4.938 1.297 5.516 0 9.984-4.469 9.984-9.984 0-5.516-4.468-9.984-9.984-9.984zm0 18.656c-1.5 0-2.969-.406-4.25-1.172l-3.031 1.578 1.125-3.266c-.875-1.297-1.375-2.828-1.375-4.453 0-4.594 3.734-8.328 8.328-8.328 4.594 0 8.328 3.734 8.328 8.328 0 4.594-3.734 8.328-8.328 8.328zm4.578-6.297c-.25-.125-1.484-.734-1.719-.828-.234-.094-.406-.125-.578.125-.172.25-.656.828-.812 1-.156.156-.313.187-.563.063-.25-.125-1.047-.391-2-1.234-.734-.656-1.234-1.453-1.375-1.703-.156-.25-.016-.375.109-.5.125-.125.281-.313.422-.469.141-.156.188-.266.281-.438.094-.172.047-.328-.016-.453-.063-.125-.578-1.391-.781-1.891-.219-.531-.437-.438-.578-.438-.156 0-.313-.016-.469-.016s-.422.063-.641.313c-.219.25-.828.812-.828 1.984s.844 2.297.969 2.453c.125.156 1.656 2.531 4.016 3.531.562.25 1.016.391 1.359.5.578.188 1.109.156 1.531.094.469-.063 1.484-.609 1.688-1.203.203-.594.203-1.109.141-1.219-.062-.094-.234-.156-.484-.281z" />
        </svg>
      </button>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#c0392b] hover:bg-[#a93226] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#c0392b]"
          aria-label="Back to top"
        >
          <img 
            src="/images/up.png" 
            alt="Back to top" 
            className="w-6 h-6 brightness-0 invert"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;