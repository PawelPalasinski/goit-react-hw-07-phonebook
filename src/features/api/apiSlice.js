// https://www.youtube.com/watch?v=HyZzCHgG3AY <- React Redux Toolkit Query Tutorial and RTK Query CRUD Example App

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6334c762ea0de5318a08dccd.mockapi.io/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts/',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: contacts => ({
        url: `contacts/${contacts.id}`,
        method: 'PATCH',
        body: contacts,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// custom hooks
export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useUpdateContactsMutation,
  useDeleteContactsMutation,
} = apiSlice;
