import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import cards from '../questions';

const GameScreen = (props) => {
    const [cardNumber, setCardNumber] = useState(0);

    return (
        <View style={styles.card}>
            <View style={styles.cardText}>
                <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>{cards[cardNumber]}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>setCardNumber(Math.round(Math.random() * cards.length))}>
                <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 50
    },
    card: {
      flex: 1,
      height: '60%',
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: 20
    },
    cardText:{
      height:'60%',
      alignItems:'center',
      justifyContent:'center',
    },
    button: {
      backgroundColor: '#15f',
      padding: 10,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      borderRadius: 15
    }
  });