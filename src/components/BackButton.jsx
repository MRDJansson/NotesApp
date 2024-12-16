// BackButton.jsx

import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
      <Link to="/">Back</Link>
    </button>
  );
}

export default BackButton;
