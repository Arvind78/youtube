import React, { useEffect, useState } from 'react'
import Curd from './Curd'
import axios from "axios"
import { Alert, Space, Spin } from 'antd';

import styled from 'styled-components'

const Contenrs =styled.div`
  display:flex;
 
  justify-content:space-between;
  flex-wrap:wrap;

`
const Home = ({type,search,setSearch}) => {
  const [vedio,setVedio]=useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    
   axios.get(`https://youtube-ni30.onrender.com/youtube/video/${type}`)
   .then((res)=>setVedio(res.data)).catch((err)=>console.log(err));

    setTimeout(()=>{
      setLoading(false)
    },3000)
    setSearch("")
  },[type,setSearch])
  return (
    <Contenrs>
      {  (!loading)?
      vedio.filter((item)=>{
        if(search===null || search===""){
          return item;
        }
        else if (search) {
          return ((item.title?.toString().toLowerCase()
          .includes(search.toLowerCase().charAt(search.length-1))));

        }
        }).map((vedio)=>(
        
        <>
        
        <Curd key={vedio._id}  vedio={vedio}/>
    
        </>
      ))
      : <Spin className='loading'  size="large"></Spin>
   
      }
      
   </Contenrs>
  )
}

export default Home