import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import Button from './components/Button.js'
import Display from './components/Display.js'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class extends Component {

    state = { ...initialState }

    addDigit = number => {
        console.debug(typeof this.state.displayValue)
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if (number === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + number

        this.setState({ displayValue, clearDisplay: false, })

        if (number !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue

            this.setState({ values })
        }
    }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = operation => {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${this.state.operation} ${this.state.values[1]}`)
            } catch (err) {
                values[0] = this.state.values[0]
            }

            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals, // Mantém o displayValue depois do igual
                values
            })
        }




    }

    render() {
        return (
            <SafeAreaView style={styles.container} >
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button label='AC' onClick={this.clearMemory} triple />
                    <Button label='/' onClick={this.setOperation} operation />
                    <Button label='7' onClick={this.addDigit} />
                    <Button label='8' onClick={this.addDigit} />
                    <Button label='9' onClick={this.addDigit} />
                    <Button label='*' onClick={this.setOperation} operation />
                    <Button label='4' onClick={this.addDigit} />
                    <Button label='5' onClick={this.addDigit} />
                    <Button label='6' onClick={this.addDigit} />
                    <Button label='-' onClick={this.setOperation} operation />
                    <Button label='1' onClick={this.addDigit} />
                    <Button label='2' onClick={this.addDigit} />
                    <Button label='3' onClick={this.addDigit} />
                    <Button label='+' onClick={this.setOperation} operation />
                    <Button label='0' onClick={this.addDigit} double />
                    <Button label='.' onClick={this.addDigit} />
                    <Button label='=' onClick={this.setOperation} operation />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
