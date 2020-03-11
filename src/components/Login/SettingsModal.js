import React, { Component } from 'react';
import {
    View, Text,
    Modal, TouchableHighlight, Alert,
    Image, TextInput
} from 'react-native';
import {
    Input
} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';



export class SettingsModal extends Component {

    state = {
        IP: ''
    }


    onChangeText = (txt) => {
        console.log(txt);
        this.setState({ IP: txt });
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('request to close modal');
                    //this.setModalVisible(!this.state.modalVisible);
                    this.props.btnNoCallback();
                }}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{
                        backgroundColor: '#FEE', width: '85%', borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderTopRightRadius: 10, overflow: 'hidden'
                    }}>

                        <View style={{ backgroundColor: '#b004bb', height: 60, padding: 10 }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: '#FFF', fontSize: 16, }}>Server IP{this.props.headerTXT}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Image source={require('../../assets/images/setting.png')} style={{ width: 60, height: 75, resizeMode: 'contain', marginTop: -5 }} />
                            </View>
                        </View>
                        <View style={{ height: 120, padding: 7, }}>
                            <Text style={{ fontSize: 18, marginTop: 10 }}>{this.props.bodyTXT}</Text>
                            <View style={{ marginTop: 10, alignItems: 'center' }}>
                                <TextInput                                
                                    placeholder={this.props.placehold}
                                    style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        borderwidth: 1,
                                        borderColor: '#F00',
                                        borderRadius: 5,
                                        backgroundColor: '#FFF',
                                        width: '90%',
                                        borderBottomColor: '#a0e7c5',
                                        borderBottomWidth: 2
                                    }}
                                    value={this.state.IP}
                                    onChangeText={text => this.onChangeText(text)}
                                />
                                {/* <Text> current: {this.props.placehold}</Text> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#CCC', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 40, justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                                <TouchableHighlight style={{ backgroundColor: '#ECC', borderRadius: 5, paddingLeft: 10, paddingRight: 10, marginRight: 10, width: 100 }}
                                    onPress={() => {
                                        this.props.btnNoCallback();
                                    }}>
                                    <Text style={{ color: '#333', fontSize: 20, padding: 2, textAlign: 'center' }}>{this.props.noTXT}</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{ height: 40, justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                                <TouchableHighlight style={{ backgroundColor: '#EEE', borderRadius: 5, paddingLeft: 10, paddingRight: 10, width: 100 }}
                                    onPress={() => {
                                        this.props.btnYesCallback(this.state.IP);
                                    }}>
                                    <Text style={{ color: '#333', fontSize: 20, padding: 2, textAlign: 'center' }}>{this.props.yesTXT}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>


                    </View>
                </View>
            </Modal>
        );
    }
}

