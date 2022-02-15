import {UPDATE_APP_ALIVE_API_FAILURE, UPDATE_APP_ALIVE_API_SUCCESS} from "../Actions/Types";

const INITIAL_STATE = {
    appAliveResponse: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_APP_ALIVE_API_SUCCESS:
            return {
                ...state,
                appAliveResponse: action.payload
            }

        case UPDATE_APP_ALIVE_API_FAILURE:
            return {
                ...state,
                appAliveResponse: null
            }

        default:
            return state;
    }
}
