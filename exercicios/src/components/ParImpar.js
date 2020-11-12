import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo.js'

export default ({ num = 0 }) => {
    let resp
    num % 2 === 0 ? resp = 'Par' : resp = 'Ímpar'
    return (
        <View>
            <Text style={Estilo.fontG}>{resp}</Text>
        </View>
    )
}