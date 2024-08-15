import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux";
import { Loading } from './components';
import { MetodePembayaranProvider } from './components/atoms/MetodePembayaranContext';
import store from "./redux/store";
import Router from './router';

const MainApp = () => {
  const {isLoading} = useSelector((state: any) => state.global);
  const linking = {
    prefixes: ['http://diksiabackend.my.id'],
    config: {
      screens: {
        VerifyEmail: 'api/verify-email/:token',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MetodePembayaranProvider>
        <MainApp />
      </MetodePembayaranProvider>
    </Provider>
  )
}

export default App;