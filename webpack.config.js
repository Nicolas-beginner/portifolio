const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    entry: './script/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
};