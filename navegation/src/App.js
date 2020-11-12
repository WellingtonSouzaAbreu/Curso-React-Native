import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import TelaA from './views/TelaA.js'
import TelaB from './views/TelaB.js'
import TelaC from './views/TelaC.js'

export default props =>
    <SafeAreaView style={{ flex: 1 }}>
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
