import {applyMiddleware, compose, createStore} from 'redux';
import appReducer from "./Reducers";
import createSagaMiddleware from 'redux-saga';
import IndexSaga from "./Saga";

import Reactotron from '../../ReactotronConfig';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(appReducer, compose(applyMiddleware(...middleware), Reactotron.createEnhancer()));
sagaMiddleware.run(IndexSaga);
