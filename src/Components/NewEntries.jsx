import React, { useState } from 'react'



export default function NewEntries() {

  const[entry,setEntry]=useState([])
const[name,setName]=useState()
const[lastName,setLastName]=useState()
const[phone,setPhone]=useState()
const[email,setEmail]=useState()
const[address,setAddress]=useState()


function addNewEntry(){
entry.push({
  Name:name,
  LastName:lastName,
  Phone:phone,
  Email:email,
  Address:address,
  Home:home
})
setEntry([...entry])
setName("")
setPhone("")
}



  return (
   <>
  <form action="">
    <div className='flex flex-col  justify-center items-center'>
      <div className='h-[120px] w-[120px] bg-slate-500 rounded-full flex justify-center items-center mt-6'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</div>
<p className='text-sky-500 font-semibold mt-2'>ADD Picture</p>
<div className='flex  mt-10 justify-between items-center w-[48vw]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg><input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='First name' className='h-[5vh] w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2'/>
</div>

<div className='flex  mt-10 justify-between items-center w-[48vw]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8 invisible">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg><input value={lastName} onChange={(e)=>setLastName(e.target.value)}  type="text" placeholder='Last name' className='h-[5vh]  w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw]  font-semibold border-2 border-white bg-slate-900 rounded pl-2 '/>
</div>

<div className='flex  mt-10 justify-between items-center w-[48vw]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg><input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder='Phone' className='h-[5vh] w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2 '/>
</div>

<div className='flex  mt-10 justify-between items-center w-[48vw]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg><input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Email' className='h-[5vh]  w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2 '/>
</div>

<div className='flex  mt-10 justify-between items-center w-[48vw]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg><input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder='Address' className='h-[5vh]  w-[38vw] sm:w-[40vw] md:w-[43vw] xl:w-[45vw] font-semibold border-2 border-white bg-slate-900 rounded pl-2 '/>
</div>



<button onClick={addNewEntry} className='text-white border-2 border-white rounded h-[5vh] w-[5vw] mt-6'>add</button>
<ContactBox newContact={entry}/>
    </div>
  </form>
   </>
  )
}
