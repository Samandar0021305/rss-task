import React, { Component } from 'react'

type CardProp = {
    id:number,
    text:string,
    money:string,
    map:string
}
type CardTodos  = {
    value:CardProp[]
}

export default class CardItem extends Component<any> {
    constructor(props:CardTodos){
        super(props);
    }
  render() {
    return (
        <ul className='section-card'>
        {this.props.value.map((value:CardProp) => {
            return (
                <li className='section-item' key={value.id}>
                    <img style={{width:"100%",height:"230px"}} src={this.props.Image[value.id - 1]} alt="" />
                    <h2>{value.text}</h2>
                    <button>{value.money}</button>
                    <div>
                        <img src={this.props.elips} alt="logo" />
                        <p>{value.map}</p>
                    </div>
                </li>
            )
        })}
    </ul>
    )
  }
}
