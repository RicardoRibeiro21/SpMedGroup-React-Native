import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';



class minhasConsultas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultas: []

        }
    }

    componentDidMount() {
        this._carregarConsultas();
        console.warn("teste");
    }

    _carregarConsultas = async () => {
        console.warn("Funfa");
        const token = await AsyncStorage.getItem("userToken");
        console.warn(token);
        const resposta = await api.get("/Consultas", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        this.setState({ consultas: resposta.data })
        console.warn(resposta.data);
    }

    render() {
        return (
            <View style={styles.main} >
                <Text style={styles.title}>Minhas Consultas</Text>

                <FlatList
                    data={this.state.consultas}
                    keyExtractor={item => item.id}
                    renderItem={this._renderizaItem}
                />
            </View>
        )
    }

    _renderizaItem = ({ item }) => (
        <View>
            <View style={{width: 220 , height: 120, borderRadius: 4, borderColor:'#61FFB8', borderStyle: 'solid'}}>
                <Text style={styles.text}>{item.id}</Text>
                {/* <Text style={styles.text}>{item.idEspecializacaoNavigation.Especializacao}</Text> */}
                {/* <Text style={styles.text}>{item.idClinicaNavigation.Nome}</Text> */}
                <Text style={styles.text}>{item.idProntuarioNavigation.idUsuarioNavigation.nome}</Text>
                <Text style={styles.text}>{item.dataConsulta}</Text>
                <Text style={styles.text}>{item.crmMedicoNavigation.idUsuario}</Text>
                <Text style={styles.text}>{item.crmMedicoNavigation.crm}</Text>
                <Text style={styles.text}>{item.resultado}</Text>
                <Text style={styles.text}>{item.statusConsultaNavigation.situacao}</Text>
            </View>
        </View>
    )



}
const styles = StyleSheet.create({
    text: {
        marginTop: 1,
        marginBottom: 1,
        fontSize: 17,
        color: 'black',        
        marginBottom: 4,
    },
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontFamily: "Gabriola",
        textShadowRadius: 1,
        borderBottomWidth: 4,
        borderColor: "#80EBFF",
        borderRadius: 10,
    },
    div: {
        alignContent: 'center',
        borderColor: 'green',
        borderRadius: 4,
        
    }
})
export default minhasConsultas;