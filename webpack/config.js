const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const projectPath = path.resolve(__dirname, '..');


function getConfig() {
  return {
    entry: getEntry('./src/entry'),
    output: {
      path: path.resolve(projectPath, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/dist/'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.s?css$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                query: 'sourceMap',
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    require('autoprefixer')({
                      browsers: ['> 3%', 'ie >= 8', 'Firefox ESR', 'iOS >= 8']
                    })
                  ]
                }
              },
              {
                loader: 'sass-loader',
              },
            ]
          })
        },
      ]
    },

    plugins: [
      new ExtractTextPlugin({
        filename: 'css/[name].css',
      }),
    ],
  };
}


exports.getConfigDev = () => {
  let config = getConfig();

  let entry = config.entry;
  for (let key in entry) {
    entry[key].unshift('webpack-hot-middleware/client?reload=true');
  }

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]);

  return config;
};





function getEntry(dir) {
  const fs = require('fs');
  let entryObj = {},
      _paths = fs.readdirSync(dir);

  _paths.forEach(_path => {
    let entry = path.resolve(dir, _path);

    if (fs.statSync(entry).isDirectory()) {
      let entryName = _path;

      entry = path.resolve(entry, 'index.js');
      if (fs.existsSync(entry)) {
        entryObj[_path] = [entry];
      } else if (entry += 'x', fs.existsSync(entry)) {
        entryObj[_path] = [entry];
      }

      return;
    }
  });

  return entryObj;
}