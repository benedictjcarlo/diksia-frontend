import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

export default App;