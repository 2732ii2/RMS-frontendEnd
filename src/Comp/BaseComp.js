import logo from "../Images/logo.jpg";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userSess} from "../Redux/action";
const BaseComp=({name,InnerComp})=>{
 const navi=useNavigate();
 const dispatch=useDispatch();
return <div className="w-[100%] h-[100vh]   z-[20] relative   flex flex-col items-center ">
    <h1 style={{width: name.includes("dashboard")?"100%":""}} className={` ${name?.includes("dashboard")?"text-start pl-5 pt-2":"mt-[100px] bg-[rgba(255,255,255,.3)]"} mono text-[42px] font-bold  tracking-wider underline   px-3   greatvibes `}> {"->  "} SAIDA Solutions</h1>
    { name.includes("dashboard")?<div className="  absolute   w-[auto] h-[auto] top-[10px] right-[30px] ">
        <button onClick={()=>{
            localStorage.removeItem("usersess");
            // setTimeout(()=>{
                navi("/");
            // },500)
            dispatch(userSess({}));
        }} className="  font-semibold   px-3 py-2 rounded-[4px] bg-[rgba(0,0,0,.9)] transition-all text-white active:skew-y-3">Log OUT</button>
    </div>:null }
    {/* <img src={logo} className="w-[100%] h-[100%] absolute z-[-1] opacity-[.4]  box-shadow-lg rounded-[4px] object-fit "/> */}
    <div className=" w-[100%] h-[100%] absolute z-[-1] opacity-[.4]  box-shadow-lg rounded-[4px]  object-fit  bg-gradient-radial from-purple-500 via-purple-300 to-white blur-lg rounded-lg "></div>
    {
        name.includes("home")?
        <>
        <h3 className="text-[28px] mt-[15%] bg-[rgba(200,0,0,.5)] px-2 text-white">Smart Solutions for Modern Restaurants!</h3>
    <p className="text-[20px] bg-[rgba(100,0,100,.5)] px-2 text-white mt-2">Our Real-Time Management System Helps You Focus on What Matters Most—Your Customers.</p>
    <div className="w-[5px] h-[100px] bg-[black] flex flex-col mt-[5%] justify-evenly ">
        {[1,2,3,4,5].map((e,i)=>{
            return <div key={i} className="w-[100%] h-[10%] bg-white"></div>
        })}
    </div>
    <div className=" rotate-180  text-[40px] text-black ml-[1px] -mt-7">{"^"}</div>
    <button className="bg-[black] transition text-white px-3 py-2 mt-6 hover:bg-white hover:text-black rounded-[5px] active:skew-y-3 active:skew-x-3" onClick={()=>{
        navi("/login");
    }}>Click me to begin</button>
        </>:<InnerComp/>
    }
</div>
}
export default BaseComp;