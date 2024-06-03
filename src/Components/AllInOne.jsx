import React, { useState } from "react";
import ContactBox from "./ContactBox";
import InitialPage from "./InitialPage";
import FullInfo from "./FullInfo";


export default function AllInOne({add}) {

    const[entry,setEntry]=useState([])
    const[name,setName]=useState()
    const[lastName,setLastName]=useState()
    const[phone,setPhone]=useState()
    const[email,setEmail]=useState()
    const[address,setAddress]=useState()
    const[newForm,setNewForm]=useState("Before")

    function newClick(){
        entry.push({ Name:name,
          LastName:lastName,
            Phone:phone,
            Email:email,
            Address:address
        })
        setEntry([...entry])
        setName("")
        setPhone("")
        setNewForm("Before")
    }
    
    
  return (
    <>
      <header>
        <div className="flex justify-between  items-center h-[8vh] w-full bg-slate-900 text-white ">
          <div className="text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2vw] ml-2">
            Contact App
          </div>
          <div className=" flex justify-center items-center mr-2 bg-slate-700 px-[1vw] py-[1.2vh] sm:py-[1.5vh] md:py-[0.8vh] lg:py-[0.5vh] rounded w-22">
            <button onClick={()=>setNewForm("After")} className="text-[3vw] lg:text-[2.5vw] xl:text-[2vw] 2xl:text-[1vw]">
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
        <aside>
          <div className="h-[93vh] w-[35vw] bg-slate-900 text-white flex flex-col items-center border-r-2 border-white">
            <div className="h-[5vh] w-[32vw] bg-slate-500 rounded-full flex items-center justify-evenly mb-10">
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
          
            <div onClick={()=>setNewForm("mid")}><ContactBox  newcontact={entry}/></div>
          </div>
        </aside>
        <main>
           
          <section>
            <div className="bg-slate-900 h-[93vh] w-[64.2vw] text-black border-t-2 border-white flex flex-col justify-center items-center">
                {newForm=="Before"&&
            <InitialPage/>
        }
{newForm=="After"&&
              <form action="">
                <div className="flex flex-col  justify-center items-center text-white">
                  <div className="h-[120px] w-[120px] bg-slate-500 rounded-full flex justify-center items-center mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      className="size-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
                  <p className="text-sky-500 font-semibold mt-2">ADD Picture</p>
                  <div className="flex  mt-10 justify-between items-center w-[48vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="white"
                      className="size-8 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <input
                  value={name} onChange={(e)=>setName(e.target.value)}
                      type="text"
                      placeholder="First name"
                      className="h-[5vh] w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2"
                    />
                  </div>

                  <div className="flex  mt-10 justify-between items-center w-[48vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="white"
                      className="size-8 invisible"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <input
                    value={lastName} onChange={(e)=>setLastName(e.target.value)}
                      type="text"
                      placeholder="Last name"
                      className="h-[5vh]  w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw]  font-semibold border-2 border-white bg-slate-900 rounded pl-2 "
                    />
                  </div>

                  <div className="flex  mt-10 justify-between items-center w-[48vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="white"
                      className="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <input
                      value={phone} onChange={(e)=>{setPhone(e.target.value)}}
                      type="text"
                      placeholder="Phone"
                      className="h-[5vh] w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2 "
                    />
                  </div>

                  <div className="flex  mt-10 justify-between items-center w-[48vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="white"
                      className="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                      type="text"
                      placeholder="Email"
                      className="h-[5vh]  w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2 "
                    />
                  </div>

                  <div className="flex  mt-10 justify-between items-center w-[48vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="white"
                      className="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <input
                    value={address} onChange={(e)=>setAdd}
                      type="text"
                      placeholder="Address"
                      className="h-[5vh]  w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2 "
                    />
                  </div>
                  <button onClick={newClick} className="text-white border-2 border-white rounded h-[5vh] w-[5vw] mt-6">
                    add
                  </button>
                
                </div>
              </form>
              }
              {newForm=="mid"&&

              <FullInfo moreinfo={entry}/>
            }
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
