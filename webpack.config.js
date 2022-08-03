const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  entry: {
    index: './src/views/index.pug'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    // output filename of JS files
    filename: 'assets/js/[name].[contenthash:8].js'
  },
  plugins: [
    new PugPlugin({
      extractCss: {
        // output filename of CSS files
        filename: 'assets/css/[name].[contenthash:8].css'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|ico)/,
        type: 'asset/resource',
        generator: {
          // output filename of images
          filename: 'assets/img/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          // output filename of fonts
          filename: 'assets/fonts/[name][ext][query]'
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    //To enable Hot Module Replacement:
    watchFiles: {
      paths: ['src/**/*.*', 'assets/scss/**/*.*'],
      options: {
        usePolling: true
      }
    }
  },
  stats: 'errors-only'
};
