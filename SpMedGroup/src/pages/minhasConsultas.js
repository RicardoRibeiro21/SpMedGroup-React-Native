import React, { Component } from 'react'

import { View, StyleSheet, FlatList, Text } from 'react-native';
import api from '../services/api';

class Consultas extends Component {
    constructor() {
        let usuario = parseJwt();
        super();
        this.state = {
            consultas: [],
            Usuario: {
                id: usuario.jti,
                tipo: usuario.Role
            }
        }
    }

    _componentDidMount() {
        this.carregarConsultas();
    }

    _carregarConsultas = async () => {
        switch (this.state.Usuario.tipo) {
            case "Comum":
                endpoint = '/Usuarios/minhasConsultas';
                break;
            case "Medico":
                endpoint = '/Medicos/minhasConsultas';
                break;
            case "Administrador":
                endpoint = '/Consultas'
            default:
                break;
        }
       return fetch(api.get(endpoint), {
        
            method: 'GET',
            headers: {
              "Content-Type" : "application/json",
              "Authorization" :  'Bearer ' + localStorage.getItem("usuario-spmedgroup")
            }   
       }) 
       .then(resposta => resposta.json())
       .then(data => this.setState({consultas : data}))
       .catch(erro => console.log(erro))
                
        // const resposta = await api.get(endpoint);
        // const dadosApi = resposta.data;
        // this.setState({ consultas: dadosApi });
    }

    render() {
        return (
            <View >
                <Text>Minhas Consultas</Text>
                <FlatList
                    data={this.state.consultas}
                    keyExtractor={item => item.id}
                    renderItem={this._renderizaItem}
                />
            </View>
        )
    }
    _renderizaItem = item => {
        <View>
            <Text>{item.id}</Text>
            <Text>{item.dataConsulta}</Text>
            <Text>{item.crm}</Text>            
        </View>
    }
}
export default Consultas;