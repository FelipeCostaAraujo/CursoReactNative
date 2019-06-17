import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples'
import { Inverter,MegaSena } from './componentes/Multi'
import ParImpar from './componentes/ParImpar';
import Contador from './componentes/Contador';

import { View,StatusBar ,StyleSheet } from 'react-native';


export default createDrawerNavigator({
    Contador:{
      screen:() => <Contador numeroInicial={100}/>
    },
    MegaSena:{
        screen:() => <MegaSena numero={8}/>,
        navigationOptions:{ title:'Mega Sena'}
    },
    Inverter:{
        screen:() => <Inverter texto="React Nativo"/>
    },
    ParImpar:{
        screen:() => <ParImpar numero={30}/>,
        navigationOptions:{ title:'Par & Impar' }
    },
    Simples:{
        screen:() => <Simples texto="Nao flexivel"/>
    }
},{drawerWidth:300});



const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})