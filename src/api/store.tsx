import {configureStore} from '@reduxjs/toolkit';
import {TriviaSlice} from './TriviaSlice';
import {AuthSlice} from './AuthSlice';

const store = configureStore({
  reducer: {
    [TriviaSlice.reducerPath]: TriviaSlice.reducer,
    [AuthSlice.reducerPath]: AuthSlice.reducer,
  },
  middleware: previosMiddleWare =>
    previosMiddleWare()
      .concat(TriviaSlice.middleware)
      .concat(AuthSlice.middleware),
});

export default store;
