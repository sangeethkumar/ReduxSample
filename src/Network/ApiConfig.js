import axios from "axios";

export const config = {
    baseURL: 'https://api.touch2success.com',
    apiVersion: 'v2021_02_25',
    applicationName: 'DRIVER'
};


export const endPoints = {
    appAlive: '/app/alive',
    apiTokenEndPoint: '?api_token=',
};

export const apiClient = axios.create({
    baseURL: config.baseURL,
    timeout: 30000,
    headers: {
        'api-version': config.apiVersion
    }
})

export const getApiInterface = () => {
    return apiClient;
};
