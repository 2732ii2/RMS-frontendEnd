import {useSelector} from "react-redux";
import logo from "../Images/logo.jpg";
const Home=()=>{
    const sel=useSelector(state=>(state));
    console.log(sel);

    return <div className="w-[100%] h-[100vh] bg-[rgba(200,0,0,.2)] py-[50px] flex flex-col items-center ">
        <h1 className="  mono text-[42px] font-bold tracking-wider  ">SA Solutions</h1>
        <img src={logo} className="w-[250px] mt-4 h-[250px] rotatearound rounded-[50%] object-fit "/>
        <h3 className="text-[28px] mt-[100px]">Smart Solutions for Modern Restaurants!</h3>
        <p className="text-[20px] mt-2">Our Real-Time Management System Helps You Focus on What Matters Most—Your Customers.</p>
        <div className="w-[5px] h-[100px] bg-[black] flex flex-col mt-5 justify-evenly ">
            {[1,2,3,4,5].map((e,i)=>{
                return <div className="w-[100%] h-[10%] bg-white"></div>
            })}
        </div>
        <div className=" rotate-180  text-[40px] text-black ml-[1px] -mt-7">{"^"}</div>
        <button className="bg-[black] transition text-white px-3 py-2 mt-6 rounded-[5px] active:skew-y-3 active:skew-x-3">Click me to begin</button>
    </div>
}

export default Home;