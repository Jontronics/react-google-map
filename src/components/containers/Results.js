import React, { Component } from 'react'
import { Item } from '../presentation'

class Results extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  
  render(){
    const items = [
      {id:1, key:'1', price: 10, defaultAnimation:2, label: 'skate-board', position:{lat:40.7224017, lng:-73.9896719}},
      {id:2, key:'2', price: 20, defaultAnimation:2, label: 'BEER', position:{lat:40.7024017, lng:-73.9896719}},
    ]
    return(
      <div className="container-fluid">
          <div className="row"> 
            { items.map((item, i)=> {
                  return <Item key={item.id} item={item} />
                }) 
            }                 
          </div>
      </div>
      
      
      
    )
    
    
  }
  
  
  
}

export default Results