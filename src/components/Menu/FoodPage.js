import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image,
} from 'react-native';
import {
    Container,
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
    Title, H1, H2, H3, Content, Icon
} from 'native-base';

import { SliderBox } from "react-native-image-slider-box";



class FoodPage extends Component {

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
        this.state = {
            images: [
                require('../../assets/images/Food/shishlique.jpg'),
                require('../../assets/images/profbg1.jpg'),
                require('../../assets/images/Food/shishlique.jpg'),
                require('../../assets/images/profbg1.jpg'),
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?girl",
            ]
        }
    }



    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    // }

    // backPressed = () => {

    //     //this.props.navigation.goBack();   // if in the same stack      
    //     this.props.navigation.navigate('FOODLIST');
    //     return true;
    // }

    render() {
        return (

            <Container>
                <Header style={{backgroundColor: '#ffda00'}}>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack() }
                        >
                            <Icon name='arrow-back' style={{ color:'#000'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'#000'}}>Header</Title>
                    </Body>
                    <Right>
                        {/* <Button transparent>
                            <Icon name='menu' />
                        </Button> */}
                    </Right>
                </Header>
                <Content>
                    <View>

                        <SliderBox
                            images={this.state.images}
                            sliderBoxHeight={200}
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            onCurrentImagePressed={index =>
                                //console.warn(`image ${index} pressed`)
                                alert(`image ${index} pressed`)
                            }
                            // dotStyle={{
                            //     width: 15,
                            //     height: 15,
                            //     borderRadius: 15,
                            //     marginHorizontal: 10,
                            //     padding: 0,
                            //     margin: 0
                            // }}
                            //parentWidth={this.state.width}
                            paginationBoxVerticalPadding={20}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                            imageLoadingColor="#2196F3"
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                                paddingVertical: 10
                            }}
                        />


                        <H1>Title: ----</H1>
                        <H2>Ingredients: --</H2>
                        <H3>some description here</H3>
                        <Text> Food Page .... </Text>
                    </View>
                </Content>
            </Container>

        )
    }
}

export default FoodPage