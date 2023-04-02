import React, { useEffect, useState } from 'react'
import {HeaderList} from './headerList'
import { Search } from 'components/Search/SearchInput';
const index = () => {

  const [inputValue, setInputValue] = useState(localStorage.getItem("value") || "");
  useEffect(() => {
    localStorage.setItem("value", inputValue)
  })

  return (
    <header className=' shadow-sm py-[6px]'>
      <div className='container px-[40px] py-3 mx-auto flex justify-between' >
        <div className='flex items-center justify-center'>
         <Search inputValue={inputValue} setInputValue={setInputValue}/>
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