import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen text-center translate-y-1/4 space-y-10'>
        <h1 className='lg:text-6xl font-bold tracking-wide'>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Button 
        onClick={() => navigate('/')}
        className="border lg:mt-[96px] px-12 py-4 bg-secondary rounded-md text-white outline-none active:bg-red-400">
            Go Back Home
        </Button>
    </div>
  )
}

export default NotFound