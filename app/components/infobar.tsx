import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface Props {
    name: string;
    value: number;
  }

const Infobar: React.FC<Props> = (props)=> {
    return (
       <View style={styles.container}>
           <Text style={styles.title}>
               {props.name}
           </Text>
           <Text style={styles.value}>
               {props.value}
           </Text>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        bottom: 40,
        alignItems: 'center',
    },

    title: {
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: 'khaki',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 3,
        width: '40%',
        alignItems: 'center',
    },

    value: {
        fontSize: 16,
        backgroundColor: 'grey',
        color: 'white',
        alignItems: 'center',
    }
})

export default Infobar;