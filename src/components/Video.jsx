import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {AddTaskOutlined, ReplayOutlined} from '@mui/icons-material';
import {Avatar} from '@mui/material';
import Comment from './Comment.jsx'
import Curd from './Curd.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchStart, fetchSucess, like } from '../redux/vedioSlice.js';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import  {format} from "timeago.js"
import { subscription } from '../redux/userSlice.js';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Contenar = styled.div`
   display:flex;
   gap:20px;
   height:100vh;
   background-color:"gray";
 `;

const Content = styled.div`
   flex:4;
  
 `;
const VideoWapper = styled.div``;

const Title = styled.h1 `
 font-size:18px;
 font-weight:400;
 margin-bottom:10px;
 padding:5px 10px;
 `;
const Deteils = styled.div `
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0px 10px;

 `;
const Info = styled.span `
 /* color: #373737; */
 color:#f1f1f1;
 `;

const Buttons = styled.div `
 display:flex;
 gap:20px;
 `;

const Button = styled.div `
 display:flex;
 align-items:center;
 gap:3px;
 cursor:pointer;
 `;
 
const Channel = styled.div `
display:flex;
justify-content:space-between;
 `

const ChannelInfo = styled.div `
  display:flex;
  gap:10px;
 
 `


const ChannelDeteils = styled.div `
   display:flex;
   flex-direction:column;
 `

const ChannelName = styled.span`
   font-weight:500px;
   color:#fff;
 
`

const ChannelCounter = styled.span `
  margin-top:5px;
  margin-bottom:10px;
  color:gray;
  font-size:12px;
`
const Description = styled.p `
 font-size:14px;
`
const SubscribeBtn = styled.button `
 background-color:#cc1a00;
 color:white;
 font-weight:500;
 border:none;
 border-radius:4px;
 height:max-content;
 padding:8px 14px;
 margin-right:8px;
cursor:pointer;
`
 
const Container = styled.div`
   width:420px;
   margin-bottom:45px;
   cursor:pointer;
   border-radius:3px;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow-x:scroll;
   gap:10px;
   flex-direction: column;
   `
 
const VedioFreams = styled.video`
max-height:450px;
width:100%;
object-fit:cover;
`;

const Video = () => {
    const [vedio,setVedio]= useState({})
    const [channel,setChannel]= useState({})
    const [reVedio,setRevedio]= useState([])
    const  [reChannel,setRechannel]= useState([])
    const {currentUser} = useSelector((state)=>state.user)
    const {currentVedio} = useSelector((state)=>state.vedio)
    const dispatch = useDispatch()
    const path  = useLocation().pathname.split('/')[2]
  
       useEffect(()=>{
 
        const feachData = async()=>{
         
         let vedioRes = await axios.get(`https://youtube-ni30.onrender.com/youtube/video/find/${path}`)
           console.log(vedioRes.data)

         let channelRes = await axios.get(`https://youtube-ni30.onrender.com/youtube/find/${vedioRes.data.userId}` )
      
            setChannel(channelRes.data)
       dispatch(fetchSucess(vedioRes.data))
          setTimeout(()=>{
             axios.put(`https://youtube-ni30.onrender.com/youtube/video/view/${path}`).then((res)=>console.log(res.data))
        },10000)
        }

        feachData()
    },[path,dispatch])
  
    const likeHandler = async ()=>{
        await axios.put(`https://youtube-ni30.onrender.com/youtube/like/${currentVedio._id}`)
       dispatch(like(currentUser._id))
        
    } 
       
        
        const dislikeHandler =async()=>{
        console.log(channel._id)
            await axios.put(`https://youtube-ni30.onrender.com/youtube/unlike/${currentVedio._id}`)
            dispatch(dislike(currentUser._id))
        } 
       
        const subcribeHandler=async()=>{
            currentUser.subscribeuser.includes(channel._id)
         ? await axios.put(`https://youtube-ni30.onrender.com/youtube/unsub/${channel._id}`)
         : await axios.put(`https://youtube-ni30.onrender.com/youtube/sub/${channel._id}`);
               console.log(channel)
         dispatch(subscription(channel._id))
        }
        
        useEffect(()=>{
        
        axios.get("https://youtube-ni30.onrender.com/youtube/video/trands")
       .then((res)=>setRevedio(res.data))
        
        },[])
       
    return (
        <Contenar>
            <Content>
                 <VideoWapper>
                    <VedioFreams src={currentVedio.vedioUrl}  controls/> 
                </VideoWapper> 
                <Title>{currentVedio.title}</Title>
                <Deteils>
                    <Info>{currentVedio.view} views. {format(currentVedio.createdAt)}</Info>
                    <Buttons>
                        <Button onClick={likeHandler}>
                            {currentVedio.like?.includes(currentUser?._id)?
                        
                           ( <ThumbUpIcon style={{color:"white"}} />)
                          
                           :(<ThumbUpOffAltIcon/>)
                           }

                         {currentVedio.like?.length}
                           
                           
                        </Button>

                        <Button onClick={dislikeHandler}>
                        {currentVedio.like?.includes(currentUser?._id)?
                
                ( <ThumbDownOffAltIcon/>):  (<ThumbDownIcon/>)}
                           
                            dislike</Button>
                        <Button><ReplayOutlined/>
                            share</Button>
                        <Button><AddTaskOutlined/>
                            save</Button>
                    </Buttons>
                </Deteils>
                <hr/>
                <Channel>
                    <ChannelInfo>
                        <Avatar src={channel.img}/>
                        <ChannelDeteils>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter>{channel.subcribers}</ChannelCounter>
                            <Description>{currentVedio.description}</Description>
                        </ChannelDeteils>
                    </ChannelInfo>
                    <SubscribeBtn onClick={subcribeHandler}>
                        {currentUser?.subscribeuser?.includes(channel._id)? 
                        "SUBCRIBEDED":"SUBSCRIBE"
                        } 
                    </SubscribeBtn>
                </Channel>
                <hr/>
              <Comment vedioId={currentVedio._id}/>
            </Content>

       
            <Container>
            {
             reVedio.map((video)=>(
            <Curd key={video._id} vedio={video}/> 
            ))
          }
             </Container>

        </Contenar>
    )
}

export default Video;
