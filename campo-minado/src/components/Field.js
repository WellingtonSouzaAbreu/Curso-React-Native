import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

import params from './../config/params.js'
import Mine from './Mine.js'
import Flag from './Flag.js'

export default props => {

    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged)
    if (!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = 'green'
        if (nearMines == 2) color = 'blue'
        if (nearMines > 2 && nearMines < 6) color = 'yellow'
        if (nearMines >= 6) color = 'red'
    }

    return (
        <TouchableWithoutFeedback
            onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0
                    ? <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
                    : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: { // Estilo inicial
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSizeS
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    flagged: {

    }
})