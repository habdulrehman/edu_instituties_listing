'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Header from '../Header/page'

const page = () => {
    const router = useRouter()
    const [user, setUser] = useState([])
    const getUsers = async ()=>{
        const response = await axios.get('http://localhost:5000/api/v1/product')
        const data = response.data.data
        setUser(data)
        console.log(user)
        
    }
useEffect(() => {
    getUsers()
}, [])


  return (
    <div>
        <Header /> 

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            School Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            College Name 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            University Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acadmey Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sports Acadmey
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                {
                    user.map((mereusers)=>{
                        return <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 mt-3 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {mereusers.school}
                            </th>
                            <td className="px-6 py-4">
                                {mereusers.college}
                            </td>
                            <td className="px-6 py-4">
                                {mereusers.university}
                            </td>
                            <td className="px-6 py-4">
                                {mereusers.acadmey}
                            </td>
                            <td className="px-6 py-4">
                                {mereusers.sports_acadmey}
                            </td>
                            <td className="px-6 py-4">
                            <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-700 rounded text-lg">Button</button>
                            </td>
                        </tr>
                        
                    </tbody>
                    })
                }
            </table>
        </div>

    </div>
  )
}

export default page