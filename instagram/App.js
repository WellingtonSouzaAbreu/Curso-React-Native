import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

import Header from './src/components/Header.js'
import Post from './src/components/Post.js'

export default class App extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} />
            </View>
        )
    }
}

