import _ from 'lodash';

export const propertiesToSnakeCase = (object: any) => {
    const updatedObject = object;
    const keys = _.keys(object);
    keys.forEach((key: any) => {
        const value = object[key];
        if (_.isArray(value)) updatedObject[_.snakeCase(key)] = value.join();
        else updatedObject[_.snakeCase(key)] = value;
    });
    return updatedObject;
};
