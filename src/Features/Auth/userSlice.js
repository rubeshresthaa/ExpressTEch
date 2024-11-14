import { createSlice } from "@reduxjs/toolkit";
import { getUser, removeUserFromLocal, setUser } from "../../hooks/localStorage";

export const userSlice=createSlice({
  name:'userSlice',
  initialState:{
    user:getUser()
  },
  reducers:{
    addUser:(state,action)=>{
      state.user=action.payload;
      setUser(state.user);
    },
    removeUser:(state,action)=>{
      state.user=null;
      removeUserFromLocal()
    }
  }
});

export const {addUser,removeUser}=userSlice.actions;