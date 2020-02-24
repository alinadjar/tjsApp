
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
    Item,
    Icon,
    Tabs, Tab, TabHeading,
} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';


class MenuPage extends Component {

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
    //     this.props.navigation.navigate('LANDING_st');
    //     return true;
    // }


    render() {

        const list = [
            {
                name: 'Amy Farha',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]

        return (
            <Container>
                {/* <Header hasTabs /> */}
                <Tabs>
                    {/* <Tab heading={<TabHeading style={{ backgroundColor: '#ffda00', color: '#000' }}><Icon name="camera" style={{ color:'#000'}} /><Text style={{color:'#000'}}>Camera</Text></TabHeading>}> */}
                    <Tab heading={<TabHeading><MaterialIcon name="food" size={27} color={'#DDD'}/><Text>Food</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={<TabHeading><MaterialIcon name="cake-variant" size={27} color={'#DDD'}/><Text>Dessert</Text></TabHeading>}>
                        {/* need to pass navigation props  */}
                        <Tab2 {...this.props} />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="apps"/></TabHeading>}>
                        <Tab1 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}


export default MenuPage;