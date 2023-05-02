import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Avatar} from '@mui/material';
import Commnents from './Commnents';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
const Contenars = styled.div``
const NewComment = styled.div`
 display:flex;
 align-items:center;
 gap:5px;
 border:1px solid gray;
 padding:5px 10px;
 border-radius:4px;
 cursor:pointer;
`;
 const Input = styled.input`
border:none;
 
background-color:transparent;
width:100%;
outline:none;
padding:10px;

`;


const Comment = ({vedioId}) => {
  const [desc,setDesc] = useState("")
  const {currentUser} = useSelector((state)=>state.user)
  const [comment,setComment]= useState([]);

  useEffect(()=>{
    const fetchComment = async ()=>{
      let commentRes = await axios.get(`https://youtube-ni30.onrender.com/youtube/getcomment/${vedioId}`)
      setComment(commentRes.data)
    }
    fetchComment()
  },[vedioId])

  const addCommentHandler =async()=>{
    let res = await axios.post("https://youtube-ni30.onrender.com/youtube/addcomment",{desc,vedioId})
   
  }

  return (
    <Contenars>
        <NewComment>
        <Avatar src={currentUser?.img}/>
        
        <Input placeholder='Add a comment...' onChange={(e)=>setDesc(e.target.value)} /> 
          <SendIcon  onClick={addCommentHandler} /> 
        </NewComment>
        {comment.map((comments)=>(
            <Commnents key={comments._id} comment={comments}/>
        ))
        }
    </Contenars>
  )
}

export default Comment