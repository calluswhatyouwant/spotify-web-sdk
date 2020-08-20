const keys = (object?: any): string[] => {
    return (object && Object.keys(object)) || [];
};

const snakeCase = (camelCase: string): string => {
    return camelCase.replace(/[A-Z]/g, (ch: string) => `_${ch.toLowerCase()}`);
};

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
