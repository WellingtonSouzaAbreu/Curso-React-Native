import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Estilo from './../estilo.js'
import Filho from './Filho.js'

export default props => {
    const [num, setNum] = useState(0) // Valor inicial
    const [texto, setTexto] = useState('Valor sorteado é ') // Valor inicial

    function exibirValor(numero, text) {
        setNum(numero) //A função altera o state
        setTexto(text)
    }

    return (
        <>
            <Text style={Estilo.fontG}>{texto}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}