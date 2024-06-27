'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Admin from './Register/page'

const page = () => {
    const router = useRouter()
  return (
    <>
    {/* <Admin /> */}
    <h1>Hello</h1>
        <div className='flex flex-col items-center justify-center h-screen'>
            <button class="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg" onClick={()=> router.push('MyProducts')}>Products
            </button>
        </div>
    </>
  )
}

export default page