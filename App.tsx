import React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/api/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
