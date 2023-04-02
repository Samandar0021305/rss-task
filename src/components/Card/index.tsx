import React from 'react'
import { CardItem } from './CardItem'

type CardState ={
  Cards:{
  map:string,
  money:string,
  id:number,
  img:string,
  text:string
  }[] 
}

 const index = (props:CardState) => {
  return (
    <div className='container px-[40px] py-3 mx-auto'>
        <CardItem current={props.Cards}/>
    </div>
  )
  }


  export default index
