export const post=(data)=>{
    return{
        type:"ALL_POST",
        payload:{
            data
        }
    }
}

export const category=(data,cat)=>{
    return{
        type:"CATEGORY",
        payload:{
            data:data,
            category:cat
        }

    }
}