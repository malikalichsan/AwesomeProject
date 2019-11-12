import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column"
    },
});

export default class CButton extends React.Component {
    render() {
        return (
            <View style={{
                ...styles.container,
                ...this.props.styleContainer}}>

                {
                    this.props.isLoading
                    ?
                        <ActivityIndicator />
                    :
                        <Button
                            title={this.props.text}
                            color={this.props.color}
                            onPress={() => this.props.onPress()}
                        />
                }
            </View>
        )
    }
}
