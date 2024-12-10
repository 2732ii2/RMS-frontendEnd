
const userSess=(data)=>{
    return {
        type:"usersess",
        payload:data
    }
}
const Flip=(data)=>{
    return {
        type:"flip",
        payload:data
    }
}
const UserPass=(data)=>{
    return {
        type:"user",
        payload:data,
    }
}
export {userSess,Flip,UserPass};