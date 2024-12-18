// SaveButton.jsx

import React from "react";

function SaveButton({ isDisabled, onClick }) {
  return (
    <button
      className={`w-full p-2 rounded-lg mb-4
        ${isDisabled
          ? "bg-orange-500 text-white hover:bg-gray-300"
          : "bg-orange-500 text-white hover:bg-orange-600"
        } 
        $`}
      onClick={onClick}
      disabled={isDisabled}
    >
      Save
    </button>
  );
}

export default SaveButton;
