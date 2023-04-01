import React from 'react'



export const Continent = () => {
    return (
        <>
            <div className='mt-[20px]'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Continent:</label>
                <select  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option  value="select">select</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="America">America</option>
                </select>
            </div>
        </>
    )
}
