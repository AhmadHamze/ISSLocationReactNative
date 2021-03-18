//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getIss } from '../api/iss_api';
import Infobar from '../components/infobar';

// Transforming this function into an async function gives an error!
export default function CoordinatesScreen({ navigation }) {

  //const [isDisplayed, setIsDisplayed] = useState(false);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const handleOnPress = () => {
    getIss()
    .then(data => {
      setLat(data.lat);
      setLong(data.long);
    })
    .catch(err => console.error(err));
  }
  // This function allows the automatic trigering of the api
  /*
  useEffect(() => {
    setInterval(getData, 3000);
  })
  */
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.textView}>
        <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
        }}>
          Click on the Synchronize button to get the current latitude and
          longitude of the ISS
        </Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          color="dodgerblue"
          title="Synchronize"
          onPress={handleOnPress}/>
      </View>
      <Infobar
        name="Latitude"
        value={lat}/>
      <Infobar
        name="Longitude"
        value={long}/>
      <View style={styles.navigationView}>
      <Button
        color="red"
        onPress={() => navigation.goBack()}
        title="Go back to the welcome screen" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  textView: {
    fontSize: 20,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    top: 50,
  },
  buttonView: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
  },
  navigationView: {
    alignItems: 'center',
    //bottom: -200,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
