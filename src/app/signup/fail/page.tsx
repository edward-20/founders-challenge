import Link from 'next/link'
export default function Fail() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <p>{"Incorrect credentials or existing user. Please try again or login respectively."}</p>
      <div className='mt-4'><Link href="/signup" className="border-solid border-2 rounded-sm p-2">Try again</Link></div>
    </div>
  )
}