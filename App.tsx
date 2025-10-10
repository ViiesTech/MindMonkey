import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import ToastMessage from './src/components/ToastMessage.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Routes />
          <ToastMessage position={'top'} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
