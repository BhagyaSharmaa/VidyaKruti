import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";

function Navbar({ Quantity, totalPrice, wishlistCount, wishlistItems }) {
  const [showCartTooltip, setShowCartTooltip] = useState(false);
  const [showWishlistTooltip, setShowWishlistTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, type) => {
    if (type === 'cart') {
      setShowCartTooltip(true);
    } else if (type === 'wishlist') {
      setShowWishlistTooltip(true);
    }
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = (type) => {
    if (type === 'cart') {
      setShowCartTooltip(false);
    } else if (type === 'wishlist') {
      setShowWishlistTooltip(false);
    }
  };

  return (
    <nav className="bg-gradient-to-l from-blue-800 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className='mr-10'>
            <h1 className='text-white text-2xl font-bold'>Vidyakruti</h1>
          </div>
          <div className="flex justify-start w-full">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for books by title, author, Publication or ISBN"
                className="rounded-l-lg px-4 py-2 w-96 focus:outline-none focus:ring focus:border-purple-300 bg-white text-gray-800 text-sm"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg px-4 py-2 focus:outline-none">
                Search
              </button>
            </div>
          </div>
          <div className='flex'>
            <button className='m-auto  text-white text-md px-4 py-2 focus:outline-none flex flex-row'>
              <VscAccount size={30} /> 
              <h1 className='m-auto ml-2'>Login</h1>
            </button>
            <button className='m-auto  text-white text-md px-4 py-2 focus:outline-none flex flex-row'>
              <IoLocationOutline size={30} /> 
              <h1 className='m-auto'>Track</h1>
            </button>
            <div
              className='m-auto text-white text-md px-4 py-2 focus:outline-none flex flex-row'
              onMouseEnter={(e) => handleMouseEnter(e, 'cart')}
              onMouseLeave={() => handleMouseLeave('cart')}
            >
              <MdOutlineShoppingCart size={30} />
              <h1 className='m-auto ml-1'>Cart</h1>
              <h1 className='m-1 mt-0.5'>({Quantity})</h1>
            </div>
            {showCartTooltip && (
              <div
                className="absolute bg-white shadow-lg p-2 rounded-md"
                style={{ top: tooltipPosition.y + 10, left: tooltipPosition.x }}
              >
                <p>Total Price: ₹{totalPrice}</p>
                <p>Delivery Charges: ₹{Quantity * 30}</p>
                <p>Final Price: ₹{totalPrice + Quantity * 30}</p>
              </div>
            )}
            <button 
              className='m-auto text-white text-md px-4 py-2 focus:outline-none flex flex-row'
              onMouseEnter={(e) => handleMouseEnter(e, 'wishlist')}
              onMouseLeave={() => handleMouseLeave('wishlist')}
            >
              <BiDonateHeart size={30} /> 
              <h1 className='m-auto ml-1'>Wishlist</h1>
              <h1 className='m-1 mt-0.5'>({wishlistCount})</h1>
            </button>
            {showWishlistTooltip && (
  <div
    className="absolute bg-white shadow-lg p-2 rounded-md"
    style={{ top: tooltipPosition.y + 30, left: tooltipPosition.x }}
  >
    <p>Wishlist Items:</p>
    <ol>
      {wishlistItems.map((item, index) => (
        <li key={index}>{index+1 }{".) "}{item.titleBook}</li>
      ))}
    </ol>
  </div>
)}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
