import React from "react";

import InitialPage from "./InitialPage";



export default function Sidebar() {
  return (
    <>
      <aside>
        <div className="h-[93vh] w-[35vw] bg-slate-900 text-white flex flex-col items-center border-r-2 border-white">
          <div className="h-[5vh] w-[32vw] bg-slate-500 rounded-full flex items-center justify-evenly">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="size-6 mx-[0.5vw]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              className="h-[4vh] w-[18vw] md:w-[20vw] lg:w-[22vw] xl:w-[25vw] 2xl:w-[27vw] rounded text-white font-semibold bg-slate-500 ml-2 "
              type="search"
              placeholder="Search Contacts"
            />

            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-6  mx-[0.5vw]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-6  mx-[0.5vw]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div> 
           <p className="m-[1vw]"> No Contacts Available</p>
          
          </div>
       
      </aside>
    </>
  );
}
