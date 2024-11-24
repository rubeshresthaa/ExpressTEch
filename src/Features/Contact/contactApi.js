import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_url";

export const contactApi=createApi({
  reducerPath:'contactApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/contacts`}),
  tagTypes:['Contact'],
  endpoints:(builder)=>({
    submitContact:builder.mutation({
      query:(q)=>({
        url:'/submit-contact',
        body:q,
        method:'POST'
      }),
      invalidatesTags:['Contact']
    }),
    getContact:builder.query({
      query:(q)=>({
        url:'/',
        method:'GET'
      }),
      providesTags:['Contact']
    }),
    deleteContact:builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        method:'DELETE',
        headers:{
          
          Authorization:`Bearer ${q.token}`
          
        }  
      }),
      invalidatesTags:['Contact']
    })
  })
})

export const {useSubmitContactMutation,useGetContactQuery,useDeleteContactMutation} =contactApi;