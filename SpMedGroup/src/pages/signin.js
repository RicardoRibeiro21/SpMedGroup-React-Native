import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, TextInput, TouchableOpacity } from 'react-native'
import api from '../services/api';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
        }
    }

    static navigationOptions = {
        header: null
    }

    onPress = event => {
        event.persist();
    }

    _FazerLogin = async () => {
        const resposta = await api.post('/login', {
            email: this.state.email,
            senha: this.state.senha
        })
        // Gerando token após o login
        const token = resposta.data.token;
        //Armazenando o token no storage
        await AsyncStorage("UserToken", token);
        //Fazendo navegação após a validação do login
        this.props.navigation.navigate("MainNavigator");
        console.warn(token);
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.inputLogin} placeholder="Email" onChange={email => this.setState({ email })}></TextInput>
                <TextInput  style={styles.inputLogin}  placeholder="Senha" onChange={senha => this.setState({ senha })} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={styles.btnLogin} onPress={()=>this._FazerLogin}>
                    <Text style={styles.textbtn}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        
    },
    
    inputLogin: {
        width: "70%",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        borderBottomWidth: 4,
        borderColor: "#80EBFF",
        borderRadius: 10,
      },
    title: {
        fontSize: 28,
        shadowColor: "#74E899",
        shadowRadius: 10,
        marginBottom: 12,
        textShadowRadius: 1
    },
    textbtn: {
        color: 'white'
    },

    btnLogin: {
        marginTop: 25,
        backgroundColor: "#74E899",
        width: "30%",
        height: 34,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
    
}) 

export default SignIn;