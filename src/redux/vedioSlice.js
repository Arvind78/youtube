import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentVedio: null,
  loading:false,
  error:false
}
export const videoSlice = createSlice({
    name: 'vedio',
    initialState,
    reducers: {
       fetchStart:(state)=>{
              state.loading=true
       },
       fetchSucess:(state,action)=>{
        state.loading=false
        state.currentVedio=action.payload
       },
      fetchFailure:(state)=>{
      state.loading=false
      state.error=false
      }, 
      like:(state,action)=>{
          if(!state.currentVedio.like.includes(action.payload)){
        state.currentVedio.like.push(action.payload);
           state.currentVedio.dislike.splice(
        state.currentVedio.dislike.findIndex((userId)=>userId==action.payload),1);
  }
},
dislike:(state,action)=>{
  if(!state.currentVedio.dislike.includes(action.payload)){
state.currentVedio.dislike.push(action.payload);
   state.currentVedio.like.splice(
state.currentVedio.like.findIndex((userId)=>userId==action.payload),1);
}
},

},
  });

  export const { fetchStart, fetchSucess, fetchFailure,like,dislike } = videoSlice.actions

export default  videoSlice.reducer