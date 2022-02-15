import {endPoints, getApiInterface, config} from "./ApiConfig";

export const api = {
    postAppAlive(license_key, driver_id) {
        return getApiInterface().put(endPoints.appAlive + endPoints.apiTokenEndPoint + license_key, {
            driver_id: driver_id,
            app_name: config.applicationName
        }).then((response) => {
            return response;
        }).catch((err) => {
            return err;
        });
    }
};
