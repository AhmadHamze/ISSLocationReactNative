import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getIss } from './api/iss_api';


//Handling the promise using then, not sure if await can be used here, but this works!
const promise:Promise<number[]> = getIss();
let latitude:number;
let longitude:number;

// 'data' is the array containing the latitude and the longitude returned by the 'getIss' function
promise.then((data) => {
  [latitude, longitude] = data;
})
.catch((err) => console.error());

// Transforming this function into an async function gives an error!
export default function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Click the button to view the ISS location</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => setIsDisplayed(true)}
        disabled={isDisplayed}
        title={isDisplayed? `latitude: ${latitude}, longitude: ${longitude}` : "click to see the ISS location"}>
      </Button>
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
