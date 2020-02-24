import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image,
    //Button,
    BackHandler, ToastAndroid,
    Platform,
    AlertIOS,
    ScrollView,
    SafeAreaView,
    TextInput
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

class LoginPage extends Component {

    state = {
        backClickCount: 0,
        LoginGuest: false,
        LoginGarson: false,
        showCards: true,
        mobileSent: false
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
            <Container>
                {/* <Header>
                    <Left></Left>
                    <Body>
                        <Title>Best App Ever!</Title>
                    </Body>
                    <Right></Right>
                </Header> */}

                <ScrollView style={{ flex: 1 }}>
                    <>

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
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#DDD'
                            }}>

                                {
                                    !this.state.mobileSent &&
                                    <View>
                                        <Text> Mobile Number:</Text>
                                        <Input style={{ borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#F00', }} maxLength={11} placeholder='0000-000-0000' />
                                        <Button block primary style={{ width: '40%', marginTop: 50, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                                            onPress={() => {
                                                alert('SMS to be sent...');
                                                this.setState({ mobileSent: true });
                                            }}
                                        >
                                            <Text style={{}}> ارسال </Text>
                                        </Button>
                                    </View>
                                }

                                {
                                    this.state.mobileSent &&
                                    <>
                                        <Text> Enter the Received Code: </Text>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                                            <TextInput
                                                autoFocus={true}
                                                maxLength={1}
                                                style={{ backgroundColor: '#FFF', width: '20%', textAlign: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 10 }}
                                                onChange={() => this.secondTextInput.focus()} />
                                            <TextInput
                                                ref={(input) => { this.secondTextInput = input; }}
                                                maxLength={1}
                                                style={{ backgroundColor: '#FFF', width: '20%', textAlign: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 10, marginRight: '5%', marginLeft: '5%' }}
                                                onChange={() => this.thirdTextInput.focus()} />
                                            <TextInput
                                                ref={(input) => { this.thirdTextInput = input; }}
                                                maxLength={1}
                                                style={{ backgroundColor: '#FFF', width: '20%', textAlign: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 10, }} />
                                        </View>
                                    </>
                                }


                                <Button transparent primary onPress={() => this.setState({
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
                            <>
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
                                            height: 150,
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
                                <Card>
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
                                            height: 100,
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
                            </>
                        }


                    </>
                </ScrollView>
            </Container>


            // </View>
        )
    }
}


export default LoginPage;