
import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
            source={require("../../assets/iss.jpg")}
            style={{width: '100%', height: '100%'}}>
            <Text style={styles.text}>
                Welcome!{'\n'}
                This application locates the International Space Station by showing you its
                latitude and longitude. 
                Click on the button below to navigate to the coordinate screen.
            </Text>
            <View style={styles.botton}>
                <Button
                    color='green'
                    onPress={() => navigation.navigate('Coordinates')}
                    title="Go to coordinate screen"/>
            </View>
        </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
        justifyContent: 'center',
        padding: 10,
        top: 110,
    },
    botton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})