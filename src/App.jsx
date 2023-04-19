import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'
import {Routes, Route} from "react-router-dom"
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Video from './components/Video.jsx'
const Contenars = styled.div `
  display:flex;
`
const Subcontenar = styled.div `
 flex:7;
`
const Wrapper = styled.div `

overflow-y:scroll;
background-color:#212121;

padding:22px 14px;
`
function App() {
    return (
        <Contenars>
            <Menu/>
            <Subcontenar>
                <Navbar/>
                <Wrapper>
                    <Routes>
                
                        <Route path='/'>
                            <Route index element={<Home type="random"/>}/>
                            <Route path="trands" element={<Home type="trands"/>}/>
                            <Route path="subs" element={<Home type="subs"/>}/>

                            <Route path='video'>
                                
                                <Route path=':id'
                                    element={<Video/>}/>
                            </Route>
                            <Route path='login' element={<Login/>}/> 
                        </Route>
                        
                    </Routes>
                    
                </Wrapper>
              
            </Subcontenar>
        </Contenars>
    )
}

export default App
