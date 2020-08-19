import keys from 'lodash.keys';
import snakeCase from 'lodash.snakecase';

export const propertiesToSnakeCase = (object: any, bodyParams?: boolean) => {
    const updatedObject: any = {};
    const objectKeys = keys(object);
    objectKeys.forEach((key: any) => {
        const value = object[key];
        if (Array.isArray(value) && !bodyParams) {
            updatedObject[snakeCase(key)] = value.join();
        } else updatedObject[snakeCase(key)] = value;
    });
    return updatedObject;
};
