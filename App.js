import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Welcome from './screens/welcome';
import cards from './questions';
import GameScreen from './screens/GameScreen.js';

export default function App() {
  const [startCheck, setStart] = useState(true);

  function handleStart() {
    setStart(!startCheck);
  }
  

  return (
    <SafeAreaView style={styles.container}>

      {(startCheck) ? <Welcome setStart={setStart} startCheck={startCheck} />
        :
        <GameScreen handleStart={()=>handleStart()} />
      }

    </SafeAreaView>
  );
}

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
  cardText: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
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
