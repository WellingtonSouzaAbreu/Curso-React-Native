import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Estilo from '../estilo.js'

import produtos from './produtos.js'

export default props => {

    const produtoRender = ({ item: p }) => { // Item é um objeto. Mas pode ser referenciado como 'p' neste caso
        return <Text>{p.id}) {p.nome}</Text>
    }
    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}
