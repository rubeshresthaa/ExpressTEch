import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Features/Auth/userApi";
import { userSlice } from "../Features/Auth/userSlice";
import { contactApi } from "../Features/Contact/contactApi";

export const store=configureStore({
  reducer:{
    [userSlice.name]:userSlice.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer
  },
  middleware:(getDefaultMiddlware)=>getDefaultMiddlware().concat([
    userApi.middleware,
    contactApi.middleware
  ])
})

