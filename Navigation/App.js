import React, {Component} from 'react';
import Home from "./components/Home";
import Test from './components/Test';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from "react-navigation-tabs";
import {View} from 'react-native'
import 'react-native-gesture-handler';
import ModalScreen from "./components/ModalScreen";

const bottom = createBottomTabNavigator(
    {
        home : Home,
        test : Test
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

const MainRoutes = createStackNavigator({
  first :{
      screen : routes,
  },
   second : {
      screen  : bottom,
   },
    MyModal : {
      screen : ModalScreen
    }

},
    {
        mode : "modal",
        headerMode: 'none',
    });



const AppContainer = createAppContainer(MainRoutes);


class App extends Component {
    render() {
        return (
                <AppContainer/>
   );
    }
}

export default App;
