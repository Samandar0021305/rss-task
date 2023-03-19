import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarList } from '_utils/Contstants'

export default class List extends Component {
    render() {
        return (
            <ul className='navbar-list'>
                {NavbarList.map((value) => {
                    return (
                        <li key={value.id}>
                            <NavLink style={{ color: 'black' }} to={value.path}>{value.text}</NavLink>
                        </li>
                )})}
            </ul>
        )
    }
}
