/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import UpdateEdited from "../component/edituser";
import Topbar from "../component/topbar";


const Editpage=({info, setinfo})=>{
 
    const editid=useParams()
    return(
       <>
        <Topbar/>
        <UpdateEdited info={info} setinfo={setinfo} editid={editid}/>
       </>
    )
}

export default Editpage;