export const isValidElement = (data) => {
    return data !== null && data !== undefined;
};
export const isValidNumber = (data) => {
    return isValidString(data) && !isNaN(data);
};

export const isValidString = (data) => {
    return data !== null && data !== undefined && data !== '';
};
