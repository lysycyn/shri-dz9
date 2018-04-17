const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (isDevelopment) => {
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'imports?define=>false',
        },
      ],
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                  presets: ["stage-2"]
              },
            },
            {
              loader: 'eslint-loader',
            }
          ],
        },
      ],
    },
    plugins:
      isDevelopment === 'development'
        ? []
        : [new UglifyJSPlugin({ sourceMap: true })],
  };
};
