import React, { useState } from "react";
import mainMandala from "../images/mainMandala.png";
import "./01_MainLogo.css";

function MainLogo({ text, textSize, textColor, logoSize }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTextShadow, setIsTextShadow] = useState(false);

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={() => {
          setIsHovered(true);
          setIsTextShadow(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsTextShadow(false);
        }}
        style={{ filter: isHovered ? "drop-shadow(5px 5px 14px rgba(255, 255, 255, 0.5))" : "none" }}
      >
        <img
          className="rotatingLogo"
          src={mainMandala}
          alt=""
          style={{ width: `${logoSize}`, height: `${logoSize}` }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center"
          style={{ textShadow: isTextShadow ? "2px 2px 4px rgba(255, 255, 255, 0.5)" : "none" }}
        >
          {/* <h1 className={`text-${textSize} text-${textColor}`}>{text}</h1> */}
          <span style={{ fontSize: `${textSize}`, color: `${textColor}` }}>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default MainLogo;
