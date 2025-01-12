import BaseComp from "./BaseComp"
import {useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { UserPass, userSess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Flip} from "../Redux/action";
const Login=()=>{
    return <BaseComp name="login" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    const dispatch=useDispatch();
    const selector=useSelector(state=>state);
    const {flip}=selector;
    const navi=useNavigate();
    
    const [states,setstates]=useState({
        Username:"",
        Password:""
    })
    // const [flip,setflip]=useState({
    //     one:true,
    //     two:false,
    //     third:false,
    // })
    // console.log(flip);
    const [question,setques]=useState([{
        question:"What is the name of Re0sturant",
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
        //   navi("/dashboard");

      }
    },[selector])
    return <>
     <div className="w-[40%] overflow-hidden mt-[50px] bg-[rgba(255,255,255,.7)]  h-[50%] backdrop-blur-lg shadow-sm rounded-[20px] flex">
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
              dispatch(UserPass(states));
            
              if(resp?.data?.usersession.type=="ResAdmin"){
                // here is flipping tab happens
                console.log("flipped",resp?.data?.usersession?.resturantName);
                if(resp?.data?.usersession?.resturantName){
                    console.log("going into it");
                    navi("/dashboard");
                }
                else{
                    dispatch(Flip({
                        ...flip,two:true,one:false,third:false,
                         }))
                    }
                }
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
        
       }} 
       className="bg-[red] text-white text-[20px] rounded-[4px] py-2 px-3">Submit</button>
       </div>
       <div className="min-w-[100%] satisfy min-h-[100%] flex flex-col items-center justify-center gap-[50px] " >
        <h2 className="text-[30px]   !font-bold tracking-wide ">Welcome Ashad 😀 ,<br/>  to your Resturant Management System </h2>
        <div className="w-[auto] font-bold px-[50px] py-5 text-[22px] flex flex-col items-center justify-center gap-[20px] h-[auto] bg-[rgba(0,0,0,.2)]">
            Are you ready to play
            <div className="flex gap-[40px] ">
                <button className="bg-[white] active:skew-y-3 px-[10px] py-[1px]" onClick={()=>{ 
                    // setflip({
                    // ...flip,third:true,one:false,two:false
                    // })
                    dispatch(Flip({
                        ...flip,third:true,one:false,two:false
                         }))
                }}>Click me</button>
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
         
         <button onClick={async()=>{
            // resturantName
            // selector?.usersess?.resturantName
            console.log(question,divThreeAns,states);
            const resp=await axios.post("http://localhost:4100/userUpdation",{usersess : selector?.usersess,...divThreeAns});
            // const blob=(resp?.data?.data?.data);
            console.log(resp?.data?.data);
            const responseData = await resp?.data?.data;
            console.log(responseData);


    // Decode the base64 string to binary data
    const binaryString = atob(responseData);

    // Convert the binary string to a Uint8Array
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the Uint8Array
    const blob = new Blob([byteArray], { type: "application/pdf" });

    // Create an object URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr_codes.pdf"; // Set the file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke object URL to release memory
    window.URL.revokeObjectURL(url);



            // console.log(blob);
            // console.log(blob);
            // /// creating a pdf of qr codes

            // const url = window.URL.createObjectURL(blob);

            // // Trigger download
            // const a = document.createElement('a');
            // a.href = url;
            // a.download = 'qr_codes.pdf';
            // document.body.appendChild(a);
            // a.click();
            // document.body.removeChild(a);


    //         const blob = new Blob([resp?.data?.data?.data], { type: 'application/pdf' }); // Convert to Blob
    // console.log(blob); // Check if Blob is correctly formed

    // // Create an object URL for the Blob
    // const url = window.URL.createObjectURL(blob);

    // // Trigger download
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'qr_codes.pdf'; // Set the file name
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    // // Revoke object URL to release memory
    // window.URL.revokeObjectURL(url);

            ///




            localStorage.removeItem("usersess");
            const resp2=await axios.post(`http://localhost:4100/login`,selector?.user);
            console.log(resp2?.data);
            if(resp2.data?.msg){
              console.log(resp2?.data);
              dispatch(userSess({...resp2?.data?.usersession,token:resp2?.data?.token}));
              dispatch(Flip({
                ...flip,two:false,one:true,third:false,
                 }))

              navi("/dashboard");
            }

         }} className="bg-[black] text-white  text-[20px] rounded-[4px] py-2 px-3">Submit</button>
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