import React, { Component } from 'react';
import {
    Text, View,
    ActivityIndicator, StatusBar, Button,
    BackHandler, ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';

import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';


// SCREENS


class SplashScreen extends Component {
    render() {
        return (
            <View>
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



class LoginPage extends Component {

    state = {
        backClickCount: 0
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
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        //this.props.navigation.push("you want Screen");
        this.props.navigation.goBack(null); // If your SCreen in Same Stack
        console.log('backPressed in Login-------------------');

        const msg = 'Press again to Exit';

        this.setState({ 'backClickCount': this.state.backClickCount + 1 });
        console.log(this.state.backClickCount);
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
        }

        return true;
    }



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
            <View>
                <Text> Login Page </Text>
                <Button
                    title="Landing"
                    onPress={() => {
                        //this.backHandler.remove();
                        this.props.navigation.navigate('LANDING_st');
                    }}
                />
            </View>
        )
    }
}




class LandigPage extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        console.log('backPressed in Landing Page');
        //this.props.navigation.goBack();   // if in the same stack      
        this.props.navigation.navigate('LOGIN');
        return true;
    }


    render() {
        return (
            <View>
                <Text> Landig Page .... </Text>
                <Button
                    title="Tab"
                    onPress={() => this.props.navigation.navigate('TAB_bt')}
                />
                <Button
                    title="Pursuit"
                    onPress={() => this.props.navigation.navigate('PURSUIT')}
                />
            </View>
        )
    }
}

class PursuitPage extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        //this.props.navigation.goBack();   // if in the same stack      
        this.props.navigation.navigate('LANDING');
        return true;
    }


    render() {
        return (
            <View>
                <Text> Pursuit Page .... </Text>
            </View>
        )
    }
}


class FoodPage extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {

        //this.props.navigation.goBack();   // if in the same stack      
        this.props.navigation.navigate('FOODLIST');
        return true;
    }

    render() {
        return (
            <View>
                <Text> Food Page .... </Text>
            </View>
        )
    }
}


class MenuPage extends Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {

        //this.props.navigation.goBack();   // if in the same stack      
        this.props.navigation.navigate('LANDING_st');
        return true;
    }


    render() {
        return (
            <View>
                <Text> Menu Page .... </Text>
                <Button
                    title="FOOD_PAGE"
                    onPress={() => this.props.navigation.navigate('FOODITEM')}
                />
            </View>
        )
    }
}



class GuestDetailsPage extends Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        //this.props.navigation.goBack();   // if in the same stack      
        this.props.navigation.navigate('TAB_bt');
        return true;
    }


    render() {
        return (
            <View>
                <Text> GuestDetails Page .... </Text>
                <Button
                    title="Landing"
                    onPress={() => this.props.navigation.navigate('LANDING_st')}
                />
            </View>
        )
    }
}



class CheckoutPage extends Component {
    render() {
        return (
            <View>
                <Text> Checkout Page .... </Text>
                <Button
                    title="Checkout"
                    onPress={() => this.props.navigation.navigate('GUEST')}
                />
            </View>
        )
    }
}





const CartStack = createStackNavigator({
    CHECKOUT: CheckoutPage,
});

const MenuStack = createStackNavigator({
    FOODLIST: MenuPage,
    FOODITEM: FoodPage
});

const TabNavig = createBottomTabNavigator({
    MENU: MenuStack,
    CART: CartStack
});


const LandingStack = createStackNavigator({
    LANDING: LandigPage,
    PURSUIT: PursuitPage
});



const mainStack = createStackNavigator({
    LOGIN: LoginPage,
    LANDING_st: LandingStack,
    TAB_bt: TabNavig,
    GUEST: GuestDetailsPage
});

// const Login_st = createStackNavigator({
//     L: LoginPage,
//     M: mainStack
// });

export default RootNavigator = () => {
    return createAppContainer(
        createSwitchNavigator({
            APP: mainStack,
            SPLASH: SplashScreen
        }, {
            initialRouteName: 'SPLASH'
        }));
}