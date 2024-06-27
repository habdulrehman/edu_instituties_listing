'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [productData, setProductData] = useState({
        school:'',
        college: '',
        university: '',
        acadmey: '',
        sports_acadmey: ''
    })

    const changeHandler = (e)=>{
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        setProductData({...productData, [name]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const data = {
            school: productData.school,
            college: productData.college,
            university: productData.university,
            acadmey: productData.acadmey,
            sports_acadmey: productData.sports_acadmey
        }
        axios.post(`http://localhost:5000/api/v1/create`, data)
        toast.success('Product created successfully')
        router.push('MyProducts')
        console.log(data)
    }
    

  return (
    <div>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">Create Product</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <form className="flex flex-wrap -m-2" onSubmit={submitHandler}>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="school" className="leading-7 text-sm text-gray-600">School</label>
            <input type="text" id="school" name="school" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={productData.school} onChange={changeHandler}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="college" className="leading-7 text-sm text-gray-600">College</label>
            <input type="text" id="college" name="college" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={productData.college} onChange={changeHandler}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="university" className="leading-7 text-sm text-gray-600">University</label>
            <input type="text" id="unversity" name="university" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={productData.university} onChange={changeHandler}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="acadmey" className="leading-7 text-sm text-gray-600">Acadmey</label>
            <input type="text" id="acadmey" name="acadmey" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={productData.acadmey} onChange={changeHandler}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="sports_acadmey" className="leading-7 text-sm text-gray-600">Sports Acadmey</label>
            <input type="text" id="sports_acadmey" name="sports_acadmey" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={productData.sports_acadmey} onChange={changeHandler}/>
          </div>
        </div>
        
        <div className="p-2 w-full mt-4">
          <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-700 rounded text-lg">Button</button>
        </div>
        
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default page