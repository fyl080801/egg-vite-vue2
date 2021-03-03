'use strict'

module.exports = () => {
  const config = {}

  config.vitePlugin = {
    devServer: true,
    targets: [/^(\/node_modules)/g],
  }

  return config
}
