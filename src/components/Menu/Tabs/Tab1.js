import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image,
    StyleSheet
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Button,
    Text,
    Body, Left, Right,
    Thumbnail,
    Item, Icon,
    List, ListItem,
} from 'native-base';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

import { connect } from 'react-redux';
import { addToCart, updateCartQuantity } from '../../../iRedux/Actions/cart_Actions';
import { bindActionCreators } from 'redux';


const styles = StyleSheet.create({
    redQuantity: {
        backgroundColor: '#F99',
        borderRadius: 10
    }
});

class Tab1 extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        // console.log('***');
        // console.log(Array.from(this.props.foods));
        // console.log(this.props.foods);
        // console.log('-------------------------');        
    }

    quantityChanged = (food) => {
        //alert(food);
        const existing = this.props.cart.find(item => item.product.GOOD_ID === food.GOOD_ID);
        if (!existing) {
            this.props.addToCart(food);
        }
        else {
            if (parseInt(existing.quantity) + 1 <= parseInt(existing.product.QUANTITY)) {  // increase             
                this.props.addToCart(food, 1);
            } 
            else {
                alert('Not possible');
            }
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {
                            this.props.foods ?
                                this.props.foods.map((food, index) =>
                                    <ListItem key={index}>
                                        <Body
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                            }}
                                        >
                                            {/* <Text>{JSON.stringify(food)}</Text> */}

                                            <View style={{ width: '25%' }}>
                                                <Thumbnail square source={require('../../../assets/images/Food/shishlique.jpg')} />
                                            </View>
                                            <View style={{ width: '41%' }}>
                                                <Text>{food.NAME}</Text>
                                                <Text note numberOfLines={1}>{food.PRICE}</Text>
                                            </View>
                                            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '33%' },
                                            parseInt(food.QUANTITY) === 0 ? styles.reddddQuantity : {}]}>

                                                {food.QUANTITY > 0 ?
                                                    <Button rounded success iconLeft style={{ paddingLeft: 5 }}
                                                        //onPress={ () => { this.props.addToCart(food) }}
                                                        onPress={() => this.quantityChanged(food)}
                                                    >
                                                        <IconFA5 name='cart-plus' size={20} style={{ color: '#FFF' }} />
                                                        <Text>ADD</Text>
                                                    </Button>
                                                    : null
                                                }


                                                {/* <TouchableHighlight
                                                    onPress={() => alert('-')}
                                                >
                                                    <Image
                                                        source={require('../../../assets/images/misc/minusFood.jpg')}
                                                        style={{ width: 30, height: 30 }}
                                                    />
                                                </TouchableHighlight>
                                                <Text style={{ width: 20, textAlign: 'center' }}>1</Text>
                                                <TouchableHighlight
                                                    onPress={() => alert('+')}
                                                >
                                                    <Image
                                                        source={require('../../../assets/images/misc/plusFood.jpg')}
                                                        style={{ width: 30, height: 30 }}
                                                    />
                                                </TouchableHighlight> */}
                                            </View>
                                        </Body>
                                    </ListItem>

                                )

                                : <ListItem>
                                    <Body>
                                        <Text>No Foods Available</Text>
                                    </Body>
                                </ListItem>
                        }

                    </List>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartR.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCart, updateCartQuantity }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Tab1);