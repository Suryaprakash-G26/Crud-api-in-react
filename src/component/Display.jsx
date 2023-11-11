/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { DeleteUsers, GetallUsers } from "../api call/api";
import { useNavigate } from "react-router-dom";

export default function Display(){
    const [info,setinfo]=useState();
    const navigate=useNavigate()

   useEffect(()=>{
    GetallUsers().then((data)=>{setinfo(data)});
   },[setinfo])
 

  const deletebtn = (id) => {
    
    DeleteUsers(id)
      .then((data) => {
        const rest = info.filter((item) => item.id !== id);
        setinfo(rest);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };
  
    return(
       <div>
        <div className="navbar bg-base-100">
       <div className="flex-1">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WwaP-RX56Uj_ftxyeEvGuuDWkiiTCYEIuw&usqp=CAU" />
                    </div></label>
                
                <a className="btn btn-ghost normal-case text-xl p-0 m-0">Dashboard</a>
            </div>
        <div className="flex-none gap-2">
            <div className="form-control">
            <button className="btn btn-warning" onClick={()=>navigate('/adduser')}>AddUser</button>

            </div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://avatars.githubusercontent.com/u/141228691?v=4" />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  m-5 font-sans ">
            {info&&
                info.map((data,id)=>(
                    <div className="card w-96 bg-neutral shadow-xl  image-full" key={id}>
                    <figure><img src="data:image/jpeg;base64,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" alt="Person" /></figure>
                    <div className="card-body ">
                      <h2 className="card-title">Name: {data.name}</h2>
                      <h3 className="text-xl">Username: {data.username}</h3>
                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Click to contact Info</label>
                        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                          <div className="card-body">
                            <h3>Email:{data.email}</h3>
                            <p>Address:
                            {data.street},
                            {data.city},
                            {data.zipcode}.</p>
                           <div>
                              <div>Phone No: {data.phone}</div>
                              <div>Website: {data.website}</div>
                            </div>

                          </div>
                        </div>
                      </div>
                      
                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Click to Company Info</label>
                        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-secondary text-primary-content">
                          <div className="card-body">
                            <h3>Name:{data.companyname}</h3>
                            <div>
                              <div>Tag:{data.catchphrase}</div>
                              <div>Type:{data.bs}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    
                     <div className="card-actions justify-end place-self-end gap-2 mt-auto">
                        <button className="btn btn-info" onClick={()=>navigate(`/edituser/${data.id}`)}> edit User</button>
                        <button className="btn btn-warning" onClick={()=>deletebtn(data.id)}>Delete</button>
                      </div>
                    </div>
                   
                  </div>
                ))
            }

        </div>
       </div>
    )
}