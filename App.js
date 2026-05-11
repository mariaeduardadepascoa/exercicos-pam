import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Contador from './src/components/contador';
import TextInputMeu from './src/components/textInput';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.miniContainer}>

        <View style={styles.cards}>
          <View style={styles.title}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 14, fontWeight: 700, height: 25}}>Contador</Text>
          </View>
          <View style={styles.subtitle}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 12, height: 50, width: 120}}>Contador com o intuito de treinar o uso do useState</Text>
          </View>
          <View style={styles.button}><Text style={{color: '#fff', textAlign: 'center'}}>Testar</Text></View>
        </View>

        <View style={styles.cards}>
          <View style={styles.title}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 14, fontWeight: 700, height: 25}}>Nome e Média</Text>
          </View>
          <View style={styles.subtitle}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 12, height: 50, width: 120}}>Exibir o nome completo do usuário + calcular sua média</Text>
          </View>
          <View style={styles.button}><Text style={{color: '#fff', textAlign: 'center'}}>Testar</Text></View>
        </View>

      </View>
      {/* <Contador /> */}
      {/* <TextInputMeu /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  miniContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 300
  },

  cards: {
    height: 200,
    width: 135,
    display: 'flex',
    backgroundColor: '#232323',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    borderRadius: 10,
  },

  button: {
    width: 100,
    height: 30,
    backgroundColor: '#ae19d7',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
