
import AsyncStorage from '@react-native-community/async-storage';


export const API_BASEURL_DEFAULT = '192.168.87.62:5000';
export const APP_VERSION = '1.0.0';

export const AXIOS_TIMEOUT = 5000;

// export const FIREBASEURL = `https://nba-app-b961b.firebaseio.com`;
// export const APIKEY = ``;
// export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
// export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
// export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;


export const storeData = async (key, value) => {
    try {
        // await AsyncStorage.setItem('@storage_Key', 'stored value')
        await AsyncStorage.setItem(key, value)
        return true;
    } catch (e) {
        // saving error
        return false;
    }
}



export const getData = async (key) => {
    //console.log(`now inside getData : ${key} `);
    try {
        // const value = await AsyncStorage.getItem('@storage_Key')
        const value = await AsyncStorage.getItem(key)
        // if (value !== null) {
        //     console.log(value);
        //     return value;
        // }
        console.log(value);
        // return (value === null) ? API_BASEURL_DEFAULT : value 
        if(value === null && key === '@API_BASEURL') {
            return API_BASEURL_DEFAULT;
        }
        else {
            return value;
        }
    } catch (e) {
        // error reading value
        return null;
    }
}


export const removeValue = async (key) => {
    try {
        // await AsyncStorage.removeItem('@MyApp_key')
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}


export const getAllKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch (e) {
        // read key error
    }

    console.log(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
}


export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }

    console.log('Done.')
}


export const getTokens = (cb) => {

    AsyncStorage.multiGet([
        '@tjs_app@token',
        '@tjs_app@refreshToken',
        '@tjs_app@expireToken',
        '@tjs_app@uid'
    ]).then(value => {

        cb(value);
    });

}

export const setTokens = (values, cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (60 * 2); // 2 minutes
    //dateNow.getTime() + (3600 * 1000); // The number of seconds in which the ID token expires

    AsyncStorage.multiSet([
        ['@tjs_app@token', values.token],
        ['@tjs_app@refreshToken', values.refToken],
        ['@tjs_app@expireToken', expiration.toString()],
        ['@tjs_app@uid', values.uid]
    ]).then(response => {
        cb();
    });
}