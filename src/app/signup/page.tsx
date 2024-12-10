import Link from 'next/link'
import { signup } from './actions'

export default function Signup() {
  return (
    <form action={signup}>
      <label htmlFor="email" className="block mb-1">Email</label>
      <input placeholder="johnsmith@email.com" id="email" name="email" type="email" className="border-solid border-2 rounded-lg mb-4 p-2"/>
      <label htmlFor="password" className="block mb-1">Password</label>
      <input placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" id="password" name="password" type="password" className="border-solid border-2 rounded-lg mb-4 p-2"/>
      <div className="flex flex-row gap-2 items-center">
        <button type="submit" className="border-solid border-2 border-slate-400 w-100 transition:all duration-300 hover:bg-slate-400 rounded-sm p-2">Submit</button>
        <p>or</p>
        <Link className="border-solid border-2 p-2 rounded-sm" href="/login">Login</Link>
      </div>
    </form>
  )
}