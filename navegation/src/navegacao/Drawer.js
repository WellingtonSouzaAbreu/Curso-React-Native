import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TelaA from './../views/TelaA.js'
import TelaB from './../views/TelaB.js'
import TelaC from './../views/TelaC.js'
import TelaD from './../views/TelaD.js'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator drawerBarOptions={{
        activeTintColor: 'red',
        incactiveTintColor: 'blue',
        labelStyle: {fontSize: 20}
    }}
    initialRouteName='TelaD'>
        <Drawer.Screen name='TelaA' component={TelaA} />
        <Drawer.Screen name='TelaB' component={TelaB} />
        <Drawer.Screen name='TelaC' component={TelaC} />
        <Drawer.Screen name='TelaD' component={TelaD} />
    </Drawer.Navigator>
)