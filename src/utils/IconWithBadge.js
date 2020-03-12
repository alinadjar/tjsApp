import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Dimensions } from 'react-native';






class IconWithBadge extends Component {
    render() {

        const { name, badgeCount, color, size } = this.props;
        const {
            width: window_width,
            height: window_height } = Dimensions.get('window');

        return (
            // <View style={{ width: 24, height: 24, margin: 5 }}>
            <View style={{ margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
                {badgeCount > 0 && (
                    <View
                        style={{
                            // If you're using react-native < 0.57 overflow outside of parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: window_width / (-25),
                            top: -20,
                            backgroundColor: 'red',
                            borderRadius: 6,
                            // width: 30,
                            // height: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', paddingRight: 5, paddingLeft: 5, textAlign: 'center' }}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}


export default IconWithBadge;