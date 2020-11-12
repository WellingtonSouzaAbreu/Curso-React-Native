import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado.js'

export default props => {
    return (
        <View style={style.flexV3}>
            <Quadrado cor='#009' lado={20}/>
            <Quadrado cor='#990' lado={30}/>
            <Quadrado cor='#090' lado={40}/>
            <Quadrado cor='#009' lado={50}/>
            <Quadrado cor='#909' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    flexV3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#ffbddd'
    }
})