import _ from 'lodash';

export const propertiesToSnakeCase = (object: any, bodyParams?: boolean) => {
    const updatedObject: any = {};
    const keys = _.keys(object);
    keys.forEach((key: any) => {
        const value = object[key];
        if (_.isArray(value) && !bodyParams)
            updatedObject[_.snakeCase(key)] = value.join();
        else updatedObject[_.snakeCase(key)] = value;
    });
    return updatedObject;
};
