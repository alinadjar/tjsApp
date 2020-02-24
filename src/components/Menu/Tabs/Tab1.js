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
    Item ,    
    List, ListItem,    
} from 'native-base';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';


class Tab1 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
                                <Thumbnail square source={require('../../../assets/images/benz.png')} />
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
                                    <Thumbnail square source={require('../../../assets/images/benz.png')} />
                                </View>
                                <View>
                                    <Text>Shishlique Shandiz !</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F99', borderRadius: 10 }}>
                                    <TouchableHighlight
                                        onPress={() => alert('-')}
                                    >
                                        <Image
                                            source={require('../../../assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text style={{ width:20, textAlign:'center'}}>000</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('../../../assets/images/misc/plusFood.jpg')}
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
                                    <Thumbnail square source={require('../../../assets/images/benz.png')} />
                                </View>
                                <View>
                                    <Text>Shishlique Shandiz !</Text>
                                    <Text note numberOfLines={1}>$ 150,000 </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableHighlight
                                        onPress={() => alert('-')}
                                    >
                                        <Image
                                            source={require('../../../assets/images/misc/minusFood.jpg')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </TouchableHighlight>
                                    <Text style={{ width:20, textAlign:'center'}}>54</Text>
                                    <TouchableHighlight
                                        onPress={() => alert('+')}
                                    >
                                        <Image
                                            source={require('../../../assets/images/misc/plusFood.jpg')}
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



export default Tab1;