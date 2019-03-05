import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";


global.tab = 2;
global.primeraConexion = true;


const initialState = {

};


export default class App extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            tabBarOnPress({ navigation, defaultHandler }) {
                if(global.tab !== 2){
                    params.onTabFocus();
                    defaultHandler();
                }
            }
        }
    };


    constructor(){
        super();
        this.state = initialState;
    }

    handleTabFocus = () => {
        global.tab = 2;
        this._ismounted = true;
    };

    componentWillMount(){
        this.props.navigation.setParams({
            onTabFocus: this.handleTabFocus,
        })
    }

    async componentDidMount(){
        this._ismounted = true;

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});