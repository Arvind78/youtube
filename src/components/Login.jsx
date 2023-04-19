import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import "./css/login.css"
import axios from 'axios'
import { loginFailure, loginStart, loginSucess } from '../redux/userSlice'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
// =======signinHandler=========================
const SigninHandler =async(e)=>{
    e.preventDefault()
   dispatch(loginStart())
  try {
     let res= await axios.post('http://localhost:8080/youtube/signin',{email,password})
     
     dispatch(loginSucess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}

// =======signupHandler=========================
const SignupHandler =(e)=>{
    e.preventDefault()
}


// =============signinWithGoogle================

const signWithGoogle = ()=>{
    try {
        dispatch(loginStart())
        signInWithPopup(auth,provider).then((result)=>{
            axios.post('http://localhost:8080/youtube/googleAuth',{
                name:result.user.displayName,
                email:result.user.email,
                img:result.user.photoURL
         }).then((res)=> dispatch(loginSucess(res.data)))
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
                    <input type="text" placeholder='email*' onChange={(e)=>setEmail(e.target.value)} 
                   value={email} />
                    <input type="password" placeholder='password*'   onChange={(e)=>setPassword(e.target.value)} />
                    <button onClick={SigninHandler}>Sign in</button>
                </div>
                <h3 className='or'>or</h3>
                <div className="google-login">
                    <button onClick={signWithGoogle}>Sign in with google</button>
                </div>
                <h3 className='or'>or</h3>
                <div className="signup-componet">
                    <input type="text" placeholder='username*'   onChange={(e)=>setName(e.target.value)} />
                    <input type="text" placeholder='email*'    onChange={(e)=>setEmail(e.target.value)} />
                    <input type='password' placeholder='password*'   onChange={(e)=>setPassword(e.target.value)} />
                    <button onClick={SignupHandler}>Sign up</button>
                </div>

            </div>


        </div>
    )
}

export default Login
