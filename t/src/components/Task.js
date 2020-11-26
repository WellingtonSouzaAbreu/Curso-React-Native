import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import commonStyles from './../commonStyles.js'


export default props => {

    const doneOrNotStyle = props.doneAt != null
        ? { textDecorationLine: 'line-through' }
        : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt // Mostra data de conclusão depois de concluido
    const formattedDate = moment(date).locale('pt-br')
        .format('dddd, D [de] MMMM')

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right} onPress={() => props.onDelete(props.id)}>
                <Icon name="trash" size={30} color='#FFF' />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <TouchableOpacity style={styles.left} >
                <Icon name="trash" size={20} color='#FFF' style={styles.excludeIcon}/>
                <Text style={styles.excludeText}>Excluir</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete(props.id)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color='#FFF' />
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white'
    },
    checkContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 13
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    excludeIcon:{
        marginLeft: 10
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10
    }
})