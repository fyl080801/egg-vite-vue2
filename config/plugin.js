'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  vitePlugin: {
    enable: true,
    package: 'egg-vite-plugin',
  },
  decoratorRouter: {
    enable: true,
    package: 'egg-decorator-router',
  },
}
