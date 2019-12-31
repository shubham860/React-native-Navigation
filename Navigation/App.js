import React, {Component} from 'react';
import Home from "./components/Home";
import Test from './components/Test';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

export const routes = createStackNavigator(
        {
            home : Home,
            test : Test,
        },
        {
            initialRouteName : 'home',
        }
 );

const AppContainer = createAppContainer(routes);

class App extends Component {
    render() {
        return (
            <AppContainer/>
     )
    }
}

export default App;
