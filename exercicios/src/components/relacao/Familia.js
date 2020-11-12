import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo.js'

export default props => {
    return (
        <>
            <Text>Membros da Família:</Text>
            {props.children}
        </>
    )
}