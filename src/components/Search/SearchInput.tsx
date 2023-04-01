import React from 'react'
type StatePropsType = {
    inputValue:string,
    setInputValue:(e:string)=>void
}

export const Search = (props:StatePropsType) => {
  return (
    <input value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} type="text" placeholder='Search..' className='bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] py-[5px] px-[5px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  />
  )
}
