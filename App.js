import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';
import store from './store'



export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}


