import {all} from 'redux-saga/effects';
import AppSaga from "./AppSaga";

export default function* IndexSaga() {
    yield all([AppSaga()]);
}
