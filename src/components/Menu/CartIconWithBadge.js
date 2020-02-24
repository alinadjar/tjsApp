import React  from 'react';
import IconWithBadge from '../../utils/IconWithBadge';

const CartIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={7} />;
};

export default CartIconWithBadge;