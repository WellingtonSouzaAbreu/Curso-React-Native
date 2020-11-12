import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado.js'

export default props => {
    return (
        <View style={style.flexV4}>
            <View style={style.V1} />
            <View style={style.V2} />
            <View style={style.V3} />
        </View >
    )
}

const style = StyleSheet.create({
    flexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V1: {
        backgroundColor: '#009',
        flexGrow: 1 // SOma todos os flex grows e divide
    },
    V2: {
        backgroundColor: '#900',
        flexGrow: 1
    },
    V3: {
        backgroundColor: '#555',
        flexGrow: 1
    }
})