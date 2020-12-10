import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

import commonStyles from './../commonStyles.js'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('Auth')
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar}
                    options={{
                        email: props.navigation.getParam('email'),
                        secure: true
                    }} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{props.navigation.getParam('name')}</Text>
                    <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name='sign-out' size={30} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>

            <DrawerItems {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
    },
    title: {
        color: 'black',
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        paddingTop: 30,
        padding: 10
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        marginBottom: 5,
        color: commonStyles.colors.mainText
    },
    email: {
        fontSize: 15,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        marginBottom: 10
    },
    logoutIcon:{
        marginVertical: 10,
        marginRight: 20,
        alignItems: 'flex-end'
    }
})