// NinjaJuggling.js
import React from "react";

const technologies = ["React", "Tailwind", "JS", "Node", "CSS"];

export default function NinjaJuggling() {
  return (
    <div className="w-[450px] h-[450px] relative  rounded-lg overflow-hidden mx-auto flex items-center justify-center">
      {/* Ninja */}
      <div className="absolute bottom-8 w-24 h-24  rounded-full flex items-center justify-center text-white text-3xl">
        🥷
      </div>

      {/* Balls / Technologies */}
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`absolute w-16 h-16 rounded-full bg-black flex items-center justify-center text-white font-semibold text-xs animate-juggle-x-${index}`}
          
        >
          {tech}
        </div>
      ))}

      {/* Custom Tailwind Animations */}
      {/*<style>
        {`
          @keyframes juggle-x-0 {
            0%, 100% { transform: translateX(-90px); }
            50% { transform: translateX(90px); }
          }
          @keyframes juggle-x-1 {
            0%, 100% { transform: translateX(90px); }
            50% { transform: translateX(-90px); }
          }
          @keyframes juggle-x-2 {
            0%, 100% { transform: translateX(-70px); }
            50% { transform: translateX(70px); }
          }
          @keyframes juggle-x-3 {
            0%, 100% { transform: translateX(70px); }
            50% { transform: translateX(-70px); }
          }
          @keyframes juggle-x-4 {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(60px); }
          }

          .animate-juggle-x-0 { animation: juggle-x-0 2s ease-in-out infinite; }
          .animate-juggle-x-1 { animation: juggle-x-1 2s ease-in-out infinite; }
          .animate-juggle-x-2 { animation: juggle-x-2 2.4s ease-in-out infinite; }
          .animate-juggle-x-3 { animation: juggle-x-3 2.6s ease-in-out infinite; }
          .animate-juggle-x-4 { animation: juggle-x-4 2.4s ease-in-out infinite; }
        `}
      </style>*/}
      <style>
        {`
            @keyframes juggle-0 {
            0% { transform: translate(-80px, 0); }
            25% { transform: translate(0, -120px); }
            50% { transform: translate(80px, 0); }
            75% { transform: translate(0, 120px); }
            100% { transform: translate(-80px, 0); }
            }
            @keyframes juggle-1 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(80px, -100px); }
            50% { transform: translate(160px, 0); }
            75% { transform: translate(80px, 100px); }
            100% { transform: translate(0, 0); }
            }
            @keyframes juggle-2 {
            0% { transform: translate(80px, 0); }
            25% { transform: translate(160px, -120px); }
            50% { transform: translate(240px, 0); }
            75% { transform: translate(160px, 120px); }
            100% { transform: translate(80px, 0); }
            }

            .animate-juggle-0 { animation: juggle-0 3s ease-in-out infinite; }
            .animate-juggle-1 { animation: juggle-1 3s ease-in-out infinite 0.2s; }
            .animate-juggle-2 { animation: juggle-2 3s ease-in-out infinite 0.4s; }
        `}
    </style>
    </div>
  );
}
