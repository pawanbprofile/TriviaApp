import React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/api/store';
import {AuthContextProvider} from './src/services/AuthContext';
import {ScoreContextProvider} from './src/services/ScoreContext';
import {removeTokens} from './src/services/KeyChainStorage';

const App = () => {
  if (__DEV__ && process.env.CLEAR_KEYCHAIN === 'true') {
    removeTokens();
  }
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ScoreContextProvider>
          <RootNavigator />
        </ScoreContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
