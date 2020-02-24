
import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image, StyleSheet,
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Button,
    Text,
    Form,
    Item,
    Input,
    Label,
    ActionSheet
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';



// var BUTTONS = [
//     { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
//     { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
//     { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
//     { text: "Delete", icon: "trash", iconColor: "#fa213b" },
//     { text: "Cancel", icon: "close", iconColor: "#25de5b" }
// ];

var BUTTONS = [
    { text: "Restaurant", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Takeout", icon: "analytics", iconColor: "#f42ced" },
    { text: "Roof garden", icon: "aperture", iconColor: "#ea943b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


class GuestDetailsPage extends Component {

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


    constructor(props) {
        super(props);
        this.state = {}
    }

    

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    // }

    // backPressed = () => {
    //     //this.props.navigation.goBack();   // if in the same stack      
    //     this.props.navigation.navigate('TAB_bt');
    //     return true;
    // }


    render() {
        const styles = StyleSheet.create({
            inp: { 
                textAlign: 'center', 
                backgroundColor: '#FFF', 
                borderRadius:5,
                width: 50,    
                marginBottom: 10            
            }       
        });

        return (
            <Container>
                {/* <Header /> */}
                <Content>
                    <View style={{ backgroundColor: '#EEE' }}>

                        <Image source={require('../../assets/images/misc/orderDetails.png')} 
                            style={{ 
                                height: 90, 
                                width: 80,
                                resizeMode: 'contain',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                                }} />                        
                        <Form style={{ width: '70%' }}>
                            <Item fixedLabel>
                                {/* <Label>guest name</Label> */}
                                <Ionicons name="md-person" size={30} color="#900" />
                                <Input style={ styles.inp} placeholder='Family' />
                            </Item>
                            <Item fixedLabel last>                                
                                <Icon name="mobile-alt" size={30} color="#900" />
                                <Input style={ styles.inp} placeholder='mobile' />
                            </Item>
                            <Item fixedLabel last>
                                {/* <Label>Desk number</Label> */}
                                <IconEntypo name="layers" size={30} color="#900" />
                                <Input style={ styles.inp} placeholder='Desk' />
                            </Item>
                            <Item fixedLabel last>
                                {/* <Label>Count</Label> */}
                                <Icon name="users" size={30} color="#900" />
                                <Input style={ styles.inp} placeholder='num' />
                            </Item>
                            <Button
                                onPress={() =>
                                    ActionSheet.show(
                                        {
                                            options: BUTTONS,
                                            cancelButtonIndex: CANCEL_INDEX,
                                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                            title: "Order Type"
                                        },
                                        buttonIndex => {
                                            this.setState({ clicked: BUTTONS[buttonIndex] });
                                        }
                                    )}
                            >
                                <Text>Actionsheet</Text>
                            </Button>
                            <Button>
                                <Text>Confirm</Text>
                            </Button>

                        </Form>
                        <View>

                            <Text> GuestDetails Page .... </Text>

                            <Button
                                onPress={() => this.props.navigation.navigate('LANDING_st')}>
                                <Text>
                                    landing
                            </Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}


export default GuestDetailsPage;