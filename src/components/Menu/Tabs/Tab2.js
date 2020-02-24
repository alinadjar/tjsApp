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
    Icon} from 'native-base';

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

export default Tab2;