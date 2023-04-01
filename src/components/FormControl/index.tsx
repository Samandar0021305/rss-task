import React from 'react'
import { Continent } from './Continent';
import { Control } from './Control';
import { Money } from './Money';

export type useFormType = {
    text:string,
    map:string,
    money:string,
}

const index = () => {

 
    return (
        <div className='w-[570px] mt-[10px]  h-[660px] shadow-xl mb-[50px] flex  items-center flex-col'>
            <h2 className='text-center text-[22px] mt-[10px]'>Form </h2>
            <form className='w-[70%] ' >
                <Control />
                <Continent />

                <div className='mt-[20px] shadow-xl px-[5px] py-[10px]'>
                    <label htmlFor="date" className='block ml-[14px] text-sm font-medium text-gray-900 dark:text-white'>Date of Birth</label>
                    <input  className='ml-[14px] mt-[4px]' type="date" id="date" />
                </div>
                <Money />
                
                <div  className='mt-[20px] shadow-xl py-[10px] px-[5px]'>
                    <input type="file" />
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