import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { connect } from 'react-redux'

import Header from './../components/Header.js'
import Post from './../components/Post.js'

/* const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaelprrf@gmail.com',
            image: require('./../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Jong Ray Sheldon',
                    comment: 'Stunning'
                },
                {
                    nickname: 'Ana Júlia Arruda',
                    comment: 'Foto linda! Onde foi Tirada?'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Keila Ferreira de Noronha',
            email: 'kfinha@gmail.com',
            image: require('./../../assets/imgs/bw.jpg'),
            comments: []
        }
    ]
} */

class Feed extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})