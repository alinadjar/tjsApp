import React, { Component } from 'react';
import {
    //Text, 
    View, StyleSheet,
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
    Body, Left, Right, Icon,
    Title
} from 'native-base';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    outerCircle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: 'white',
    },
    innerCircle: {
        borderRadius: 35,
        width: 70,
        height: 70,
        margin: 5,
        backgroundColor: 'black'
    },
});



class PursuitPage extends Component {


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
    //     //this.props.navigation.goBack();   // if in the same stack      
    //     this.props.navigation.navigate('LANDING');
    //     return true;
    // }


    render() {
        return (
            <Container>
                <Content>
                    <Header style={{ backgroundColor: '#ffda00' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='arrow-back' style={{ color: '#000' }} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ color: '#000' }}>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                            <Icon name='menu' style={{ color: '#000' }}/>
                        </Button>
                        </Right>
                    </Header>
                    <View>
                        <View style={styles.container}>
                            <View style={styles.outerCircle}>
                                <Text>A</Text>
                                <View style={styles.innerCircle} />
                            </View>
                            <View style={styles.outerCircle}>
                                <Text>B</Text>
                                <View style={[styles.innerCircle, { backgroundColor: 'red' }]} />
                            </View>
                            <View style={styles.outerCircle}>
                                <Text>C</Text>
                                <View style={styles.innerCircle} />
                            </View>
                            <View style={styles.outerCircle}>
                                <Text>D</Text>
                                <View style={styles.innerCircle} />
                            </View>
                        </View>
                    </View>
                    <View style={{
                        borderStyle: 'dotted',
                        height: 200,
                        borderLeftWidth: 10,
                        backgroundColor: 'red',
                        width: 2,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        position: 'absolute',
                        top: 0,
                        left: '50%'
                    }} />
                </Content>
            </Container>
        )
    }
}


export default PursuitPage;