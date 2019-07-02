import React from 'react'
import { View, Text } from 'react-native'

function filhosComProps(props) {
    return React.Children.map(props.children, clone => React.cloneElement(clone, { ...props, ...clone.props }))
}

const fonte = { style: { fontSize: 30 } }

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, { ...props, ...props.children.props })} */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome="Andre" sobrenome={props.sobrenome}>
            <Filho nome="Ana" sobrenome={props.sobrenome}></Filho>
            <Filho nome="Bia" sobrenome={props.sobrenome}></Filho>
            <Filho nome="Gui" sobrenome={props.sobrenome}></Filho>
            <Filho nome="Davi" sobrenome={props.sobrenome}></Filho>
        </Pai>
        <Pai  {...props} nome={props.nome} >
         <Filho nome={props.nome} sobrenome={props.sobrenome + " Junior Junior"} ></Filho>
        </Pai>
        <Pai {...props} nome="Pedro">
            <Filho nome="Rebeca"></Filho>
            <Filho nome="Renato"></Filho>
        </Pai>
    </View>

export default Avo
