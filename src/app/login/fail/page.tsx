import Link from 'next/link'
export default function Fail() {
  return (
    <>
      <p>{"Something went wrong when trying to login. Please try again."}</p>
      <div className='mt-4'><Link href="/login" className="border-solid border-2 rounded-sm p-2">Try again</Link></div>
    </>
  )
}