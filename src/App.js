import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar';


export default class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Simples texto="Flexivel!!!"/>
                <ParImpar numero={31}/>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})