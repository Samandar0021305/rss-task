import React from 'react'
import Card  from "../components/Card"
type CardState ={
  cardValues:{
    map:string,
  money:string,
  id:number,
  img:string,
  text:string
  }[] 
}

const Home = (props:CardState) => {
  
  return (
    <div>
      <Card Cards={props.cardValues}/>
    </div>
  )
}

export default Home