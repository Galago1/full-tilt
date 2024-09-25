const path = require(`path`);
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
    // use: ['react-svg-loader']
  });
  // fonts
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/fonts/Inter'),
          to: 'fonts/Inter'
        }
      ]
    })
  );

  config.module.rules.unshift({
    test: /\.js$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['@babel/preset-env', { loose: true, modules: false }]
            // 'react-app'
          ],
          sourceType: 'unambiguous'
        }
      }
    ]
  });

  config.resolve.modules.push(path.resolve(__dirname, '../src'));
  config.resolve.alias = {
    ...config.resolve.alias,
    src: path.resolve(__dirname, '../src/')
  };

  return config;
};
