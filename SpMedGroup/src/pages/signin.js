import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';



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
      
            fetch('http://192.168.3.96:5001/api/login', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    email : this.state.email,
                    senha : this.state.senha
                })
            })
            .then()
            .catch(this.setState({erro : "Deu bosta"}))
            alert(this.state.email + this.state.senha);
       
        // Gerando token após o login
    }
    

    render() {
        return (
            <View style={styles.main}>  
            {/* <TopNav>hu</TopNav>           */}
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.inputLogin} placeholder="Email" value={this.state.email} onChange={email => this.setState({ email })}></TextInput>
                <TextInput  style={styles.inputLogin}  placeholder="Senha" value={this.state.senha}  onChange={senha => this.setState({ senha })} secureTextEntry={true}></TextInput>
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