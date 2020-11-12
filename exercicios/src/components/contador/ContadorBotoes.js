import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Estilo from './../estilo.js'

export default props => {
    return (
        <View style={style.controlButtons}>
            <Button title="-" onPress={props.dec} />
            <Button title="+" onPress={props.inc} />
        </View>
    )
}

const style = StyleSheet.create({
    controlButtons: {
        flexDirection: 'row',
    }
})