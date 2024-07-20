import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux";
import { Loading } from './components';
import store from "./redux/store";
import Router from './router';
import MomentConfig from './config/MomentConfig'
import { MetodePembayaranProvider } from './components/atoms/MetodePembayaranContext';

const MainApp = () => {
  const {isLoading} = useSelector((state: any) => state.global)
  return (
    <NavigationContainer>
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