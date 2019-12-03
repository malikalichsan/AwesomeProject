import React from 'react';
import {View, Text} from 'react-native';
import {SET_GLOBAL_DATA} from "../../Config/Reducer";
import {connect} from "react-redux";

class HomeScreen extends React.Component {
    render() {
        // const {params}  = this.props.navigation.state;
        // const res       = params.item;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Selamat Datang, {this.props.userData.username}</Text>
                <Text>{this.props.globalData.token}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const {userData, globalData} = state;
    return {userData, globalData};
};

const mapDispatchToProps = dispatch => {
    return {
        setGlobalData: globalData => {
            return dispatch({
                type: SET_GLOBAL_DATA,
                globalData: globalData,
            });
        }
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
