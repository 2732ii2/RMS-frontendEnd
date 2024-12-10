const localUserSess=JSON.parse(localStorage.getItem("usersess"));
const initialState={
    usersess:localUserSess?.type?localUserSess:{},
    count:0,
    flip:{
        one:true,
        two:false,
        third:false,
    },
    user:{
        Username:"",
        Password:""
    }
}
const reducer=(state=initialState,action)=>{
    // console.log("=>",    state,action.payload)
    if(action?.type=="usersess"){
        return {
            ...state, 
            usersess: action.payload
         };
    }
    else if(action?.type=="flip"){
        return {
            ...state, 
            flip: action.payload
         };
    }
    else if(action?.type=="user"){
        return {
            ...state, 
            user: action.payload
         };
    }
    else
    return state;
}
export default reducer;