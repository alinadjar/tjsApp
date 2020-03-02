import React, { Component } from 'react';
import {
    View, Text,
    Modal, TouchableHighlight, Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';


export class AlertModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


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

    SetFooterColor = (logoType) => {
        
        switch (logoType) {
            case 'WARNING':                 
                return {
                    backgroundColor: '#ffed99'
                }              
            case 'INFO':                
                return {
                    backgroundColor: '#72d2f9'
                }                 
            case 'ERROR':                
                return {
                    backgroundColor: '#E55'
                } 
            case 'CONFIRM':                
                return {
                    backgroundColor: '#9df972'
                }                
            default:
                return {
                    backgroundColor: 'transparent'
                }
        }
    }


    SetFooterBtnColor = (logoType) => {
        
        switch (logoType) {
            case 'WARNING':                 
                return {
                    backgroundColor: '#ffda00'
                }              
            case 'INFO':                
                return {
                    backgroundColor: '#55F'
                }                 
            case 'ERROR':                
                return {
                    backgroundColor: '#F21'
                } 
            case 'CONFIRM':                
                return {
                    backgroundColor: '#14ae34'
                }                
            default:
                return {
                    backgroundColor: 'transparent'
                }
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

                        <View style={{ alignItems: 'center', marginBottom: 10, paddingBottom: 20 }}>
                            {this.LoadIcon(this.props.logoType)}
                            <Text style={{ color: '#333', fontSize: 16 }}>{this.props.logoTXT}</Text>
                            <Text style={{ fontSize: 22 }}>{this.props.bodyTXT}</Text>
                        </View>


                        <View style={[{ 
                            flexDirection: 'row', 
                            height: 80, 
                            backgroundColor: '#F55', 
                            justifyContent: 'center', 
                            alignItems: 'center' }, this.SetFooterColor(this.props.logoType)]}>

                            <View style={{
                                position: 'absolute',
                                top: 0,
                                width: 0,
                                height: 0,
                                backgroundColor: 'transparent',
                                borderStyle: 'solid',
                                borderTopWidth: 0,
                                borderRightWidth: 10,
                                //borderBottomWidth: 25,
                                borderTopWidth: 10,
                                borderLeftWidth: 10,
                                borderTopColor: '#FEE',
                                borderRightColor: 'transparent',
                                borderBottomColor: 'red',
                                borderLeftColor: 'transparent',
                                marginBottom: -10
                            }}>
                            </View>
                            <View style={{ 
                                height: 40, 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                paddingTop: 5, 
                                paddingBottom: 5 }}>
                                <TouchableHighlight style={[{ 
                                    backgroundColor: '#E21', 
                                    borderRadius: 5, 
                                    paddingLeft: 10, 
                                    paddingRight: 10, 
                                    width: 100 }, this.SetFooterBtnColor(this.props.logoType)]}
                                    onPress={() => {
                                        this.props.btnReturnCallback();
                                    }}>
                                    <Text style={{ color: '#EEE', fontSize: 20, padding: 2, textAlign: 'center' }}>{this.props.returnTXT}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>


                    </View>
                </View>
            </Modal>
        );
    }
}

