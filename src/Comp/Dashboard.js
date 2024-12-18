import { useEffect, useRef, useState } from "react";
import BaseComp from "./BaseComp"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import orderlist from "../Images/clipboard.svg";
import availableItems from "../Images/box.svg";
import {useSelector} from "react-redux";
import axios from "axios";
import img3 from "../Images/MalaiKoft.jpg";
const Dashboard=()=>{
    return <BaseComp name="dashboard" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    const [tab,setTab]=useState(3);
    console.log("tab => ",tab);
    const [show,setshow]=useState(false);
    const selector=useSelector(state=>state);
    console.log(selector?.usersess);
    const [userList,setuserList]=useState([]);
    const list_=[{
        name:"Dashboard",
        Icons:({color})=><DashboardIcon className={` ${color==="blue"?"!text-[#1c284d]":""} !text-[30px]`}/>,
    },
    {
        name:"Order summary",
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
    const [showAddDish,setShowAddDish]=useState(false);
    console.log(states);
    const listThree=userList ?.length?userList:  [
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
    const SubmitHandler=async()=>{
        try{
            console.log(states);
            if(Object.values(states).filter((e)=>{if(e)return e;}).length !=2   ){
                alert("fill the credentials");
            }
            else{
               const resp=await axios.post(`http://localhost:4100/userCreation`,states);
               console.log(resp);
               setstates({
                Username:"",
                Password:""
               })
               
            }
        }
        catch(e){
            console.log(e);
        }
        setShowDailog(!showDailog);
    }

    async function getUserList(){
        try{
            const resp =  await axios.get("http://localhost:4100/userList",{
                headers:{
                    token:selector?.usersess?.token
                }
            });
            console.log(resp?.data?.data);
            // if(!userList.length)
        var list=resp?.data?.data.reverse();
        list.unshift({
            SerialNo:"Serial No",
            User:"User",
            Password:"Password",
            RoomId:"RoomId",
            NoOfOrderPerDay:'NoOfOrderPerDay',
            Action: "Action"
        })
        // console.log(list);
        setuserList(list);
    }
        
        catch(e){
            console.log(e?.message);
        }
    }
    const [dishes,setdishes]=useState([]);
    async function getAllDishes(){
        try{
            const resp=await axios.get("http://localhost:4100/available_dishes",{
                headers:{
                    usersess:JSON.stringify(selector?.usersess)
                }
            })
            console.log(" dished",resp?.data?.data1);
            setdishes(resp?.data?.data1);
        }
        catch(e){
            console.log(e?.message);
        }
    }
    useEffect(()=>{
        // available_dishes
        getAllDishes();
    },[selector])

    useEffect(()=>{
        console.log("udpating list")
        if(selector?.usersess?.type)
        getUserList();
    },[showDailog])
    return <div className=" w-[95%] h-[90%] flex gap-[30px] items-center justify-center">
       <div  className={` spec cursor-pointer flex overflow-hidden flex-col   bg-[rgba(0,0,0,.4)] transition-all  h-[100%] backdrop-blur-2xl rounded-[20px] `}>
           {
            list_.map((e,i)=>{
                const {Icons,name}=e;
                if(i==0)
                return <div onClick={()=>setTab(i+1)}  key={i} className={`flex ${i+1==tab?"text-white relative bg-[rgba(0,0,0,.3)]":""} p-4 w-[auto] gap-[8px] items-center `}> 
                   < Icons color={"blue"} />
                  <h4 className="whitespace-nowrap">{name}</h4>
                
                  </div>
                if(selector?.usersess?.type!==("Admin")){
                return <div  key={i} onClick={()=>setTab(i+1)}  className={`flex ${i+1==tab?"text-white bg-[rgba(0,0,0,.3)]":""} w-[auto] p-4 gap-[5px] items-center`}> 
                    <img src={Icons} className={`w-[35px] h-[35px]  `} alt=""/>
                    <h4 className={`whitespace-nowrap`}>{name}</h4>
               </div>
               }
            })
           }
        <div></div>
       </div>
       <div className="w-[100%] h-[100%] backdrop-blur-lg flex flex-col items-center pt-4 ">
       { selector?.usersess?.type==("Admin")? <div className="flex flex-col w-[100%]  h-[100%] p-3 items-center">
         <div className="min-w-[100%] backdrop-blur-lg font-normal mono text-[18px] tracking-wide flex items-center justify-between px-4">
         <div className="font-semibold mono"> User count : {userList?.length?userList.length-1: "-"}</div>
           <div onClick={()=>setShowDailog(!showDailog)} className="border-[1px] border-black rounded-[50%] p-1 cursor-pointer active:skew-y-3 active:skew-x-3 transition-all flexJCenter"><AddIcon/></div>
         </div>
         <div className="w-[100%] min-h-[auto] overflow-y-scroll border-[1px] border-white mt-[40px] bg-[rgba(0,0,0,.05)] flex flex-col  rounded-[20px]">
            {
            !userList?.length? <div>loading ...</div>:   userList.map((e,i)=>{
                    if(i==0){
                        return <div key={i} className=" bg-black w-[100%] flex min-h-[60px]">
                            {
                                Object.values(e).map((element,ind)=>{
                                    if(ind==0)
                                        return  <div key={ind} className="w-[120px] whitespace-nowrap  border-[1px] border-r-white flexJCenter text-white tracking-wide font-bold serial">{element}</div>
                                    else
                                    return <div key={ind} className="w-[20%] border-[1px] border-r-white flexJCenter text-white tracking-wide font-bold serial">{element}</div>
                                })
                            }
                        </div>
                    }
                    else
                    return <div key={i} className="  bg-[rgba(0,0,0,.3)] w-[100%] flex min-h-[60px] ">
                    {
                        // Object.values(e).map((element,ind)=>{
                        //     console.log(e);
                        //     // if(ind<4)
                        //     // return <div key={ind} className="w-[20%] hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white flexJCenter">{element}</div>
                        //     // else
                        //     // return <div key={ind} className="w-[20%] border-[1px] border-r-white flexJCenter">
                        //     //    <button className=" border-[1px] border-[rgba(0,0,0,.2)] px-3 py-2 rounded-[4px] bg-[rgba(255,255,255,.2)] transition-all hover:bg-[black] hover:text-white active:skew-y-3">Delete</button>
                        //     // </div>
                        // })
                    }
                    <div className="w-[120px] font-semibold hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white  capitalize flexJCenter">{i}</div>

                    <div className="w-[20%] font-semibold hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white  capitalize flexJCenter">{e?.Username}</div>
                    <div className="w-[20%] font-semibold hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white flexJCenter text-clip overflow-hidden   ">{e?.Password?.slice(0,10)+"..."}</div>
                    <div className="w-[20%] font-semibold hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white flexJCenter">{e?.roomId}</div>
                    <div className="w-[20%] font-semibold hover:bg-[rgba(255,255,255,.3)] cursor-pointer border-[1px] border-r-white flexJCenter">{e?.noOfOrder?e?.noOfOrder:"-"}</div>

                    <div  className="w-[20%] border-[1px]  border-r-white flexJCenter">
                         <button className=" border-[1px] font-semibold border-[rgba(0,0,0,.2)] px-3 py-2 rounded-[4px] bg-[rgba(255,255,255,.2)] transition-all hover:bg-[black] hover:text-white active:skew-y-3">Delete</button>
                     </div>
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
               <button onClick={SubmitHandler} className=" bg-[skyblue] transition-all  text-black px-3 py-2 mt-[20px]">Submit</button>
            </div>

            <div onClick={()=>setShowDailog(!showDailog)} className="border-[1px] backdrop-blur-3xl top-[30px] !rotate-45 right-[29px] absolute border-black rounded-[50%] p-1 cursor-pointer active:skew-y-3 active:skew-x-3 transition-all flexJCenter"><AddIcon/></div>
         </div>}
       </div> :
         <>
        {
            tab==1? <>
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
            :tab==2? <div> order summary </div>:
            <div className="gap-[20px] relative min-w-[100%]  h-[100%] flex flex-col  items-center">

                <div className=" w-[95%] items-center  h-[50px]  flex justify-between ">
                    <div className=" serial  font-medium  text-[22px] " >Available Items </div>
                    <div onClick={()=>{setShowAddDish(true)}} className=" hover:bg-[rgba(0,0,0,.3)]  p-[1px] w-[30px] h-[30px] cursor-pointer rounded-[50%] hover:text-black" ><AddIcon/> </div>

                      </div>
                <div className="w-[95%] px-[40px] max-h-[90%] py-[40px] flex items-center justify-start flex-wrap scroller overflow-y-scroll gap-[20px]  bg-[rgba(0,0,0,.1)] rounded-[20px]">
        {
           dishes?.length? dishes.map((e,i)=>{
                return <Card key={i} data={e}/>
            }):null
        }
                </div>


               {/* Here Dailog box start */}
                 
            {showAddDish ?   <DailogBox onClick={()=>{setShowAddDish(false)}} usersess={selector?.usersess} /> : null}

            </div>
        }
         </>

       }
       </div>
         
    </div>
}
export default Dashboard;


const Card=({data})=>{
    console.log("carddata",(data));
    const [index,setindex]=useState(0);
    return <div className="w-[44%] flex items-center justify-between rounded-[20px] bg-[white] px-[20px] py-[20px] min-h-[200px]">

     <div  className="w-[45%] h-[auto] flex flex-col items-start pl-1" >
       <h1 className="font-semibold text-black text-[20px]">{data?.name}</h1>
       <p className="text-start mt-[2px] line-clamp-5">{data?.des}</p>
       <div className=" mt-4 flex gap-[20px] ">{
                        Object.keys(data?.Sizes).map((element,ind)=>{
                            if(data.Sizes[element])
                            return <div onClick={()=>setindex(ind)} key={ind} className={` cursor-pointer hover:shadow-lg  rounded-[5px] p-2 px-4 text-white bg-[rgba(0,0,0)] `}>
                               {element}
                              </div>
                            else
                            if(!data.Sizes[element])
                                return <div key={ind} onClick={()=>setindex(ind)} className={` cursor-pointer hover:shadow-lg  rounded-[5px] p-2 px-4 text-black bg-[rgba(0,0,0,.1)] `}>
                               {element}
                             </div> 
                        })
                            }  </div>
     </div>
     <div className="w-[40%] h-[95%] max-h-[95%]  border-[1px] border-black relative rounded-[20px]">
      <img src={`${data?.imgurl}`} className="w-[100%] h-[180px] rounded-[10px] object-fit"/>
      <p className="bg-white px-4  font-semibold py-1 text-black top-[10px] right-[10px] rounded-[20px] absolute z-1 "> ₹ { index==0 ? ( data?.Prices?.first?data?.Prices?.first:"-" ) :index ==1?(data?.Prices?.second?data?.Prices?.second:"-"):(data?.Prices?.third?data?.Prices?.third:"-") }</p>
     </div>
          
    </div>
}



const DailogBox=({onClick,usersess})=>{
    const [list,setlist]=useState({
        Q:false,
        H:false,
        L:false
    })
    console.log(list);
    const [states,setStates]=useState({
        name:"",
        des:"",
        sizes:{...list},
        prices:{first:"",second:"",third:""},
        file:{
            type:"",
            val:"",
        }
    })
    console.log("states => ",states);
    useEffect(()=>{
     setStates({
        ...states,sizes:{...list}
     })
    //  if(states?.sizes?.H){
    //     console.log("hitted");
    //     setStates(prevState => ({
    //         ...prevState, 
    //         prices: { ...prevState.prices, second: "" }
    //     }));   
    // }
    //  if(states?.sizes?.Q){
    //     console.log("hitted");
    //     setStates(prevState => ({
    //         ...prevState, 
    //         prices: { ...prevState.prices, first: "" }
    //     }));   
    // }
    //  if(states?.sizes?.F){
    //     console.log("hitted");
    //     setStates(prevState => ({
    //         ...prevState, 
    //         prices: { ...prevState.prices, third: "" }
    //     }));   
    // }
    },[list])
    return  <div className="w-[auto]  px-[25px] border-[1px] border-[rgba(0,0,0,.1)] gap-[20px] bg-white absolute h-[auto] py-[40px] top-[15%] shadow-2xl flex flex-col items-center justify-center">

    <h5 className="arial text-[22px] -ml-[15px] py-2 font-semibold arial rounded-[20px] bg-[rgba(0,0,0,.2)] text-black px-[10px] "> Add a Dish</h5> 
    <div className="flex items-center w-[100%] text-[20px] gap-[50px] !font-medium arial  "> Name  <input onChange={elm=>{
        setStates({
            ...states,name:elm.target.value
        })
    }} className="w-[90%] border-b-[1px] border-black " /> </div>   
    <div className="flex items-center w-[100%] text-[20px] gap-[50px] !font-medium arial  "> Description  <textarea onChange={elm=>{
        setStates({
            ...states,des:elm.target.value
        })
    }}  className="w-[90%] border-b-[1px] border-black " /> </div>   
    <div className="flex items-start w-[100%] gap-[50px] text-[20px] !font-medium arial mt-[20px] "> Sizes  
        <div className="flex gap-[25px] h-[30px] items-center">
          {
            Object.keys(list).map((e,i)=>{
                return <div className="flex text-[14px] flex-col-reverse">{e} <input onChange={el=>{
                    setlist({
                        ...list,[e]:!list[e]
                    })
                    
                }} type="checkbox"  className="w-[30px] pl-1 h-[20px]"/></div>
            })
          }
        </div>
    </div>   
    <div className="flex items-start w-[100%] gap-[50px] text-[20px] mt-2 !font-medium arial "> Prices  
        <div className="flex gap-[25px] h-[30px] items-center">
          {
            Object.keys(list).map((e,i)=>{
                console.log("=>",list[e]);
                return <div className="flex  flex-col-reverse"> <input value={i==0?states.prices.first:i==1?(states.sizes.H?  states.prices.second :""):states.prices.third}  onChange={elm=>{
                if(i==0)
                setStates(prevState => ({
                    ...prevState, 
                    prices: { ...prevState.prices, first: elm.target.value }
                }));
                
                else if (i==1)
                    setStates(prevState => ({
                        ...prevState, 
                        prices: { ...prevState.prices, second: elm.target.value }
                    }));   
               
                else
                setStates(prevState => ({
                    ...prevState, 
                    prices: { ...prevState.prices, third: elm.target.value }
                }));
                }} disabled={!list[e]} type="number"  className="w-[100px] border-[1px] border-black"/></div>
            })
          }
        </div>
    </div>

   <div className="flex items-start w-[100%] justify-between text-[20px] mt-2 !font-medium arial ">
     File <div className="flex w-[75%] p-4 justify-between items-center">
   <CustomFileInput onFileSelect={ (files) => {
    console.log('Selected file:', (files))
    setStates((prevstate)=>
        ({
            ...prevstate,file:{
                ...prevstate.file,type:"file",val:files
            }
        })
    )
  }} /> <div>or </div><input className="w-[40%] h-[70%] border-b-[1px] border-black"/>
   </div>
      
   </div>

    <button
      className="px-4 py-2 mt-[20px] text-sm font-medium text-white bg-blue-500 rounded-md shadow-sm
                 transition-all duration-300 ease-in-out
                 hover:bg-blue-600 hover:shadow-md
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                 active:bg-blue-700 active:shadow-inner"
      onClick={async()=>{
        // const resp =await axios.post("http://localhost:4100/add_recipe",({usersess,states}));
        // console.log(resp);
        const formData = new FormData();
        console.log("=>",usersess);
formData.append("usersess", JSON.stringify(usersess)); // Add other fields if needed
formData.append("files", states.file.val); // Attach the file
formData.append("type", states.file.type); // Attach other fields from your `states`
formData.append("Prices",JSON.stringify(states.prices));
formData.append("Sizes",JSON.stringify(states.sizes));
formData.append("name",(states.name));

formData.append("des",(states.des));

const resp = await axios.post("http://localhost:4100/add_recipe", formData, {
    headers: {
        "Content-Type": "multipart/form-data", // Ensure correct headers
    },
});
console.log(resp);
        onClick();
      }}
    >
      Submit
    </button>

    <button
      className={`
        w-8 h-8 flex items-center justify-center
        text-gray-500 bg-white rounded-full
        border border-gray-300
        transition-all duration-200 ease-in-out
        hover:bg-gray-100 hover:text-gray-700
        focus:outline-none focus:ring-2 focus:ring-gray-300
        active:bg-gray-200 active:text-gray-800
         absolute top-[10px] right-[20px]
      `}
      onClick={onClick}
      aria-label="Close"
    >
      <span className="text-lg font-medium leading-none">×</span>
    </button>
  </div> 
}





// interface CustomFileInputProps {
//   onFileSelect: (file: File) => void
// }

const CustomFileInput = ({ onFileSelect }) => {
  const fileInputRef = useRef(null)
  const [fileName, setFileName] = useState(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileSelect(file)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        aria-label="File input"
      />
      <button
        onClick={handleButtonClick}
        className="w-[40px] h-[40px] text-[20px] rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        aria-label="Add file"
      >
        +
      </button>
      {fileName && (
        <p className="mt-2 text-sm text-gray-600">Selected: {fileName}</p>
      )}
    </div>
  )
}



