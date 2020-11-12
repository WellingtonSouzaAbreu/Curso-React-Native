import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    const lado = 50
    return (
        <View style={{
            height: props.lado,
            width: props.lado,
            backgroundColor: props.cor || '#000'
        }}>
        </View>
    )
}
