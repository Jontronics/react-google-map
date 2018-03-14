import React, { Component } from 'react'
import { Item } from '../presentation'

class Results extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  
  render(){
    return(
      <div className="container-fluid">
          <div className="row">  
              <Item />   
              <Item />  
              <Item />  
              <Item />                 
          </div>
      </div>
      
      
      
    )
    
    
  }
  
  
  
}

export default Results