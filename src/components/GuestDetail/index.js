
import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image, StyleSheet, TextInput,
    Dimensions
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Button,
    Text,
    Form,
    Item,
    Input,
    Label, H1, H2,
    ActionSheet, Left, Right, Body, Title, Icon
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMatCammu from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisito from 'react-native-vector-icons/Fontisto';

import { fontSizer } from '../../utils/misc';

import { AlertModal } from '../../utils/Modals/AlertModal';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveGuestInfo } from '../../iRedux/Actions/guest_Actions';



// var BUTTONS = [
//     { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
//     { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
//     { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
//     { text: "Delete", icon: "trash", iconColor: "#fa213b" },
//     { text: "Cancel", icon: "close", iconColor: "#25de5b" }
// ];

var BUTTONS = [
    { typeID: 2, text: "Restaurant", icon: "restaurant", iconColor: "#2c8ef4" },
    { typeID: 6, text: "Takeout", icon: "analytics", iconColor: "#f42ced" },
    { typeID: 7, text: "Roof garden", icon: "aperture", iconColor: "#ea943b" },
    { typeID: 0, text: "Cancel", icon: "close", iconColor: "#F00" }
];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;


class GuestDetailsPage extends Component {

    static navigationOptions = {
        // title: 'Home54',
        // headerStyle: {
        //     backgroundColor: '#445100',
        // },
        // headerTintColor: '#f00', // title color and back button color
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
        headerShown: false,
    };


    constructor(props) {
        super(props);
        this.state = {
            modal_Alert_Show: true,
            formData: {
                family: this.props.guestInfo.family || "",
                mobile: this.props.guestInfo.mobile || "",
                deskNumber: this.props.guestInfo.deskNumber || "",
                companions: this.props.guestInfo.companions || "",
                orderType: this.props.guestInfo.orderType || 0
            }
        }
    }



    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    // }

    // backPressed = () => {
    //     //this.props.navigation.goBack();   // if in the same stack      
    //     this.props.navigation.navigate('TAB_bt');
    //     return true;
    // }

    componentWillReceiveProps() {
        console.log('Now inside componentWillReceiveProps------------------------------------------------------');
    }

    updateFormValue = (ev) => {
        ev.persist();
        //const field = event.target.name;   
        //console.log(ev.target.getAttribute('name'));
        console.log(ev.target.name);
        this.setState(state => state.formData[ev.target.name] = ev.target.value,
            () => console.log('***' + JSON.stringify(this.state.formData)));
    }

    handleChange = (txt, inputName) => {
        // event.persist();

        // console.log(event.target.value);
        // this.setState(state => state.formData['family'] = event.target.value);

        this.setState(state => state.formData[inputName] = txt);
    }


    submitForm = () => {
        this.props.saveGuestInfo(this.state.formData);
        // dispatch make reservation
    }

    close_AlertModal_callback_btnReturn = () => {
        this.setState({ modal_Alert_Show: false });
    }

    close_AlertModal_callback = () => {
        this.setState({ modal_Alert_Show: false });
    }


    render() {

        const {
            width: window_width,
            height: window_height } = Dimensions.get('window');

        const trueFontSize = fontSizer(window_width);

        const styles = StyleSheet.create({
            inp: {
                textAlign: 'center',
                backgroundColor: '#FFF',
                borderRadius: 5,
                marginBottom: 15,
                fontSize: trueFontSize,
                height: trueFontSize*2
            },
        });







        return (
            <Container>
                <Header style={{ backgroundColor: '#272221' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('CART')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title></Title>
                    </Body>
                    <Right>
                        {/* <Button transparent>
                            <Text>Cancel</Text>
                        </Button> */}
                    </Right>
                </Header>
                <Content contentContainerStyle={{ flex: 1, backgroundColor: '#F00', }}>
                    <View style={{
                        flex: 1, alignItems: 'center', backgroundColor: '#272221',
                    }}>
                        <Image source={require('../../assets/images/misc/orderDetails.png')}
                            style={{
                                height: 90,
                                width: 80,
                                resizeMode: 'contain',
                                marginBottom: 10
                                // marginLeft: 'auto',
                                // marginRight: 'auto'
                            }} />


                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#EEE',
                            //borderWidth: 1,
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderLeftWidth: 1,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            //justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <View style={{
                                padding: 10,
                                width: '80%',
                                marginTop: 10
                            }}>
                                <H2 style={{ textAlign: 'center', marginBottom: 30 }}>Guest Info</H2>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="md-person" size={1.5*trueFontSize} color="#900" style={{ width: 65 }} />
                                    <Input style={styles.inp} placeholder='Family' />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconFA5 name="mobile-alt" size={1.5*trueFontSize} color="#900" style={{ width: 65 }} />
                                    <Input style={styles.inp} placeholder='mobile' keyboardType="numeric" />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconEntypo name="layers" size={1.5*trueFontSize} color="#900" style={{ width: 65 }} />
                                    <Input style={styles.inp} placeholder='Desk' keyboardType="numeric" />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconFA5 name="users" size={1.5*trueFontSize} color="#900" style={{ width: 65 }} />
                                    <Input style={styles.inp} placeholder='num' keyboardType="numeric" />
                                </View>


                                <TouchableOpacity style={{ marginBottom: 15 }}
                                    onPress={() =>
                                        ActionSheet.show(
                                            {
                                                options: BUTTONS,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                title: "Order Type"
                                            },
                                            buttonIndex => {

                                                //console.log(BUTTONS[buttonIndex]); // logs the object
                                                //this.setState({ [this.state.formData.orderType]: (BUTTONS[buttonIndex]).typeID });
                                                this.setState(state => state.formData.orderType = (BUTTONS[buttonIndex]).typeID);
                                                alert((BUTTONS[buttonIndex]).text);
                                            }
                                        )}
                                >
                                    <View style={{ backgroundColor: '#AAA', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <IconFA name='shopping-bag' size={trueFontSize*2} color="#000" style={{  }} />
                                        <Text style={{ color: '#000', textAlign: 'center', height: 30 }}>  </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this.submitForm}
                                >
                                    <View style={{ backgroundColor: '#ffda00', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#000', textAlign: 'center',  fontSize: trueFontSize }}>  Reserve </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <AlertModal
                        modalVisible={this.state.modal_Alert_Show}
                        returnTXT='OK'
                        bodyTXT='Your request faced Error'
                        logoType='CONFIRM'
                        logoTXT='SUCCESS'
                        btnReturnCallback={this.close_AlertModal_callback_btnReturn}
                        closeCallback={this.close_AlertModal_callback}
                    />
                </Content>
            </Container>
        )
    }
}


//export default GuestDetailsPage;


const mapStateToProps = (state) => {
    return {
        guestInfo: state.guestR
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveGuestInfo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GuestDetailsPage);