import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Estilo from './estilo.js'

export default props => {
    const [nome, updateFieldName] = useState('nome')

    return ( 
        <View>
            <Text style={Estilo.fontG}>Seu Nome: {nome}</Text>
            <TextInput  // Componente controlado. As alterações partem o do estado para a interface
                placeholder='Digite seu nome...'
                value={nome} // Componente controlado por ter uma variável associada ao value
                // value={null} // Componente não controlado(Tem o mesmo efeito se for omitido)
                onChangeText={text => updateFieldName(text)}
            />
        </View>
    )
}