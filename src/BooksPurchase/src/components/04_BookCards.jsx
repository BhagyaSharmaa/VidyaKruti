import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function BooksCard({ bookValues, incrementCart, decrementCart, wishlistItems, handleWishlist }) {
  const { imgBook, titleBook, authorBook, finPrice, initPrice, discount, isbn } = bookValues;
  const [Q, setCartValue] = useState(bookValues.cartQuantity || 0);
  const isInWishlist = wishlistItems.some((item) => item.isbn === isbn);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleIncrement = () => {
    setCartValue((prevValue) => prevValue + 1);
    incrementCart(parseInt(finPrice));
  };

  const handleDecrement = () => {
    if (Q > 0) {
      setCartValue((prevValue) => prevValue - 1);
      decrementCart(parseInt(finPrice));
    }
  };

  const handleRequestBook = () => {
    handleWishlist(bookValues.isbn); // Pass the isbn of the book to the handleWishlist function
    setButtonDisabled(true); // Disable the button upon clicking
  };

  return (
    <div className="h-auto w-64 m-3 flex flex-col justify-between bg-pink-400 rounded-xl transition-transform hover:scale-105 hover:shadow-white hover:shadow-2xl">
      <div className="h-auto w-full flex flex-row justify-center items-center align-center bg-slate-200 rounded-t-xl">
        <img className="w-32 h-50 p-2 object-cover" src={imgBook} alt="" />
      </div>
      <div className="h-auto w-full px-4 py-2">
        <h1 className="text-lg font-semibold">{titleBook}</h1>
        <h2 className="text-sm text-gray-700 leading-6">{authorBook}</h2>
        <div className="flex items-center mt-2">
          <h3 className="text-lg font-bold">₹{finPrice}</h3>
          <span className="line-through ml-2 mr-2 text-gray-500"> ₹{initPrice} </span>
          <span className="text-bl-600">({discount}% Off)</span>
        </div>
      </div>
      <div className="h-auto w-full px-4 pb-4 flex flex-col items-center">
        <div className="h-auto w-full flex flex-row justify-center">
          <button className="bg-blue-400 p-2 m-1 rounded-md transition-all hover:bg-blue-500 transform hover:scale-105">
            <h2 className="text-sm">Get Digital Version</h2>
            <h1 className="text-xs">(If Available)</h1>
          </button>
          <button
            className={`bg-blue-400 p-2 m-1 rounded-md transition-all ${buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-500 transform hover:scale-105'}`}
            onClick={handleRequestBook} // Changed the onClick handler
            disabled={buttonDisabled}
          >
            <h2 className="text-sm">Request Book</h2>
            <h1 className="text-xs">(Add to Requirements)</h1>
          </button>
        </div>
        <div className="mt-2">
          {Q === 0 ? (
            <button
              className="flex items-center bg-sky-700 px-4 py-2 rounded-md transition-all hover:bg-sky-800 transform hover:scale-105"
              onClick={handleIncrement}
            >
              <span className="mr-1">
                <AiOutlineShoppingCart size={18} />
              </span>
              <span>
                <h3 className="text-sm">Add To Cart</h3>
              </span>
            </button>
          ) : (
            <div className="flex items-center">
              <button className="px-2 py-1 bg-gray-400 rounded-l-md transform hover:scale-105" onClick={handleDecrement}>
                -
              </button>
              <span className="px-2 py-1 bg-gray-200 text-gray-700">{Q}</span>
              <button className="px-2 py-1 bg-gray-400 rounded-r-md transform hover:scale-105" onClick={handleIncrement}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
