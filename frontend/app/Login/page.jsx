'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [logData, setLogData] = useState({
        email: '',
        password: ''
        
    })

    const changeHandler = (e)=>{
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        setLogData({...logData, [name]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const data = {
            email: logData.email,
            password: logData.password
            
        }
        axios.post(`http://localhost:5000/api/v1/login`, data)
        toast.success('User created successfully')
        router.push('/')
        console.log(data)
    }
  return (
    <div><section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Create an account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#" onSubmit={submitHandler}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={logData.email} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={logData.password} onChange={changeHandler}/>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  
                </form>
            </div>
        </div>
    </div>
  </section></div>
  )
}

export default page