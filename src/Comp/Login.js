import BaseComp from "./BaseComp"
import {useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { userSess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    return <BaseComp name="login" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    const dispatch=useDispatch();
    const selector=useSelector(state=>state);
    const navi=useNavigate();
    const [states,setstates]=useState({
        Username:"",
        Password:""
    })
    const [flip,setflip]=useState({
        one:true,
        two:false,
        third:false,
    })
    const [question,setques]=useState([{
        question:"What is the name of Resturant",
        type:"text",
        val:""
    },{
        question:"how many numbers of tables are there ?",
        type:"range",
        val:""
    }])
    const arr=[];
    for(var i=0;i<20;i++){
        arr.push(i+1);
    }
    // console.log(flip);
    const [divThreeAns,setdta]=useState({
        one:"",
        two:20
    });
    // console.log(divThreeAns);
    useEffect(()=>{
     console.log(selector);
     if(selector.usersess?.type?.includes("Admin"))
      {
          if(!(JSON.parse(localStorage.getItem("usersess")))?.type){
          localStorage.setItem("usersess",JSON.stringify(selector.usersess));}
          navi("/dashboard");

      }
    },[selector])
    return <>
     <div className="w-[40%] overflow-hidden mt-[50px]  h-[50%] backdrop-blur-lg shadow-sm rounded-[20px] flex">
        <div style={{marginLeft:`${ flip?.two?"-100%":flip.third?"-200%":"" }  `}} className=" transition-all min-w-[100%] h-[100%] flex flex-col gap-[30px] items-center justify-center">
       {
        Object.keys(states).map((e,i)=>{
            return <div key={i} className="text-[22px] flex gap-[30px]">{e}
            
             <input onChange={(el)=>{
                setstates({
                    ...states,[e]:el.target.value
                })
             }} type={e.includes("Password")?"password":"text"} className=" rounded-[4px] bg-transparent border-b-[1px] border-black outline-none px-2 "/>
            </div>
        })
       }
       <button onClick={async()=>{
        try{
         const values=Object.values(states).filter(e=>{
            if(e)return e;
         });
         console.log(values);
         if(values.length==2)
        {
            const resp=await axios.post(`http://localhost:4100/login`,states);
            console.log(resp?.data);
            if(resp.data?.msg){
              console.log(resp?.data);
              dispatch(userSess({...resp?.data?.usersession,token:resp?.data?.token}));
              toast.success(resp.data?.msg)
             
             }
            else
            toast.error(resp?.data?.err);
        }
        else{
            toast.error(" Fill the credentials ");

        }
          }
          catch(e){
            toast.error(e?.message);
           }
        // setflip({
        // ...flip,two:true,one:false,third:false,
        // })
       }} 
       className="bg-[red] text-white text-[20px] rounded-[4px] py-2 px-3">Submit</button>
       </div>
       <div className="min-w-[100%] satisfy min-h-[100%] flex flex-col items-center justify-center gap-[50px] " >
        <h2 className="text-[30px]   !font-bold tracking-wide ">Welcome Ashad 😀 ,<br/>  to your Resturant Management System </h2>
        <div className="w-[auto] font-bold px-[50px] py-5 text-[22px] flex flex-col items-center justify-center gap-[20px] h-[auto] bg-[rgba(0,0,0,.2)]">
            Are you ready to play
            <div className="flex gap-[40px] ">
                <button className="bg-[white] active:skew-y-3 px-[10px] py-[1px]" onClick={()=>{ setflip({
                    ...flip,third:true,one:false,two:false
                })}}>Click me</button>
            </div>
        </div>
       </div>
       <div className="min-w-[100%] satisfy min-h-[100%] flex flex-col items-center justify-center gap-[50px] " >
         {
            question?.map((e,i)=>{
                
                return <div key={i} className="flex relative flex-col gap-[30px] !text-[30px]">{"->"} {e?.question}
                <input onChange={el=>{
                    console.log(el.target.value);
                    if(e?.type=="range"){
                        setdta({
                            ...divThreeAns,two:el.target.value
                        })
                    }
                    else{
                        setdta({
                            ...divThreeAns,one:el.target.value
                        })
                    }
                }}  type={e?.type} className=" border-b-[1px] text-center border-black bg-[transparent] " min={1} max={20}/>
                  {i==1?<div className="flex absolute w-[100%] bottom-[-30px] justify-between items-center">{
                   arr.map((e,i)=>{
                    // console.log(i,divThreeAns);
                    return <div key={i} className={  ` ${e==divThreeAns?.two?"text-[black]":""} text-[rgba(0,0,0,.2)] text-[16px]`} >{e}</div>
                   })
                   
                   }</div>:null}
                 </div>
            })
         }
         
         <button onClick={()=>{}} className="bg-[black] text-white  text-[20px] rounded-[4px] py-2 px-3">Submit</button>
       </div >
       
    </div>
    <div className="absolute ">

    <Toaster
       position="top-right"
       reverseOrder={false}
     />
    </div>
    </>
}
export default Login;