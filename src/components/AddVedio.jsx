import { Button, Modal } from 'antd';
import { useEffect, useState ,useRef} from 'react';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { IconButton } from '@mui/material'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./firebase"
import axios from 'axios'
import {useNavigate} from "react-router-dom" 


const Contenars = styled.div`
 height:100%;
 width:100%;
 `;
const Title = styled.h2`
 text-align:center;

`;

const UploadFrom = styled.form`
    height:100%;
 width:100%;
 display:flex;
 
 flex-direction: column;
 padding:10px;
`;
const Description = styled.textarea`
width:100%;
padding:8px;
border:1px solid gray;
outline:none;
margin-bottom:10px;
border-radius:5px;
`;
const Input = styled.input`
width:100%;
padding:8px;
border:1px solid gray;
outline:none;
margin-bottom:10px;
border-radius:5px;
`;
const VedioTitle = styled.input`
width:100%;
padding:8px;
border:1px solid gray;
outline:none;
margin-bottom:10px;
border-radius:5px;
`;
const VedioTag = styled.input`
width:100%;
padding:8px;
border:1px solid gray;
outline:none;
margin-bottom:10px;
border-radius:5px;
`;

const Leable=styled.label`
padding:3px 8px;
`


const AddVedio = () => {

  const [vedio,setVedio]=useState(undefined)
  const [image,setImage]=useState(undefined)
  const [videoPer,setVedioPer]=useState(0)
  const [imagePer,setImagePer]=useState(0)
  const [input,setInput] =useState({})
  const [tag,setTag] =useState([])
   const videoref = useRef();
   const imgref = useRef();
   const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const inputHandler=(e)=>{
      setInput((prev)=>{
        return {...prev,[e.target.name]:e.target.value} 
      })
  }

  const uploadfile =(file,urlType)=>{
  
    const storage = getStorage(app);
    const fileName = new Date().getTime()+file.name 
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log('Upload is ' + progress + '% done');
      urlType==='imgUrl' ? setImagePer(progress):setVedioPer(Math.round(progress))
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error)=>{},
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setInput((prev)=>{
          return {...prev,[urlType]:downloadURL} 
        })
      });
    }
  );
  }


  useEffect(()=>{ vedio&& uploadfile(vedio,"vedioUrl")},[vedio])
  
  useEffect(()=>{ image && uploadfile(image ,"imgUrl")},[image])

  const uploadHandler = async(e) =>{
     e.preventDefault();
     let res = await axios.post('https://youtube-ni30.onrender.com/youtube/video',{...input,tag})
     console.log(res.data)
    
   navigate("/")

  }

return (
    <>
      
      <IconButton onClick={showModal} > <VideoCallIcon sx={{ fontSize: 30, color:"#fff" }}/> </IconButton> 
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <Contenars>
        <Title>UPLOAD NEW VIDEO</Title>
        <UploadFrom>
          <Leable>Video : </Leable>
          { (videoPer>0)? (` Uploading ${videoPer} %`) :
          <Input type='file' accept='video/*' onChange={(e)=>setVedio(e.target.files[0])} ref={videoref} />
          }
          <VedioTitle type='text' placeholder="Title*" name="title" onChange={inputHandler} />
          <Description rows={8}  placeholder="Discription*" name="description" onChange={inputHandler} />
          <div style={{display:"flex",gap:"10px"}}>
          <VedioTag type='text'  placeholder="Add tag with commas spareted*" onChange={(e)=>setTag(e.target.value.split(","))} />
            <select name="category" onChange={inputHandler}>
            <option>choose category</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="gaming">Gaming</option>
            <option value="movies">Movie</option>
            <option value="news">News</option>


            </select>
           </div>
         
          <Leable>Thumbnail img : </Leable>
          {  (imagePer>0)? (` Uploading ${imagePer} %`) :
          <Input type='file' accept='image/*' onChange={(e)=>setImage(e.target.files[0])} ref={imgref}/>
          }
          <Button type='primary' size="large" style={{width:"100%"}} onClick={uploadHandler}>UPLOAD </Button>
        </UploadFrom>
        </Contenars>
      </Modal>
    </>
  );
};
export default AddVedio;