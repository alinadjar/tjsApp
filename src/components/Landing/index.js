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

import { LoadingComponent } from '../../utils/LoadingComponent';
import { AlertModal } from '../../utils/Modals/AlertModal';
import { connect } from 'react-redux';
import { FetchFoods } from '../../iRedux/Actions/food_Actions';
import { bindActionCreators } from 'redux';


// const styles = StyleSheet.create({
// });



class LandigPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            modal_Alert_Show: false,
            errorStatus: '',
            errorBody: ''
        }
    }


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



    close_AlertModal_callback_btnReturn = () => {
        this.setState({
            modal_Alert_Show: false,
            errorStatus: '',
            errorBody: ''
        });
    }

    close_AlertModal_callback = () => {
        this.setState({
            modal_Alert_Show: false,
            errorStatus: '',
            errorBody: ''
        });
    }



    render() {

        const result =
            <>

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
                            //onPress={() => this.props.navigation.navigate('TAB_bt')}
                            onPress={() => {
                                this.setState({ loading: true });
                                const result = this.props.FetchFoods();

                                result.then((x) => {


                                    // console.log(result);
                                    // console.log('#########################');
                                    // console.log(typeof (result))

                                    // console.log('=============> x: ' + JSON.stringify(x));

                                    this.setState({ loading: false });

                                    if ('error' in x) {
                                        this.setState({
                                            errorBody: x.error,
                                            modal_Alert_Show: true
                                        });

                                    } else {
                                        this.props.navigation.navigate('TAB_bt');
                                    }
                                })
                            }}
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
                {this.state.loading &&
                    <LoadingComponent />
                }

                <AlertModal
                    modalVisible={this.state.modal_Alert_Show}
                    returnTXT='return'
                    bodyTXT={this.state.errorBody}
                    logoType='ERROR'
                    logoTXT='ERROR'
                    btnReturnCallback={this.close_AlertModal_callback_btnReturn}
                    closeCallback={this.close_AlertModal_callback}
                />
            </>
        return result;

    }


}

// const mapDispatchToProps = (dispatch) => ({
//     FetchFoods: (data) => dispatch(FetchFoods(data))
// })

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ FetchFoods }, dispatch);
}


export default connect(null, mapDispatchToProps)(LandigPage);