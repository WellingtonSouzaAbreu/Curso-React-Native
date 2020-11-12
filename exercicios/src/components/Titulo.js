import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo.js'
export default props => (
    <>
        <Text style={Estilo.fontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)