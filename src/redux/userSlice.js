import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading:false,
  error:false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       loginStart:(state)=>{
              state.loading=true
       },
       loginSucess:(state,action)=>{
        state.loading=false
        state.currentUser=action.payload
 },
 loginFailure:(state)=>{
    state.loading=false
    state.error=false
},
 logout:(state)=>{
   state.currentUser=null,
   state.error=false,
   state.loading=false
 },
 subscription:(state,action)=>{
  if(state.currentUser.subscribeuser.includes(action.payload)){
    state.currentUser.subscribeuser.splice(
      state.currentUser.subscribeuser.findIndex((channelId)=>channelId===action.payload),1
    );
  }else{
      state.currentUser.subscribeuser.push(action.payload)
  }
 }
    },
  })

  export const { loginStart, loginSucess, loginFailure,logout ,subscription} = userSlice.actions

export default  userSlice.reducer