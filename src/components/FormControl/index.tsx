import React from 'react'
import {useForm} from "react-hook-form"

import {Selected} from "../../_utils/Contstants"

export type useFormType = {
    text:string,
    map:string,
    money:string,
    id:number,
    image:string
}

const index = () => {
  const {register,handleSubmit} = useForm<useFormType>({
    defaultValues:{
        text:"",
        money:"",
        map:"",
        id:7,
        image:""
    }
  })

  const subHanlde = (event:useFormType):void=>{
      console.log(event);
  }

    return (
        <div className='w-[570px] mt-[10px]  h-[680px] shadow-xl mb-[70px] flex  items-center flex-col'>
            <h2 className='text-center text-[22px] mt-[10px]'>Form </h2>
            <form className='w-[70%] '  onSubmit={handleSubmit(subHanlde)}>
            <div className='mt-[1px]'>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    company name
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>

            <div className='mt-[20px]'>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    what business do you do?
                </label>
                <input {...register("text",{required:{value:true,message:"this is requere"}})}   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="what business do you do....." />
            </div>

            <div className='mt-[20px]'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Continent:</label>
                <select {...register("map",{required:{value:true,message:"this is requare"}})}  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {Selected.map((values,id)=><option key={id}  value={values.value}>{values.current}</option>)}
                </select>
            </div>
            
                <div className='mt-[20px] shadow-xl px-[5px] py-[10px]'>
                    <label htmlFor="date" className='block ml-[14px] text-sm font-medium text-gray-900 dark:text-white'>Date of Birth</label>
                    <input   className='ml-[14px] mt-[4px]' type="date" id="date" />
                </div>
                <div className='mt-[20px] shadow-xl px-[5px] py-[10px]'>
                    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">enter the price</label>
                    <input  {...register("money",{required:{value:true,message:"enter price"}})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="date" />
                </div>
                 

                <div  className='mt-[20px] shadow-xl py-[10px] px-[5px]'>
                    <input {...register("image",{required:{value:true,message:"this is image"}})}  type="file" />
                </div>

                <div className='mt-[30px] flex items-center'>
                    <input type="checkbox" id="ddd" />
                    <label htmlFor="ddd" className='text-sm ml-[5px] font-medium text-gray-900 dark:text-white'>I consent to my personal data</label>
                </div>

                <button type='submit' className='bg-blue-500 mt-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>submit</button>
            </form>
        </div>
    )
}
export default index