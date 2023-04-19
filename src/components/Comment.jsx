import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@mui/material';
import Commnents from './Commnents';

const Contenars = styled.div``
const NewComment = styled.div`
 display:flex;
 align-items:center;
 gap:5px;
 border:1px solid gray;
 padding:5px ;
 border-radius:4px;
`;
 const Input = styled.input`
border:none;
 
background-color:transparent;
width:100%;
outline:none;
padding:10px;

`;


const Comment = () => {
  return (
    <Contenars>
        <NewComment>
        <Avatar src='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg'/>
        <Input placeholder='Add a comment...'/> 
        </NewComment>
        <Commnents/>
    </Contenars>
  )
}

export default Comment