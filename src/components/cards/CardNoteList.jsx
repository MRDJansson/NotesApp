// CardNoteList.jsx

import React from "react";

const Card = ({ title, timestamp, content, footer, onClick, actions }) => {
  return (
    <div
      className="p-5 rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform cursor-pointer group mb-2"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-orange-500 font-bold mr-2 text-lg capitalize">{title}</h3>
        {timestamp && <small className="text-sm text-gray-500">{timestamp}</small>}
      </div>
      <div className="text-sm text-gray-700 line-clamp-4">{content}</div>
      <div className="mt-4 flex justify-between items-center">
        {footer}
        {actions && (
          <div className="absolute bottom-2 right-2 px-4 text-gray-700 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-opacity duration-200">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
