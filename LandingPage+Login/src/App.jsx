import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainLogo from "./components/01_MainLogo";
import Navbar from "./components/00_Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import FirstPanelRightPoints from "./components/04_FirstPanelRightPoints";
import OurMission from "./components/05_OurMission";
import Testimonials from "./components/09_Testimonials";
import Founders from "./components/10_Founders";
import Lottie from "react-lottie";
import LoginSignupCard from "./login";
import App2 from "./App2";
import animationData from "./animations/Animation-1713685132805.json";
import bgAnimation from "./animations/bgAnimation.json";
import CartPage from "./components/CartPage";
function HomePage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: bgAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
    <div className="w-auto h-auto bg-gradient-to-r from-slate-950 to-fuchsia-950">
      <Navbar />
      <div className="flex">
        <div className="h-auto w-1/2 flex flex-col justify-center items-center">
          <MainLogo text="Vidyakruti" textSize="90px" textColor="white" logoSize="30" />
          <div className="h-auto w-auto flex">
            <MainLogo text="Learn" textSize="45px" textColor="white" logoSize="20" />
            <MainLogo text="Connect" textSize="45px" textColor="white" logoSize="20" />
            <MainLogo text="Aspire" textSize="45px" textColor="white" logoSize="20" />
          </div>
        </div>
        <div className="h-auto w-1/2 flex flex-col align-center ">
          <h1 className="mt-10 text-5xl font-bold text-white text-center m-5">Be a Self Sufficient Learner !</h1>
          <h1 className="text-xl text-white text-center m-5">
            Investing in collective learning and growth, Vidyakruti emphasizes the power of shared resources and connections. Through collaboration and shared knowledge, we pave the path for mutual advancement and prosperity.
          </h1>
          <div className="h-auto w-auto flex align-center justify-center ">
            <button className="mr-20 bg-pink-500 text-white px-7 py-5 rounded-full" onClick={handleButtonClick}>
              Login/SignUp
            </button>
            <button className="bg-pink-500 text-white px-7 py-5 flex flex-row rounded-full">
              Explore More
              <FiArrowUpRight size={21} />
            </button>
          </div>
          <div className="flex flex-row justify-center align-center">
            <div className="mt-20 ml-1 mr-3 flex flex-col ">
              <FirstPanelRightPoints text="Best quality Study Material" />
              <FirstPanelRightPoints text="Learn through Discussion" />
              <FirstPanelRightPoints text="Donate Books to needy" />
              <FirstPanelRightPoints text="Be a Self Sufficient Learner" />
            </div>
            <div className="mt-12">
              <Lottie options={defaultOptions} height={300} width={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 relative">
        <div className="w-auto h-auto pt-4 bg-gradient-to-l from-slate-950 to-fuchsia-950 flex flex-row justify-center items-center relative" style={{ opacity: 1 }}>
          <div className="absolute inset-1">
            <Lottie options={defaultOptions2} height={800} width="auto" />
          </div>
          <div className="relative z-10">
            <OurMission />
          </div>
        </div>
      </div>
      <Founders />
    </div>

    </React.Fragment>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setIsLoggedIn(false);
  };
  

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginSignupCard onClose={handleClose} />} />
      <Route path="/testimonial" element={<Testimonials />} />
      <Route path="/books/*" element={<App2 />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
