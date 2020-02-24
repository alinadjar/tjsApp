import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image,
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Button,
    Text,
    Body, Left, Right,
    Thumbnail,
    Item as FormItem,    
    List, ListItem,
    
} from 'native-base';

import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';




class CheckoutPage extends Component {

    static navigationOptions = {
        title: 'Home54',
        headerStyle: {
            backgroundColor: '#445100',
        },
        headerTintColor: '#f00', // title color and back button color
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerShown: false,
    };


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
                                    <Thumbnail square source={require('../../assets/images/Food/shishlique.jpg')} />
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
                                            source={require('../../assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text>1</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('../../assets/images/misc/plusFood.jpg')}
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
                                    <Thumbnail square source={require('../../assets/images/benz.png')} />
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
                                            source={require('../../assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text>1</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('../../assets/images/misc/plusFood.jpg')}
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

export default CheckoutPage;