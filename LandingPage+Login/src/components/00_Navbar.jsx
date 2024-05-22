import React from 'react';
import App2 from '../App2.jsx'

function Navbar() {
  const [showApp2, setShowApp2] = React.useState(false);
  return (
    <React.Fragment>
    <nav className="bg-gradient-to-l from-black to-purple-950" style={{ boxShadow: "5px 5px 14px rgba(255, 255, 255, 0.5)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16 items-center">
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <a href="#" 
            onClick={(e) => {
              e.preventDefault();
              setShowApp2(true);
            }}
            className="text-white hover:text-gray-300">Books</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    {showApp2 && <App2/>}
    </React.Fragment>
  );
}

export default Navbar;
