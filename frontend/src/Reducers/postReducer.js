const initialState=[];

const postReducer=(state=initialState,aciton)=>{
    switch(aciton.type){
        case "POST":
            const filterPost=aciton.data.filter(item=>item.category===aciton.category);
            return filterPost;
        default:
            return state;
    }
}

export default postReducer;