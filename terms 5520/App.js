import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Yongshi from "./components/Yongshi"


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yong Shi midterm!</Text>
      <StatusBar style="auto" />


      <Yongshi/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
