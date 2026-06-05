import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TextInputMeu({ navigation }) {
    const [pagina, setPagina] = useState('inicio'); //começa com a tela de nome
    const [nomeCompleto, setNomeCompleto] = useState('');

    function ConteudoInicial() {
        const [nome, setNome] = useState('');
        const [sobrenome, setSobrenome] = useState('');
    
        function getNomeCompleto() {
            setNomeCompleto(`${nome} ${sobrenome}`);
        }
    
    
        return (
            <View style={styles.container}>
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
    
                    <TouchableOpacity style={styles.buttonOutraPagina} onPress={() => setPagina('outro')}>
                        <Text style={styles.buttonInputText}>Ir para cálculo de média</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    
    function OutroConteudo() {
        const [valor1, setValor1] = useState(0);
        const [valor2, setValor2] = useState(0);
        const [valor3, setValor3] = useState(0);
        const [resultado, setResultado] = useState(0);
        const [passou, setPassou] = useState('');
    
        function media() {
            const mediaF = (valor1 + valor2 + valor3)/3;
            setResultado(mediaF);

            if (mediaF >= 6 && mediaF <= 10) {
                setPassou('Parabéns, você não está de recuperação');
            } else if (mediaF >= 0 && mediaF < 6) {
                setPassou('Infelizmente, você está de recuperação.');
            } else {
                setPassou('Nota inválida. Insira um valor entre 0 e 10.');
            }
            
        }
    
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.title}>Calculo da média de {nomeCompleto}</Text>
                    <TextInput
                        placeholder='Digite sua primeira nota'
                        placeholderTextColor='#686868'
                        onChangeText={(texto) => setValor1(parseFloat(texto))}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Digite sua segunda nota'
                        placeholderTextColor='#686868'
                        onChangeText={(texto) => setValor2(parseFloat(texto))}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Digite sua terceira nota'
                        placeholderTextColor='#686868'
                        onChangeText={(texto) => setValor3(parseFloat(texto))}
                        style={styles.input}
                    />
    
                    <TouchableOpacity style={styles.buttonInput} onPress={media}>
                        <Text style={styles.buttonInputText}>Calcular</Text>
                    </TouchableOpacity>
    
                    <Text style={styles.textInputVisual}>
                        {`Sua média final é de: ${resultado.toFixed(2)}\n`}
                        <Text style={{fontWeight: 650}}>{`${passou}`}</Text>
                    </Text>

                    <TouchableOpacity style={styles.buttonOutraPagina} onPress={() => setPagina('inicio')}>
                        <Text style={styles.buttonInputText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {pagina === 'inicio' ? (
                <ConteudoInicial />
            ) : (
                <OutroConteudo />
            )
            }
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

    container2: {
        backgroundColor: '#232323',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10,
        width: 280,
    },

    title: {
        fontSize: 20,
        fontWeight: 600,
        color: '#fff',
        marginBottom: 25,
        textAlign: 'center'
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
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
        color: '#fff',
    },

    buttonInput: {
        backgroundColor: '#ae19d7',
        padding: 8,
        borderRadius: 6,
        marginBottom: 15
    },

    buttonOutraPagina: {
        backgroundColor: '#2c2c2c',
        padding: 8,
        borderRadius: 6,
    },

    buttonInputText: {
        color: 'white',
        fontSize: 16
    }
});
