import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import {login} from '../store/actions/user.js'

const initialState = {
    name: 'Temp',
    email: '',
    password: ''
}

class Login extends Component {
    state = { ...initialState }

    login = () => {
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    /* autoFocus={true} */ keyboardType='email-address'
                    value={this.state.email} onChangeText={email => this.setState({ email })}>
                </TextInput>
                <TextInput placeholder='Senha' style={styles.input}
                    /* autoFocus={true} */ secureTextEntry={true}
                    value={this.state.password} onChangeText={password => this.setState({ password })}>
                </TextInput>
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.button}>
                    <Text style={styles.buttonText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 10
    }
})