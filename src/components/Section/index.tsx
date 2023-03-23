import React, { Component } from 'react'

import Card from './Card'

type MYState = {
    isComponent:boolean
}
export default class index extends Component {

    state:MYState={
        isComponent:true
    }

    handleCLick = ()=>{
        if(this.state.isComponent){
            this.setState({isComponent:false})
        }else{
            this.setState({isComponent:true})
        }
    }

    render() {        
        return (
            <section style={{paddingTop:"15px"}}>
                <div className="container">
                    <button onClick={this.handleCLick} className='section-btn'>
                       add card
                    </button>
                    <Card isValid={this.state.isComponent}/>
                </div>
            </section>
        )
    }
}
