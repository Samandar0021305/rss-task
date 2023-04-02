
import React from 'react'
import { useForm } from "react-hook-form"
import { Selected } from "../_utils/Contstants"

export type useFormType = {
  text: string,
  map: string,
  money: string,
  id: number,
  img: string,
  companyName: string,
  date: string
}
 
type stateProps = {
  map:string,
  money:string,
  id:number,
  img:string ,
  text:string
  
}
 type CardState ={
  cardValues:stateProps[]
  setCardValues:(value:stateProps[])=>void
}


 const FormPage = (props:CardState) => {
  const {cardValues,setCardValues} = props
  const { register, handleSubmit, formState: { errors } } = useForm<useFormType>({
    defaultValues: {
        text: "",
        money: "",
        map: "",
        id: cardValues.length + 1,
        img: "",
        companyName: "",
        date: ""
    }
})



const subHanlde = (event: useFormType): void => {
  
    const valueimg :any= event.img[0]
    
    const values = {id:event.id,text:event.text,map:event.map,money:event.money,img:URL.createObjectURL(valueimg)}
    const current = cardValues
     current.push(values)
    setCardValues([...current])
}

  return (
    <div className='container px-[40px] py-3 mx-auto flex items-center justify-between'>
        <div className='w-[570px] mt-[10px]  h-[760px] shadow-xl mb-[70px] flex  items-center flex-col'>
            <h2 className='text-center text-[22px] mt-[10px]'>Form </h2>
            <form className='w-[70%] ' onSubmit={handleSubmit(subHanlde)}>
                <div className='mt-[1px]'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        company name
                    </label>
                    <input {...register("companyName", { required: { value: true, message: "please fill in the blank" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    {errors.companyName && <p className='text-red-600 text-[12px]'>{errors.companyName?.message}</p>}
                </div>

                <div className='mt-[20px]'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        what business do you do?
                    </label>
                    <input {...register("text", { required: { value: true, message: "please fill in the blank" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="what business do you do....." />
                    {errors.text && <p className='text-red-600 text-[12px]'>{errors.text?.message}</p>}
                </div>

                <div className='mt-[20px]'>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Continent:</label>
                    <select {...register("map", { required: { value: true, message: "please select" } })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Selected.map((values, id) => <option key={id} value={values.value}>{values.current}</option>)}
                    </select>
                    {errors.map && <p className='text-red-600 text-[12px]'>{errors.map?.message}</p>}
                </div>

                <div className='mt-[20px] shadow-xl px-[5px] py-[10px]'>
                    <label htmlFor="date" className='block ml-[14px] text-sm font-medium text-gray-900 dark:text-white'>Date of Birth</label>
                    <input  {...register("date", { required: { value: true, message: "please enter date" } })} className='ml-[14px] mt-[4px]' type="date" id="date" />
                    {errors.date && <p className='text-red-600 text-[12px]'>{errors.date?.message}</p>}
                </div>
                <div className='mt-[20px] shadow-xl px-[5px] py-[10px]'>
                    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">enter the price</label>
                    <input  {...register("money", { required: { value: true, message: "enter price" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="date" />
                    {errors.money && <p className='text-red-600 text-[12px]'>{errors.money?.message}</p>}
                </div>

                <div className='mt-[20px] p-[5px] shadow-xl py-[10px] px-[5px]'>
                    <label htmlFor="switcher">Your gender</label>
                    <div className="flex gap-2">
                        <input
                             type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <br />
                        <input
                            type="radio" id="female" name="gender" value="female"
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <div className='mt-[20px] shadow-xl py-[10px] px-[5px]'>
                    <input  {...register("img", { required: { value: true, message: "please fill in the blank" } })} type="file" />
                    {errors.img && <p className='text-red-600 text-[12px]'>{errors.img?.message}</p>}
                </div>


                <div className='mt-[30px] flex items-center'>
                    <input type="checkbox" id="ddd" />
                    <label htmlFor="ddd" className='text-sm ml-[5px] font-medium text-gray-900 dark:text-white'>I consent to my personal data</label>
                </div>

                <button type='submit' className='bg-blue-500 mt-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>submit</button>
            </form>
        </div>
    </div>
  )
}
export default FormPage










