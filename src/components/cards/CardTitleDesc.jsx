import React from "react";

// --- Card Title and Description Component ---
const CardTitleDesc = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  );
};

export default CardTitleDesc;
