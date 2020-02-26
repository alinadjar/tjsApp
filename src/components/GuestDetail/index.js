
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
    ActionSheet, Left, Right, Body, Title, Icon
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';



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
                borderRadius: 5,
                width: 70,
                marginBottom: 10
            },

        });

        return (
            <Container>
                <Header style={{ backgroundColor: '#272221' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        {/* <Button transparent>
                            <Text>Cancel</Text>
                        </Button> */}
                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#EEE', }}>
                    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/misc/orderDetails.png')}
                            style={{
                                height: 90,
                                width: 80,
                                resizeMode: 'contain',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="md-person" size={30} color="#900" style={{ width: 40 }} />
                            <Input style={styles.inp} placeholder='Family' />
                        </View>
                        <View>
                            <IconFA5 name="mobile-alt" size={30} color="#900" style={{ width: 40 }} />
                            <Input style={styles.inp} placeholder='mobile' />
                        </View>
                        <View>
                            <IconEntypo name="layers" size={30} color="#900" style={{ width: 40 }} />
                            <Input style={styles.inp} placeholder='Desk' />
                        </View>
                        <View>
                            <IconFA5 name="users" size={30} color="#900" style={{ width: 40 }} />
                            <Input style={styles.inp} placeholder='num' />
                        </View>
                    </View> */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Image source={require('../../assets/images/misc/orderDetails.png')}
                            style={{
                                height: 90,
                                width: 80,
                                resizeMode: 'contain',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} />
                        <Form style={{ width: '80%', marginTop: 10 }}>
                            <Item fixedLabel>
                                {/* <Label>guest name</Label> */}
                                <Ionicons name="md-person" size={30} color="#900" style={{ width: 40 }} />
                                <Input style={styles.inp} placeholder='Family' />
                            </Item>
                            <Item fixedLabel>
                                <IconFA5 name="mobile-alt" size={30} color="#900" style={{ width: 40 }} />
                                <Input style={styles.inp} placeholder='mobile' />
                            </Item>
                            <Item fixedLabel>
                                {/* <Label>Desk number</Label> */}
                                <IconEntypo name="layers" size={30} color="#900" style={{ width: 40 }} />
                                <Input style={styles.inp} placeholder='Desk' />
                            </Item>
                            <Item fixedLabel last>
                                {/* <Label>Count</Label> */}
                                <IconFA5 name="users" size={30} color="#900" style={{ width: 40 }} />
                                <Input style={styles.inp} placeholder='num' />
                            </Item>
                            <Item style={{ width: '100%', backgroundColor: '#F00' }}>
                                <IconFA name='shopping-bag' size={30} color="#900" style={{ width: 40 }} />
                                <View style={{ backgroundColor: '#000', marginBottom: 10, width: '100%' }}>
                                    <TouchableOpacity
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
                                        <Text style={{ color: '#FFF', textAlign: 'center', height: 30 }}>  Order type </Text>
                                    </TouchableOpacity>
                                </View>
                            </Item>

                            <TouchableOpacity
                                onPress={() => alert('OK')}
                            >
                                <View style={{ backgroundColor: '#ffda00', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#000', textAlign: 'center', height: 30 }}>  Reserve </Text>
                                </View>
                            </TouchableOpacity>



                        </Form>




                        {/* <View>
                            <Text> GuestDetails Page .... </Text>

                            <Button
                                onPress={() => this.props.navigation.navigate('LANDING_st')}>
                                <Text>
                                    landing
                            </Text>
                            </Button>
                        </View> */}
                    </View> 
                </Content>
            </Container>
        )
    }
}


export default GuestDetailsPage;