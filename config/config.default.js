/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1641828764040_8277';

  // add your middleware config here
  config.middleware = ['vite'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  userConfig.cluster = {
    listen: {
      port: process.env.PORT || 3001,
      hostname: '0.0.0.0',
    },
  };

  userConfig.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
