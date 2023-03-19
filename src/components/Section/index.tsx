import React, { Component } from 'react'
import { Card } from '_utils/Contstants'
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png"
import card6 from "../../assets/card6.png"
import elips from "../../assets/elips.png"


const Image = [card1, card2, card3, card4, card5, card6]

export default class index extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <ul className='section-card'>
                        {Card.map(value => {
                            return (
                                <li className='section-item' key={value.id}>
                                    <img src={Image[value.id - 1]} alt="" />
                                    <h2>{value.text}</h2>
                                    <button>{value.money}</button>
                                    <div>
                                        <img src={elips} alt="logo" />
                                        <p>{value.money}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}
