import Image from "next/image"
import Link from 'next/link'
import { login } from './actions'

function Separator() {
  return (
    <div className="flex items-center text-center before:content-[''] before:flex-1 before:border-b before:border-solid before:border-black after:content-[''] after:flex-1 after:border-b after:border-black after:border-solid before:mr-1 after:ml-1 my-7">
      Or
    </div>
  )
}
export default function Login() {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] bg-slate-100 overflow-hidden">
      <div className="none md:block border-r-8 border-solid border-slate-600"><Image src="/clinic.jpg" alt="clinic" width={600} height={1800}/></div>
      <div className="w-100 md:px-20 flex items-center">
        <div className="p-12">
          <h1 className="text-3xl mb-4 font-bold">Login</h1>
          <form action={login}>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input placeholder="johnsmith@email.com" id="email" type="email" className="border-solid border-2 rounded-lg mb-4 p-2"/>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"id="password" type="password" className="border-solid border-2 rounded-lg mb-4 p-2"/>
            <div className="flex flex-row gap-2 items-center">
              <button type="submit" className="border-solid border-2 border-slate-400 w-100 transition:all duration-300 hover:bg-slate-400 rounded-sm p-2">Submit</button>
              <p>or</p>
              <Link className="border-solid border-2 p-2 rounded-sm" href="/signup">Signup</Link> 
            </div>
          </form>
          <Separator/>
          <h1 className="text-2xl mb-4">Login with</h1>
        </div>

      </div>
    </div>
  )
}