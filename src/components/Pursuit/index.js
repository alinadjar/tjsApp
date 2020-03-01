import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import {
    Container, Content, Header,
    Button,
    Text,
    ListItem, Right, Body, Left, Icon,
    Item, Input
} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    backgroundImage: {
        //flex: 1,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover', // or 'stretch'        
    }
});

class SearchPursuit extends Component {

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

    render() {
        return (
            <>

                <View style={{ flex: 1 }}>
                <Image source={require('../../assets/images/Pursuit/woodenBG.jpg')} style={styles.backgroundImage}  />
                    <View style={{ alignItems: 'center', 
                    // borderWidth: 2, 
                    // borderBottomLeftRadius: 40, 
                    // borderBottomRightRadius: 40
                     }}>
                    
                        {/* <Button
                            onPress={() => this.props.navigation.navigate('PPursuit')}
                        >
                        </Button> */}
                        <View style={{ backgroundColor: '#FFFFFFEE', borderRadius: 10, width: '80%', marginBottom: 20, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }}>
                                <Text style={{ fontSize: 20 }}>Enter Order Id: </Text>
                            </View>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search Order Id" keyboardType="numeric" />
                                <Icon name="ios-grid" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                            {/* <Button transparent style={{ alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ textAlign: 'center' }}>Load my Orders</Text>
                            </Button> */}

                            <TouchableOpacity
                                onPress={() => {
                                    
                                }}
                            >
                                <View style={{ backgroundColor: '#FFDA00', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#000', textAlign: 'center', height: 30 }}> Load my Orders </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ScrollView>
                            <ListItem icon style={{ backgroundColor: '#FFFFFFDD', width: '90%'}} onPress={ () => {
                                alert('OK, going to Pursuit Page');
                                this.props.navigation.navigate('PPursuit')
                            }}>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#10c547" }}>
                                        <Icon active name="ios-checkmark-circle" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: "#007AFF" }}>
                                        <Icon active name="ios-information-circle-outline" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </ScrollView>
                    </View>

                </View>

            </>
        );
    }
}

export default SearchPursuit;