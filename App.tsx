
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Text>
        Home screen
      </Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>
        Notification screen
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}







// //import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { getIss } from './app/api/iss_api';
// import Infobar from './app/components/infobar';

// // Transforming this function into an async function gives an error!
// export default function App() {

//   //const [isDisplayed, setIsDisplayed] = useState(false);
//   const [lat, setLat] = useState(0);
//   const [long, setLong] = useState(0);
//   const handleOnPress = () => {
//     getIss()
//     .then(data => {
//       setLat(data.lat);
//       setLong(data.long);
//     })
//     .catch(err => console.error(err));
//   }
//   // This function allows the automatic trigering of the api
//   /*
//   useEffect(() => {
//     setInterval(getData, 3000);
//   })
//   */
//   return (
//     <SafeAreaView style={styles.container}>
//       <View  style={styles.textView}>
//         <Text
//         style={{
//           fontSize: 20,
//           color: 'white',
//           fontWeight: 'bold',
//         }}>
//           Welcome to the ISS location app click on the button below to sync the ISS location
//         </Text>
//       </View>
//       <View style={styles.buttonView}>
//         <Button
//           color="dodgerblue"
//           title="Synchronize"
//           onPress={handleOnPress}/>
//       </View>
//       <Infobar
//         name="Latitude"
//         value={lat}/>
//       <Infobar
//         name="Longitude"
//         value={long}/>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   textView: {
//     fontSize: 20,
//     flexDirection: 'row',
//     marginLeft: 10,
//     marginRight: 10,
//     top: 50,
//   },
//   buttonView: {
//     //position: 'absolute',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 0.5,
//   }
// });
