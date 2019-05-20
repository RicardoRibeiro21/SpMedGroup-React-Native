import React, {Component } from 'react';
import {View, StyleSheet, Text , AsyncStorage, TextInput} from 'react-native'

class SignIn extends  Component{
    constructor(){
        super();
        this.state = {
            email:"",
            senha: "",
        }
    }

    static navigationOptions =  {
        header : null
    }

    _FazerLogin = async () =>{
        const resposta = await api.post('./login', {
            email: this.state.email,
            senha: this.state.senha
        })
        // Gerando token após o login
        const token = resposta.data.token;
        //Armazenando o token no storage
        await AsyncStorage("UserToken", token);
        //Fazendo navegação após a validação do login
        this.props.navigation.navigate("MainNavigator");

    }

    render(){
        return (
            <View>
                <TextInput placeholder="Email" onChange={email => this.setState({email})}></TextInput>
                <TextInput placeholder="Senha" onChange={senha => this.setState({senha})}>Senha</TextInput>
            </View>
        )
    }


}