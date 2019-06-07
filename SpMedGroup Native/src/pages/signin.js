import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';
import jwt from 'jwt-decode';



class SignIn extends Component {
    static navigationOptions = {
            header: null
        }
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }
    _fazerLogin = async () => {
      
        const resposta = await api.post("/Login", {
            email: this.state.email,
            senha: this.state.senha
          })
          const token = resposta.data.token;
          await AsyncStorage.setItem("userToken", token);
          if (token.length > 10) {
            if (jwt(token).Role == 'Administrador') {
              this.props.navigation.navigate('MainNavigator')
            }
            if (jwt(token).Role == 'Paciente') {
              this.props.navigation.navigate('MainNavigator')
            } if (jwt(token).Role == 'Medico') {
              this.props.navigation.navigate('MainNavigator')
            }
          } 
        }
    

    render() {
        return (
            <View style={styles.main}>  
            {/* <TopNav>hu</TopNav>           */}
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.inputLogin} placeholder="Email" defaultValue="ricardo.sao@hotmail.com.br"  onChangeText={email => this.setState({ email })}/>
                <TextInput style={styles.inputLogin}  placeholder="Senha"  defaultValue="Dr@g0nf0rce"   onChangeText={senha => this.setState({senha} )} secureTextEntry={true}/>
                <TouchableOpacity style={styles.btnLogin} onPress={this._fazerLogin}>
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