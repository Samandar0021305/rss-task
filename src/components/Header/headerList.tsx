import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarLink } from "../../_utils/Contstants"



export const HeaderList = () => {
    const handleStyle = ({ isActive }: { isActive: boolean }) => {
        return {
            color: isActive ? "red" : "black"
        }
    }
    return (
        <ul className='flex w-[230px] justify-between items-center'>
            {NavbarLink.map((value) => <li key={value.id}><NavLink style={handleStyle} to={value.path}>{value.text}</NavLink></li>)}
        </ul>
    )
}
