import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 2,
        // flexDirection: "column",
    },
});

export default class CTextInput extends React.Component {
    render() {
        return (
            // Kurawal pertama pada style adalah jsx
            // Kurawal kedua adalah membuat object
            <View style={{
                ...styles.container, // ... adalah spread operator
                ...this.props.styleContainer}}>
                <TextInput />
            </View>
        )
    }
}
