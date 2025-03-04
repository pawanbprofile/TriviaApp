import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const AuthSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (params: {
        username: string;
        password: string;
        expiresInMins: number;
      }) => {
        return {
          method: 'POST',
          url: '/auth/login',
          body: params,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = AuthSlice;
