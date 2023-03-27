import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from "page/Home"
import About from "page/About"
import Found from 'page/404'

 const index = () => {
  return (
    <>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/' element={<About/>} />
           <Route path='/' element={<Found/>} />
       </Routes>
    </>
  )
}

export default React.memo(index)
