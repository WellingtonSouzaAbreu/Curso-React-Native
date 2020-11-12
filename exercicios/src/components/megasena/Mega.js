import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo.js'

import Numero from './Numero.js'

export default class Mega extends Component {

    state = {
        qtdeNumeros: '',
        numeros: []
    }

    renderNumeros = () => {
        return (
            this.state.numeros.map(numero => <Numero key={numero} num={numero} />)
        )
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeros = () => {
        if (this.state.qtdeNumeros > 30) {
            console.warn('Não é possível gerar tantos números! Escolha um numero menor')
            return
        }
        let numerosGerados = []
        let numAleatorio = 0
        let i = 1
        while (i <= this.state.qtdeNumeros) {
            numAleatorio = Math.floor(Math.random() * 100 + 1)

            if (this.numeroJaSorteado(numAleatorio, numerosGerados)) {
                //
            } else {
                numerosGerados.push(numAleatorio)
                i++
            }
        }

        numerosGerados.sort((a, b) => a - b)
        this.setState({ numeros: numerosGerados })
    }

    numeroJaSorteado = (numero, numerosGerados) => {
        return numerosGerados.includes(numero)
    }

    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1, marginBottom: 20 }}
                    placeholder="Qtde de Números: "
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero} />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros} />
                    
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.renderNumeros()}
                </View>
            </>
        )
    }
}