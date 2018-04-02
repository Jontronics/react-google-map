import React, { Component } from 'react'

export default (props) => {
  //{id:1, key:'1', defaultAnimation:2, label: 'skate-board', position:{lat:40.7224017, lng:-73.9896719}},

  const item = props.item
  
  
  return (
    <div className="col-lg-6 col-sm-6">
        <div className="card">
            <div className="content">
                <div className="row">  
                    <div className="col-xs-12">
                        <div className="numbers">
                            <p>{item.name}</p>
                            {item.price}
                        </div>
                    </div>  
                    <div className="col-xs-12">
                      <a href="#">
                        <img style={localStyle.itemImage} src={item.image} />  
                      </a>
                    </div>    
                </div>
                <div className="footer">
                    <hr />
                      <img style={localStyle.icon}   />
                    <div className="stats">
                        <i className="ti-rocket"></i> 
                          {item.seller.username}
                    </div>
                    
                    <button onClick={props.onPurchase.bind(this)} className="btn btn-success btn-outlined btn-primary" style={{borderRadius:0, float:'right', padding:5}}>send a message</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}


const localStyle = {
  itemImage: {
    width:100+'%', 
    padding:3, 
    border:'1px solid #F1EAE1',
    marginBottom:12
  }
}


