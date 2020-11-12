import React from 'react'
import { View, Text, Button } from 'react-native'

export default props =>
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                {props.voltar
                    ? <Button
                        title='Voltar'
                        onPress={() => { props.navigation.goBack() }}
                    />
                    : false
                }
            </View>

            <View style={{ flex: 1 }}>
                {props.avancar
                    ? <Button
                        title='Avançar'
                        onPress={() => { props.navigation.push(props.avancar, {numero: parseInt(Math.random() * 10)}) }}
                    />
                    : false
                }
            </View>

        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
