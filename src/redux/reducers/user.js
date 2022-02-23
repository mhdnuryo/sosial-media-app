import {createSlice} from '@reduxjs/toolkit';

const user = createSlice({
  name : 'user',
  initialState : {
  	value : null
  },
  reducers : {
    signIn : (state,action) => {
      state.value = action.payload
    },
    signOut : (state) => {
      state.value = null
    }
  }
})

export default user.reducer

export const {signIn,signOut} = user.actions

