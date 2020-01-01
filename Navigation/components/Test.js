import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Test extends Component {
    // static navigationOptions = {
    //     title: 'Title of test',
    // };

    static navigationOptions = ({navigation}) => ({
       title : navigation.getParam('name','Error')
    });

    render() {
        const otherParam = this.props.navigation.getParam('name','Error');
        return (
            <View>
                <Text>Test</Text>
                <Text>Hello {this.props.navigation.getParam('name','chauhan')}</Text>
                <View>
                    <View style={{marginBottom : 20,}}>
                        <Button title='Go to test again'  onPress={() => this.props.navigation.push('test')}/>
                    </View>
                    <View style={{marginBottom : 20}}>
                        <Button title='Go back'  onPress={() => this.props.navigation.goBack()}/>
                    </View>
                    <View style={{marginBottom : 20,}}>
                        <Button title='Go to top' onPress={() => this.props.navigation.popToTop()}/>

                    </View>
                    <View style={{marginBottom : 20,}}>
                        <Button title='Update title' onPress={() => this.props.navigation.setParams({name : 'Chauhan'})}/>

                    </View>
                </View>


            </View>
        )
            ;
    }
}

export default Test;
