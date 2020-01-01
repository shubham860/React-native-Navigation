import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Home',
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="red"
            />
        ),
        headerLeft: () => (
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Modal"
                color="red"
            />
        ),

    });


    render() {
        return (

            <View>
                <Text style={{fontSize : 28,textAlign : 'center',justifyContent : 'center'}}>Home</Text>
                <Button title='Go to test' onPress={() => this.props.navigation.navigate('test',{name : 'shubham'})}/>
            </View>

    )
        ;
    }
}

export default Home;
