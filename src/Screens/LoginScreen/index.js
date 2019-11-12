import React from 'react';
import {
    View,
    Text,
    ActivityIndicator} from 'react-native';
import CButton from "../../Components/CButton";
import CTextInput from "../../Components/CTextInput";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Awesome Project',
    };

    state = {
        isLoading: false
    }

    _handlerGoToHome = () => {

    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                padding: 20}}>

                <Text style={{alignSelf: "center"}}>Login Screen</Text>

                <CTextInput
                    styleContainer={{
                        borderWidth: 1,
                        margin: 20,
                    }} />

                <CTextInput
                    styleContainer={{
                        borderWidth: 1,
                        marginTop: 5,
                        margin: 20,
                    }} />

                <CButton
                    styleContainer={{
                        // flex: 1,
                        // backgroundColor: "blue",
                        margin: 20,
                        // flexDirection: "column",
                        boxWithShadow: {
                            shadowColor: '#CCC',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 5
                        },
                    }}
                    text={"login"}
                    color={"black"}
                    isLoading={this.state.isLoading}
                    onPress={() => {
                        this.setState({
                            isLoading: true
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    isLoading: false
                                })
                            }, 5000)
                        })
                    }}/>
            </View>
        )
    }
}
