import axios from 'axios';
import { Alert, Space, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Curd from './Curd';

const CategorySearch = () => {
    const [vedio,setVedio] =useState([])
    const [loading,setLoading]=useState(true)
    const path=useLocation().pathname.split("/")[2];
     const pat = window.location.pathname
 
    useEffect(()=>{
        const getData=async()=>{
          let res = await axios.get(`https://youtube-ni30.onrender.com/youtube/searchcategory${pat}`)
         setVedio(res.data)
         setLoading(false)
   
        }
        getData()
    },[pat])
  return (
    <div>
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
    </div>
  )
}

export default CategorySearch