// Tooltips.jsx

import React, { useState } from 'react'; // React state management

const Tooltips = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false); // Tooltip visibility state

  return (
    <div className="relative group inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)} // Show on hover
        onMouseLeave={() => setIsVisible(false)}// Hide when not hovering
      >
        {children}
      </div>
      {/* If visible show the text-content */}
      {isVisible && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-orange-600 text-white text-sm font-bold rounded-lg py-2 px-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <span>{text}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltips;
