import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './src/pages/HomePage';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <View style={styles.container}>
      <AppStack></AppStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
