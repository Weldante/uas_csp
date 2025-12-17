'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/login?error=${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (authError) {
    redirect(`/register?error=${authError.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function logout() {
  const supabase = await createClient()

  const { error: authError } = await supabase.auth.signOut()

  if (authError) {
    redirect(`/logout?error=${authError.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}