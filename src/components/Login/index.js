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
    StyleSheet
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconEnty from 'react-native-vector-icons/Entypo';


import { saveGuestMobile } from '../../iRedux/Actions/guest_Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    gracefulCurve: {
        borderWidth: 1,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 15,
        borderBottomColor: '#f96bd4',
    }
});

class LoginPage extends Component {

    state = {
        backClickCount: 0,
        LoginGuest: false,
        LoginGarson: false,
        showCards: true,
        mobileSent: false,
        mobileNumber: '',
        randomInt: 0, // random 3-digit int that sent to user via SMS
        verifySMS: 0, // the number to verify the SMS code received
        timerMinute: 0,
        timerSecond: 20
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

    componentWillUnmount() {
        clearInterval(this.interval);
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
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {

        this.props.navigation.goBack(null);

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




    render() {


        return (
            <>
                <Container style={{ backgroundColor: '#f96bd4' }}>
                    <Header style={{ backgroundColor: '#ffda00' }}>
                        <Left>
                        </Left>
                        <Body>
                            <Title style={{ color: '#000' }}>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent
                                onPress={() => alert('open top picker menu')}
                            >
                                <IconEnty name='dots-three-vertical' color='#000' size={20} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{ flex: 1 }}>
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
                                            <Image source={require('../../assets/images/Login/banner1.jpg')} style={{ width: '100%', height: 250 }} />

                                            <Form>
                                                <FormItem floatingLabel>
                                                    <Label><Icon active name='user-alt' size={24} style={{ color: '#000', width: '10%' }} /> Username</Label>
                                                    <Input style={{ width: '90%', textAlign: 'center' }} />
                                                </FormItem>
                                                <FormItem floatingLabel last>
                                                    <Label><Ionicons active name='ios-lock' size={24} style={{ color: '#000', width: '10%' }} />    Password</Label>
                                                    <Input secureTextEntry={true} style={{ width: '90%', textAlign: 'center' }} />
                                                </FormItem>



                                                <Button block primary style={{ width: '40%', marginTop: 50, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                                                    onPress={() => {
                                                        this.props.navigation.navigate('LANDING_st');
                                                    }}
                                                >
                                                    <Text style={{}}> Login </Text>
                                                </Button>
                                                <Button transparent style={{ width: '40%', marginTop: 10, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                                                    onPress={() => {
                                                        this.setState({
                                                            LoginGarson: false,
                                                            showCards: true,
                                                        });
                                                    }}>
                                                    <Text>بازگشت</Text>
                                                </Button>
                                            </Form>
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
                                                            console.log('=============> '+JSON.stringify(this.state.verifySMS));
                                                            console.log('=============> '+JSON.stringify(this.state.randomInt));
                                                            //this.props.navigation.navigate('LAND');
                                                            if(parseInt(this.state.verifySMS) === parseInt(this.state.randomInt)) {
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
                                                mobileSent: false
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
                            <View style={{ height: 70, backgroundColor: '#f96bd4' }}>
                                {/* <Text>fixed content: FOOD ICON SLIDER</Text> */}
                            </View>
                        }
                    </View>
                </Container>
            </>
        )
    }
}


//export default LoginPage;

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveGuestMobile }, dispatch);
}


export default connect(null, mapDispatchToProps)(LoginPage);