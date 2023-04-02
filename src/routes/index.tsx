import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from "page/Home"
import About from "page/About"
import Found from 'page/404'
import FormPage from 'page/FormPage'
import {CardList} from "../_utils/Contstants"
 
type CardState ={
  map:string,
  money:string,
  id:number,
  img:string,
  text:string
}[]


 const index = () => {
  const [cardValues,setCardValues] = useState<CardState>(CardList)
  return (
    <>
       <Routes>
           <Route path='/' element={<Home cardValues={cardValues} />} />
           <Route path='/about' element={<About/>} />
           <Route path='/form' element={<FormPage cardValues={cardValues} setCardValues={setCardValues} />}/>
           <Route path='*' element={<Found/>} />
       </Routes>
    </>
  )
}

export default React.memo(index)
