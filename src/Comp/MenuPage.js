import BaseComp from "./BaseComp"
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Dashboard";
const MenuComp=()=>{
    return <BaseComp name="menu" InnerComp={()=><MenuBase/>}/>
}
const MenuBase=()=>{
    const selector=useSelector(state=>state);
   const path=useLocation();
   console.log(path?.pathname);
   const list=path?.pathname?.split("/");
   const roomId=(list[1]);
   const TableNo=list[2];
   const [dishes,setDishes]=useState([]);
   async function getAllDishes(){
    try{
            const resp=await axios.get("http://localhost:4100/available_dishes",{
                headers:{
                    usersess:JSON.stringify(selector?.usersess),
                    type:"room based",
                    room:roomId
                }
            })
            console.log(" dished",resp?.data?.data1);
            setDishes(resp?.data?.data1);
        }
        catch(e){
            console.log(e?.message);
        }
    }
    useEffect(()=>{
        getAllDishes();
    },[])
   return <div className=" w-[80%] min-h-[70%]  flex flex-wrap gap-[20px] border-[1px] border-[rgba(0,0,0,.1)] justify-center pt-[20px] shadow-lg rounded-[10px] mt-[5%]    ">
     {
        dishes?.length?<>
        {
            dishes.map((e,i)=>{
                // return <div key={i} className={` w-[30%] h-[45%] bg-[rgba(255,255,255,.4)] border-[1px] border-[rgba(0,0,0,.1)] rounded-[20px] `}></div>

                    return  <Card key={i} data={e} height={"32%"}/>
               
            })
        }
        
        </>:null
     }
     

    </div>
}


export default MenuComp;