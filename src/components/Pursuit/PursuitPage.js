import React, { Component } from 'react';
import {
    //Text, 
    View, StyleSheet,
    ActivityIndicator, StatusBar,
    Image,
    //Button,
    BackHandler, ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Button,
    Text,
    Body, Left, Right, Icon,
    Title,
} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMatCommu from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    // outerCircle: {
    //     borderRadius: 40,
    //     width: 80,
    //     height: 80,
    //     backgroundColor: 'white',
    //     borderWidth: 1,
    //     borderColor: '#F00'
    // },
    innerCircle: {
        borderRadius: 35,
        width: 70,
        height: 40,
        margin: 20,
        backgroundColor: '#111'
    },
    backgroundImage: {
        //flex: 1,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover', // or 'stretch'
    }
});



class PursuitPage extends Component {

    state = {
        confirmed: true,
        cooking: true,
        onTheWay: false,
        delivered: false
    }


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


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        this.props.navigation.goBack();   // if in the same stack      
        //this.props.navigation.navigate('LANDING');
        
        return true;
    }


    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                    {/* <Content> */}
                    <Header transparent style={{ backgroundColor: '#ffda00' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='arrow-back' style={{ color: '#000' }} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ color: '#000' }}>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' style={{ color: '#000' }} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <Image source={require('../../assets/images/Pursuit/woodenBG.jpg')} style={styles.backgroundImage} />
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#FFFFFFAA', borderRadius: 10, width: '90%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }}>
                                    <IconFA5 name='list-ol' size={23} style={{ color: '#000', paddingRight: 10 }} />
                                    <Text style={{ fontSize: 20 }}>Order Id: </Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>3457</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }}>
                                    <IconFA5 name='user-alt' size={23} style={{ color: '#000', paddingRight: 10 }} />
                                    <Text style={{ fontSize: 20 }}>Customer Name: </Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Asadi</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }}>
                                    <IconMatCommu name='layers' size={25} style={{ color: '#000', paddingRight: 10 }} />
                                    <Text style={{ fontSize: 20 }}>Desk Number: </Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>5</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', marginTop: 10 }}>

                                    <Text style={{ color: '#FFF', width: '30%', textAlign: 'center' }}>Confirmed</Text>
                                    <View style={{ width: '30%', alignItems: 'center' }}>
                                        <View style={{
                                            borderStyle: 'dotted',
                                            height: 80,
                                            backgroundColor: this.state.confirmed ? '#0eb347' : '#000',
                                            width: 8,
                                            position: 'absolute',
                                            top: 20,
                                            left: '47%'
                                        }} />
                                        <View style={[styles.innerCircle, { justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.confirmed ? '#0eb347' : '#000' }]}>
                                            {
                                                this.state.confirmed ?
                                                    <IconFA5 name='check-double' size={20} style={{ color: '#FFF', }} /> :
                                                    null
                                                // <IconMatCommu name='timer-sand' size={35} style={{ color: '#FFF', }} />
                                            }
                                        </View>
                                    </View>
                                    <Text style={{ color: '#FFF', width: '40%' }}>13:53:41</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF', width: '30%', textAlign: 'center' }}>Cooking</Text>
                                    <View style={{ width: '30%', alignItems: 'center' }}>
                                        <View style={{
                                            borderStyle: 'dotted',
                                            height: 80,
                                            backgroundColor: this.state.cooking ? '#0eb347' : '#000',
                                            width: 8,
                                            position: 'absolute',
                                            top: 20,
                                            left: '47%'
                                        }} />
                                        <View style={[styles.innerCircle, { justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.cooking ? '#0eb347' : '#000', }]}>
                                            {
                                                this.state.cooking ?
                                                    <IconMatCommu name='pot' size={25} style={{ color: '#FFF', }} /> :
                                                    null
                                                // <IconMatCommu name='timer-sand' size={35} style={{ color: '#FFF', }} />
                                            }
                                        </View>
                                    </View>
                                    <Text style={{ color: '#FFF', width: '40%' }}>13:58:09</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF', width: '30%', textAlign: 'center' }}>On the way</Text>
                                    <View style={{ width: '30%', alignItems: 'center' }}>
                                        <View style={{
                                            borderStyle: 'dotted',
                                            height: 80,
                                            backgroundColor: this.state.onTheWay ? '#0eb347' : '#000',
                                            width: 8,
                                            position: 'absolute',
                                            top: 20,
                                            left: '47%'
                                        }} />
                                        <View style={[styles.innerCircle, { justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.onTheWay ? '#0eb347' : '#000', }]}>
                                            {
                                                this.state.onTheWay ?
                                                    <IconFA5 name='shipping-fast' size={25} style={{ color: '#FFF', }} /> :
                                                    null
                                                // <IconMatCommu name='timer-sand' size={35} style={{ color: '#FFF', }} />
                                            }
                                        </View>
                                    </View>
                                    <Text style={{ color: '#FFF', width: '40%' }}>14:20:55</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF', width: '30%', textAlign: 'center' }}>Delivered</Text>
                                    <View style={{ width: '30%', alignItems: 'center' }}>
                                        <View style={[styles.innerCircle, { justifyContent: 'center', alignItems: 'center',backgroundColor: this.state.delivered ? '#0eb347' : '#000', }]}>
                                            {
                                                this.state.delivered ?
                                                    <IconMatCommu name='cube-send' size={35} style={{ color: '#FFF', }} /> :
                                                    null
                                                // <IconMatCommu name='timer-sand' size={35} style={{ color: '#FFF', }} />
                                            }
                                        </View>
                                    </View>
                                    <Text style={{ color: '#FFF', width: '40%', }}>14:21:35</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}


export default PursuitPage;