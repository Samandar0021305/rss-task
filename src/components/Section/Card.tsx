import React, { Component } from 'react'
import CardItem from './CardItem'
import { CardValue, City } from '_utils/Contstants'

import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png"
import card6 from "../../assets/card6.png"
import elips from "../../assets/elips.png"
let Image = [card1, card2, card3, card4, card5, card6]

type CardProp = {
  id: number,
  text: string,
  money: string,
  map: string,
}
type CardTodos = {
  value: CardProp[]
  city:string,
  text:string,
  moneyValue:string,
  img:any,
}

class Card extends Component<any> {
  state: CardTodos  = {
    value: CardValue,
    city:"",
    text:"",
    moneyValue:"",
    img:""
  }
  
   handleMoney = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const values =  {value:this.state.value,city:this.state.city,text:this.state.text,img:this.state.img}   
    this.setState({...values,moneyValue:e.target.value})
  }

  handleSelected = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    const values = {value:this.state.value,moneyValue:this.state.moneyValue,text:this.state.text}; 
    this.setState({...values,city:e.target.value});
  }

  handleImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const values =  {city:this.state.city,value:this.state.value,moneyValue:this.state.moneyValue,text:this.state.text}; 
    const response =  {img:e.target.files}
    this.setState({...values,...response});
  }
  
  handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const id:number = +this.state.value.length + 1
    const text: string = this.state.text
    const money: string = this.state.moneyValue
    const results = {id:id,text:text,money:money,map:this.state.city};
    const res = [...this.state.value,results]
    this.setState({value:res});
    const valueimg = this.state.img[0]
    Image = [...Image,URL.createObjectURL(valueimg)]
  }

  render() {
   
      
    return (
      <div className='cardWrapper'>
        <div className={this.props.isValid ? "addCard" : "revCard"}>
          <h2>Предложить проект</h2>
          <form onSubmit={this.handleSubmit} className={this.props.isValid ? "isForm" : "resForm"}>
            <input  value={this.state.text} onChange={(e)=>this.setState({value:this.state.value,text:e.target.value,city:this.state.city})} type="text" placeholder='каким бизнесом вы занимаетесь?'  required/>
            <input   value={this.state.moneyValue} onChange={this.handleMoney} type="text" placeholder='введите цену' required />
            <select value={this.state.city}  onChange={this.handleSelected}>
                {City.map((values) => {
                  return <option  value={values.value} key={values.id}>{values.value}</option>
                })}
            </select>
            <label className='form-date'>
            Введите дату начала
            <input required type="date"/>
            </label>
           <label>
               <input accept="image/" multiple  onChange={this.handleImage} required type="file" />
           </label>
           <button type='submit'>submit</button>
          </form>
        </div>
        <div style={{ opacity: this.props.isValid ? "1" : "0.5" }}>
          <CardItem value={this.state?.value} Image={Image} elips={elips} />
        </div>
      </div>
    )
  }
}
export default Card