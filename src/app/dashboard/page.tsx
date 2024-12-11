import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import LogoutButton from './logout-button'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <p className='block'>Hello {data.user.email}</p>
      <LogoutButton/> 
    </div>
  )
}