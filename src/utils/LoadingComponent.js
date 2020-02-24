
import React, { Component } from 'react';
import {
    //Text, 
    View,
    ActivityIndicator, StatusBar,
    Image, StyleSheet
} from 'react-native';


export const LoadingComponent = (props) => (
    <View style={{ backgroundColor: 'rgba(255, 0, 255, 0.2)', width: '100%', height: '100%', position: 'absolute', top: 0, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#FFF', width: '50%', height: 90, borderRadius: 10, justifyContent: 'center' }}>
            <ActivityIndicator size={50} color='#505' {...props} />
            {/* <Text>sds dgdf  Lorem   </Text> */}
        </View>
    </View>
)