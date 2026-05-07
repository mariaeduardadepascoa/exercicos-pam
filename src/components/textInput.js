import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TextInputMeu({ navigation }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    function getNomeCompleto() {
        setNomeCompleto(`${nome} ${sobrenome}`);
    }


    return (
        <View style={styles.container2}>
            <Text style={styles.title}>Usando Text-Input</Text>
            <TextInput
                placeholder="Digite seu nome"
                placeholderTextColor='#686868'
                onChangeText={setNome}
                style={styles.input} />
            <TextInput
                placeholder="Digite seu sobrenome"
                placeholderTextColor='#686868'
                onChangeText={setSobrenome}
                style={styles.input} />

            <Text style={styles.textInputVisual}>
                {`Seu nome completo é:\n${nomeCompleto}`}
            </Text>


            <TouchableOpacity style={styles.buttonInput} onPress={getNomeCompleto}>
                <Text style={styles.buttonInputText}>Entrada de dados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOutraPagina} >
                <Text style={styles.buttonInputText}>Ir para cálculo de média</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        backgroundColor: '#232323',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 25
    },
    input: {
        borderWidth: 1,
        borderColor: '#686868',
        padding: 10,
        marginBottom: 15,
        width: '80%',
        borderRadius: 6,
        color: '#fff'
    },

    textInputVisual: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
        color: '#fff'
    },

    buttonInput: {
        backgroundColor: '#0c6c01',
        padding: 8,
        borderRadius: 6,
        marginBottom: 15
    },

    buttonOutraPagina: {
        backgroundColor: '#2c2c2c',
        padding: 8,
        borderRadius: 6,
        marginBottom: 15
    },

    buttonInputText: {
        color: 'white',
        fontSize: 18
    }
});
