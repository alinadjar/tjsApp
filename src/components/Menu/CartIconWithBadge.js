import React from 'react';
import { connect } from 'react-redux';
import IconWithBadge from '../../utils/IconWithBadge';


// const CartIconWithBadge = props => {
//     // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
//     return <IconWithBadge {...props} badgeCount={7} />;
// };

//export default CartIconWithBadge;

class CartIconWithBadge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <IconWithBadge {...this.props}   badgeCount={this.props.numItems} />
        );
    }

}



const mapStateToProps = (state) => {
    return {
        numItems: state.cartR.cartItems
    }
}

export default connect(mapStateToProps, null)(CartIconWithBadge);