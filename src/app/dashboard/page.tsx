import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='w-screen h-screen flex flex-row items-center justify-center'>
      <p>Hello {data.user.email}</p>
    </div>
  )
}