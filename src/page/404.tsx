import React from 'react'
import { Link } from 'react-router-dom'

 const Found = () => {
  return (
    <div className='found'>
    <h2 className='text-red'>404 not found</h2>
    <Link style={{fontSize:"20px",textDecoration:"none"}} to='/'> to home</Link>
  </div>
  )
}
export default Found
