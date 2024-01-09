import React from "react";
import { banner_sasurali } from "image";




import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="relative overflow-hidden">
      
      <div className="bg-slate-400">
        <img
          alt=""
          src={banner_sasurali}
          className="w-full lg:h-[40rem] z-10 h-[20rem] object-cover  "
        />
        <div className="absolute top-0 left-0 w-[12rem] md:w-[38rem]  h-full flex items-center  bg-[#fff] opacity-50 rounded "></div>
      </div>

      <div className="absolute top-0 left-0 flex  w-[12rem] md:w-[38rem] h-full justify-center   items-center ">
        <div className="flex items-center  w-[12rem] md:w-[38rem] h-full justify-start md:justify-center  ">
          <div className="capitalize absolute  md:text-center flex items-center  flex-col ">
            <h1 className="capitalize font-extrabold md:text-[30px] text-black mb-3  ">
              For Special Event
            </h1>
            <h1 className="capitalize   font-extrabold text-xl md:text-[30px] text-white mb-1 mt-2 ">
              Contact Sasurali
            </h1>

            <div className="flex justify-center md:mt-6">
              <Link to={"/contact"} className="hover:no-underline">
                {" "}
                <button className="bg-[#FFD21D] md:p-6 p-2 text-center text-xl md:text-3xl  rounded-[10px] font-semibold   flex items-center  mb-2">
                  Contact us{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
