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

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

// Drawer Side-Layout
import SideBar from './components/Sidebar/Sidebar';


// SCREENS
import SplashScreen from './components/Splash';
import LoginPage from './components/Login/Login';
import LandigPage from './components/Landing/Landing';
import PursuitPage from './components/Pursuit/Pursuit';
import FoodPage from './components/Menu/FoodPage';
import GuestDetailsPage from './components/GuestDetail/GuestDetail';










class Tab1 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
                                <Thumbnail square source={require('./assets/images/benz.png')} />
                            </Left>
                            <Body>
                                <Text>Shishlique Shandiz !</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text> View</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}
                            >
                                <View>
                                    <Thumbnail square source={require('./assets/images/benz.png')} />
                                </View>
                                <View>
                                    <Text>Shishlique Shandiz !</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableHighlight
                                        onPress={() => alert('-')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text>1</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/plusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}
                            >
                                <View>
                                    <Thumbnail square source={require('./assets/images/benz.png')} />
                                </View>
                                <View>
                                    <Text>Shishlique Shandiz !</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableHighlight
                                        onPress={() => alert('-')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text>1</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/plusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}



class Tab2 extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Content>
                    <Icon name='home' />
                    <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 20, color: 'red' }} />
                    <Icon type="FontAwesome" name="home" />
                    <View>
                        <Text> Menu Page .... </Text>
                        <Button block success
                            onPress={() => this.props.navigation.navigate('FOODITEM')}
                        >
                            <Text>Success</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}


class MenuPage extends Component {


    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    // }

    // backPressed = () => {

    //     //this.props.navigation.goBack();   // if in the same stack      
    //     this.props.navigation.navigate('LANDING_st');
    //     return true;
    // }


    render() {

        const list = [
            {
                name: 'Amy Farha',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]

        return (
            <Container>
                {/* <Header hasTabs /> */}
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
                        {/* need to pass navigation props  */}
                        <Tab2 {...this.props} />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                        <Tab1 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}







class CheckoutPage extends Component {
    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content>
                    <List>
                        <ListItem itemHeader first>
                            <Text>Your Basket:</Text>
                        </ListItem>
                        <ListItem>
                            <Body
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}
                            >
                                <View>
                                    <Thumbnail square source={require('./assets/images/Food/shishlique.jpg')} />
                                </View>
                                <View>
                                    <Text>Shishlique Shandiz !</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableHighlight
                                        onPress={() => alert('-')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text>1</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/plusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}
                            >
                                <View>
                                    <Thumbnail square source={require('./assets/images/benz.png')} />
                                </View>
                                <View>
                                    <Text>Shishlique Shandiz !</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableHighlight
                                        onPress={() => alert('-')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text>1</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('./assets/images/misc/plusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>Total Sum:</Text>
                        </ListItem>
                        <ListItem>
                            <Text>$ 150,000</Text>
                        </ListItem>
                    </List>
                    <View>                        
                        <Button
                            title="Checkout"
                            onPress={() => this.props.navigation.navigate('GUEST')}
                        >
                            <Text>Lucy</Text>
                        </Button>
                    </View>
                </Content>
            </Container>

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