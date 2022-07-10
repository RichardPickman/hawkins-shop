const common = require('./webpack.common');
const paths = require('./webpack.paths');

const { commonModules, commonPlugins, commonResolve } = common;

module.exports = {
  mode: 'production',
  entry: {
    main: [`${paths.src}/main/main.ts`],
    products: [`${paths.src}/shop/products.ts`],
    cart: [`${paths.src}/cart/cart.ts`],
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  module: {
    ...commonModules,
  },
  plugins: [
    ...commonPlugins,
  ],
  resolve: {
    ...commonResolve,
  },
};
