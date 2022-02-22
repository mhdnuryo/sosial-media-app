import {createSlice} from '@reduxjs/toolkit';

const user = createSlice({
  name : 'user',
  initialState : {
  	value : null
  },
  reducers : {
    signin : (state,action) => {
      state.value = action.payload
    },
    signout : (state) => {
      state.value = null
    }
  }
})

export default user.reducer

export const {login,logout} = user.actions

