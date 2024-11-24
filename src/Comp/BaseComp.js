import logo from "../Images/logo.jpg";
import {useNavigate} from "react-router-dom";
const BaseComp=({name,InnerComp})=>{
 const navi=useNavigate();
return <div className="w-[100%] h-[100vh]   z-[20]   flex flex-col items-center ">
    <h1 className="  mono text-[42px] font-bold  tracking-wider underline  bg-[rgba(255,255,255,.3)] px-3  mt-[100px] greatvibes "> {"->  "} SAIDA Solutions</h1>
    <img src={logo} className="w-[100%] h-[100%] absolute z-[-1] opacity-[.4]  box-shadow-lg rounded-[4px] object-fit "/>
    {
        name.includes("home")?<>
        <h3 className="text-[28px] mt-[15%] bg-[rgba(200,0,0,.5)] px-2 text-white">Smart Solutions for Modern Restaurants!</h3>
    <p className="text-[20px] bg-[rgba(100,0,100,.5)] px-2 text-white mt-2">Our Real-Time Management System Helps You Focus on What Matters Most—Your Customers.</p>
    <div className="w-[5px] h-[100px] bg-[black] flex flex-col mt-[5%] justify-evenly ">
        {[1,2,3,4,5].map((e,i)=>{
            return <div className="w-[100%] h-[10%] bg-white"></div>
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