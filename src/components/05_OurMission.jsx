import React from "react";
import MainLogo from "./01_MainLogo";
import OurMissionCards from "./06_OurMissionCards";
import youtubeReview from "../images/youtubeReview.jpg";
import DigitalLearn from "../images/DigitalLearn.jpg";
import CollabLearn from "../images/CollabLearn.jpg";
import DonateBooks from "../images/DonateBooks.jpg";
import LearningOnline from "../images/LearningOnline.jpg";
import Books from "../images/Books.jpg"
import graphs from "../images/graphs.png"

function OurMission() {
  return (
    <div className="flex flex-col items-center mt=5">
      <div className="mb-4">
        <MainLogo
          text="Our Mission"
          textSize="56px"
          textColor="white"
          logoSize="300px"
        />
      </div>
      <div className="flex flex-row items-center">
        <OurMissionCards image={youtubeReview} text={"Best Digital Content"} />
        <OurMissionCards image={DigitalLearn} text={"Analytical Thinking"}/>
        <OurMissionCards image={CollabLearn} text={"Collaborative Learning"}/>
        <OurMissionCards image={DonateBooks} text={"Donate Books Online"}/>
      </div>
      <div className="flex flex-row items-center">
        <OurMissionCards image={LearningOnline} text={"Study Groups Chat"}/>
        <OurMissionCards image={Books} text={"Online Study Content"}/ >
        <OurMissionCards image={graphs} text={"Performance Analytics"}/>
      </div>
    </div>
  );
}

export default OurMission;
