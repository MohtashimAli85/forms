'use client'
import { Button } from '@/components/ui/button'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router =useRouter()
    const logoutHandler = ()=>{
        console.log("clicked")
        setCookie('token','')
        setCookie('user','')
        router.push('/auth/login')
      }
  return (
    <Button variant='secondary' onClick={logoutHandler}>Logout</Button>
  )
}

export default LogoutButton