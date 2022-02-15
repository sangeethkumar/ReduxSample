import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
// import {updateAppAliveApiCallAction} from "../Redux/Actions/AppActions";
import reactotron from "../../ReactotronConfig";
import {UPDATE_APP_ALIVE_API} from "../Redux/Actions/Types";
import {updateAppAliveApiCallAction} from "../Redux/Actions/AppActions";

class Login extends Component {

    componentDidMount() {
        reactotron.log('Did mount action triggered!!');
        this.props.updateAppAliveApiCallAction('a007b00914eaaa53d4440594fdaacc6b', '1212');
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
                <Text style={{
                    fontSize: 24,
                    color: 'white',
                }}>
                    Login
                </Text>

                {this.props.appAliveResponse !== null && <Text style={{
                    marginTop: 40,
                    fontSize: 18,
                    color: 'white',
                }}>
                    {this.props.appAliveResponse.outcome}
                </Text>}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    appAliveResponse: state.appState.appAliveResponse
});


const mapDispatchToProps = {
    updateAppAliveApiCallAction
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateAppAliveApiCallActionLocal: (license_key, driver_id) => {
//             dispatch({
//                 type: UPDATE_APP_ALIVE_API,
//                 license_key,
//                 driver_id
//             })
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
