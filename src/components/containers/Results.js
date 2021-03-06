import React, { Component } from 'react'
import { Item } from '../presentation'
import  Dropzone from 'react-dropzone'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../../actions'
import turbo from 'turbo360'
import swal from 'sweetalert'





class Results extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false,
      item: {
        // position: {lat:40.70224017, lng:-73.9796719} 
      },
      order: {
        
      }
      
    }
  }
  
  componentDidMount(){
    this.props.fetchItems()
    
  }
  
updateItem(attr, event){
  event.preventDefault()
  console.log(attr + ' == ' + event.target.value)
  let updated = Object.assign({}, this.state.item)
  updated[attr] = event.target.value 
  this.setState({
    item: updated
  })
}

addItem(){
  
  if (this.props.account.currentUser == null){
    // swal("Hello world!")
    alert('Please log in or register to post spots bruh')
  if (window.confirm)  {
    window.location = '/auth';
  }  
    return 
  }
  
  const currentUser = this.props.account.currentUser
  let updated = Object.assign({}, this.state.item)
  updated['position'] = this.props.map.currentLocation
  updated['seller'] = {
    id: currentUser.id,
    username: currentUser.username,
    image: currentUser.image || ''
  }
  
  // console.log('ADD ITEM: ' + JSON.stringify(updated))
  this.props.addItem(updated)
  .then(data => {
    console.log('ITEM ADDER: ' + JSON.stringify(data))
  })
  .catch(er => {
    console.log('ERROR: ' + err.message)
  })
}

uploadImage(files){
  const image = files[0]
  console.log('uploadImage: ' + image.name)
  const turboClient = turbo({
    site_id:'5aa5c93aafdd120014d1e3af'
  })
  
  turboClient.uploadFile(image)
  .then(data => {
    // console.log('FILE UPLOADED: ' + data.result.url)
    let updated = Object.assign({}, this.state.item)
    updated['image'] = data.result.url
    this.setState({
        item: updated
    })
  })
  .catch(err => {
    console.log('Upload ERROR: ' + err.message)
    
  })
  
}

onPurchase(item, event){
  event.preventDefault()
  this.setState({
    showModal:true
  })
  console.log('onPurchase: ' + JSON.stringify(item))
}

updateOrder(event){
  console.log('updateOrder: ' + event.target.value)
  let updated = Object.assign({}, this.state.order)
  updated['message'] = event.target.value
  this.setState({
    order: updated
  })
}

submitOrder(){
  let updated = Object.assign({}, this.state.order)
  updated['item'] = this.state.selectedItem
  
  updated['buyer'] = {
    id: this.props.account.currentUser.id,
    username: this.props.account.currentUser.username,
    email: this.props.account.currentUser.email
  }
  
  // console.log('submitOrder: ' + JSON.stringify(updated))
  this.props.submitOrder(updated)
  .then(data => {
    // alert('You have sent a message!')
    // this.setState({
    //   showModal: false
    // })  
    const email = {
      fromemail: 'jonskatapp@gmail.com',
      fromname: 'jonskatapp@gmail.com',
      subject: 'You got a new message',
      content: updated.message,
      recipient: 'jonskatapp@gmail.com'
      
    }
    
    return this.props.sendEmail(email)
  })
  .then(data => {
    alert('You have sent a message!')
    this.setState({
      showModal: false
    })    
  })
  .catch(err => {
    alert('OOPS: ' + err.message)
  })
  // this.setState({
  //   showModal: false
  // })
}
  
  render(){
    const items = this.props.item.all || []
    return(
      <div className="container-fluid">
          <div className="row"> 
            { items.map((item, i) => {
                  return <Item key={item.id} onPurchase={this.onPurchase.bind(this, item)} item={item} />
                }) 
            }                     
          </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="content">  
                      <div className="footer">
                        <h3>Add A New Wall!</h3>
                          <input onChange={this.updateItem.bind(this, 'name')} type="text"  style={localStyle.input} className="form-control" placeholder="Name"/>
                            { (this.state.item.image == null) ? null : <img src={this.state.item.image+'=s120-c'} /> }
                          <hr />
                          <div className="stats">                                 
                                              
                              <Dropzone onDrop={this.uploadImage.bind(this)}  className="btn btn-success" style={{marginRight:36}} >Add Pick</Dropzone>
                              <button onClick={this.addItem.bind(this)} className="btn btn-outlined btn-primary" style={{borderRadius:0}}>Add Wall Space</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>  
          
          <Modal bsSize="mg" show={this.state.showModal} onHide={ () => {this.setState({showModal:false})} }>
            <Modal.Body style={localStyle.modal}>
              
                <h3> Send a request message for spot location </h3>
              
                <hr />
                <textarea id="textarea" method="POST" action="send"  onChange={this.updateOrder.bind(this)} style={localStyle.textarea} placeholder="Enter Message Here" className="form-control"></textarea>
                <button type="submit" onClick={this.submitOrder.bind(this)} className="btn btn-success btn-fill">Send Message!</button>
                
                

            </Modal.Body>  
          </Modal>  
          
      </div>  
    )  
  }
}

const localStyle = {
  input:{
    border: '1px solid #ddd',
    marginBottom:12
  },
  textarea: {
    border: '1px solid #ddd',
    height: 160,
    marginBottom: 16
  }
}

const stateToProps = (state) => {
  return {
    item: state.item,
    map: state.map,
    account: state.account     
  }
}

const dispatchToProps = (dispatch) => {
  return {
      addItem: (item) => dispatch(actions.addItem(item)),
      fetchItems: (params) => dispatch(actions.fetchItems(params)),
      submitOrder: (order) => dispatch(actions.submitOrder(order)),
      sendEmail: (email) => dispatch(actions.sendEmail(email))

  }
}

export default connect(stateToProps, dispatchToProps)(Results)












