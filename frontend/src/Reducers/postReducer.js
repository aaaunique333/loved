
const initialState=[];

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ALL_POST":
            return[
                ...action.payload.data
            ]

        case "CATEGORY":
            const data=action.payload.data.filter(item=>item.category===action.payload.category);
            return [ ...data]

        default:
            return state;
    }
}

export default postReducer;