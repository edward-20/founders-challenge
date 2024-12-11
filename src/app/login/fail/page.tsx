import Link from 'next/link'
export default function Fail() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <p>{"Invalid credentials when trying to login. "}</p>
      <div className='mt-4'><Link href="/login" className="border-solid border-2 rounded-sm p-2">Try again</Link></div>
    </div>
  )
}