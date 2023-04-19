import React from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {AddTaskOutlined, ReplayOutlined} from '@mui/icons-material';
import {Avatar} from '@mui/material';
import Comment from './Comment.jsx'
import Curd from './Curd.jsx';

const Contenar = styled.div `
   display:flex;
   gap:20px;
   background-color:"gray";
 `;
const Content = styled.div `
   flex:4;
  
 `;
const VideoWapper = styled.div ``;

const Title = styled.h1 `
 font-size:18px;
 font-weight:400;
 margin-bottom:10px;
 padding:5px 10px;
 '`;
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

const Recommendetion = styled.div `
    

    ;`

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
   color:black;
 
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
//  recommendetion 
const Container = styled.div `
   width:420px;
   margin-bottom:45px;
   cursor:pointer;
   border-radius:3px;
    display:flex;
    /* background-color:green; */
    gap:10px;
    
   `
const Image = styled.img `
      height:150px;
      width:65%;
      background-color:#999;
      border-radius:3px;
`;

const Deteil = styled.div `
        display:flex;
       margin-top:16px;
    
       gap:0px;
`;

 
const Text = styled.div`
 
`
const Titles = styled.span`
  font-size:12px;
  font-weight:500px;
`;
const ChannelUser = styled.h2`
  font-size:14px;
  margin:8px 0px;
`;
const Infos = styled.span`
 
font-size:12px;

`;

const Video = () => {
    return (
        <Contenar>
            <Content>
                <VideoWapper>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/uHyODTc1WfE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </VideoWapper>
                <Title>test Video</Title>
                <Deteils>
                    <Info>7,948,157 views. jun 22,2021</Info>
                    <Buttons>
                        <Button><ThumbUpOffAltIcon/>
                            123</Button>

                        <Button><ThumbDownOffAltIcon/>
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
                        <Avatar src='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg'/>
                        <ChannelDeteils>
                            <ChannelName>Channel name</ChannelName>
                            <ChannelCounter>200k subscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor , tempora blanditiis nihil a sunt aliquid sint cupiditate, ipsa provident id ratione amet accusamus voluptatibus doloribus aspernatur? Delectus, similique aliquam? Dolores impedit assumenda ea sapiente sit !</Description>
                        </ChannelDeteils>
                    </ChannelInfo>
                    <SubscribeBtn>Subscribe</SubscribeBtn>
                </Channel>
                <hr/>
                <Comment/>
            </Content>

            <Recommendetion>
            <Container>
                <Image src='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg'></Image>
                <Deteil>
                   
                    <Text>
                        <Titles>Test vedio</Titles>
                        <ChannelUser>Arvind</ChannelUser>
                        <Infos>9900k views 1 day ago</Infos>
                    </Text>
                </Deteil>
            </Container>

            </Recommendetion>
        </Contenar>
    )
}

export default Video
