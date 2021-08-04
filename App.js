if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import React from 'react';
import { StyleSheet, View } from 'react-native';

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
    justifyContent: 'center',
  },
});
