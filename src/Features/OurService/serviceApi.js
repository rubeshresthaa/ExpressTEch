import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_url";

export const serviceApi=createApi({
  reducerPath:'serviceApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/services`}),
  tagTypes:['Service'],
  endpoints:(builder)=>({
    getService:builder.query({
      query:()=>({
        url:'/',
        method:'GET'
      }),
      providesTags:['Service']
    }),
    getServiceByID: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET', 
      }),
      providesTags: ['Service'], 
    
    }),
    addService:builder.mutation({
      query:(q)=>({
        url:'/add-service',
        body:q.body,
        headers:{
          Authorization:q.token
        },
        method:'POST'
      }),
      invalidatesTags:['Service']
    }),
    removeService:builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        method:'DELETE',
        headers:{
          Authorization:`Bearer ${q.token}`
        }
      }),
      invalidatesTags:['Service']
    }),
    updateService:builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        body:q.body,
        headers:{
          Authorization:`Bearer ${q.token}`
        },
        method:'PATCH'
      }),
      invalidatesTags:['Service']
    })
  })
})

export const {useGetServiceQuery,useGetServiceByIDQuery,useAddServiceMutation,useRemoveServiceMutation,useUpdateServiceMutation}=serviceApi;