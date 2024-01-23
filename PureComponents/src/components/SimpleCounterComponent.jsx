import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0,
         toggle:false
      }
    }

  render() {

    let {count,toggle} = this.state
        
   let handleClick=()=>{
        if(toggle){
            this.setState({count : count+1})
            console.log('this is a simple component')
        }
}
    return (
      <div>
        <h2>Simple Counter Components</h2>
        <h3>{count}</h3>
        <button onClick={()=>{this.setState({toggle:!toggle})}}>Toggle</button>
        <button onClick={handleClick}>Counter</button>
      </div>
    )
  }
}
