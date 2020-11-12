import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native'

export default (props) => {

    let stylesButtons = [styles.button]
    props.operation ? stylesButtons.push(styles.operationButton) : ''
    props.double ? stylesButtons.push(styles.buttonDouble) : ''
    props.triple ? stylesButtons.push(styles.buttonTriple) : ''

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButtons}>{props.label}</Text>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    button: {
        fontSize: 45,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#f0f0f0',
        padding: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})