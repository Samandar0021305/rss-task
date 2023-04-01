import React from 'react'

export const Money = () => {
 
    return (
        <>
            <div className='mt-[20px]'>
                <label htmlFor="money" className='block  text-[17px] font-medium text-gray-900 dark:text-white'>enter the price</label>
                <div className='flex items-center'>
                    <span className='flex mt-[10px] items-center'>
                        <input  type="radio" name="money" id="$15 млн." />
                        <label htmlFor="$15 млн." className='text-sm font-medium text-gray-900 dark:text-white'>$15 млн.</label>
                    </span>
                    <span className='flex ml-[50px] mt-[10px] items-center'>
                        <input  type="radio" name="money" id="160 000 000 руб." />
                        <label htmlFor="160 000 000 руб." className='text-sm font-medium text-gray-900 dark:text-white'>$160 000 000 руб.</label>
                    </span>
                </div>
            </div>
        </>
    )
}
