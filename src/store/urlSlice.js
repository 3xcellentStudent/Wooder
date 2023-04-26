import { createSlice } from '@reduxjs/toolkit'

const urlSlice = createSlice({
   name: "url",
   initialState: {
      url: "/"
   },
   reducers: {
      setURL(state, action){
         state.url = action.payload
      }
   }
})

export const {setURL} = urlSlice.actions

export default urlSlice.reducer