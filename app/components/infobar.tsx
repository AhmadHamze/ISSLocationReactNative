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
        //flex: 1,
        bottom: 40,
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
        //flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 3,
        width: '60%',
        left: 30,
    },

    value: {
        fontSize: 16,
        backgroundColor: 'grey',
        color: 'white',
        left: 30,
        //flex: 1,
    }
})

export default Infobar;