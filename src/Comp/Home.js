import {useSelector} from "react-redux";
import BaseComp from "./BaseComp";
const Home=()=>{
    const sel=useSelector(state=>(state));
    console.log(sel);

    return <BaseComp name="home" InnerComp={()=><MainComp/>}/>
}
const MainComp=()=>{
    return <></>;
}

export default Home;