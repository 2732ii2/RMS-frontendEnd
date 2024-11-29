import {useSelector} from "react-redux";
import BaseComp from "./BaseComp";
import { useEffect } from "react";
const Home=()=>{
    return <BaseComp name="home" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    
    return <></>;
}

export default Home;