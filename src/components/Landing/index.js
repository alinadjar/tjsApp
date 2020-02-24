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
import { TouchableOpacity } from 'react-native-gesture-handler';



const styles = StyleSheet.create({


});


class LandigPage extends Component {


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
            <View style={{ position: 'relative', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/Landing/awning.jpg')}
                    style={{ width: '100%' }}
                />



                {/* <View  style={{  // create shadow
                        borderWidth: 1,
                        borderRadius: 2,
                        borderColor: '#F00',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginLeft: 15,
                        marginRight: 5,
                        marginTop: 17,                                    
                }}>
                    <Text>some text here ...</Text>
                </View> */}

                <View>
                    <TouchableOpacity //hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
                        style={{ width: 200, height: 150, marginTop: 40, borderColor: '#000', borderWidth: 2, borderRadius: 10 }}
                        onPress={() => this.props.navigation.navigate('TAB_bt')}
                    >
                        <Image source={require('../../assets/images/Landing/foodMenu-icon.png')}
                            style={{ resizeMode: 'contain', width: 200, height: '100%' }}
                        />

                    </TouchableOpacity>
                    <Text>Menu</Text>
                </View>


                <View>
                    <TouchableOpacity //hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
                        style={{ width: 200, height: 150, borderColor: '#000', borderWidth: 2, borderRadius: 10 }}
                        onPress={() => this.props.navigation.navigate('PURSUIT')}
                    >
                        <Image source={require('../../assets/images/Landing/tracking.png')}
                            style={{ resizeMode: 'contain', width: 200, height: '100%' }}
                        />

                    </TouchableOpacity>
                    <Text>Pursuit</Text>

                </View>



                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#272221',
                    width: '100%',
                    height: 60
                }}>
                    <TouchableOpacity
                        style={{ width: '50%', backgroundColor: '#ffda00', marginLeft: 'auto', marginRight: 'auto', padding: 10 }}
                        onPress={() => this.props.navigation.navigate('LOGI')}
                    >
                        <Text style={{ textAlign: 'center' }}>return</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


}




export default LandigPage;