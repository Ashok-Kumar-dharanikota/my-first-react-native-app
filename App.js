import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HI I am Ashok, This is my first React Native App</Text>
      <Text>This is another text view</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 300,
    backgroundColor: '#f45d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
