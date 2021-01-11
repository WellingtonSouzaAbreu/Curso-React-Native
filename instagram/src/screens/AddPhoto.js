import React, { Component } from 'react';
import ImagePicker from 'expo';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts.js'

import Header from '../components/Header'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickLocalImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    pickCameraImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    save = async () => {
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({ image: null, comment: '' })
        this.props.navigation.navigate('Feed')
    }

    render() {
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                keyboardOpeningTime={0} >
                <ScrollView>
                    <Header />
                    <View style={styles.container}>
                        <Text style={styles.title}>Poste uma foto</Text>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: this.state.image }} style={styles.image} />
                        </View>
                        <TextInput placeholder='commentario da foto?...'
                            style={styles.input} value={this.state.comment}
                            onChangeText={comment => this.setState({ comment })}>
                        </TextInput>
                        <View style={styles.choicesContainer}>
                            <Text style={styles.butttomText}>Escolha uma foto</Text>

                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity style={{ alignItems: 'center' }}
                                    onPress={this.pickLocalImage}  >
                                    <Icon name='folder' size={30} color="#000" />
                                    <Text > arquivos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignItems: 'center' }}
                                    onPress={this.pickCameraImage}  >
                                    <Icon name='camera' size={30} color="#000" />
                                    <Text >camera</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignItems: 'center' }}
                                    onPress={this.save} >
                                    <Icon name='share' size={30} color="#000" />
                                    <Text >share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >
                </ScrollView >
            </KeyboardAwareScrollView >

        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#000',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4',
        borderRadius: 5,
    },
    choicesContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        width: '90%',
        marginTop: 30,
        padding: 5,
        backgroundColor: '#4286F4',

    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 10,
    },
    butttomText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
    }
})
