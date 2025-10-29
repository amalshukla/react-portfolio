// NinjaJuggling.js
import React from "react";

const technologies = ["React", "Tailwind", "Python", "Django", "MySql"];

export default function NinjaJuggling() {
  return (
    <div className="w-[450px] h-[450px] relative  rounded-lg overflow-hidden mx-auto flex items-center justify-center">
      {/* Ninja */}
      <div className="absolute bottom-8 w-24 h-24 flex items-center justify-center text-4xl">
        🥷
      </div>
      


      {/* Balls / Technologies */}
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`absolute w-16 h-16 rounded-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent)] flex items-center justify-center text-white font-semibold text-xs animate-juggle`}
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {tech}
        </div>
      ))}

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes juggle {
            0%   { transform: translate(0px, 0px); }
            12.5% { transform: translate(60px, -100px); }
            25%  { transform: translate(120px, 0px); }
            37.5% { transform: translate(60px, 100px); }
            50%  { transform: translate(0px, 0px); }
            62.5% { transform: translate(-60px, -100px); }
            75%  { transform: translate(-120px, 0px); }
            87.5% { transform: translate(-60px, 100px); }
            100% { transform: translate(0px, 0px); }
          }
          .animate-juggle {
            animation: juggle 3s ease-in-out infinite;
          }
        `}
      </style>

    </div>
    
  );
}
