import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Platform, Text, Image } from 'react-native';



import HomePage from './src/MainApp/HomePage';
import Favorites from './src/MainApp/Favorites';
import Preferences from './src/MainApp/Preferences';

import tabFavIcon from './assets/images/icon_off.png';
import tabFavIconActive from './assets/images/icon_on.png';

const TabsNav = createBottomTabNavigator({

      Favorites: {
        screen: Favorites,
        navigationOptions: ({navigation}) => ({
          title: "",
          tabBarIcon: ({focused}) => <Image
              style={{position: 'relative', top: '25%', height: 60, resizeMode: 'contain', aspectRatio: 0.4}}
              source={focused ? tabFavIconActive : tabFavIcon}/>,

        }),
      },
      HomePage: {
        screen: HomePage,
        params: {
          map: false
        },
        navigationOptions: ({navigation}) => ({
          title: "",
          tabBarIcon: ({focused}) => <Image
              style={{position: 'relative', top: '25%', height: 60, resizeMode: 'contain', aspectRatio: 0.4}}
              source={focused ? tabFavIconActive : tabFavIcon}/>,
        }),
      },
      Preferences: {
        screen: Preferences,
        navigationOptions: ({navigation}) => ({
          title: "",
          tabBarIcon: ({focused}) => <Image
              style={{position: 'relative', top: '25%', height: 60, resizeMode: 'contain', aspectRatio: 0.4}}
              source={focused ? tabFavIconActive : tabFavIcon}/>
        }),
      },

    }, {
      lazy: false,
      initialRouteName: 'HomePage',
      headerMode: 'screen',
      tabBarOptions: {
        activeTintColor: '#CAB763',
        style: {
          // overflow: 'hidden',
          // position: 'absolute',
          // bottom: -60,
          fontWeight: '400'
        }
      },
      backBehavior: 'none',
      navigationOptions: {
        tabBarVisible: false,
        headerVisible: false,
      }
    }

);

TabsNav.tabBarOptions = ({navigation}) => {
  let tabBarOptions = {};

  tabBarOptions.style.overflow = 'hidden';
  tabBarOptions.style.position = 'absolute';
  tabBarOptions.style.bottom = 0;
  tabBarOptions.activeTintColor = '#CAB763';

  return {tabBarOptions}
};

TabsNav.navigationOptions = ({ navigation }) => {
  let options = {};
  let focusedRouteName = navigation.state.routes[navigation.state.index].routeName;
  // let tabBarOptions = {};
  // let style = {};

  // tabBarOptions.showLabel = false;
  // tabBarOptions.activeTintColor = '#CAB763';
  // tabBarOptions.style = {
  //
  //     overflow: 'hidden',
  //     position: 'absolute',
  //     bottom: -60,
  //     fontWeight: '400'
  // };
  if (focusedRouteName === 'HomePage'){
    options.header = null;
  } else if (focusedRouteName === 'Favorites') {
    if (Platform.OS === 'ios') {
      options.headerTitle = <Text style={{color: '#000', fontSize: 18, fontWeight: '500'}}>Favoritos</Text>
    }
    else {
      options.headerTitle = <Text style={{color: '#000', fontSize: 18, fontWeight: '500', marginLeft: '40%'}}>Favoritos</Text>
    }
  } else if (focusedRouteName === 'Preferences') {
    options.headerTitle = <Text style={{color: '#000', fontSize: 18, fontWeight: '500', marginRight: 'auto', marginLeft: 'auto'}}>Preferencias</Text>;
  }

  return options;
};

const TabNavigator = createStackNavigator(
    {
      Main: {
        screen: TabsNav,
      },
    },
    {
      navigationOptions: {
        gesturesEnabled: false,
      },
      headerMode: 'screen',
      cardStyle: { backgroundColor: '#F8F8F8' },
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        Home: HomePage,
        App: TabNavigator,
    },
    {
      initialRouteName: 'Home',
    }
));