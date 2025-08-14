import React from "react";
import { IoMdMail } from "react-icons/io";
import { LiaPrayingHandsSolid } from "react-icons/lia";


function Main() {
    return (
        <>
            <div className="h-screen bg-[#2a7560]">
                <div className=" flex right h-35  bg-[#2a7560] ">

                    <span className="pl-3 pt-25 text-4xl text-white animate-pulse"><LiaPrayingHandsSolid /></span>

                    <img className="object-cover w-full h-full p-3 object-top pl-20" src="/public/smt2.png" alt="" srcset="" />

                </div>
                <div className="left">
                    <div className="pl-3 pr-2">
                        <p className="text-amber-600 text-sm sm:text-base">Get Every Single Solution</p>
                        <h1 className="font-bold font-mono sm:text-xl md:text-lg lg:text-4xl text-white">I'm *Developer
                            <br />Sumit Shahi
                        </h1>
                        <p className=" text-white text-xs sm:text-sm md:text-base">Developer passionate about <span className="font-bold">'web-mobile app dev,game dev,and machine learning'</span>,exploring AI, and focused on turning ideas into working solutions.</p>

                        <div className="flex mt-1">
                            <button className="text-sm bg-white px-1.5 rounded-tr-xl rounded-bl-xl rounded-br-xl text-green-600 hover:bg-blue-500 cursor-pointer hover:text-white bg-right-top transition-colors duration-50 delay-50">about me</button>


                            <span className="ml-1 my-auto bg-white p-1.5 rounded-b-full rounded-t-full hover:bg-blue-500 cursor-pointer hover:text-white transition-colors duration-50 delay-50">
                                <IoMdMail />
                            </span>

                            <p className="text-xs font-bold my-auto ml-0.5 text-white cursor-default">contact me</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main