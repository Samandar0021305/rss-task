import React, { useEffect, useState } from 'react'
import HeaderList from './headerList'
const index = () => {

  const [inputValue, setInputValue] = useState(localStorage.getItem("value") || "");
  useEffect(() => {
    localStorage.setItem("value", inputValue)
  })


  return (
    <header className=' shadow-sm py-[6px]'>
      <div className='container px-[40px] py-3 mx-auto flex justify-between' >
        <div className='flex items-center justify-center'>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className='bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] py-[5px] px-[5px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          <span className='flex items-center justify-center bg-[#008dfa] py-[3px] px-[7px] rounded-[9px] cursor-pointer'>
            <img src="https://asaxiy.uz/custom-assets/images/search-icon.svg" alt="logo" />
            <p className='text-white'>Search</p>
          </span>
        </div>
        <HeaderList />
      </div>
    </header>
  )
}

export default index