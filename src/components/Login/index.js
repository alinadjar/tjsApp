import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator,
    Image,
    //Button,
    BackHandler, ToastAndroid,
    Platform,
    AlertIOS,
    ScrollView,
    SafeAreaView,
    TextInput,
    StyleSheet, Picker
} from 'react-native';
import {
    Container,
    Header,
    Button,
    Text,
    Body, Left, Right,
    Card, CardItem,
    Thumbnail,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
} from 'native-base';

import { LoadingComponent } from '../../utils/LoadingComponent';
import { AlertModal } from '../../utils/Modals/AlertModal';
import { SettingsModal } from './SettingsModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconEnty from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMatCommu from 'react-native-vector-icons/MaterialCommunityIcons';


import { saveGuestMobile } from '../../iRedux/Actions/guest_Actions';
import { authenticate_Garson } from '../../iRedux/Actions/login_Actions';
import { set_WhoAmI } from '../../iRedux/Actions/misc_Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { storeData, getData } from '../../utils/misc';



import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
} from 'react-native-popup-menu';

const { SlideInMenu } = renderers;


const styles = StyleSheet.create({
    gracefulCurve: {
        borderWidth: 1,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 20,
        borderBottomColor: '#000',
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: '#272221',
        paddingTop: 15,
    },
    trigger: {
        padding: 5,
        margin: 5,
    },
    triggerText: {
        color: 'white',
    },
    disabled: {
        color: '#ccc',
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logView: {
        flex: 1,
        flexDirection: 'column',
    },
    logItem: {
        flexDirection: 'row',
        padding: 8,
    },
    slideInOption: {
        padding: 5,
    },
    text: {
        fontSize: 18,
    },
});


class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.interval = 0;


        this.state = {
            backClickCount: 0,
            LoginGuest: false,
            LoginGarson: false,
            showCards: true,
            mobileSent: false,
            mobileNumber: '',
            randomInt: 0, // random 3-digit int that sent to user via SMS
            verifySMS: 0, // the number to verify the SMS code received
            timerMinute: 0,
            timerSecond: 20,
            show_settings_modal: true,
            API_ADDRESS: '',
            garsonName: '',
            garsonPassword: '',
            loading: false,
            modal_Alert_Show: false
        }



    }




    // componentDidMount() {
    //     this.interval = setInterval(
    //         () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
    //         1000
    //     );
    // }


    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.timerMinute + ':' + this.state.timerSecond)
        if (prevState.timerMinute === 0 && prevState.timerSecond === 0) {
            clearInterval(this.interval);
            console.log('Cleared interval.............................');
            //alert('timeover .... => goto cards');
            this.setState(prev => {
                return {
                    ...prev,
                    LoginGarson: false,
                    LoginGuest: false,
                    showCards: true,
                    mobileSent: false,
                    randomInt: 0
                }
            }, () => console.log('callBack of setState'));
        }
    }




    // componentDidMount() {
    //     console.log('Adding Listener');
    //     this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    // }



    // componentWillUnmount() {
    //     console.log('********************');
    //     // BackHandler.removeEventListener('hardwareBackPress');
    //     this.backHandler.remove();
    // }


    // handleBackButton = () => {
    //     this.setState({ 'backClickCount': this.state.backClickCount + 1 })
    //     this.checkBackClick();
    //     return true
    // }


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        clearInterval(this.interval);

        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {

        //this.props.navigation.goBack(null);        
        //BackHandler.exitApp();        
        return true;
    }


    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    // }

    // handleBackPress = () => {
    //     //this.props.navigation.push("you want Screen");
    //     this.props.navigation.goBack(null); // If your SCreen in Same Stack
    //     console.log('backPressed in Login-------------------');

    //     const msg = 'Press again to Exit';

    //     this.setState({ 'backClickCount': this.state.backClickCount + 1 });
    //     console.log(this.state.backClickCount);
    //     if (Platform.OS === 'android') {
    //         ToastAndroid.show(msg, ToastAndroid.SHORT)
    //     } else {
    //         AlertIOS.alert(msg);
    //     }

    //     return true;
    // }

    //--------------------------------------------------

    // componentDidMount() {
    //     console.log('Now inside componentWillMount');
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }

    // componentWillUnmount() {
    //     console.log('Now inside componentWillUnmount');
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }

    // handleBackButtonClick = () => {
    //     console.log('here');
    //     this.setState({ 'backClickCount': this.state.backClickCount + 1 });
    //     console.log(this.state.backClickCount);
    //     if (this.state.backClickCount < 2) {
    //         // Toast.show({
    //         //     text: `Press back again to exit App `,
    //         //     duration: 2000,
    //         //     onClose: () => { this.setState({ 'clickcount': 0 }) }
    //         // })
    //         const msg = 'Press again to Exit';
    //         if (Platform.OS === 'android') {
    //             ToastAndroid.show(msg, ToastAndroid.SHORT)
    //         } else {
    //             AlertIOS.alert(msg);
    //         }

    //         // timeout for fade and exit
    //         setTimeout(() => {
    //             this.setState({ 'backClickCount': 0 })
    //         }, 2000);

    //     }
    //     else if (this.state.backClickCount == 2) {
    //         BackHandler.exitApp()
    //     }

    //     this.props.navigation.goBack(null);
    //     return true;
    // }


    close_settingsModal_callback_btnYes = async (IP) => {
        alert('going to save in LocalStorage');

        let result = await storeData('@API_BASEURL', IP);
        if (result == true) {
            alert('write to asyncStorage successful');
        }
        else {
            alert('write to asyncStorage failed');
        }
        this.setState({ show_settings_modal: false });
    }


    close_settingsModal_callback_btnNo = () => {
        this.setState({ show_settings_modal: false });
    }


    // context menu item selected
    selectOptionType = async (value) => {
        switch (value) {
            case 'IP':
                this.setState({
                    show_settings_modal: true,
                    API_ADDRESS: await getData('@API_BASEURL')
                });
                break;
            case 'SETTING':
                alert('Setting');
                break;
            case 'EXIT':
                //alert('exit');
                BackHandler.exitApp();
                break;
        }
    }


    close_AlertModal_callback_btnReturn = () => {
        this.setState({ modal_Alert_Show: false });
    }


    close_AlertModal_callback = () => {
        this.setState({ modal_Alert_Show: false });
    }


    render() {


        return (
            <>
                <MenuProvider style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}>

                        <View style={styles.topbar}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 18, color: '#EEE' }}>Header</Text>
                            </View>
                            <Menu name="types" onSelect={value => this.selectOptionType(value)}
                                onBackdropPress={() => console.log('menu will be closed by backdrop')}
                                onOpen={() => console.log('menu is opening')}
                                onClose={() => console.log('menu is closing')}
                            >
                                <MenuTrigger
                                    onAlternativeAction={() => console.log('trigger longpressed')}
                                    style={styles.trigger}>
                                    <Text style={[styles.text, styles.triggerText]}><IconEnty name='dots-three-vertical' color='#EEE' size={20} /></Text>
                                </MenuTrigger>
                                <MenuOptions customStyles={{ optionText: styles.text }}>
                                    <MenuOption value="IP"><Text> <IconMatCommu name='server-network' size={18} style={{ color: '#44F' }} /> Server IP</Text></MenuOption>
                                    <MenuOption value="SETTING" disabled={true} ><Text style={{ color: '#AAA' }}><Ionicons name='ios-settings' size={20} style={{ color: '#AAA' }} /> Settings</Text></MenuOption>
                                    <View style={styles.divider} />
                                    {/* <MenuOption value={{ text: 'Hello world!' }} text='Object as value' /> */}
                                    <MenuOption value="EXIT" ><Text><IconAnt name='logout' size={18} style={{ color: '#44F' }} /> Exit</Text></MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                        {/* <Container style={{ backgroundColor: '#f96bd4' }}> */}

                        <View style={{ flex: 1, backgroundColor: '#ffda00' }}>
                            <View style={[{
                                flex: 1,
                                backgroundColor: '#FFF'
                            }, this.state.showCards ? styles.gracefulCurve : {}]}>
                                <ScrollView>
                                    <View style={{
                                        flex: 1, backgroundColor: '#FFF', justifyContent: 'center', marginTop: 5,
                                        marginBottom: 5
                                    }}>

                                        {
                                            this.state.LoginGarson &&
                                            <View style={{}}>
                                                <Image source={require('../../assets/images/Login/banner1.jpg')} style={{ width: '100%' }} />

                                                <View style={{
                                                    borderWidth: 1,
                                                    borderTopLeftRadius: 40,
                                                    borderTopRightRadius: 40,
                                                    marginTop: '-60%',
                                                    backgroundColor: '#FFF',
                                                    borderBottomColor: '#FFF'
                                                }}>
                                                    <Form>
                                                        <FormItem floatingLabel>
                                                            <Label><Icon active name='user-alt' size={24} style={{ color: '#000', width: '10%' }} /> Username</Label>
                                                            <Input
                                                                style={{ width: '90%', textAlign: 'center' }}
                                                                value={this.state.garsonName}
                                                                onChangeText={txt => this.setState({ garsonName: txt })}
                                                            />
                                                        </FormItem>
                                                        <FormItem floatingLabel last>
                                                            <Label><Ionicons active name='ios-lock' size={24} style={{ color: '#000', width: '10%' }} />    Password</Label>
                                                            <Input
                                                                secureTextEntry={true}
                                                                style={{ width: '90%', textAlign: 'center' }}
                                                                value={this.state.garsonPassword}
                                                                onChangeText={txt => this.setState({ garsonPassword: txt })}
                                                            />
                                                        </FormItem>



                                                        {/* <Button block primary style={{ width: '40%', marginTop: 50, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                                                    onPress={() => {
                                                        this.props.navigation.navigate('LANDING_st');
                                                    }}
                                                >
                                                    <Text style={{}}> Login </Text>
                                                </Button> */}
                                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                                            <TouchableOpacity
                                                                onPress={() => {
                                                                    let obj = {
                                                                        username: this.state.garsonName,
                                                                        password: this.state.garsonPassword
                                                                    };

                                                                    this.setState({ loading: true });
                                                                    this.props.authenticate_Garson(obj)
                                                                        .then(res => {
                                                                            this.setState({ loading: false });
                                                                            if (res.status === 200) {
                                                                                this.props.navigation.navigate('LANDING_st');
                                                                            } else {
                                                                                console.log('res faced error');
                                                                                //alert('request faced error');
                                                                                this.setState({ modal_Alert_Show: true });
                                                                            }

                                                                        });
                                                                }} // end onPress
                                                            >
                                                                <View style={{ backgroundColor: '#FFDA00', marginTop: 50, width: '100%', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Text style={{ color: '#000', textAlign: 'center', height: 30 }}> Login</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                            <Button transparent style={{ marginTop: 10, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                                                                onPress={() => {
                                                                    this.setState({
                                                                        LoginGarson: false,
                                                                        showCards: true,
                                                                    });
                                                                }}>
                                                                <Text>بازگشت</Text>
                                                            </Button>
                                                        </View>
                                                    </Form>
                                                </View>
                                            </View>
                                        }

                                        {
                                            this.state.LoginGuest &&
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: '10%',
                                                backgroundColor: '#FFF'
                                            }}>

                                                {
                                                    !this.state.mobileSent &&
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                                        <Text> Mobile Number:</Text>
                                                        <Input style={{ borderWidth: 0, borderBottomWidth: 1, height: 40, textAlign: 'center', fontSize: 27, borderBottomColor: '#F00', borderRadius: 5, backgroundColor: '#FFF' }}
                                                            maxLength={11} placeholder='0000-000-0000' keyboardType="numeric"
                                                            value={this.state.mobileNumber} onChangeText={txt => this.setState(state => state.mobileNumber = txt)} />
                                                        <Button block primary style={{ marginTop: 10, textAlign: 'center' }}
                                                            onPress={() => {
                                                                alert('SMS to be sent...');
                                                                this.setState({ mobileSent: true },
                                                                    () => this.props.saveGuestMobile(this.state.mobileNumber));


                                                                const min = 100;
                                                                const max = 999;
                                                                const rand = min + Math.random() * (max - min);
                                                                this.setState({ randomInt: Math.round(rand), verifySMS: 0 });
                                                                console.log(Math.round(rand));
                                                                // Axios Call to API and send SMS
                                                                // [POST] /api/v1/SendSMS/{mobile: 09150000, msg: 748}



                                                                this.interval = setInterval(
                                                                    () => this.setState((prevState) => {
                                                                        return {
                                                                            timerMinute: Math.max(prevState.timerSecond === 0 ? prevState.timerMinute - 1 : prevState.timerMinute, 0),
                                                                            timerSecond: prevState.timerSecond - 1 < 0 ? 59 : (prevState.timerSecond - 1)
                                                                        }
                                                                    }),
                                                                    1000
                                                                );
                                                            }}
                                                        >
                                                            <Text> ارسال </Text>
                                                        </Button>
                                                    </View>
                                                }

                                                {
                                                    this.state.mobileSent &&
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                                        <Text> Enter the Received Code: </Text>
                                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', padding: 20, width: '80%' }}>
                                                            <TextInput
                                                                autoFocus={true}
                                                                maxLength={1}
                                                                keyboardType="numeric"
                                                                style={{ backgroundColor: '#FFF', width: 70, textAlign: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 10 }}
                                                                onChangeText={(num) => { this.setState({ verifySMS: num }); this.secondTextInput.focus(); }} />
                                                            <TextInput
                                                                ref={(input) => { this.secondTextInput = input; }}
                                                                maxLength={1}
                                                                keyboardType="numeric"
                                                                style={{ backgroundColor: '#FFF', width: 70, textAlign: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 10, marginRight: '5%', marginLeft: '5%' }}
                                                                onChangeText={(num) => {
                                                                    this.setState({ verifySMS: parseInt(this.state.verifySMS) * 10 + parseInt(num) });
                                                                    this.thirdTextInput.focus();
                                                                }} />
                                                            <TextInput
                                                                ref={(input) => { this.thirdTextInput = input; }}
                                                                maxLength={1}
                                                                keyboardType="numeric"
                                                                style={{ backgroundColor: '#FFF', width: 70, textAlign: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 10, }}
                                                                onChangeText={(num) => {
                                                                    this.setState({ verifySMS: parseInt(this.state.verifySMS) * 10 + parseInt(num) });
                                                                }} />
                                                        </View>
                                                        <Button block primary style={{ marginTop: 10, textAlign: 'center' }}
                                                            onPress={() => {
                                                                //alert('SMS code: ' + JSON.stringify(this.state.verifySMS));
                                                                console.log('=============> ' + JSON.stringify(this.state.verifySMS));
                                                                console.log('=============> ' + JSON.stringify(this.state.randomInt));
                                                                //this.props.navigation.navigate('LAND');
                                                                if (parseInt(this.state.verifySMS) === parseInt(this.state.randomInt)) {
                                                                    this.props.set_WhoAmI('guest');
                                                                    this.props.navigation.navigate('LAND');
                                                                }
                                                            }}
                                                        >
                                                            <Text> تایید </Text>
                                                        </Button>
                                                        <View style={{ marginBottom: 20, marginTop: 15, backgroundColor: '#000', borderRadius: 5, padding: 10, paddingRight: 30, paddingLeft: 30, flexDirection: 'row' }}>
                                                            <IconEnty name='stopwatch' size={25} color='#EEE' style={{ padding: 5 }} />
                                                            <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold' }}> {this.state.timerMinute} : {this.state.timerSecond}</Text>
                                                        </View>

                                                    </View>
                                                }


                                                <Button transparent onPress={() => this.setState({
                                                    LoginGuest: false,
                                                    showCards: true,
                                                    mobileSent: false,
                                                    mobileNumber: ''
                                                })}>
                                                    <Text>بازگشت</Text>
                                                </Button>

                                            </View>

                                        }


                                        {
                                            this.state.showCards &&
                                            <View>
                                                <Card>
                                                    <CardItem>
                                                        <Left>
                                                            <Thumbnail source={require("../../assets/images/Login/thumbnail_guest.png")} />
                                                            <Body>
                                                                <Text> Food Menu</Text>
                                                                <Text note>Welcome </Text>
                                                            </Body>
                                                        </Left>
                                                    </CardItem>
                                                    <CardItem cardBody>
                                                        <Image source={require("../../assets/images/Login/guest.png")} style={{
                                                            height: 50,
                                                            width: null,
                                                            flex: 1,
                                                            resizeMode: 'contain'
                                                        }} />
                                                    </CardItem>
                                                    <CardItem>
                                                        <Left>
                                                            <Button transparent>
                                                                <Text></Text>
                                                            </Button>
                                                        </Left>
                                                        <Body>
                                                            <Button transparent onPress={() => this.setState({ LoginGuest: true, showCards: false })}>
                                                                <Text>ورود مهمان</Text>
                                                            </Button>
                                                        </Body>
                                                        <Right>
                                                            <Text></Text>
                                                        </Right>

                                                    </CardItem>
                                                </Card>
                                                <Card style={{}}>
                                                    <CardItem>
                                                        <Left>
                                                            <Thumbnail source={require("../../assets/images/Login/thumbnail_garson.jpg")} />
                                                            <Body>
                                                                <Text>Captain Login</Text>
                                                                <Text note>Take Order</Text>
                                                            </Body>
                                                        </Left>
                                                    </CardItem>
                                                    <CardItem cardBody>
                                                        <Image source={require("../../assets/images/Login/garson.png")} style={{
                                                            height: 50,
                                                            width: null,
                                                            flex: 1,
                                                            resizeMode: 'contain'
                                                        }} />
                                                    </CardItem>
                                                    <CardItem>
                                                        <Left>
                                                            <Button transparent>
                                                                <Text></Text>
                                                            </Button>
                                                        </Left>
                                                        <Body>
                                                            <Button transparent onPress={() => this.setState({ LoginGarson: true, showCards: false })}>
                                                                <Text>ورود گارسن</Text>
                                                            </Button>
                                                        </Body>
                                                        <Right>
                                                            <Text></Text>
                                                        </Right>
                                                    </CardItem>
                                                </Card>
                                            </View>
                                        }


                                    </View>
                                </ScrollView>
                            </View>
                            {
                                this.state.showCards &&
                                <View style={{ height: 50, backgroundColor: '#ffda00' }}>
                                    {/* <Text>fixed content: FOOD ICON SLIDER</Text> */}
                                </View>
                            }


                            <SettingsModal
                                modalVisible={this.state.show_settings_modal}
                                placehold={this.state.API_ADDRESS}
                                headerTXT=''
                                yesTXT='OK'
                                noTXT='Cancel'
                                bodyTXT="Set the API's base address:"
                                logoType='WARNING'
                                btnYesCallback={this.close_settingsModal_callback_btnYes}
                                btnNoCallback={this.close_settingsModal_callback_btnNo}
                            />
                        </View>
                        {/* </Container> */}

                    </View>
                    {this.state.loading &&
                        <LoadingComponent />
                    }
                    <AlertModal
                        modalVisible={this.state.modal_Alert_Show}
                        returnTXT='return'
                        bodyTXT='Your request faced Error'
                        logoType='ERROR'
                        logoTXT='ERROR'
                        btnReturnCallback={this.close_AlertModal_callback_btnReturn}
                        closeCallback={this.close_AlertModal_callback}
                    />
                </MenuProvider>

            </>
        )
    }
}


//export default LoginPage;

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveGuestMobile, authenticate_Garson, set_WhoAmI }, dispatch);
}


export default connect(null, mapDispatchToProps)(LoginPage);