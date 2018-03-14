import React, { Component } from 'react'
import { Nav, Footer, Item, Map } from './presentation'
import { Search } from './containers'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      map: null
    }
  }
    render(){
      const markers = [
        {id:1, key:'1', defaultAnimation:2, label: 'skate-board', position:{lat:40.7224017, lng:-73.9896719}},
        {id:2, key:'2', defaultAnimation:2, label: 'skate-board', position:{lat:40.7024017, lng:-73.9896719}},
      ]
      
      return(
        <div className="wrapper">
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <Search />
            </div>
            <div className="main-panel">
              <Nav />
                
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">  
                            <Item />   
                            <Item />  
                            <Item />  
                            <Item />                 
                        </div>
                    </div>
                </div>      
                <Footer />      
            </div>
        </div>          
      )
    }
}


export default Home