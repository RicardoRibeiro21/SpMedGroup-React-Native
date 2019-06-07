import React, { Component } from 'react'

import { View, StyleSheet, FlatList, Text } from 'react-native';
import api from '../services/api';

class Especializacoes extends Component {
    constructor() {
        let usuario = parseJwt();
        super();
        this.state = {
            Especializacoes: [],
            Usuario: {
                id: usuario.jti,
                tipo: usuario.Role
            }
        }
    }

    _componentDidMount() {
        this.carregarEspecializacoes();
    }

    _carregarEspecializacoes = async () => {
        if (this.state.Usuario.tipo != null) {
            const resposta = await api.get('/Especializacoes');
            const dadosApi = resposta.data;
            this.setState({ Especializacoes: dadosApi });
        } else {
            console.warn("Usuário não logado!");
        }


    }
    render() {
        return (
            <View >
                <Text>Especializacoes</Text>
                <FlatList
                    data={this.state.Especializacoes}
                    keyExtractor={item => item.id}
                    renderItem={this._renderizaItem}/>                
            </View>


        )
    }
    _renderizaItem =  item => (
        <View>
        <Text>{item.id}</Text>
        <Text>{item.especializacao}</Text>
        </View>
    )
}

export default Especializacoes;