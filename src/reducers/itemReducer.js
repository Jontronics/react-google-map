var initialState = {
  all: [
      {id:1, key:'1', price: 10, defaultAnimation:2, label: 'skate-board', position:{lat:40.7224017, lng:-73.9896719}},
      {id:2, key:'2', price: 20, defaultAnimation:2, label: 'BEER', position:{lat:40.7024017, lng:-73.9896719}}
  ]
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)
  
  switch (action.type){
    // case '':
    
    
    default:
        return updated 
    
  }
    
}