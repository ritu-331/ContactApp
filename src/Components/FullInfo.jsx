import React from "react";
import Meet from '../Components/images/mt.webp'
import Whatsapp from '../Components/images/R.png'

export default function FullInfo({moreinfo}) {
  return (
    <>
    {
      moreinfo.map((item)=>
      <form action="">
        <div className="flex flex-col text-white  justify-center items-center border p-2 m-2 w-[60vw] ">
          <div className="h-[150px] w-[150px] bg-slate-500 rounded-full flex justify-center items-center mt-6">
            <p className="text-8xl">RP</p>
          </div>
          <p className="text-3xl mt-4">Ritu Patel</p>

        <div className=" mt-4 w-[55vw] py-2 flex justify-evenly items-center">
             <div className="flex flex-col items-center justify-center">
              <div className="bg-slate-500 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <p>Call</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-slate-500 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
              <p>Message</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              
              <div className="bg-slate-500 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <p>Video</p>
            </div>
          </div>

          <div className=" mt-4 w-[55vw]  rounded py-4 bg-slate-800 flex flex-col justify-evenly items-center">
            <p className="text-xl ">Contact Info</p>
            <div className="flex justify-evenly items-center  "><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 mx-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg></div>
<div className="w-[25vw] "><p className="text-2xl"> </p>{item.Name}{item.LastName}<p className="text-sm">{item.Phone}</p></div>
<div className="flex "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mx-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mx-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</div>
</div>

           
                 </div>
    
          <div className=" mt-4 w-[55vw] text-xl  rounded bg-slate-800 py-4 flex justify-evenly items-center">
          
          <p>Email :-{item.Email}</p>

          </div>
    
          <div className="mt-4 w-[55vw] text-xl  rounded bg-slate-800 py-4 flex justify-evenly items-center">
            
            Address:- {item.Address}
           
          </div>
    
          
    


          <div className=" mt-4 w-[55vw] text-xl rounded py-4 bg-slate-800 flex flex-col justify-evenly items-center">
            <p className="text-xl ">Connected Apps</p>
            <div className="flex justify-evenly items-center"> <img className="h-[8vh] mr-4" src={Meet} alt="" /><span className="w-[40vw]">Meet</span></div>
            <div className="flex justify-evenly items-center"> <img className="h-[5vh] mr-6" src={Whatsapp} alt="" /><span className="w-[40vw]">Whaatsapp</span></div>
                 </div>

        </div>
      </form>
      )
    }


    </>
  );
}
