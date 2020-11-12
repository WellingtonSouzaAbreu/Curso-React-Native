import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import TelaA from './../views/TelaA.js'
import TelaB from './../views/TelaB.js'
import TelaC from './../views/TelaC.js'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'phone'
                            : 'phone-square';
                        break
                    case 'TelaB':
                        iconName = focused
                            ? 'phone'
                            : 'phone-square'
                        break
                    case 'TelaC':
                        iconName = focused
                            ? 'phone'
                            : 'phone-square'
                        break
                }

                // return <Ionicons name={iconName} size={size} color={color} />;
                return <FontAwesome5 name={iconName} color={color} size={size} />;
            },
        })}
        tabBarOptions={{
            showLabel: true,
            activeTintColor: 'red',
            incactiveTintColor: 'blue',
            labelStyle: { fontSize: 15 }
        }}
        initialRouteName='TelaA'>
        <Tab.Screen name='TelaA' component={TelaA} options={{ title: 'Tela A' }} />
        <Tab.Screen name='TelaB' component={TelaB} options={{ title: 'Tela B' }} />
        <Tab.Screen name='TelaC' component={TelaC} options={{ title: 'Tela C' }} />
    </Tab.Navigator>
)