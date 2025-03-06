import React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/api/store';
import {AuthContextProvider} from './src/services/AuthContext';

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
