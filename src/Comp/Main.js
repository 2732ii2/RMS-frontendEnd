import { Routes,Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Dashboard from "./Dashboard";

const Main=()=>{
    const selector=useSelector(state=>state);
    console.log(selector?.usersess?.type);
    const navi=useNavigate();
    useEffect(()=>{
     console.log(selector);
     if(selector.usersess?.type?.includes("Admin")){
        navi("/dashboard");
     }
    },[selector])
    return <div>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
}
export default Main;