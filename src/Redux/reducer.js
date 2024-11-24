
const initialState={
    usersess:{},
    count:0
}
const reducer=(state=initialState,action)=>{
    console.log("=>",state)
    if(action?.type==="usersess"){
        return {
            ...state,usersess:action.payload
        }
    }
    else
    return state;
}
export default reducer;