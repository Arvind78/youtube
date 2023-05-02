import React, { useEffect,useState } from 'react'
import {Avatar, Card} from 'antd'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import  {format} from "timeago.js"
import axios from 'axios';
const Container = styled.div`
   width:360px;
   margin-bottom:45px;
   cursor:pointer;
   color:white;
   border-radius:3px;

    
   `
const Image = styled.img `
      height:202px;
      width:100%;
      background-color:#999;
      border-radius:3px;
`;

const Deteils = styled.div `
       display:flex;
       margin-top:16px;
       gap:12px;
`;

const ChanelImage = styled.img `
      height:36px;
      width:36px;
      border-radius:50px;
      background-color:#999;
`;

const Text = styled.div `

`;
const Title = styled.h1 `
  font-size:16px;
  font-weight:500px;
`;
const ChannelUser = styled.h2 `
  font-size:14px;
  margin:8px 0px;
`;
const Info = styled.div `
  font-size:14px;
`;

const Curd = ({vedio}) => {
    console.log("category",vedio)
    const [channel,setChannel]=useState({})
useEffect(()=>{
const fetchChannel = async()=>{
    let res = await axios.get(`https://youtube-ni30.onrender.com/youtube/find/${vedio.userId}`)
    setChannel(res.data)
    
 }
 fetchChannel()
 
},[vedio.userId])
    return (

        <Link to={`/video/${vedio._id}`}
            style={
                {color: "#313131"}
        }>
            <Container>
               
                <Image src={vedio.imgUrl}></Image>
                <Deteils>
                    <ChanelImage src={channel.img}/>
                    <Text>
                        <Title>{vedio.title}</Title>
                        <ChannelUser>{channel.name}</ChannelUser>
                        <Info>{vedio.view}views -{format(vedio.createdAt)}</Info>
                    </Text>
                </Deteils>
            </Container>

        </Link>
    )
}

export default Curd
