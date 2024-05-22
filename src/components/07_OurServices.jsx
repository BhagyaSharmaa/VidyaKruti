import React from "react";
import MainLogo from "./01_MainLogo";
import OurMissionCards from "./06_OurMissionCards";
import OurServicesCards from "./08_OurServicesCards";
function OurServices() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-5 mb-5 flex flex-col items-center">
          <MainLogo
            text="Services"
            textSize="56px"
            textColor="white"
            logoSize="300px"
          />
        </div>
        <div className="w-3/4 h-3/4 p-3 rounded-lg bg-gradient-to-l from-white to-pink-300 flex flex-row justify-center items-center">
            <OurServicesCards/>
            <OurServicesCards/>


        </div>
      </div>
    </div>
  );
}

export default OurServices;
