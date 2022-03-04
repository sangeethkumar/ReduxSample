import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAppAliveApiCallAction} from "../Redux/Actions/AppActions";
import {isValidElement} from "../helpers";


const ReduxFunctionalComponent = () => {

    const dispatch = useDispatch();

    //const appAliveResponse = useSelector((state) => state.appState.appAliveResponse);
    const {appAliveResponse} = useSelector((state) => ({
        appAliveResponse: state.appState.appAliveResponse
    }));

    const onClicked = () => {
        dispatch(updateAppAliveApiCallAction('a007b00914eaaa53d4440594fdaacc6b', '1212'));
    }

    return (<View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={onClicked}
        >
            <Text style={styles.textStyle}>
                Make API call
            </Text>
        </TouchableOpacity>

        <Text style={styles.textStyle}>
            Response : {isValidElement(appAliveResponse) && appAliveResponse.outcome}
        </Text>

    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: "black"
    },
    button: {
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});

export default ReduxFunctionalComponent;


