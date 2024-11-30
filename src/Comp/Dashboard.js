import { useState } from "react";
import BaseComp from "./BaseComp"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import orderlist from "../Images/clipboard.svg";
import availableItems from "../Images/box.svg";
import {useSelector} from "react-redux";
const Dashboard=()=>{
    return <BaseComp name="dashboard" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    const [tab,setTab]=useState(0);
    const [show,setshow]=useState(false);
    const selector=useSelector(state=>state);
    console.log(selector?.usersess?.type);
    const list_=[{
        name:"Dashboard",
        Icons:({color})=><DashboardIcon className={` ${color==="blue"?"!text-[#1c284d]":""} !text-[30px]`}/>,
    },
    {
        name:"Order List",
        Icons:orderlist,
    },
    {
        name:"Available Items",
        Icons:availableItems,
    }
    ]
    var listTwo=[{
        name:"Completed",
        count:312,
    },
    {
        name:"Delivered",
        count:89,

    },
    {
        name:"Processing",
        count:201,

    },
    {
        name:"Total Revenue",
        count:413,

    }
    ]
    const [states,setstates]=useState({
        Username:"",
        Password:""
    })
    const [showDailog,setShowDailog]=useState(false);
    console.log(states);
    const listThree=[
        {
            User:"User",
            Password:"Password",
            RoomId:"RoomId",
            NoOfOrderPerDay:'NoOfOrderPerDay',
            Action: "Action"
        },
        {
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },
    {
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },{
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },{
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },{
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },{
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },{
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    },{
        User:"Ashad123",
        Password:"......",
        RoomId:"1xyz23@",
        NoOfOrderPerDay:'312',
        Action: "Delete"
    }

    ]
    return <div className=" w-[95%] h-[90%] flex gap-[30px] items-center justify-center">
       <div  className={` spec cursor-pointer flex overflow-hidden flex-col   bg-[rgba(0,0,0,.4)] transition-all  h-[100%] backdrop-blur-2xl rounded-[20px] `}>
           {
            list_.map((e,i)=>{
                const {Icons,name}=e;
                if(i==0)
                return <div onClick={()=>setTab(i)}  key={i} className={`flex ${i==tab?"text-white relative bg-[rgba(0,0,0,.3)]":""} p-4 w-[auto] gap-[8px] items-center `}> 
                   < Icons color={"blue"} />
                  <h4 className="whitespace-nowrap">{name}</h4>
                
                  </div>
                if(!selector?.usersess?.type?.includes("Admin")){
                return <div  key={i} onClick={()=>setTab(i)}  className={`flex ${i==tab?"text-white bg-[rgba(0,0,0,.3)]":""} w-[auto] p-4 gap-[5px] items-center`}> 
                    <img src={Icons} className={`w-[35px] h-[35px]  `} alt=""/>
                    <h4 className={`whitespace-nowrap`}>{name}</h4>
               </div>
               }
            })
           }
        <div></div>
       </div>
       <div className="w-[100%] h-[100%] backdrop-blur-lg flex flex-col items-center pt-4 ">
       { selector?.usersess?.type?.includes("Admin")? <div className="flex flex-col w-[100%] h-[100%] p-3 items-center">
         <div className="min-w-[100%] backdrop-blur-lg font-normal mono text-[18px] tracking-wide flex items-center justify-between px-4">
         <div> User count : 201</div>
           <div onClick={()=>setShowDailog(!showDailog)} className="border-[1px] border-black rounded-[50%] p-1 cursor-pointer active:skew-y-3 active:skew-x-3 transition-all flexJCenter"><AddIcon/></div>
         </div>
         <div className="w-[100%] min-h-[auto] overflow-hidden border-[1px] border-white mt-[40px] bg-[rgba(0,0,0,.05)] flex flex-col  rounded-[20px]">
            {
                listThree.map((e,i)=>{
                    if(i==0){
                        return <div className=" bg-black w-[100%] flex min-h-[60px]">
                            {
                                Object.values(e).map((element,ind)=>{
                                    return <div className="w-[20%] border-[1px] border-r-white flexJCenter text-white tracking-wide font-bold serial">{element}</div>
                                })
                            }
                        </div>
                    }
                    else
                    return <div className=" bg-[rgba(0,0,0,.3)] w-[100%] flex min-h-[60px] ">
                    {
                        Object.values(e).map((element,ind)=>{
                            if(ind<4)
                            return <div className="w-[20%] hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white flexJCenter">{element}</div>
                            else
                            return <div className="w-[20%] border-[1px] border-r-white flexJCenter">
                               <button className=" border-[1px] border-[rgba(0,0,0,.2)] px-3 py-2 rounded-[4px] bg-[rgba(255,255,255,.2)] transition-all hover:bg-[black] hover:text-white active:skew-y-3">Delete</button>
                            </div>
                        })
                    }
                </div>
                })
            }
            
         </div>

        {!showDailog?null: <div className=" flexJCenter absolute rounded-[20px] w-[100%] h-[100%] backdrop-blur-lg bg-[rgba(255,255,255,.4)] shadow-lg -top-[2px]">
            <div className="w-[auto] h-[auto] py-[50px] px-[50px] flexJCenter flex-col gap-[20px]  bg-[rgba(0,0,0,.8)]">
               {
                Object.keys(states).map((el,i)=>{
                    return <div key={i} className="text-[20px] flex gap-[20px] text-white ">
                        {el}
                        <div> : </div>
                         <input onChange={(e)=>{
                            setstates({
                                ...states,[el]:e.target.value
                            })
                         }} className="text-black px-2" type={el?.includes("Username")?"text":"password"} />
                        </div>
                })
               }
               <button onClick={()=>{
                console.log(states);
               }} className=" bg-[skyblue] transition-all  text-black px-3 py-2 mt-[20px]">Submit</button>
            </div>

            <div onClick={()=>setShowDailog(!showDailog)} className="border-[1px] backdrop-blur-3xl top-[30px] !rotate-45 right-[29px] absolute border-black rounded-[50%] p-1 cursor-pointer active:skew-y-3 active:skew-x-3 transition-all flexJCenter"><AddIcon/></div>
         </div>}
       </div> :
         <>
          <div className="w-[95%] h-[15%] flex justify-between items-center" >
            {
                listTwo.map((e,i)=>{
                    return <div className="w-[23%] h-[90%] flex flex-col items-center justify-center bg-[rgba(0,0,0,.8)] text-white rounded-[20px]" key={i}>
                        <p className="mono">{e?.name}</p>
                        <h1 className="text-[32px] ">+ {e?.count}</h1>
                    </div>
                })
            }
        </div>
        <div>  </div>
         
         </>

       }
       </div>
         
    </div>
}
export default Dashboard;



