import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import Books_1 from "../images/Books_1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";


function BooksCard({bookValues}) {
    const {imgBook, titleBook, authorBook, initPrice, finPrice, discount} = bookValues;
    
  return (
    <div className='h-auto w-auto m-1 flex flex-row justify-center items-center align-center '>
        <div className='h-auto w-auto  bg-pink-400 rounded-xl'>
            <div className='h-auto w-auto  flex flex-row bg-slate-200 rounded-xl'>
                <img className='pt-10 pb-2 pr-3 pl-16' src={imgBook} alt="" />
                <div>
                <button><FaRegHeart className=' pr-1 size-16' /></button>
                </div>
            </div>
            <div className='h-auto w-auto pt-2 pb-2 pl-8 flex flex-col'>
                <h1 className='text-lg font-semibold'>{titleBook}</h1>
                <h2 className='text-sm text-gray-700 leading-6'>{authorBook}</h2>
                <h3 className='text-base text-gray-700 flex flex-row'>₹{finPrice} <h3 className='line-through ml-2 mr-2'>₹{initPrice}</h3> ({discount}% Off)</h3>
            </div>
            <div className='h-auto w-auto flex flex-col justify-center items-center'>
                <div className='h-auto w-auto flex flex-row'>
                    <button className='bg-blue-400 p-2 m-2 rounded-md' ><h2 className='text-base '>Get Digital Version</h2> <h1 className='text-sm'>(If Available)</h1></button>
                    <button className='bg-blue-400 p-2 m-2 rounded-md'><h2  className='text-base'>Request Book</h2> <h1 className='text-sm'>(Add to Requirements)</h1></button>
                </div>
                <div className='flex flex-row mt-2 mb-5'>
                        <button className="flex items-center bg-sky-700 px-20 py-2 rounded-md">
                            <span className='mr-1'><AiOutlineShoppingCart size={23} /></span>
                            <span><h3 className='text-lg'>Add To Cart</h3></span>
                        </button>
                    </div>


            </div>



        </div>
      
    </div>
  )
}

export default BooksCard
