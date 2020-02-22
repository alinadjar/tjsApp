
import React, {Component} from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
} from 'react-native';
import {
    Container,
    Header,
    Button,
    Text,
} from 'native-base';

class SplashScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent:'center' }}>
                <Text> This is the Splash Screen ... for 3 Seconds!</Text>
                <ActivityIndicator size="large" color='red' />
                <StatusBar barStyle="default" barStyle="light-content" backgroundColor="#F99" />
            </View>
        )
    }


    componentDidMount() {
        setTimeout(() => {
            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            this.props.navigation.navigate('APP');

        }, 2000);
    }


}

export default SplashScreen;