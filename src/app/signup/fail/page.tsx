import Link from 'next/link'
export default function Fail() {
  return (
    <>
      <p>{"Something went wrong when trying to sign up. Please try again."}</p>
      <div className='mt-4'><Link href="/signup" className="border-solid border-2 rounded-sm p-2">Try again</Link></div>
    </>
  )
}