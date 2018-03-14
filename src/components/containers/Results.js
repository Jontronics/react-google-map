import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'

class Results extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  
  render(){
      
    const items = this.props.item.all || []
    
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

const stateToProps = (state) => {
  return {
    item: state.item 
    
  }
}

export default connect(stateToProps)(Results)


