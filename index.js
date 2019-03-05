/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

export class VeggieGram extends Component {
    render() {
        return <App/>
    }
}

AppRegistry.registerComponent(appName, () => VeggieGram);
