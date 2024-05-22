import React, { useState } from "react";

function OurMissionCards({ image, text }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative h-56 w-52 m-8 bg-white flex flex-col items-center justify-center rounded-md transition duration-500 ease-in-out transform ${
        isHovered ? "scale-105 shadow-lg" : "scale-100 shadow-none"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: isHovered ? "0px 0px 1000px  rgba(255,255,255,0.5)" : "none",
      }}
    >
      <img
        className={`h-36 w-52 ml-3 mr-3 ${isHovered ? "blur-sm" : ""}`}
        src={image}
        alt=""
      />
      <h1 className="mt-2">{text}</h1>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="rounded-md bg-[#161f36bf] p-2">
            <h1 className="font-semibold text-white">Know More</h1>
          </button>
        </div>
      )}
    </div>
  );
}

export default OurMissionCards;