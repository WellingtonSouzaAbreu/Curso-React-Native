import React from 'react'
import { Text, View } from 'react-native'

import estilo from './estilo.js'

export default (props) => {
    let {min, max} = props
    let delta = max - min + 1
    return (
        <View>
            <Text style={estilo.fontG}>
                Min: {min} Max: {max}
            </Text>
            <Text style={estilo.fontG}>
                Número aleatório: {Math.ceil((Math.random() * delta) + min)}
            </Text>
        </View>
    )
}