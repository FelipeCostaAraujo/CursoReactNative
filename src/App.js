import React, { Component } from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';

import Simples from './componentes/Simples'
import { Inverter,MegaSena } from './componentes/Multi'
import ParImpar from './componentes/ParImpar';



export default class App extends Component {
    render() {
        return (
            
            <View style={style.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Simples texto="Flexivel!!!"/>
                <ParImpar numero={32}/>
                <Inverter texto='React Nativo !'/>
                <MegaSena numeros={10} />
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