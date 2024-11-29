const localUserSess=JSON.parse(localStorage.getItem("usersess"));
const initialState={
    usersess:localUserSess?.type?localUserSess:{},
    count:0
}
const reducer=(state=initialState,action)=>{
    // console.log("=>",    state,action.payload)
    if(action?.type=="usersess"){
        return {
            ...state, 
            usersess: action.payload
         };
    }
    else
    return state;
}
export default reducer;