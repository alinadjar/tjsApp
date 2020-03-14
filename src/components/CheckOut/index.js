import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image, ScrollView,
    Dimensions
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
import NumberFormat from 'react-number-format';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart, updateCartQuantity, clearCart, removeFromCart } from '../../iRedux/Actions/cart_Actions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { YesNoModal } from '../../utils/Modals/YesNoModal';
import { fontSizer } from '../../utils/misc';

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


    state = {
        modal_YesNo_Show: false
    }


    Increment = (item, value) => {

        console.log('parseInt(value) === 1');
        console.log(parseInt(value) === 1);

        if (parseInt(item.quantity) === 1 && parseInt(value) === -1) { // makes the quantity 0, so remove it from the basket
            this.props.removeFromCart(item.product);
        }
        else if (parseInt(value) === 1 && (parseInt(item.quantity) + parseInt(value) <= parseInt(item.product.QUANTITY))) {  // increase             
            this.props.addToCart(item.product, value);
        } else if (value === -1) {   // decrease
            this.props.addToCart(item.product, value);
        }
    }


    close_YesNoModal_callback_btnYes = () => {
        this.setState({ modal_YesNo_Show: false })
        this.props.clearCart();

        //this.props.navigation.navigate('LANDING_st');
        this.props.navigation.navigate('MENU');
    }


    close_YesNoModal_callback_btnNo = () => {
        this.setState({ modal_YesNo_Show: false })
    }

    render() {

        const {
            width: window_width,
            height: window_height } = Dimensions.get('window');

        const trueFontSize = fontSizer(window_width);
        return (
            <>
                <Container>
                    {/* <Header /> */}
                    <Content style={{ position: 'relative' }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView>
                                <List>
                                    <ListItem itemHeader first>
                                        <Text style={{ fontSize: trueFontSize }}>Your Basket:</Text>
                                    </ListItem>
                                    {
                                        this.props.cart ?
                                            this.props.cart.map((item, index) =>
                                                <ListItem key={index}>
                                                    <Body
                                                        style={{
                                                            flex: 1,
                                                            flexDirection: 'row',
                                                            borderRadius: 20,
                                                            backgroundColor: '#EEF',
                                                            padding: 10
                                                        }}
                                                    >
                                                        <View style={{ width: '25%', alignItems: 'center', justifyContent: 'center', }}>
                                                            <Thumbnail  source={require('../../assets/images/Food/shishlique.jpg')} style={{ height: 3*trueFontSize, width: 3*trueFontSize}}/>
                                                        </View>
                                                        <View style={{ width: '41%' , alignItems: 'center', justifyContent: 'center', }}>
                                                            <Text style={{ fontSize: trueFontSize, textAlign: 'center', paddingBottom:10 }}>{item.product.NAME}</Text>
                                                            <Text note numberOfLines={1} style={{ fontSize: trueFontSize-4, textAlign: 'center' }}>{item.product.PRICE}</Text>
                                                        </View>
                                                        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '33%' },
                                                        parseInt(item.product.QUANTITY < item.quantity) ? styles.redQuantity : {}]}>

                                                            <TouchableHighlight
                                                                onPress={() => this.Increment(item, -1)}
                                                            >
                                                                <Image
                                                                    source={require('../../assets/images/misc/minusFood.jpg')}
                                                                    style={{ width: 1.5*trueFontSize, height: 1.5*trueFontSize }}
                                                                />
                                                            </TouchableHighlight>
                                                            <Text style={{  textAlign: 'center', fontSize: trueFontSize }}>{item.quantity}</Text>
                                                            <TouchableHighlight
                                                                onPress={() => this.Increment(item, 1)}
                                                            >
                                                                <Image
                                                                    source={require('../../assets/images/misc/plusFood.jpg')}
                                                                    style={{ width: 1.5*trueFontSize, height: 1.5*trueFontSize }}
                                                                />
                                                            </TouchableHighlight>
                                                        </View>
                                                    </Body>
                                                </ListItem>
                                            )
                                            : null
                                    }
                                </List>
                            </ScrollView>
                        </View>
                    </Content>
                </Container>
                <View style={{ backgroundColor: '#c1c1c1' }}>
                    {/* <Text style={{ textAlign: 'center' }}>Total Sum: </Text> */}
                    <NumberFormat value={this.props.totalSum} displayType={'text'} thousandSeparator={true}
                        prefix={''}
                        renderText={value => <Text style={{ textAlign: 'center', marginTop: 15, fontSize: trueFontSize }}>Total Sum: {value} </Text>} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 20 }}>
                        <View style={{ width: '47%' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modal_YesNo_Show: true });
                                    // this.props.clearCart();

                                    // //this.props.navigation.navigate('LANDING_st');
                                    // this.props.navigation.navigate('MENU');
                                }}
                            >
                                <View style={{ backgroundColor: '#EEE', borderRadius: 10, padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <MaterialIcon name="cancel" style={{ color: '#F22' }} size={trueFontSize} />
                                    <Text style={{ color: '#000', textAlign: 'center', fontSize: trueFontSize }}> Cancel Order </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '47%' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('GUEST')}
                            >
                                <View style={{ backgroundColor: '#ffda00', borderRadius: 10, padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcon name="check-circle" style={{ color: '#000' }} size={trueFontSize} />
                                    <Text style={{ color: '#000', textAlign: 'center', fontSize: trueFontSize }}>  Checkout </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <YesNoModal
                    modalVisible={this.state.modal_YesNo_Show}
                    headerTXT=''
                    yesTXT='OK'
                    noTXT='Cancel'
                    bodyTXT='Sure to cancel order?'
                    logoType='WARNING'
                    btnYesCallback={this.close_YesNoModal_callback_btnYes}
                    btnNoCallback={this.close_YesNoModal_callback_btnNo}
                />

            </>
        )
    }
}


//export default CheckoutPage;


const mapStateToProps = (state) => {
    return {
        cart: state.cartR.cart,
        numItems: state.cartR.cartItems,
        totalSum: state.cartR.cartPrice
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCart, updateCartQuantity, clearCart, removeFromCart }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);