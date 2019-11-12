import React from 'react';
import {View, Text, Button} from 'react-native';

export default class LoginScreen extends React.Component {
    _handlerGoToHome = () => {
        this.props.navigation.navigate("Home");
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Login Screen</Text>
                <Button
                    title={"login"}
                    onPress={() => this._handlerGoToHome}
                />
            </View>
        )
    }
}