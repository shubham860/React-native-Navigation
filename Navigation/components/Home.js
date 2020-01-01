import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    }


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
