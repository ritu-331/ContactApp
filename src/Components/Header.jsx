import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Header() {
  
const[initial,setInitial]=useState("before")

const  newClick=()=>{
  setInitial("after")
}

  return (
    <>
      <header>
        <div className="flex justify-between  items-center h-[8vh] w-full bg-slate-900 text-white ">
          <div className="text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2vw] ml-2">
            Contact App
          </div>
          <div className=" flex justify-center items-center mr-2 bg-slate-700 px-[1vw] py-[1.2vh] sm:py-[1.5vh] md:py-[0.8vh] lg:py-[0.5vh] rounded w-22">
            <button changeinitial={initial} onClick={newClick}  className="text-[3vw] lg:text-[2.5vw] xl:text-[2vw] 2xl:text-[1vw]">
              New
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="flex">
      <Sidebar/>
      <Main newClick={newClick}/>
      </div>
    </>
  );
}
