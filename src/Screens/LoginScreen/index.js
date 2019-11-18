import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ToastAndroid
} from 'react-native';
import CButton from "../../Components/CButton";
import CTextInput from "../../Components/CTextInput";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Awesome Project',
    };

    state = {
        isLoading: false,
        username: '',
        password: '',
    }

    _handlerGoToHome = () => {

    }

  _handleLogin = () => {
    if (this.state.username === '' || this.state.password === '') {
      ToastAndroid.showWithGravity(
        'Email or password should not be empty',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (!this._handleValidateEmail(this.state.username)) {
      ToastAndroid.showWithGravity(
        'Email format not correct',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (this.state.password.length < 8) {
      ToastAndroid.showWithGravity(
        'Password should be greater than 8',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      ToastAndroid.showWithGravity(
        'LOGIN SUCCESS',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      this.props.navigation.navigate('Home', {item: this.state.username});
    }

    this.setState({
      isLoading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1000)
    })
  };

  _handleValidateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

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
                    onTyping={(val) => {
                      this.setState({ username: val})
                    }}

                    styleContainer={{
                        borderWidth: 1,
                        margin: 20,
                    }} />

                <CTextInput
                    onTyping={(val) => {
                      this.setState({ password: val})
                    }}

                    secureTextEntry={true}

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
                        this._handleLogin();
                    }}/>
            </View>
        )
    }
}
