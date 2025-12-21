import { redirect } from 'next/navigation'

/**
 * Home page - redirects to login page
 */
export default function Home() {
  redirect('/login')
}
