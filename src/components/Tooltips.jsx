// Tooltips.jsx

import React, { useState } from 'react';

const Tooltips = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative group inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

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
