import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import * as Font from 'expo-font' //Teste de inserção de fonte

import icon from './../../assets/imgs/icon.png'

class Header extends Component {

    async componentDidMount() { // Teste de inserção de fonte
        await Font.loadAsync({
            'Shelter': require('./../../assets/fonts/shelter.otf'),
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe lambe</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
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
    }
})

export default Header