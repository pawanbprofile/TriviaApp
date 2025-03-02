import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const TriviaSlice = createApi({
  reducerPath: 'Trivia',
  baseQuery: fetchBaseQuery({baseUrl: 'https://opentdb.com/api.php'}),
  endpoints: builder => ({
    getLatestTenQuestions: builder.query({
      query: () => {
        return {
          url: '?amount=10',
          method: 'GET',
        };
      },
      transformResponse: response => response.results,
    }),
  }),
});

export const {
  useLazyGetLatestTenQuestionsQuery,
  useGetLatestTenQuestionsQuery,
} = TriviaSlice;
