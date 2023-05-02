import React, { useState } from 'react'
import './css/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
 import VideoCallIcon from '@mui/icons-material/VideoCall';
 import {Link, useNavigate} from "react-router-dom"
import { IconButton } from '@mui/material';
import AddVedio from './AddVedio';
import { logout } from '../redux/userSlice';
import { Button, Dropdown, Popconfirm, message } from 'antd';
import confirm from 'antd/es/modal/confirm';

 const Image = styled.img`
 width:40px;
 height:40px;
 border-radius:90px;
 
 `;
const Navbar = ({setSearch}) => {
const [search, setSerch] =useState("")
 const {currentUser} = useSelector((state)=>state.user)
  const  dispatch = useDispatch();
  const nav = useNavigate();
 const inputValueSet = ()=>{
     setSearch(search)
     setSerch("")

 }

 const confirmHandler = () => {
  dispatch(logout())
 message.success('logout sucessfully');
 nav("/")
};


 const items = [
  {
    key: '1',
    label: (
      <Button onClick={confirmHandler}> Logout</Button>
    ),
  }]


  return (
    <div className='navContenars'>
      <div className="seachbarContenars">
        <input type="text" onChange={(e) => setSerch(e.target.value)}
          value={search} placeholder="Search..." />
        <button onClick={inputValueSet}><SearchIcon /></button>
      </div>
      {(!currentUser) ?
       <Link to="/login"> <div className="signcontenars">
          <AccountCircleIcon sx={{ fontSize: 25}} />
          <span>Sign In</span>
        </div> </Link>:
        <div className="signcontenarsaf">
          <AddVedio/>
        
     
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
    >
     <IconButton onClick={confirmHandler}>

       <Image src={currentUser.img} /></IconButton>
  
    </Dropdown>
      <span> {currentUser.name} </span> 
  
      
        
        </div>
      }
     
    </div>
  )
}

export default Navbar