import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado.js'

export default props => {
    return (
        <View style={style.flexV1}>
            <Quadrado />
            <Quadrado cor='#990' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
            <Quadrado cor='#909' />
        </View>
    )
}

const style = StyleSheet.create({
    flexV1: {
        flexGrow: 1, // Mesmo que flex: 1
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})