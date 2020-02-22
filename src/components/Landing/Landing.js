import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image, StyleSheet
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
} from 'native-base';





class LandigPage extends Component {



    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    // }

    // backPressed = () => {
    //     console.log('backPressed in Landing Page');
    //     //this.props.navigation.goBack();   // if in the same stack      
    //     this.props.navigation.navigate('LOGIN');
    //     return true;
    // }







    render() {
        return (
            <View>
                <Text> Landig Page .... </Text>
                <Button warning
                    title="Tab"
                    onPress={() => this.props.navigation.navigate('TAB_bt')}
                >
                    <Text>Menu</Text>
                </Button>
                <Button error
                    title="Pursuit"
                    onPress={() => this.props.navigation.navigate('PURSUIT')}
                >
                    <Text>Pursuit Orders</Text>
                </Button>
            </View>

        )
    }


}




export default LandigPage;