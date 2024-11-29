import { useState } from "react";
import BaseComp from "./BaseComp"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import orderlist from "../Images/clipboard.svg";
import availableItems from "../Images/box.svg";
const Dashboard=()=>{
    return <BaseComp name="dashboard" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    const [tab,setTab]=useState(0);
    const [show,setshow]=useState(false);
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
    return <div className=" w-[95%] h-[90%] flex gap-[30px] items-center justify-center">
       <div  className={` spec cursor-pointer flex overflow-hidden flex-col   bg-[rgba(0,0,0,.4)] transition-all  h-[100%] backdrop-blur-2xl rounded-[20px] `}>
           {
            list_.map((e,i)=>{
                const {Icons,name}=e;
                if(i==0)
                return <div onClick={()=>setTab(i)}  key={i} className={`flex ${i==tab?"text-white bg-[rgba(0,0,0,.3)]":""} p-3 w-[auto] gap-[5px] items-center `}> 
                   < Icons color={"blue"} />
                  <h4 className="whitespace-nowrap">{name}</h4>
                
                  </div>
                else
                return <div  key={i} onClick={()=>setTab(i)}  className={`flex ${i==tab?"text-white bg-[rgba(0,0,0,.3)]":""} w-[auto] p-3 gap-[5px] items-center`}> 
                    <img src={Icons} className={`w-[35px] h-[35px]  `} alt=""/>
                    <h4 className={`whitespace-nowrap`}>{name}</h4>
               </div>
            })
           }
        <div></div>
       </div>
       <div className="w-[100%] h-[100%] backdrop-blur-lg flex flex-col items-center pt-4 ">
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
       </div>

    </div>
}
export default Dashboard;



