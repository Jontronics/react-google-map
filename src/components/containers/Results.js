import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'

class Results extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  
  updateItem(attr, event){
    event.preventDefault()
    console.log(attr + ' == ' + event.target.value)
  }
  
  render(){
  
    const items = this.props.item.all || []
    
    return(
      <div className="container-fluid">
          <div className="row"> 
            { items.map((item, i) => {
                  return <Item key={item.id} item={item} />
                }) 
            }                     
          </div>
          
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                  <div className="content">  
                      <div className="footer">
                        <h3>Add Item</h3>
                        <input onChange={this.updateItem.bind(this, 'name')} type="text" style={localStyle.input} className="form-control" placeholder="Name" />
                          <input onChange={this.updateItem.bind(this, 'price')} type="text" style={localStyle.input} className="form-control" placeholder="Price" />

                          <hr />
                          <div className="stats">
                              <button className="btn btn-success">Add Item</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>  
      </div>  
    )  
  }
}

const localStyle = {
  input:{
    border: '1px solid #ddd',
    marginBottom:12
  }
}

const stateToProps = (state) => {
  return {
    item: state.item     
  }
}

export default connect(stateToProps)(Results)


