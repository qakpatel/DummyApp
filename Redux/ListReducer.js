
const ListReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_DATA': 
         return{
               ...state,
            }
         case 'POST_USER_DATA':
             return{
                ...state, userData:state.userData?state.userData.concat([action.payload]):[action.payload]
            }
         case 'SEARCH_DATA':
             return{
               ...state, searchData:state.userData.map(a=>({...a})).filter(a=>{
                   return a.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 ||
                          a.email.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 
              })
             }      
        default:
         return {...state}; 
    }
}

export default ListReducer;
