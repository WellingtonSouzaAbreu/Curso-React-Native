import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

class Comments extends Component {



    render() {
        let view = null
        if(this.props.comments){
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentsContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comments}>{item.comment}</Text>
                    </View>
                )
            })
        }
        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

export default Comments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentsContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comments: {
        color: '#555'
    }
})