const initialState={
  isLogged:false
}

const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                isLogged:true
            }
        case "LOGOUT":
            return{
                isLogged:false
            }    

        default:
            return state;
    }
}

export default loginReducer;