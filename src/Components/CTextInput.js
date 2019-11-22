import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import {
  TextInput
} from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        // flex: 2,
        // flexDirection: "column",
        borderWidth: 1,
    },
});

export default class CTextInput extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    // render() {
    //     return (
    //         // Kurawal pertama pada style adalah jsx
    //         // Kurawal kedua adalah membuat object
    //         <View style={{
    //             ...styles.container, // ... adalah spread operator
    //             ...this.props.styleContainer}}>
    //             <TextInput
    //                 onChangeText={(val) => {
    //                   this.props.onTyping(val)
    //                 }}
    //
    //                 secureTextEntry={this.props.secureTextEntry}
    //             />
    //         </View>
    //     )
    // }

    render() {
      return (
        <View style={{
          flexDirection: 'row',
        }}>
          <TextInput
            value={this.props.value}
            onChangeText={(val) => {
              this.props.onChangeText(val)
            }}
            label={this.props.label}
            mode={this.props.mode}
            secureTextEntry={this.props.secureTextEntry}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              flex: 1,
            }}/>

        </View>
      );
    }
}
