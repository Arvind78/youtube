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
const Home = ({type}) => {
  const [vedio,setVedio]=useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
 
   axios.get(`http://localhost:8080/youtube/video/${type}`)
   .then((res)=>setVedio(res.data)).catch((err)=>console.log(err));

    setTimeout(()=>{
      setLoading(false)
    },8000)
 
  },[type])
  return (
    <Contenrs>
      {   (!loading)?
      vedio.map((vedio)=>(
        <>
        
        <Curd key={vedio._id}  vedio={vedio}/>
      {console.log(vedio)
      }
    
        </>
      ))
      : <Spin className='loading'  size="large"></Spin>

      }
      
   </Contenrs>
  )
}

export default Home