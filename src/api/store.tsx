import {configureStore} from '@reduxjs/toolkit';
import {TriviaSlice} from './TriviaSlice';

const store = configureStore({
  reducer: {
    [TriviaSlice.reducerPath]: TriviaSlice.reducer,
  },
  middleware: previosMiddleWare =>
    previosMiddleWare().concat(TriviaSlice.middleware),
});

export default store;
