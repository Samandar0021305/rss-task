import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from "page/Home"
import About from "page/About"
import Found from 'page/404'
import FormPage from 'page/FormPage'

 const index = () => {
  return (
    <>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
            <Route path='/form' element={<FormPage/>}/>
           <Route path='*' element={<Found/>} />
       </Routes>
    </>
  )
}

export default React.memo(index)
