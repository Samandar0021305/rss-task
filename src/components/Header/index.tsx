import React, { Component } from 'react'
import List from './List'

type stateValue =  {
 value:string
}
export default class index extends Component {
   
   state:stateValue = {
      value:localStorage.getItem("val") || ""
   }
   componentWillUnmount(){
      localStorage.setItem("val",this.state.value);
   }
   handleChange = (e:React.FormEvent<HTMLInputElement>):void=>{
     this.setState({value:e.currentTarget.value})    
   }
   
   render() {
    return (
      <header className='header'>
         <div className='container header-box'>
            <h2 style={{cursor:"pointer",fontWeight:"600"}}>Logo</h2>
            <input className="header-input" value={this.state.value}  onChange={this.handleChange} type='text' placeholder='search..' />
            <List/>
         </div>
      </header>
    )
  }
}
