
import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image,
    Dimensions
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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fontSizer } from '../../utils/misc';


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

        const {
            width: window_width,
            height: window_height } = Dimensions.get('window');

        const trueFontSize = fontSizer(window_width);

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
                <Tabs tabContainerStyle={{height: 3*trueFontSize}} tabBarUnderlineStyle={{ backgroundColor: '#000' }}>
                    {/* <Tab heading={<TabHeading style={{ backgroundColor: '#ffda00', color: '#000' }}><Icon name="camera" style={{ color:'#000'}} /><Text style={{color:'#000'}}>Camera</Text></TabHeading>}> */}
                    <Tab heading={<TabHeading style={{ backgroundColor: '#ffda00', color: '#000'  }}><MaterialIcon name="food" size={trueFontSize } color={'#000'} /><Text style={{fontSize: trueFontSize - 5, color: '#000'}}>Food</Text></TabHeading>}>
                        <Tab1 foods={this.props.foodList} trueFontSize={trueFontSize} />
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#ffda00', color: '#000'  }}><MaterialIcon name="cake-variant" size={trueFontSize} color={'#000'} /><Text style={{fontSize: trueFontSize - 5, color: '#000'}}>Dessert</Text></TabHeading>}>
                        {/* need to pass navigation props  */}
                        <Tab2 {...this.props} />
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#ffda00', color: '#000'  }}><MaterialIcon name="apps" size={trueFontSize} color={'#000'}/></TabHeading>}>
                        <Tab1 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        foodList: state.foodR.foodList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
