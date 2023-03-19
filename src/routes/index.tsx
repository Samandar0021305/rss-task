import React, { Component } from 'react'
import { RenderRouter } from './RenderRoutes'
import {Routes,Route}  from "react-router-dom"



export default class index extends Component {    
  render() {
    return (
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
        {RenderRouter.map(value=>{
          return <Route key={value.id} element={<value.component/>} path={value.path} />
        })}
        </Routes>
      </React.Suspense>
    )
  }
}
