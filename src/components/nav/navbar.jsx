import React from "react";
// import { SiSololearn } from "react-icons/si";
import { GiFireworkRocket } from "react-icons/gi";
import { BsRocketFill } from "react-icons/bs";
import { PiRocketBold } from "react-icons/pi";

function Nav() {
    return (
        <>
            <div className="w-full  bg-[#226351] mt-1">
                <ul className="text-white flex flex-wrap gap-x-1 py-2 font-mono text-xs sm:font-bold sm:bg-amber-500 sm:text-base sm:gap-4 md:text-lg lg:text-xl">
                    <li className="mr-auto ml-2.5 font-extrabold">sumit</li>
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">About</li>
                    <li className="hover:underline cursor-pointer">Services</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                    <li className="hover:underline cursor-pointer">More</li>
                    <li className="mr-auto ml-auto animate-bounce sm:ml-auto sm:mr-10 "><PiRocketBold /></li>
                </ul>
            </div>
        </>
    )
}

export default Nav