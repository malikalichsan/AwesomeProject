import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Login: {
            screen: LoginScreen,
        },
    },
    {
        initialRouteName: "Login",
    }
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
