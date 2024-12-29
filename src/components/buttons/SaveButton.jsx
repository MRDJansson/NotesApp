// SaveButton.jsx

import React from "react";

// Save button that toggles style based on whether it's disabled or not
function SaveButton({ isDisabled, onClick }) {
  return (
    <button
      className={`w-full p-2 rounded-lg mb-4
        ${isDisabled
          ? "bg-orange-500 text-white hover:bg-gray-300"   // Style when disabled (gray background)
          : "bg-orange-500 text-white hover:bg-orange-600" // Style when enabled (orange background)
        }`}
      onClick={onClick}     // Trigger the onClick handler passed as prop
      disabled={isDisabled} // Disable the button when the condition is met
    >
      Save
    </button>
  );
}

export default SaveButton;
