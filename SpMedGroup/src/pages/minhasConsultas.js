import React, { Component } from 'react'

import { View, StyleSheet, FlatList, Text } from 'react-native';
import api from '../services/api';

class Consultas extends Component {
    constructor() {
        let usuario = parseJwt();
        super();
        this.state = {
            consulta: [],
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
        const resposta = await api.get(endpoint);
        const dadosApi = resposta.data;
        this.setState({ consultas: dadosApi });

    }

    render() {
        return (
            <View >
                <Text>Minhas Consultas</Text>
                <FlatList

                    data={this.state.listaEventos}
                    keyExtractor={item => item.id}
                    renderItem={this.renderizaItem}
                />
            </View>

        )
    }

}
export default Consultas;