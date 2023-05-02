import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import "./css/login.css"
import axios from 'axios'
import { loginFailure, loginStart, loginSucess } from '../redux/userSlice'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nevigate =useNavigate();
    const dispatch = useDispatch()
// =======signinHandler=========================
const SigninHandler =async(e)=>{
    e.preventDefault()
   dispatch(loginStart())
  try {
     let res= await axios.post('https://youtube-ni30.onrender.com/youtube/signin',{email,password})
     
     dispatch(loginSucess(res.data))
     setPassword("")
   setEmail("")
   nevigate("/")
  } catch (error) {
    dispatch(loginFailure())
  }
}


// =======signupHandler=========================
const SignupHandler =async(e)=>{
    e.preventDefault()
   let res= await axios.post('https://youtube-ni30.onrender.com/youtube/signup',{name,email,password})
    alert(`${res.data} login now`)
   setName("")
   setPassword("")
   setEmail("")
}


// =============signinWithGoogle================

const signWithGoogle = ()=>{
    try {
        dispatch(loginStart())
        signInWithPopup(auth,provider).then((result)=>{
            axios.post('https://youtube-ni30.onrender.com/youtube/googleAuth',{
                name:result.user.displayName,
                email:result.user.email,
                img:result.user.photoURL
         }).then((res)=> {dispatch(loginSucess(res.data)),nevigate("/")})
        })

    } catch (error) {
         dispatch(loginFailure())
    }
  
}

    return (


        <div className='loginContenar'>
            <div className='login-sub-contenars'>

                <span className='heading'>
                    <strong>Sign in</strong>
                    <br />To Continue Youtube</span>
                <div className="login-componet">
                    <input type="text" placeholder='email*' value={email} onChange={(e)=>setEmail(e.target.value)} 
                   />
                    <input type="password" placeholder='password*' value={password}   onChange={(e)=>setPassword(e.target.value)} />
                    <button onClick={SigninHandler}>Sign in</button>
                </div>
                <h3 className='or'>or</h3>
                <div className="google-login">
                    <button onClick={signWithGoogle}>Sign in with google</button>
                </div>
                <h3 className='or'>or</h3>
                <div className="signup-componet">
                    <input type="text" placeholder='username*' value={name}   onChange={(e)=>setName(e.target.value)} />
                    <input type="text" placeholder='email*' value={email}     onChange={(e)=>setEmail(e.target.value)} />
                    <input type='password' placeholder='password*' value={password}   onChange={(e)=>setPassword(e.target.value)} />
                    <button onClick={SignupHandler}>Sign up</button>
                </div>

            </div>

        </div>
    )
}

export default Login
