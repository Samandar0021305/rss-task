import React from 'react'


export const Control = () => {
    return (
        <>
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
                <input required  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="what business do you do....." />
            </div>
        </>
    )
}
