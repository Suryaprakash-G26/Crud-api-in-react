
import { useEffect, useState } from 'react';
import './App.css'
import { GetallUsers } from './api call/api';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/mainpage';
import Addpage from './pages/Addpage';
import Editpage from './pages/Editpage';

function App() {
  const [info, setinfo] = useState();
  useEffect(()=>{
    GetallUsers().then((data)=>{setinfo(data);} );
   },[])
  return (
   <div className="App">
    <Routes>
      <Route exact path='/' element={<Mainpage/>}/>
      <Route path='/adduser' element={<Addpage info={info} setinfo={setinfo}/>}/>
      <Route path='/edituser/:id' element={<Editpage info={info} setinfo={setinfo}/>}/>


    </Routes>
   </div>
  )
}

export default App
