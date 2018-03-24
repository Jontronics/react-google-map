import React, { Component } from 'react'

export default (props) => {
  //{id:1, key:'1', defaultAnimation:2, label: 'skate-board', position:{lat:40.7224017, lng:-73.9896719}},

  const item = props.item
  
  
  return (
    <div className="col-lg-3 col-sm-6">
        <div className="card">
            <div className="content">
                <div className="row">
                    <div className="col-xs-5">
                        <div className="icon-big icon-warning text-center">
                            <i className="ti-server"></i>
                        </div>
                    </div>
                    <div className="col-xs-7">
                        <div className="numbers">
                            <p>{item.name}</p>
                            ${item.price}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <hr />
                      <img style={localStyle.icon}  src={item.seller.image} />
                    <div className="stats">
                        <i className="ti-rocket"></i> 
                          {item.seller.username}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


const localStyle = {
  icon: {width:28,height:28, borderRadius:14, float:'right'}
}