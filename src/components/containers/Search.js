import React, { Component } from 'react'
import { Map } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      map:null
    }
  }
  
  centerChanged(center){
    console.log('centerChaged: ' + JSON.stringify(center))
    this.props.locationChanged(center)
  }
  
  render(){  
    
    const markers = this.props.item.all || []

    return(
      <div className="sidebar-wrapper">    
          <Map 
            onMapReady={ (map) => {
              if (this.state.map != null)
                  return 
                  console.log('OnMapReady: '+JSON.stringify(map.getCenter()))
                  this.setState({
                      map: map
                  })
            }}  
            locationChanged={this.centerChanged.bind(this)}
            markers={markers}
            zoom={14}
            center={this.props.map.currentLocation}
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'vh'}} />} />
      </div>
        
    )
  }
  
}

const stateToProps = (state) => {
  return{
    item: state.item,
    map: state.map
  }
}

const dispatchToProps = (dispatch) => {
  return {
    locationChanged: (location) => dispatch(actions.locationChanged(location)) 
  }
}

export default connect (stateToProps, dispatchToProps)(Search)