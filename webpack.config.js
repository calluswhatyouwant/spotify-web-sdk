const path = require('path');
const generateConfig = name => {
    const config = {
        mode: 'production',
        entry: './build/index.js',
        output: {
            path: path.resolve(__dirname, 'build/dist'),
            filename: `${name}.js`,
            sourceMapFilename: `${name}.map`,
            library: 'spotify',
            libraryTarget: 'umd',
        },
        devtool: 'source-map',
    };

    if (!name.includes('min')) {
        config.optimization = {
            minimize: false,
        };
    }

    return config;
};

const config = ['spotify-web-sdk', 'spotify-web-sdk.min'].map(key =>
    generateConfig(key)
);

module.exports = config;
