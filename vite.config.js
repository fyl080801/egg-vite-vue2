'use strict'

const { defineConfig } = require('vite')
const { createVuePlugin } = require('vite-plugin-vue2')
const legacy = require('@vitejs/plugin-legacy')

module.exports = defineConfig({
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    legacy({ targets: ['defaults', 'not IE 11'] }),
  ],
})
