import React, { useState } from 'react'
import InitialPage from './InitialPage'
import NewEntries from './NewEntries'


export default function Main({changeinitial,newClick}) {
 

  return (
    <>
<main>
  <section>
    <div className='bg-slate-900 h-[93vh] w-[64.2vw] text-black border-t-2 border-white' >

  {changeinitial=="before" && <InitialPage />}
  {changeinitial=="after" && <NewEntries/>}
    </div>
   
  </section>
 
</main>
    </>
  )
}
