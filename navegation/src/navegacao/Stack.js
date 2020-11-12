import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TelaA from './../views/TelaA.js'
import TelaB from './../views/TelaB.js'
import TelaC from './../views/TelaC.js'
import PassoStack from '../components/PassoStack.js'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='TelaA' screenOptions={{ headerShown: true }}>
        <Stack.Screen
            name='TelaA'
            // component={TelaA} Não é possível ter o component e o children ao mesmo tempo
            options={{ title: 'Tela A' }} >
            {props => (
                <PassoStack {...props} avancar='TelaB' >
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen
            name='TelaB'
            options={{ title: 'Tela B' }} >
            {props => (
                <PassoStack {...props} avancar='TelaC' voltar>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen
            name='TelaC'
            // component={TelaA}
            options={{ title: 'Tela C' }} >
            {props => (
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaC {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)