import React, {Component} from "react";
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./src/Redux/ConfiguerStore";
import LoginFunctionalComponent from "./src/Views/ReduxFunctionalComponent";

export default class App extends Component {

    render() {
        return (<Provider store={store}>
            <View style={{flex: 1}}>
                <LoginFunctionalComponent/>
            </View>
        </Provider>);
    }
}
