import React, { Component } from 'react';
import {
    View, Text,
    Modal, TouchableHighlight, Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';



export class YesNoModal extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modalVisible : false
    //     }
    // }


    LoadIcon = (logoType) => {

        switch (logoType) {
            case 'WARNING':
                return <Icon name='ios-warning' size={60} color='#ffda00' style={{ marginTop: 8 }} />
            case 'INFO':
                return <Icon name='ios-information-circle' size={60} color='#88F' style={{ marginTop: 8 }} />
            case 'ERROR':
                return <IconEntypo name='circle-with-cross' size={60} color='#F55' style={{ marginTop: 8 }} />
            case 'CONFIRM':
                return <Icon name='ios-checkmark-circle' size={60} color='#77e445' style={{ marginTop: 8 }} />
            default:
                return null;
        }
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
                    this.props.closeCallback();
                }}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{
                        backgroundColor: '#FEE', width: '85%', borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderTopRightRadius: 10, overflow: 'hidden'
                    }}>

                        <View style={{ backgroundColor: '#b004bb', height: 100, alignItems: 'center' }}>
                            <Text style={{ color: '#FFF', fontSize: 16 }}>Header-{this.props.headerTXT}</Text>
                            {this.LoadIcon(this.props.logoType)}
                        </View>
                        <View style={{ height: 150, padding: 7, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22 }}>{this.props.bodyTXT}</Text>
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
                                        this.props.btnYesCallback();
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

