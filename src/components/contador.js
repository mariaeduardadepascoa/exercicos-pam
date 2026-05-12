import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Contador({ navigation }) {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
        <View style={styles.grupoDiv}>
            <Text style={styles.title}>Contador = {contador}</Text>

            <TouchableOpacity style={styles.buttons} onPress={() => setContador(contador + 1)}>
                <Text style={styles.titleButtons}>+ 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => setContador(contador - 1)}>
                <Text style={styles.titleButtons}>- 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => setContador(0)}>
                <Text style={styles.titleButtons}>Resetar</Text>
            </TouchableOpacity>
        </View>
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

    grupoDiv: {
        gap: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 230,
        paddingVertical: 15,
        borderRadius: 10
    },

    title: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 20
    },

    buttons: {
        width: 100,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ae19d7',
        borderRadius: 10,
    },

    titleButtons: {
        color: '#fff',
        fontSize: 16
    }
});