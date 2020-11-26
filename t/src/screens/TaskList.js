import React, { Component } from 'react'
import { Alert, StatusBar, View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Icon from 'react-native-vector-icons/FontAwesome'
import Task from './../components/Task.js'
import AddTask from './AddTask.js'

import todayImage from './../../assets/imgs/today.jpg'
import commonStyles from './../commonStyles.js'

const initialState = {
    showDoneTasks: true,
    visibleTasks: [],
    showAddTask: false,
    tasks: []
}

export default class TaskList extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState') || null
        const state = JSON.parse(stateString) || initialState

        this.setState(state, this.filterTasks)
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            visibleTasks = this.state.tasks.filter(task => task.doneAt === null) // Pega somenta as pendentes
        }
        this.setState({ visibleTasks })

        AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
    }

    toggleTask = (taskId) => {
        let tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    addTask = newTask => {
        if (!newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', ' Descrição não informada!')
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })

        this.setState({ tasks, showAddTask: false }, this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <>
                <StatusBar style={{ color: 'black' }} />
                <View style={styles.container}>
                    <AddTask isVisible={this.state.showAddTask} onCancel={() => this.setState({ showAddTask: false })}
                        onSave={this.addTask} >
                    </AddTask>
                    <ImageBackground source={todayImage} style={styles.background}>
                        <View style={styles.iconBar}>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subtitle}>{today}</Text>
                        </View>

                    </ImageBackground>
                    <View style={styles.taskList}>
                        <FlatList data={this.state.visibleTasks}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} />
                    </View>
                    <TouchableOpacity style={styles.addButton}
                        activeOpacity={0.7}
                        onPress={() => this.setState({ showAddTask: true })}>
                        <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secondary,
        marginLeft: 30,
        marginBottom: 20
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        justifyContent: 'flex-end'
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.today,
        alignItems: 'center',
        justifyContent: 'center'
    }
})