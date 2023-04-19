import React, { useState } from 'react'
import './css/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
 import VideoCallIcon from '@mui/icons-material/VideoCall';
 import {Link} from "react-router-dom"
import { IconButton } from '@mui/material';

 const Image = styled.img`
 width:40px;
 height:40px;
 border-radius:90px;
 `;
const Navbar = () => {
const [search, setSearch] =useState("")
 const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='navContenars'>
      <div className="seachbarContenars">
        <input type="text" onChange={(e) => setSearch(e.target.value)}
          value={search} placeholder="Search..." />
        <button><SearchIcon /></button>
      </div>
      {(!currentUser) ?
       <Link to="/login"> <div className="signcontenars">
          <AccountCircleIcon sx={{ fontSize: 25}} />
          <span>Sign In</span>
        </div> </Link>:
        <div className="signcontenarsaf">
        <IconButton> <VideoCallIcon sx={{ fontSize: 30,color: "white" }}/></IconButton> 
        <div>
        <IconButton> <Image src={currentUser.img} /></IconButton>
             {currentUser.name} 
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar