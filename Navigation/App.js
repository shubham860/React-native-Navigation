import React, {Component} from 'react';
import Home from "./components/Home";
import Test from './components/Test';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from "react-navigation-tabs";
import {View} from 'react-native'
import 'react-native-gesture-handler';

const bottom = createBottomTabNavigator(
    {
        home : Home,
        test : Test
    }
)

const routes = createStackNavigator(
    {
        home : Home,
        test : Test,
    },
    {
        initialRouteName : 'home',
        defaultNavigationOptions : {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);



const AppContainer = createAppContainer(routes);
// const AappContainer = createAppContainer(bottom);


class App extends Component {
    render() {
        return (
                <AppContainer/>
   );
    }
}

export default App;
