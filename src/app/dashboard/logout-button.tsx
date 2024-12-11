'use client'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

import { useToast } from "@/hooks/use-toast"

export default function LogoutButton() {
  const supabase = createClient()

  const { toast } = useToast()

  async function handleLogout() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast({
        description: "Failed to logout"
      })
    } else {
      toast({
        description: "Loggin out"
      })
    }
    redirect('/')
  }
  return (
    <button className="block border border-solid border-2 p-2" onClick={handleLogout}>Logout</button>
  )
}