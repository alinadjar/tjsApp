
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
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#FFF',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderWidth: 2,
                borderColor: '#F00',                
            }}>
                <Image source={require('../../assets/images/Splash/splashBG2.jpg')}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        resizeMode: 'cover'
                    }} />
                {/* <Text> This is the Splash Screen ... for 3 Seconds!</Text> */}

                <StatusBar barStyle="default" barStyle="light-content" backgroundColor="#272221" />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color='#FFF' />
                    <Image source={require('../../assets/images/Splash/logo.png')} style={{ width: '40%', resizeMode: 'contain' }} />
                    <Text> TJS </Text>
                    <Text style={{ color: '#EEE', position: 'absolute', bottom: 0 }}>v{APP_VERSION}</Text>
                </View>
                <View style={{ height: 30, backgroundColor: '#FFF', borderTopLeftRadius: -30 }}>

                </View>
            </View>
        )
    }


    componentDidMount() {
        setTimeout(() => {
            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            this.props.navigation.navigate('APP');

        }, 30000);
    }


}

export default SplashScreen;