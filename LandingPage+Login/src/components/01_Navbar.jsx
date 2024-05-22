// Navbar.js
import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import PropTypes from 'prop-types';
import { useNavigate,Link } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <React.Fragment>
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
              <button className='m-auto text-white text-md px-4 py-2 focus:outline-none flex flex-row'>
                <VscAccount size={30} />
                <h1 className='m-auto ml-2'>Login</h1>
              </button>
              <button className='m-auto text-white text-md px-4 py-2 focus:outline-none flex flex-row'>
                <IoLocationOutline size={30} />
                <h1 className='m-auto'>Track</h1>
              </button>
              <Link to="/cart">
              <button
                className='m-auto text-white text-md px-4 py-2 focus:outline-none flex flex-row'
                onClick={handleCartClick}
              >
                <MdOutlineShoppingCart size={30} />
                <h1 className='m-auto ml-1'>Cart</h1>
                <h1 className='m-1 mt-0.5'>({props.Quantity})</h1>
              </button>
              </Link>
              <button className='m-auto text-white text-md px-4 py-2 focus:outline-none flex flex-row'>
                <BiDonateHeart size={30} />
                <h1 className='m-auto ml-1'>Wishlist</h1>
                <h1 className='m-1 mt-0.5'>({props.wishlistCount})</h1>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

// Navbar.propTypes = {
//   Quantity: PropTypes.number.isRequired,
//   wishlistCount: PropTypes.number.isRequired,
// };

export default Navbar;
