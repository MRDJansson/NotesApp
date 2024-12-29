// CardNoteList.jsx

import React from "react";

// Card component to display individual notes in a styled card format
const Card = ({ title, timestamp, content, footer, onClick, actions }) => {
  return (
    // Card container with shadow, border, hover effects, and a pointer cursor for interactivity
    <div
      className="p-5 rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform cursor-pointer group mb-2"
      onClick={onClick}  // Click event handler for the card
    >
      {/* --- Card Header --- */}
      {/* Title of the card, styled with orange color and bold font */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-orange-500 font-bold mr-2 text-lg capitalize">{title}</h3>
        {/* Conditionally render timestamp if provided */}
        {timestamp && <small className="text-sm text-gray-500">{timestamp}</small>}
      </div>

      {/* --- Card Content --- */}
      {/* The content of the card, truncated with a maximum of 4 lines */}
      <div className="text-sm text-gray-700 line-clamp-4">{content}</div>

      {/* --- Card Footer and Actions --- */}
      <div className="mt-4 flex justify-between items-center">
        {footer}  {/* Footer section, could be additional information or buttons */}
        
        {/* Conditionally render actions */}
        {actions && (
          <div className="absolute bottom-2 right-2 px-4 text-gray-700 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-opacity duration-200">
            {actions}  {/* Actions (delete button) rendered here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
