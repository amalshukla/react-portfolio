{/*import React from 'react'


const Flipcard = () => {
  return (
    <>
        <div class="w-64 h-80 [perspective:1000px]">
            <div
                class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
                onclick="this.classList.toggle('rotate-y-180')"
            >
                <div class="absolute inset-0 bg-red-200 rounded-2xl shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Project Name</h2>
                <p class="text-gray-600 text-sm">React · Django · MySQL</p>
                </div>

                <div class="absolute inset-0 bg-gray-800 text-white rounded-2xl shadow-lg flex items-center justify-center text-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p>This project is a full-stack web app built using React, Django REST Framework, and MySQL.</p>
                </div>
            </div>
        </div>

        <style>
            .rotate-y-180 {
            transform: rotateY(180deg);
            }
            
        </style>
    </>

      




  );
}

export default Flipcard */}

import React, { useState } from "react";

export default function Flipard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-64 h-80 [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-red-200 rounded-2xl shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden]">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Project Name
          </h2>
          <p className="text-gray-600 text-sm">React · Django · MySQL</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gray-800 text-white rounded-2xl shadow-lg flex items-center justify-center text-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p>
            This project is a full-stack web app built using React, Django REST
            Framework, and MySQL.
          </p>
        </div>
      </div>
    </div>
  );
}
