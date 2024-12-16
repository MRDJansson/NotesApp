// SaveButton.jsx

import React from "react";

function SaveButton({ isDisabled, onClick, additionalStyling }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white ${isDisabled
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-orange-500 hover:bg-orange-600"
      } ${additionalStyling}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      Save
    </button>
  );
}

export default SaveButton;
