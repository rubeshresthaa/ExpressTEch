import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_url";

export const userApi=createApi({
  reducerPath:'userApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/users`}),
  credentials: 'include',

  tagTypes:['User'],
  endpoints:(builder)=>({
    loginUser:builder.mutation({
      query:(q)=>({
        url:'/login',
        body:q,
        method:'POST'
      }),
      invalidatesTags:['User']
    }),
    registerUser:builder.mutation({
      query:(q)=>({
        url:'/signup',
        body:q,
        method:"POST"
      }),
      invalidatesTags:['User']
    }),
    userLogOut: builder.mutation({  // Add userLogOut mutation
      query: () => ({
        url: '/logout',
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),

  })
})


export const {useLoginUserMutation,useRegisterUserMutation,useUserLogOutMutation}=userApi;