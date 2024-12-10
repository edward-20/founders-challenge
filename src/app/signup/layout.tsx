
import Image from "next/image"
import React from "react"

function Separator() {
  return (
    <div className="flex items-center text-center before:content-[''] before:flex-1 before:border-b before:border-solid before:border-black after:content-[''] after:flex-1 after:border-b after:border-black after:border-solid before:mr-1 after:ml-1 my-7">
      Or
    </div>
  )
}
export default function Signup({children}: { children : React.ReactNode }) {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] bg-slate-100 overflow-hidden">
      <div className="none md:block border-r-8 border-solid border-slate-600"><Image src="/clinic.jpg" alt="clinic" width={700} height={1900}/></div>
      <div className="w-100 md:px-20 flex items-center">
        <div className="p-12">
          <h1 className="text-3xl mb-4 font-bold">Signup</h1>
            {children}
          <Separator/>
          <h1 className="text-2xl mb-4">Signup with</h1>
        </div>

      </div>
    </div>
  )
}