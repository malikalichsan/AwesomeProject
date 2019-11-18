import React from 'react';
import {View, Text} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        const {params}  = this.props.navigation.state;
        const res       = params.item;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Selamat Datang, {res}</Text>
            </View>
        )
    }
}
