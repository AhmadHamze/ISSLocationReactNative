import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { getIss } from './api/iss_api';

// Transforming this function into an async function gives an error!
export default function App() {
  
  //const [isDisplayed, setIsDisplayed] = useState(false);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const getData = () => {
    //setIsDisplayed(true);
    getIss()
    .then(data => {
      setLat(data.lat);
      setLong(data.long);
    })
    .catch(err => console.error(err));
  }
  useEffect(() => {
    setInterval(getData, 1000);
  })
  
  return (
    <View style={styles.container}>
      <Header>Welcome to the ISS location app</Header>
      
      <StatusBar style="auto" />
      <Text>
        Latitude
      </Text>
      <Text>
        {lat}
      </Text>
      <Text>
        Longitude
      </Text>
      <Text>
        {long}
      </Text>
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

/*
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

      const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

      let firstTime = true;

      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        marker.setLatLng([latitude, longitude]);
        if (firstTime) {
          mymap.setView([latitude, longitude], 2);
          firstTime = false;
        }
        document.getElementById('lat').textContent = latitude.toFixed(2);
        document.getElementById('lon').textContent = longitude.toFixed(2);
      }

      getISS();

      setInterval(getISS, 1000);
*/