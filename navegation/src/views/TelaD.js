import React from 'react'
import { View, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral.js'

export default props => {
    // console.warn(props.route.params)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 40 }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 2000)
                    }}
                >
                </Button>
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#33fa72' corTexto='#000'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}