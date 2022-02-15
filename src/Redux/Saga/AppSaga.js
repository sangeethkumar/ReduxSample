import {all, call, put, takeEvery} from 'redux-saga/effects';
import {UPDATE_APP_ALIVE_API, UPDATE_APP_ALIVE_API_FAILURE, UPDATE_APP_ALIVE_API_SUCCESS} from "../Actions/Types";
import reactotron from "../../../ReactotronConfig";
import {api} from "../../Network";

function* makeAppAliveCall(action) {
    const {
        license_key,
        driver_id
    } = action;

    try {
        const appAliveResponse = yield call(api.postAppAlive, license_key, driver_id);

        if (appAliveResponse.data) {
            reactotron.log('Saga generator *function listened!' + appAliveResponse.data);
            yield put({
                type: UPDATE_APP_ALIVE_API_SUCCESS,
                payload: appAliveResponse.data
            });
        } else {
            yield put({ type: UPDATE_APP_ALIVE_API_FAILURE, payload: null});
        }
    } catch (ex) {
        yield put({type: UPDATE_APP_ALIVE_API_FAILURE, payload: null
        });
    }
}

export default function* AppSaga() {
    yield all([
        takeEvery(UPDATE_APP_ALIVE_API, makeAppAliveCall)
    ]);
}
