import React from 'react'
import { CardList } from '_utils/Contstants'
import ellips from "../../assets/elips.png"

export const CardItem = () => {
  
  return (
    <ul className='flex justify-between items-center flex-wrap'>
        {CardList.map((value)=>{
            return (
                <li style={{border:"1px solid #EFF1F5"}} className='w-[320px] mt-[20px] h-[450px]' key={value.id}>
                   <img className='w-[100%]' src={value.img} alt="logo" />
                   <h2 className='text-[17px] text-bold px-[20px]  py-[10px]'>{value.text}</h2>
                  <button className='mx-[20px] my-[10px] bg-[#D63C3C] p-[4px] rounded-sm text-white'>{value.money}</button>
                  <span className='flex items-center mx-[20px] my-[10px]'>
                    <img  src={ellips} alt="" />
                    <p className='mx-[10px] text-[15px]'>{value.map}</p>
                  </span>
                </li>
            )
        })}
    </ul>
  )
}
