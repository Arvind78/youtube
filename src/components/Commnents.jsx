import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Contenars = styled.div`
 display:flex;
 gap:10px;
 margin:20px 0;
`;

const Deteils = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const Name = styled.span`
font-size:14px;

font-weight:500;
`;
const Date = styled.span`
color:gray;
font-size:12px;
font-weight:400;
`;
const Text = styled.p``;

const Commnents = ({comment}) => {
  const [channel,setChannel]= useState({})

  useEffect(()=>{
   const fetchComment = async()=>{
    const res = await axios.get(`youtube/find/${comment.userId}`)
    setChannel(res.data)
   };
   fetchComment();
  },[comment.userId])

  return (
    <Contenars>
        <Avatar src={channel.img}/>
    <Deteils>
        <Name>{channel.name}<Date></Date> </Name>
        <Text>
           {comment.desc}
        </Text>
    </Deteils>
    </Contenars>
  )
}

export default Commnents