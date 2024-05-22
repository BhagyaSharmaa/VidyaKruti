import React, { useState } from "react";

function FoundersCards({ image, des }) {
    const [val, setVal] = useState(false);

    return (
        <div className="flex justify-center m-10">
            {/* First Card */}
            <div className="relative w-auto h-auto bg-slate-900 text-white rounded flex overflow-hidden mr-4">
                <img
                    className={`shrink-0 transition-transform duration-700 ease-in-out ${val == false ? "-translate-x-[-20%]" : "-translate-x-[100%]"}  w-auto h-96 object-cover`}
                    src={image}
                    alt=""
                />
                <img
                    className={`shrink-0 transition-transform duration-700 ease-in-out ${val == false ? "-translate-x-[-40%]" : "-translate-x-[80%]"}  w-auto h-96 object-cover`}
                    src={des}
                    alt=""
                />
                
                <div 
                    onMouseEnter={() => setVal(true)} 
                    onMouseLeave={() => setVal(false)} 
                    className="w-full h-full bg-[#dadada00] absolute"
                ></div>
            </div>
        </div>
    );
}

export default FoundersCards;
