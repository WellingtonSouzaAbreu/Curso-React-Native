import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'

import * as Font from 'expo-font' //Teste de inserção de fonte

import icon from './../../assets/imgs/icon.png'

class Header extends Component {

    async componentDidMount() { // Teste de inserção de fonte
        await Font.loadAsync({
            'Shelter': require('./../../assets/fonts/shelter.otf'),
        });
    }

    render() {
        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email
            ? <Gravatar options={{ email: this.props.email, secure: true }} style={styles.avatar} />
            : null

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe lambe</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email
    }
}

export default connect(mapStateToProps)(Header)

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'Shelter',
        height: 30,
        fontSize: 28
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        fontSize: 10,
        color: '#888'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
})
