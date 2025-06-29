import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes.jsx';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
