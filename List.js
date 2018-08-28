import React, {Component} from 'react';
import {FlatList,Platform, StyleSheet, Text, View} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

export default class list extends Component {
    static navigationOptions = ({ navigation}) => {
        return {
            title: 'List Messages',
            headerStyle: {
                backgroundColor: '#C71585',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '100',
            },
        };
    }

  fetch()

}

