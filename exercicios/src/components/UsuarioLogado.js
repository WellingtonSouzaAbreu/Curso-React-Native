import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo.js'

import If from './If.js'

export default ({ usuario = {} }) => {
    return (
        <>
            <If teste={usuario.nome && usuario.email}>
                <Text style={Estilo.fontG}>Usuário Logado: </Text>
                <Text style={Estilo.fontG}> {usuario.nome} - {usuario.email} </Text>
            </If>
        </>
    )
}