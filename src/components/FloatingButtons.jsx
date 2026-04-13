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
    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2c-5.514 0-10 4.486-10 10 0 1.782.482 3.526 1.397 5.069L2 22l5.166-1.382c1.512.856 3.22 1.307 4.966 1.307 5.514 0 10-4.486 10-10 0-2.677-1.042-5.185-2.928-7.071l-.127-.126zM12.006 20c-1.555 0-3.084-.426-4.401-1.234l-.317-.192-3.064.82.819-2.99-.204-.324C4.088 14.453 3.58 12.774 3.58 12.01c0-4.646 3.78-8.426 8.426-8.426 2.247 0 4.358.875 5.944 2.462 1.586 1.586 2.46 3.697 2.46 5.944 0 4.646-3.78 8.426-8.426 8.426zm4.618-6.31c-.253-.127-1.497-.739-1.729-.823-.232-.085-.401-.127-.57.127-.169.253-.655.823-.803.991-.148.169-.296.191-.549.064-.253-.127-1.068-.394-2.035-1.255-.752-.669-1.259-1.495-1.407-1.748-.148-.253-.016-.39.111-.516.127-.127.296-.338.423-.507.127-.169.169-.296.253-.507.085-.211.042-.38-.021-.507-.064-.127-.57-1.371-.78-1.878-.203-.507-.422-.423-.57-.423-.148 0-.317-.021-.486-.021-.169 0-.444.064-.676.317-.232.253-.889.87-.889 2.119 0 1.249.91 2.455 1.036 2.624.127.169 1.79 2.733 4.334 3.832.606.262 1.079.418 1.447.535.607.19 1.16.163 1.598.099.487-.072 1.497-.612 1.708-1.203.211-.591.211-1.098.148-1.203-.063-.106-.232-.169-.485-.296z"/>
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