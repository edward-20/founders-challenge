import Link from 'next/link';
export default function Success() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <p>{"You've successfully signed up, please refer to your email to confirm."}</p>
      <div className='mt-4'><Link href="/" className="border-solid border-2 rounded-sm p-2">Exit</Link></div>
    </div>
  )
}