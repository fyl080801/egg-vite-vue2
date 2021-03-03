/* eslint valid-jsdoc: "off" */

'use strict'

const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614743386863_7625'

  // add your middleware config here
  config.middleware = []

  config.view = {
    defaultViewEngine: 'nunjucks',
    root: path.join(appInfo.baseDir, 'dist'),
    mapping: {
      '.html': 'nunjucks',
    },
  }

  config.static = {
    prefix: '/assets/',
    dir: [
      path.join(appInfo.baseDir, 'app/public'),
      path.join(appInfo.baseDir, 'dist/assets'),
    ],
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
