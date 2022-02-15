import {UPDATE_APP_ALIVE_API} from "./Types";
import reactotron from "../../../ReactotronConfig";

export const updateAppAliveApiCallAction = (license_key, driver_id) => {
    reactotron.log('Action called!');
    return {
        type: UPDATE_APP_ALIVE_API,
        license_key,
        driver_id
    };
};
