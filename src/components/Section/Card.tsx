import React, { Component } from 'react'
import CardItem from './CardItem'
import { CardValue } from '_utils/Contstants'


import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png"
import card6 from "../../assets/card6.png"
import elips from "../../assets/elips.png"
const Image = [card1, card2, card3, card4, card5, card6]

type CardProp = {
    id:number,
    text:string,
    money:string,
    map:string
}
type CardTodos  = {
    value:CardProp[]
}

class Card extends Component<any> {
   state:CardTodos = {
     value: CardValue
   }
   

  render() {
    console.log(this.props.isValid);
    
    return (
      <div className='cardWrapper'>
        <div className={this.props.isValid ? "addCard" : "revCard"}>

        </div>
      <div style={ {opacity: this.props.isValid ? "1" : "0.5"} }> 
        <CardItem value={this.state.value} Image={Image} elips={elips} />
      </div>
      </div>
    )
  }
}
export default Card