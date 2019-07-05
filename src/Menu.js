import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples'
import { Inverter, MegaSena } from './componentes/Multi'
import ParImpar from './componentes/ParImpar';
import Contador from './componentes/Contador';
import Plataforma from "./componentes/Plataforma";
import ValidarProps from "./componentes/ValidarProps";
import Evento from './componentes/Evento';
import Avo from "./componentes/ComunicacaoDireta";
import TextoSincronizado from "./componentes/ComunicacaoIndireta";
import ListaFlex from "./componentes/ListaFlex";
import Flex from './componentes/Flex';

import { View, StatusBar, StyleSheet } from 'react-native';


export default createDrawerNavigator({
    Flex: {
        screen:Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista (Flex Box)' }
    },
    Avo: {
        screen:() => <Avo nome="Felipe" sobrenome="Araujo" />
    },
    Evento: {
        screen: Evento
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Teste React: " ano={18} />
    },
    Plataforma: {
        screen: () => <Plataforma />
    },
    Contador: {
        screen: () => <Contador numeroInicial={100} />
    },
    MegaSena: {
        screen: () => <MegaSena numero={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto="Nao flexivel" />
    }
}, { drawerWidth: 300});



const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})