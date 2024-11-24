import BaseComp from "./BaseComp"
import {useState} from "react";
const Login=()=>{
    return <BaseComp name="login" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
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
    console.log(flip);
    return <div className="w-[40%] overflow-hidden mt-[50px]  h-[50%] backdrop-blur-lg shadow-sm rounded-[20px] flex">
        <div style={{marginLeft:`${ flip?.two?"-100%":flip.third?"-200%":"" }  `}} className=" transition-all min-w-[100%] h-[100%] flex flex-col gap-[30px] items-center justify-center">
       {
        Object.keys(states).map((e,i)=>{
            return <div key={i} className="text-[22px] flex gap-[30px]">{e}
            
             <input type={e.includes("Password")?"password":"text"} className=" rounded-[4px] bg-transparent border-b-[1px] border-black outline-none px-2 "/>
            </div>
        })
       }
       <button onClick={()=>setflip({
        ...flip,two:true,one:false,third:false,
       })} className="bg-[red] text-white text-[20px] rounded-[4px] py-2 px-3">Submit</button>
       </div>
       <div className="min-w-[100%] satisfy min-h-[100%] flex flex-col items-center justify-center gap-[50px] " >
        <h2 className="text-[30px]   !font-bold tracking-wide ">Welcome Ashad 😀 ,<br/>  to your Resturant Management System </h2>
        <div className="w-[auto] font-bold px-[50px] py-5 text-[22px] flex flex-col items-center justify-center gap-[20px] h-[auto] bg-[rgba(0,0,0,.2)]">
            Are you ready to play
            <div className="flex gap-[40px] ">
                <button className="bg-[white] active:skew-y-3 px-[10px] py-[1px]" onClick={()=>{ setflip({
                    ...flip,third:true,one:false,two:false
                })}}>Yes</button>
                <button className="bg-[white] px-[10px] py-[1px] active:skew-y-3">No</button>

            </div>
        </div>
       </div>
       <div className="min-w-[100%] satisfy min-h-[100%] flex flex-col items-center justify-center gap-[50px] " >
         {
            question?.map((e,i)=>{
                
                return <div key={i} className="flex flex-col gap-[30px] !text-[30px]">{"->"} {e?.question}
                <input onChange={e=>{
                    console.log(e.target.value);
                }}  type={e?.type} max={20}/>
                 </div>
            })
         }
         <button onClick={()=>{}} className="bg-[black] text-white text-[20px] rounded-[4px] py-2 px-3">Submit</button>
       </div>
    </div>
}
export default Login;