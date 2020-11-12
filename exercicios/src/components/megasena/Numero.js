import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from './../estilo.js'

export default ({ num }) => {

    return (
        <>
            <View style={style.container}>
                <Text style={[Estilo.fontG, style.numero]}>
                    {num}
                </Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25
    },
    numero: {
        color: '#FFF'
    }
})