import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { BiDonateBlood } from "react-icons/bi";
import donation from "../images/donation.png";
import booklove from "../images/booklove.png";
import freebook from "../images/freebook.png";
import newbook from "../images/new.png";
import notebook from "../images/notebook.png";
import donors from "../images/donors.png";
import playstore from "../images/playstore.png";
import whatsapp from "../images/whatsapp.png";


function Navbar2() {
    
    return (
        <nav className="bg-gradient-to-r from-blue-700 to-indigo-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between p-2">
                <div className="flex flex-col items-center mr-5">
                    <button className='text-white m-3 mt-1 mb-1'><TiThMenu size={40}/></button>
                    <p className="text-white text-xs">All Categories</p>

                </div>
                <div className="flex items-center">
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={donation} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">Donation</p>
                    </div>
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={booklove} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">Book Love</p>
                    </div>
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={freebook} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">Free Book</p>
                    </div>
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={newbook} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">New Book</p>
                    </div>
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={notebook} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">Notebook</p>
                    </div>
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={donors} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">Donors</p>
                    </div>
                </div>
                <div className='flex flex-ro'>
                    <div className="flex flex-col items-center mr-5">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={playstore} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">Play Store</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className='text-white bg-white rounded-lg p-2.5'><img className='h-7 w-7' src={whatsapp} alt="Icon" /></button>
                        <p className="text-white text-xs mt-1">WhatsApp</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar2;
