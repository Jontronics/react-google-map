import React, { Component } from 'react'
import { connect } from 'react-redux'


class Nav extends Component {
  render(){
    const currentUser = this.props.account.currentUser
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <a className="navbar-brand">Pro Spots</a>
                </div>
                
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">  
                      <li>
                      <a href="#"> { (currentUser == null) ? null : <p>Welcome {currentUser.username}</p> } </a>
                      </li>
                      
                      <li class="dropdown">
                          <a href="#gaia" class="dropdown-toggle btn" data-toggle="dropdown">
                              <i class="fa fa-share-alt"></i> Lets connect
                          </a>
                          <ul class="dropdown-menu dropdown-danger">
                              <li>
                                  <a href="#"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
                              </li>
                              <li>
                                  <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                              </li>
                              <li>
                                  <a href="#"><i class="fa fa-instagram"></i> Instagram</a>
                              </li>
                          </ul>
                      </li>
                      
                      
                      
                    </ul>
                </div>
            </div>
        </nav>      
    )  
  }  
}

const stateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(stateToProps)(Nav) 