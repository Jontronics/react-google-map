import constants from '../constants'

var initialState = {
  all: [
      {id:'1', price: 1, name: 'skateSpot One', image:'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Santa-Cruz-Screaming-Hand-Black-7.5%26quot%3B--Skateboard-Complete-_268798-front.jpg', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'Tony Hawk', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tony_Hawk_right_profile.jpg/220px-Tony_Hawk_right_profile.jpg'}},
      {id:'2', price: 2, name: 'skateSpot Two', image:'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Santa-Cruz-Screaming-Hand-Black-7.5%26quot%3B--Skateboard-Complete-_268798-front.jpg', position:{lat:40.7024017, lng:-73.9896719}, seller:{username:'Tom Penny', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28jUhjktpD35m7g0ygmYhQrkVJcc6rlMWjRnZURMnQ_oged7T'}},
      {id:'3', price: 3, name: 'skateSpot Three', image:'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Santa-Cruz-Screaming-Hand-Black-7.5%26quot%3B--Skateboard-Complete-_268798-front.jpg', position:{lat:40.7124017, lng:-73.9796719}, seller:{username:'Jamie Thomas', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgF78JaOattwCFs_oTT-ojLe-lOwqL8EKtGaHQugYOuxX3h9A'}}
  ]
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)
  
  switch (action.type){
    
    
    
    case constants.ITEM_ADDED:
        console.log('ITEM ADDED: ' + JSON.stringify(action.data))
        
        let all = Object.assign([], updated.all)
        all.push(action.data)
        updated['all'] = all
        
        return updated
    
    
    default:
        return updated 
    
  }
    
}