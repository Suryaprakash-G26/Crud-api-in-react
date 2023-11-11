/* eslint-disable react/prop-types */
import AddNewUser from "../component/adduser";
import Topbar from "../component/topbar";
// import Workspace from "../component/workpace";

const Addpage=({info, setinfo})=>{

    return(
       <>
        <Topbar/>
        <AddNewUser info={info} setinfo={setinfo}/>
       </>
    )
}

export default Addpage;