
import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar, Image
} from 'react-native';
import {
    Container,
    Header,
    Button,
    Text,
} from 'native-base';
import { APP_VERSION } from '../../utils/misc';

class SplashScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Image source={require('../../assets/images/Splash/splashBG2.jpg')}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        resizeMode: 'cover'
                    }} />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    // backgroundColor: '#FFF',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginTop: -80,
                    // borderWidth: 2,
                    // borderColor: '#F00',
                    // width: '100%',
                }}>
                    <StatusBar barStyle="default" barStyle="light-content" backgroundColor="#272221" />


                    {/* <Text> This is the Splash Screen ... for 3 Seconds!</Text> */}



                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color='#FFF' />
                        <Image source={require('../../assets/images/Splash/logo.png')} style={{ width: '30%', resizeMode: 'contain' }} />
                        <Text style={{marginTop: -20}}> TJS </Text>
                        <Text style={{ color: '#EEE', position: 'absolute', bottom: 0 }}>v{APP_VERSION}</Text>
                    </View>
                    
                </View>
            </View>
        )
    }


    componentDidMount() {
        setTimeout(() => {
            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            this.props.navigation.navigate('APP');

        }, 3000);
    }


}

export default SplashScreen;