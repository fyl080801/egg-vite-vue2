'use strict';

const { createServer } = require('vite');

let vite = null;

module.exports = {
  get vite() {
    return vite;
  },
  async resolveServer() {
    if (!vite) {
      vite = await createServer();
    }
  },
};
