import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './../estilo.js'

import produtos from './produtos.js'

export default props => {
    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de produtos
            </Text>
            {produtos.map(produto => {
                return <Text key={produto.id} >{produto.id}) {produto.nome} custa R$ {produto.preco}</Text>
            })}

        </>
    )
}
