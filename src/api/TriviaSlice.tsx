import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {randomizeOptions} from '../utils/helperFunctions';

export const TriviaSlice = createApi({
  reducerPath: 'Trivia',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({baseUrl: 'https://opentdb.com/api.php'}),
  endpoints: builder => ({
    getLatestTenQuestions: builder.query({
      query: () => {
        return {
          url: '?amount=10',
          method: 'GET',
        };
      },
      transformResponse: response => {
        const transformedResponse = response.results.map(item => {
          return {
            type: item.type,
            difficulty: item.difficulty,
            category: item.category,
            question: item.question,
            correct_answer: item.correct_answer,
            answers: randomizeOptions([
              ...item.incorrect_answers,
              item.correct_answer,
            ]),
          };
        });
        return transformedResponse;
      },
    }),
  }),
});

export const {
  useLazyGetLatestTenQuestionsQuery,
  useGetLatestTenQuestionsQuery,
} = TriviaSlice;
