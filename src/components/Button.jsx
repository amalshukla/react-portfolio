import React, { useState } from "react";
import Click from "./Click";

// This is the component we’ll open


const Button = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      {/* Button */}
      <button
        onClick={() => setShowComponent(!showComponent)}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        {showComponent ? "Hide Component" : "Get in touch"}
      </button>

      {/* Conditionally render the component */}
      {showComponent && < Click />}
    </div>
  );
};

export default Button;
