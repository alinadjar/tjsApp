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
} from 'react-native';
import {
    Container,
    Content,
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
    Icon,
    Tabs, Tab, TabHeading,
    List, ListItem,
    Grid, Col, Row
} from 'native-base';

import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


// ICONS packages
import Ionicons from 'react-native-vector-icons/Ionicons';


// Drawer Side-Layout
import SideBar from './components/Sidebar/Sidebar';

import CartIconWithBadge from './components/Menu/CartIconWithBadge';


// SCREENS
import SplashScreen from './components/Splash';
import LoginPage from './components/Login';
import LandigPage from './components/Landing';
import PursuitPage from './components/Pursuit';
import FoodPage from './components/Menu/FoodPage';
import GuestDetailsPage from './components/GuestDetail';
import MenuPage from './components/Menu/MenuPage';
import CheckoutPage from './components/CheckOut';



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
},
    {
        tabBarOptions: {
            activeTintColor: '#f4f813',
            showLabel: true,
            activeBackgroundColor: '#272221',
            inactiveBackgroundColor: '#272221',
            style: {
                backgroundColor: '#272221',
            }
        },
        initialRouteName: 'MENU',
        navigationOptions: {
            headerShown: false, // hide header of Tab Navigator
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'CART') {
                    iconName = focused
                        ? 'md-cart' : 'ios-cart';
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = CartIconWithBadge;
                } else if (routeName === 'MENU') {
                    iconName = focused ? 'ios-list' : 'md-menu';
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
    }
);


const LandingStack = createStackNavigator({
    LANDING: LandigPage,
    PURSUIT: PursuitPage
},{
    navigationOptions: {
        headerShown: false,
    }
});



// const mainStack = createStackNavigator({
//     LOGIN: LoginPage,
//     LANDING_st: LandingStack,
//     TAB_bt: TabNavig,
//     GUEST: GuestDetailsPage
// });



const mainStack = createStackNavigator({
    LANDING_st: LandingStack,
    TAB_bt: TabNavig,
    GUEST: GuestDetailsPage
});

// const Login_st = createStackNavigator({
//     L: LoginPage,
//     M: mainStack
// });


const drawerNavig = createDrawerNavigator(
    {
        LOGI: { screen: LoginPage },
        LAND: { screen: mainStack },
        TAB: { screen: TabNavig }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default RootNavigator = () => {
    return createAppContainer(
        createSwitchNavigator({
            APP: drawerNavig,
            SPLASH: SplashScreen
        }, {
            initialRouteName: 'SPLASH'
        }));
}