import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado.js'

export default props => {
    return (
        <View style={style.flexV2}>
            <Quadrado cor='#009' />
            <Quadrado cor='#990' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
            <Quadrado cor='#909' />
        </View>
    )
}

const style = StyleSheet.create({
    flexV2: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 20,
        backgroundColor: '#000'
    }
})