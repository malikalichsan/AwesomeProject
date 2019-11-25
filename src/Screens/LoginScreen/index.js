import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
  CheckBox,
  ImageBackground,
  Image
} from 'react-native';
import CButton from "../../Components/CButton";
import CTextInput from "../../Components/CTextInput";
import {styles} from './style';
import { TextInput, Button } from 'react-native-paper';
import Axios from 'axios';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Awesome Project',
  };

  state = {
    isLoading: false,
    username: '',
    password: '',
    checked: false,
  };

  _handleLogin = async () => {
    if (this.state.username === '' || this.state.password === '') {
      ToastAndroid.showWithGravity(
        'Email or password should not be empty',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
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
        ToastAndroid.BOTTOM,
      );
    } else {
      const res = await this._handleHTTPLogin();

      console.log(res.data);
      console.log(res.data[0]);
      console.log(res.data[0].access_token);
      console.log(res.data[0]['access_token']);

      if (res.data) {
        ToastAndroid.showWithGravity(
          'LOGIN SUCCESS',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );

        this.props.navigation.navigate('Home', {item: this.state.username});
      } else {
        ToastAndroid.showWithGravity(
          'LOGIN FAILED',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
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

  async _handleHTTPLogin() {
    return await Axios.post('https://private-370066-awesomeproject1.apiary-mock.com/login', {}, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  _handleValidateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  render() {
    return (
      <View style={styles.wrapperContainer}>
          <Text style={styles.textLogin}>Log In</Text>

          <TextInput
            value={this.state.username}
            onChangeText={(val) => {
              this.setState({ username: val})
            }}
            label='Email'
            mode='outline'
            style={styles.textInputUserName} />

          <CTextInput
            onChangeText={(val) => {
              this.setState({ password: val})
            }}

            label={'Password'}

            mode={'outline'}

            value={this.state.password}

            secureTextEntry={true} />

        <View style={styles.wrapperAcc}>
          <Text style={styles.noAcc}>No account yet ? </Text>
          <Text style={styles.signUp}>Sign up</Text>
        </View>

        <Button
          style={styles.buttonLogin}
          labelStyle={styles.buttonLoginLabel}
          mode="contained"
          onPress={() => {
            this._handleLogin();
          }}>
          Log In
        </Button>
      </View>
    )
  }
}
