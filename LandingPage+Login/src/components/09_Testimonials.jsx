import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewPic_3 from "../images/reviewPic_3.webp"; // Import the image
import MainLogo from "./01_MainLogo";

function Testimonials() {
  const data = [
    // Define the data array
    {
      name: "John Morgan",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ellie Anderson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Nia Adebayo",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Rigo Louie",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Mia Williams",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>

    <div className="w-5/6 m-auto">
      <div className="mb-4 mt-5 flex flex-col items-center">
        <MainLogo
          text="Testimonials"
          textSize="56px"
          textColor="white"
          logoSize="300px"
          />
      </div>
      <div className="mt-10 pb-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div
            key={d.name}
            className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img
                  src={reviewPic_3}
                  alt=""
                  className="h-44 w-44 rounded-full"
                  />{" "}
                {/* Use the imported image */}
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </React.Fragment>
  );
}

export default Testimonials;
