import React from 'react';

import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import Realm from '../../Realm/realm';

global.authToken = false;

const isLoggedIn = () => {
    global.authToken = 0;

    return global.authToken;
}


export default class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async() => {
        const userToken = await isLoggedIn();

        this.props.navigation.navigate(userToken ? 'App': 'App');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle='default'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})