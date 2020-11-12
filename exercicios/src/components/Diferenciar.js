import React from 'react'
import { SafeAreaView, Text, Platform } from 'react-native'
import Estilo from './estilo.js'

export default props => {
    if (Platform.OS === 'android') {
        return <Text style={Estilo.fontG}>Android</Text>
    } else {
        if (Platform.OS === 'ios') {
            return <Text style={Estilo.fontG}>IOS</Text>
        }else{
            return <Text style={Estilo.fontG}>Fodeo</Text>
        }
    }
}