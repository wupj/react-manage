const path = require('path')
const webpack = require('webpack')

const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const CracoEslintWebpackPlugin = require('craco-eslint-webpack-plugin')
const CracoLessPlugin = require('craco-less') // 使用less插件

const resolve = (dir) => path.resolve(__dirname, dir)

const webpackPlugins = [
  new webpack.ProvidePlugin({
    _: 'lodash',
    axios: 'axios',
    utils: [resolve('src/utils/index.tsx'), 'default'],
  }),
]

module.exports = {
  webpack: {
    // 别名配置
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
    ],
    configure: (webpackConfig) => {
      // eslint-disable-next-line no-param-reassign
      webpackConfig.output.publicPath = './'
      webpackConfig.plugins.push(...webpackPlugins)
      return webpackConfig
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, // 修改主题色
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoEslintWebpackPlugin,
      options: {
        skipPreflightCheck: true,
        eslintOptions: {
          files: 'src/**/*.{js,jsx,ts,tsx}',
          lintDirtyModulesOnly: true,
        },
      },
    },
  ],
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }], // 支持装饰器模式语法
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, // 设置为true即是less
        },
      ],
    ],
  },
}
