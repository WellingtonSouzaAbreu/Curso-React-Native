import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput , StyleSheet} from 'react-native'

const initialState = {
    name: '',
    email: '',
    email: ''
}

class Register extends Component {
    state = { ...initialState }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome' autoFocus={true}
                    style={styles.input} value={this.state.name}
                    onChangeText={name => this.setState({ name })}>
                </TextInput>
                <TextInput placeholder='Email' keyboardType='email-address'
                    style={styles.input} value={this.state.email}
                    onChangeText={email => this.setState({ email })}>
                </TextInput>
                <TextInput placeholder='Senha' secureTextEntry={true}
                    style={styles.input} value={this.state.password}
                    onChangeText={password => this.setState({ password })}>
                </TextInput>
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register

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
        paddingLeft: 15
    }
})