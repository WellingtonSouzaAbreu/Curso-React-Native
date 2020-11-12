import React from 'react'
import { SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import Stack from './Stack.js'
import Tab from './Tab.js'
// import Drawer from './Drawer.js'

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            {/* <Stack /> */}
            <Tab />
            {/* <Drawer /> */}
        </NavigationContainer>
    </SafeAreaView>
)