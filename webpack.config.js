const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
  },
  plugins: [
    new PugPlugin({
      entry: {
        // define templates here
        index: './src/views/home.pug',
        manyInOne: './src/views/manyInOne.pug',
        photoMosaic: './src/views/photoMosaic.pug',
        masonryLayout: './src/views/masonryLayout.pug',
      },
      js: {
        // JS output filename with hash for unique id
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        // CSS output filename with hash for unique id
        filename: 'assets/css/[name].[contenthash:8].css',
      },
      pretty: 'auto', // Format HTML in development mode only
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|ico)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    // Enable live reload
    watchFiles: {
      paths: ['src/**/*.*', 'assets/scss/**/*.*'],
      options: {
        usePolling: true
      }
    }
  },
  stats: 'errors-only'
};
