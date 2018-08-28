/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


const instructions = Platform.select({
     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
     android:
       'Double tap R on your keyboard to reload,\n' +
       'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
    state = {
        request: {
            first_name:'',
            last_name:'',
            email:'',
            subject:'',
            description:'',
        }
    };

    handleInput(key, text) {
        let object = Object.assign({}, this.state.request);
        object[key] = text;

        this.setState({ request: object });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#C71585',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '100',
            },
            headerRight: (<Icon name="add" color="#fff" iconStyle={{marginRight: 20}} onPress={() => { console.log('pressed') }} underlayColor="#C71585" />),
        };
    }

    render() {

        return (
           <View style={{ flex: 1, alignItems: 'center'}}>
                <Input
                    placeholder='First Name....'
                    leftIcon={{ name: 'person'}}
                    inputStyle={inputs.constraints}
                    onChange={(event) => { this.handleInput('first_name', event.nativeEvent.text)}}
                />
               <Input
                   placeholder='Last Name....'
                   leftIcon={{ name: 'person'}}
                   inputStyle={inputs.constraints}
                   onChange={(event) => { this.handleInput('last_name', event.nativeEvent.text)}}

               />
               <Input
                   placeholder='Email....'
                   leftIcon={{ name: 'email'}}
                   inputStyle={inputs.constraints}
                   onChange={(event) => { this.handleInput('email', event.nativeEvent.text)}}

               />
               <Input
                   placeholder='Subject....'
                   leftIcon={{ name: 'chat'}}
                   inputStyle={inputs.constraints}
                   onChange={(event) => { this.handleInput('subject', event.nativeEvent.text)}}

               />
               <Input
                   placeholder='Description....'
                   leftIcon={{ name: 'create'}}
                   inputStyle={inputs.constraints}
                   onChange={(event) => { this.handleInput('description', event.nativeEvent.text)}}

               />
                <Button
                    title='Done'
                    leftIcon={{ name: 'check'}}
                    buttonStyle={{
                        width: 200,
                        height:30,
                        backgroundColor:'#C71585',
                        marginTop: 10,
                        marginBottom: 10,
                        borderRadius: 25
                    }}
                    onPress={() => {}}
                />

           </View>
        );
    }
}

const inputs = StyleSheet.create({
    constraints: {
        paddingTop:5,
    //    paddingBottom:5,
        marginTop: 10,
        marginBottom: 10
    }
});

export default createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home'
    }
);

