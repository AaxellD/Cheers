import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

export default function welcome(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cheers!</Text>

            <Text>
                {'\n'}Welcome to the game of cheers. The instructions are very simple. Press 'Start' to begin the game or read on to learn more about the rules!{'\n'}
            </Text>

            <Button title="Start" onPress={() => props.setStart(!props.startCheck)} />

            <Image source={require('../assets/waterWave.png')} style={{height:250,width:400}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 50,
        color: '#000'
    },

})


