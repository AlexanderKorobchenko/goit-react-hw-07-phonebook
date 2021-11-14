import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://618f691350e24d0017ce1740.mockapi.io/api',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactID => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addNewContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    // findContacts: builder.query({
    //   query: value => `/contacts?search=${value}`,
    //   providesTags: ['Contacts'],
    // }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddNewContactMutation,
  useFindContactsQuery,
} = contactsApi;
